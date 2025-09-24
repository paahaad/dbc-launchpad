'use client';

import { useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { z } from 'zod';

import { useForm } from '@tanstack/react-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Keypair, Transaction } from '@solana/web3.js';
import { useUnifiedWalletContext, useWallet } from '@jup-ag/wallet-adapter';
import { toast } from 'sonner';
import { Copy, ChevronDown, ChevronUp, Upload, Rocket, Loader2 } from 'lucide-react';
import Page from '@/components/ui/Page/Page';

const VANITY_SUFFIX = 'gor';
const MAX_VANITY_ATTEMPTS = 100000;

const generateVanityKeypair = (
  suffix: string,
  maxAttempts: number = MAX_VANITY_ATTEMPTS
): Keypair => {
  let attempts = 0;

  while (attempts < maxAttempts) {
    const keypair = Keypair.generate();
    const address = keypair.publicKey.toBase58();

    if (address.toLowerCase().endsWith(suffix)) {
      return keypair;
    }

    attempts++;
  }

  throw new Error(
    `Could not find vanity address ending with "${suffix}" after ${maxAttempts} attempts`
  );
};

const dbcTokenSchema = z.object({
  tokenName: z.string().min(3, 'Token name must be at least 3 characters'),
  tokenSymbol: z
    .string()
    .min(1, 'Token symbol is required')
    .max(10, 'Token symbol must be 10 characters or less'),
  tokenLogo: z.instanceof(File, { message: 'Token logo is required' }),
  totalSupply: z.number().min(1000, 'Total supply must be at least 1,000'),
  website: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
  twitter: z.string().url({ message: 'Please enter a valid URL' }).optional().or(z.literal('')),
  description: z.string().max(500, 'Description must be 500 characters or less').optional(),
});

interface DBCFormValues {
  tokenName: string;
  tokenSymbol: string;
  tokenLogo: File;
  totalSupply: number;
  website?: string;
  twitter?: string;
  description?: string;
  telegram?: string;
  discord?: string;
}

export default function CreatePool() {
  const { publicKey, signTransaction } = useWallet();
  const address = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [poolCreated, setPoolCreated] = useState(false);
  const [createdMintAddress, setCreatedMintAddress] = useState<string | null>(null);
  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const form = useForm({
    defaultValues: {
      tokenName: '',
      tokenSymbol: '',
      tokenLogo: undefined as File | undefined,
      totalSupply: 1000000,
      website: '',
      twitter: '',
      description: '',
      telegram: '',
      discord: '',
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

        const base64File = await new Promise<string>((resolve) => {
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(tokenLogo);
        });

        // Generate vanity address ending with VANITY_SUFFIX
        let keyPair: Keypair;
        try {
          keyPair = generateVanityKeypair(VANITY_SUFFIX);
        } catch (error) {
          keyPair = Keypair.generate();
        }

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
            description: value.description,
            userWallet: address,
          }),
        });

        if (!uploadResponse.ok) {
          if (uploadResponse.status === 413) {
            throw new Error(
              'File too large. Maximum upload size is 1MB. Please choose a smaller image.'
            );
          }
          const error = await uploadResponse.json();
          throw new Error(error.error || 'Upload failed');
        }

        const { poolTx, mintAddress, imageUrl, metadataUrl } = await uploadResponse.json();
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
            tokenData: {
              ...value,
              mintAddress,
              imageUrl,
              metadataUrl,
              userWallet: address,
            },
          }),
        });

        if (!sendResponse.ok) {
          const error = await sendResponse.json();
          throw new Error(error.error);
        }

        const { success } = await sendResponse.json();
        if (success) {
          // Store token data
          await fetch('/api/store-token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...value,
              mintAddress,
              imageUrl,
              metadataUrl,
              userWallet: address,
            }),
          });

          setPoolCreated(true);
          setCreatedMintAddress(mintAddress);
          toast.success(`Token created successfully! Mint: ${mintAddress}`, {
            duration: 5000,
          });

          // Redirect to market page after a short delay
          setTimeout(() => {
            router.push(`/token/${mintAddress}`);
          }, 2000);
        }
      } catch (error) {
        console.error('Error creating token:', error);

        // Handle specific wallet transaction errors
        if (error instanceof Error) {
          if (
            error.message.includes('Approval Denied') ||
            error.message.includes('User rejected')
          ) {
            toast.error('Transaction was cancelled. Please try again if you want to proceed.', {
              duration: 4000,
            });
          } else if (error.message.includes('WalletSignTransactionError')) {
            toast.error('Wallet transaction failed. Please check your wallet and try again.', {
              duration: 4000,
            });
          } else {
            toast.error(error.message);
          }
        } else {
          toast.error('Failed to create token pool. Please try again.');
        }
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
        <title>Launch Another Trash - Gorbagana Launchpad</title>
        <meta
          name="description"
          content="Launch your trash token on the Gorbagana chain for fair price discovery."
        />
      </Head>

      <Page>
        <div className="">
          <h1 className="text-xl font-bold text-foreground">Launch Another Trash</h1>
          <p className="text-gray-400">Create your trash token on Gorbagana chain</p>
        </div>

        <div className="min-h-screen bg-background">
          {/* Page Content */}
          <main className="container mx-auto px-4 py-10 max-w-2xl">
            {poolCreated && !isLoading ? (
              <PoolCreationSuccess mintAddress={createdMintAddress} />
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                <Card className="border-neutral-800 bg-neutral-900/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-card-foreground">
                      Token Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Token Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="tokenName"
                          className="text-sm font-medium text-card-foreground"
                        >
                          Token Name*
                        </Label>
                        {form.Field({
                          name: 'tokenName',
                          children: (field) => (
                            <Input
                              id="tokenName"
                              name={field.name}
                              type="text"
                              className="bg-transparent border-neutral-800 text-foreground"
                              placeholder="e.g. Gorbagana"
                              value={field.state.value}
                              onChange={(e) => field.handleChange(e.target.value)}
                              required
                              minLength={3}
                            />
                          ),
                        })}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="tokenSymbol"
                          className="text-sm font-medium text-card-foreground"
                        >
                          Token Symbol*
                        </Label>
                        {form.Field({
                          name: 'tokenSymbol',
                          children: (field) => (
                            <Input
                              id="tokenSymbol"
                              name={field.name}
                              type="text"
                              className="bg-transparent border-neutral-800 text-foreground"
                              placeholder="e.g. GORB"
                              value={field.state.value}
                              onChange={(e) => field.handleChange(e.target.value)}
                              required
                              maxLength={10}
                            />
                          ),
                        })}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="totalSupply"
                          className="text-sm font-medium text-card-foreground"
                        >
                          Total Supply*
                        </Label>
                        {form.Field({
                          name: 'totalSupply',
                          children: (field) => (
                            <Input
                              id="totalSupply"
                              name={field.name}
                              type="number"
                              className="bg-transparent border-neutral-800 text-foreground"
                              placeholder="1000000"
                              value={field.state.value}
                              onChange={(e) => field.handleChange(Number(e.target.value))}
                              required
                              min={1000}
                            />
                          ),
                        })}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="tokenLogo"
                          className="text-sm font-medium text-card-foreground"
                        >
                          Token Logo*
                        </Label>
                        {form.Field({
                          name: 'tokenLogo',
                          children: (field) => (
                            <div className="border-2 border-dashed border-neutral-800 rounded-lg p-3 text-center bg-muted/20">
                              <Upload className="w-5 h-5 mx-auto mb-1 text-muted-foreground" />
                              <p className="text-muted-foreground text-xs mb-1">
                                PNG, JPG or SVG (max. 2MB)
                              </p>
                              <input
                                type="file"
                                id="tokenLogo"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    field.handleChange(file);
                                  }
                                }}
                              />
                              <label
                                htmlFor="tokenLogo"
                                className="inline-flex items-center gap-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-2 py-1 rounded text-xs transition-colors cursor-pointer"
                              >
                                Browse Files
                              </label>
                              {field.state.value && (
                                <p className="text-xs text-foreground mt-1">
                                  {field.state.value.name}
                                </p>
                              )}
                            </div>
                          ),
                        })}
                      </div>
                    </div>

                    {/* Token Description */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="description"
                        className="text-sm font-medium text-card-foreground"
                      >
                        Token Description
                      </Label>
                      {form.Field({
                        name: 'description',
                        children: (field) => (
                          <Textarea
                            id="description"
                            name={field.name}
                            rows={3}
                            className="bg-transparent border-neutral-800 text-foreground resize-none"
                            placeholder="Describe your token and its utility..."
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                            maxLength={500}
                          />
                        ),
                      })}
                      <p className="text-xs text-muted-foreground">
                        Optional description of your token (max 500 characters)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-neutral-800 bg-neutral-900/50">
                  <CardHeader className="pb-4">
                    <button
                      type="button"
                      onClick={() => setShowSocialLinks(!showSocialLinks)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <CardTitle className="text-xl text-card-foreground">
                        Social Links (Optional)
                      </CardTitle>
                      {showSocialLinks ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                  </CardHeader>

                  {showSocialLinks && (
                    <CardContent className="space-y-4 animate-in slide-in-from-top-2 duration-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="website"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Website
                          </Label>
                          {form.Field({
                            name: 'website',
                            children: (field) => (
                              <Input
                                id="website"
                                name={field.name}
                                type="url"
                                className="bg-transparent border-neutral-800 text-foreground"
                                placeholder="https://yourwebsite.com"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                              />
                            ),
                          })}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="twitter"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Twitter
                          </Label>
                          {form.Field({
                            name: 'twitter',
                            children: (field) => (
                              <Input
                                id="twitter"
                                name={field.name}
                                type="url"
                                className="bg-transparent border-neutral-800 text-foreground"
                                placeholder="https://twitter.com/yourusername"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                              />
                            ),
                          })}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="telegram"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Telegram
                          </Label>
                          {form.Field({
                            name: 'telegram',
                            children: (field) => (
                              <Input
                                id="telegram"
                                name={field.name}
                                type="url"
                                className="bg-transparent border-neutral-800 text-foreground"
                                placeholder="https://t.me/yourgroup"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                              />
                            ),
                          })}
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="discord"
                            className="text-sm font-medium text-card-foreground"
                          >
                            Discord
                          </Label>
                          {form.Field({
                            name: 'discord',
                            children: (field) => (
                              <Input
                                id="discord"
                                name={field.name}
                                type="url"
                                className="bg-transparent border-neutral-800 text-foreground"
                                placeholder="https://discord.gg/yourserver"
                                value={field.state.value}
                                onChange={(e) => field.handleChange(e.target.value)}
                              />
                            ),
                          })}
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Error Display */}
                {form.state.errors && form.state.errors.length > 0 && (
                  <Card className="border-destructive bg-destructive/10">
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        {form.state.errors.map((error, index) =>
                          Object.entries(error || {}).map(([, value]) => (
                            <div key={index} className="flex items-start gap-2">
                              <p className="text-destructive text-sm">
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
                    </CardContent>
                  </Card>
                )}

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <SubmitButton isSubmitting={isLoading} />
                </div>
              </form>
            )}
          </main>
        </div>
      </Page>
    </>
  );
}

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  const { publicKey } = useWallet();
  const { setShowModal } = useUnifiedWalletContext();

  if (!publicKey) {
    return (
      <Button
        type="button"
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
        onClick={() => setShowModal(true)}
      >
        Connect Wallet
      </Button>
    );
  }

  return (
    <Button
      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold min-w-[200px]"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Launching...
        </>
      ) : (
        <>
          <Rocket className="w-5 h-5 mr-2" />
          Launch Token
        </>
      )}
    </Button>
  );
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  } catch (error) {
    toast.error('Failed to copy');
  }
};

const PoolCreationSuccess = ({ mintAddress }: { mintAddress: string | null }) => {
  return (
    <Card className="border-neutral-800 bg-neutral-900/50 text-center">
      <CardContent className="pt-8 pb-8">
        <div className="bg-green-500/20 p-4 rounded-full inline-flex mb-6">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-card-foreground">
          Token Launched Successfully!
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Your token has been created and is now live on the Gorbagana Launchpad. Users can now
          discover and trade your tokens with fair price discovery.
        </p>
        {mintAddress && (
          <Card className="bg-muted/20 border-neutral-800 mb-6 max-w-lg mx-auto">
            <CardContent className="pt-4 pb-4">
              <p className="text-sm text-muted-foreground mb-2">Token Mint Address:</p>
              <div className="flex items-center justify-between">
                <p className="text-foreground font-mono text-sm break-all flex-1 mr-2">
                  {mintAddress}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(mintAddress)}
                  className="h-8 w-8 p-0 hover:bg-muted"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        <div className="flex items-center justify-center gap-2 text-primary">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Redirecting to market page...</span>
        </div>
      </CardContent>
    </Card>
  );
};
