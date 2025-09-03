import { useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { z } from 'zod';
import { Header } from '../components/Header';

import { useForm } from '@tanstack/react-form';
import { Button } from '@/components/ui/button';
import { Keypair, Transaction } from '@solana/web3.js';
import { useUnifiedWalletContext, useWallet } from '@jup-ag/wallet-adapter';
import { toast } from 'sonner';

// Define the schema for DBC token launch validation
const dbcTokenSchema = z.object({
  tokenName: z.string().min(3, 'Token name must be at least 3 characters'),
  tokenSymbol: z.string().min(1, 'Token symbol is required').max(10, 'Token symbol must be 10 characters or less'),
  tokenLogo: z.instanceof(File, { message: 'Token logo is required' }),
  totalSupply: z.number().min(1000, 'Total supply must be at least 1,000'),
  initialPrice: z.number().min(0.000001, 'Initial price must be at least 0.000001'),
  bondingCurveSlope: z.number().min(0.1, 'Bonding curve slope must be at least 0.1'),
  website: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
  twitter: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
  description: z.string().max(500, 'Description must be 500 characters or less').optional(),
});

interface DBCFormValues {
  tokenName: string;
  tokenSymbol: string;
  tokenLogo: File;
  totalSupply: number;
  initialPrice: number;
  bondingCurveSlope: number;
  website?: string;
  twitter?: string;
  description?: string;
}

export default function CreatePool() {
  const { publicKey, signTransaction } = useWallet();
  const address = useMemo(() => publicKey?.toBase58(), [publicKey]);

  const [isLoading, setIsLoading] = useState(false);
  const [poolCreated, setPoolCreated] = useState(false);

  const form = useForm({
    defaultValues: {
      tokenName: '',
      tokenSymbol: '',
      tokenLogo: undefined as File | undefined,
      totalSupply: 1000000,
      initialPrice: 0.001,
      bondingCurveSlope: 1.0,
      website: '',
      twitter: '',
      description: '',
    } as DBCFormValues,
    onSubmit: async ({ value }) => {
      try {
        setIsLoading(true);
        const { tokenLogo } = value;
        if (!tokenLogo) {
          toast.error('Token logo is required');
          return;
        }

        if (!signTransaction) {
          toast.error('Wallet not connected');
          return;
        }

        const reader = new FileReader();

        // Convert file to base64
        const base64File = await new Promise<string>((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(tokenLogo);
        });

        const keyPair = Keypair.generate();

        // Step 1: Upload to R2 and get DBC pool transaction
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tokenLogo: base64File,
            mintKeypair: Buffer.from(keyPair.secretKey).toString('base64'),
            tokenName: value.tokenName,
            tokenSymbol: value.tokenSymbol,
            totalSupply: value.totalSupply,
            initialPrice: value.initialPrice,
            bondingCurveSlope: value.bondingCurveSlope,
            description: value.description,
            userWallet: address,
          }),
        });

        if (!uploadResponse.ok) {
          const error = await uploadResponse.json();
          throw new Error(error.error);
        }

        const { poolTx } = await uploadResponse.json();
        const transaction = Transaction.from(Buffer.from(poolTx, 'base64'));

        // Step 2: Sign with keypair first
        transaction.sign(keyPair);

        // Step 3: Then sign with user's wallet
        const signedTransaction = await signTransaction(transaction);

        // Step 4: Send signed transaction
        const sendResponse = await fetch('/api/send-transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            signedTransaction: signedTransaction.serialize().toString('base64'),
          }),
        });

        if (!sendResponse.ok) {
          const error = await sendResponse.json();
          throw new Error(error.error);
        }

        const { success } = await sendResponse.json();
        if (success) {
          toast.success('DBC Token Pool created successfully!');
          setPoolCreated(true);
        }
      } catch (error) {
        console.error('Error creating DBC pool:', error);
        toast.error(error instanceof Error ? error.message : 'Failed to create DBC pool');
      } finally {
        setIsLoading(false);
      }
    },
    validators: {
      onSubmit: ({ value }) => {
        const result = dbcTokenSchema.safeParse(value);
        if (!result.success) {
          return result.error.formErrors.fieldErrors;
        }
        return undefined;
      },
    },
  });

  return (
    <>
      <Head>
        <title>Launch DBC Token - DBC Launchpad</title>
        <meta
          name="description"
          content="Launch your token with a Dynamic Bonding Curve on Solana using Meteora's DBC protocol."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-b text-white">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <div>
              <h1 className="text-4xl font-bold mb-2">Launch DBC Token</h1>
              <p className="text-gray-300">Create your token with a Dynamic Bonding Curve for fair price discovery</p>
            </div>
          </div>

          {poolCreated && !isLoading ? (
            <PoolCreationSuccess />
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="space-y-8"
            >
              {/* Token Details Section */}
              <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">Token Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="tokenName"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Token Name*
                      </label>
                      {form.Field({
                        name: 'tokenName',
                        children: (field) => (
                          <input
                            id="tokenName"
                            name={field.name}
                            type="text"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                            placeholder="e.g. My Awesome Token"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                            minLength={3}
                          />
                        ),
                      })}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="tokenSymbol"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Token Symbol*
                      </label>
                      {form.Field({
                        name: 'tokenSymbol',
                        children: (field) => (
                          <input
                            id="tokenSymbol"
                            name={field.name}
                            type="text"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                            placeholder="e.g. MAT"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            required
                            maxLength={10}
                          />
                        ),
                      })}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="totalSupply"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Total Supply*
                      </label>
                      {form.Field({
                        name: 'totalSupply',
                        children: (field) => (
                          <input
                            id="totalSupply"
                            name={field.name}
                            type="number"
                            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                            placeholder="1000000"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(Number(e.target.value))}
                            required
                            min={1000}
                          />
                        ),
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="tokenLogo"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Token Logo*
                    </label>
                    {form.Field({
                      name: 'tokenLogo',
                      children: (field) => (
                        <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center">
                          <span className="iconify w-6 h-6 mx-auto mb-2 text-gray-400 ph--upload-bold" />
                          <p className="text-gray-400 text-xs mb-2">PNG, JPG or SVG (max. 2MB)</p>
                          <input
                            type="file"
                            id="tokenLogo"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                field.handleChange(file);
                              }
                            }}
                          />
                          <label
                            htmlFor="tokenLogo"
                            className="bg-white/10 px-4 py-2 rounded-lg text-sm hover:bg-white/20 transition cursor-pointer"
                          >
                            Browse Files
                          </label>
                        </div>
                      ),
                    })}
                  </div>
                </div>
              </div>

              {/* DBC Parameters Section */}
              <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Dynamic Bonding Curve Parameters</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label
                      htmlFor="initialPrice"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Initial Price (SOL)*
                    </label>
                    {form.Field({
                      name: 'initialPrice',
                      children: (field) => (
                        <input
                          id="initialPrice"
                          name={field.name}
                          type="number"
                          step="0.000001"
                          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                          placeholder="0.001"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(Number(e.target.value))}
                          required
                          min={0.000001}
                        />
                      ),
                    })}
                    <p className="text-xs text-gray-400 mt-1">
                      Starting price per token in SOL
                    </p>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="bondingCurveSlope"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Bonding Curve Slope*
                    </label>
                    {form.Field({
                      name: 'bondingCurveSlope',
                      children: (field) => (
                        <input
                          id="bondingCurveSlope"
                          name={field.name}
                          type="number"
                          step="0.1"
                          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                          placeholder="1.0"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(Number(e.target.value))}
                          required
                          min={0.1}
                        />
                      ),
                    })}
                    <p className="text-xs text-gray-400 mt-1">
                      Controls how quickly price increases with demand
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Token Description
                  </label>
                  {form.Field({
                    name: 'description',
                    children: (field) => (
                      <textarea
                        id="description"
                        name={field.name}
                        rows={3}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                        placeholder="Describe your token and its utility..."
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        maxLength={500}
                      />
                    ),
                  })}
                  <p className="text-xs text-gray-400 mt-1">
                    Optional description of your token (max 500 characters)
                  </p>
                </div>
              </div>

              {/* Social Links Section */}
              <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Social Links (Optional)</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Website
                    </label>
                    {form.Field({
                      name: 'website',
                      children: (field) => (
                        <input
                          id="website"
                          name={field.name}
                          type="url"
                          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                          placeholder="https://yourwebsite.com"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      ),
                    })}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="twitter"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Twitter
                    </label>
                    {form.Field({
                      name: 'twitter',
                      children: (field) => (
                        <input
                          id="twitter"
                          name={field.name}
                          type="url"
                          className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white"
                          placeholder="https://twitter.com/yourusername"
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      ),
                    })}
                  </div>
                </div>
              </div>

              {form.state.errors && form.state.errors.length > 0 && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 space-y-2">
                  {form.state.errors.map((error, index) =>
                    Object.entries(error || {}).map(([, value]) => (
                      <div key={index} className="flex items-start gap-2">
                        <p className="text-red-200">
                          {Array.isArray(value)
                            ? value.map((v: any) => v.message || v).join(', ')
                            : typeof value === 'string'
                              ? value
                              : String(value)}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              )}

              <div className="flex justify-end">
                <SubmitButton isSubmitting={isLoading} />
              </div>
            </form>
          )}
        </main>
      </div>
    </>
  );
}

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const { publicKey } = useWallet();
  const { setShowModal } = useUnifiedWalletContext();

  if (!publicKey) {
    return (
      <Button type="button" onClick={() => setShowModal(true)}>
        <span>Connect Wallet</span>
      </Button>
    );
  }

  return (
    <Button className="flex items-center gap-2" type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="iconify ph--spinner w-5 h-5 animate-spin" />
          <span>Launching DBC Token...</span>
        </>
      ) : (
        <>
          <span className="iconify ph--rocket-bold w-5 h-5" />
          <span>Launch DBC Token</span>
        </>
      )}
    </Button>
  );
};

const PoolCreationSuccess = () => {
  return (
    <>
      <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 text-center">
        <div className="bg-green-500/20 p-4 rounded-full inline-flex mb-6">
          <span className="iconify ph--check-bold w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4">DBC Token Launched Successfully!</h2>
        <p className="text-gray-300 mb-8 max-w-lg mx-auto">
          Your token with Dynamic Bonding Curve has been created and is now live on the DBC Launchpad. 
          Users can now discover and trade your tokens with fair price discovery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-white/10 px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition"
          >
            Explore Tokens
          </Link>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Launch Another Token
          </button>
        </div>
      </div>
    </>
  );
};
