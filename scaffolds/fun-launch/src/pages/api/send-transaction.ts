import { NextApiRequest, NextApiResponse } from 'next';
import { Connection, sendAndConfirmRawTransaction, Transaction } from '@solana/web3.js';

const RPC_URL = process.env.RPC_URL as string;

if (!RPC_URL) {
  throw new Error('Missing required environment variables');
}

type SendTransactionRequest = {
  signedTransaction: string; // base64 encoded signed transaction
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('req.body', req.body);
  try {
    const { signedTransaction } = req.body as SendTransactionRequest;

    if (!signedTransaction) {
      return res.status(400).json({ error: 'Missing signed transaction' });
    }

    const connection = new Connection(RPC_URL, 'confirmed');
    const transaction = Transaction.from(Buffer.from(signedTransaction, 'base64'));

    const txSignature = await sendAndConfirmRawTransaction(connection, transaction.serialize(), {
      commitment: 'confirmed',
    });

    res.status(200).json({
      success: true,
      signature: txSignature,
    });
  } catch (error) {
    console.error('Transaction error:', error);
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
}
