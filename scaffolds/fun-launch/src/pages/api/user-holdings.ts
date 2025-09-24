import { NextApiRequest, NextApiResponse } from 'next';
import { Connection, PublicKey } from '@solana/web3.js';
import { getMint } from '@solana/spl-token';
import { PrismaClient } from '../../../generated/prisma';

const RPC_URL = process.env.RPC_URL || "https://rpc.gorbagana.wtf";
const prisma = new PrismaClient();

interface TokenHolding {
  mintAddress: string;
  balance: number;
  decimals: number;
  symbol?: string;
  name?: string;
  imageUrl?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ error: 'Address is required' });
  }

  try {
    const connection = new Connection(RPC_URL, 'confirmed');
    const walletAddress = new PublicKey(address as string);

    // Get all token accounts for the wallet
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(walletAddress, {
      programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // SPL Token Program
    });

    const holdings: TokenHolding[] = [];

    for (const { account } of tokenAccounts.value) {
      const parsedInfo = account.data.parsed.info;
      const mintAddress = parsedInfo.mint;
      const balance = parsedInfo.tokenAmount.uiAmount || 0;
      const decimals = parsedInfo.tokenAmount.decimals;

      // Only include tokens with non-zero balance
      if (balance > 0) {
        try {
          // Get mint info for decimals
          const mintInfo = await getMint(connection, new PublicKey(mintAddress));
          
          // Try to get token metadata from database
          let tokenMetadata = null;
          try {
            tokenMetadata = await prisma.token.findUnique({
              where: { mintAddress },
              select: {
                name: true,
                symbol: true,
                imageUrl: true,
              }
            });
          } catch (dbError) {
            console.warn(`Failed to fetch token metadata from DB for ${mintAddress}:`, dbError);
          }
          
          holdings.push({
            mintAddress,
            balance,
            decimals: mintInfo.decimals,
            name: tokenMetadata?.name,
            symbol: tokenMetadata?.symbol,
            imageUrl: tokenMetadata?.imageUrl,
          });
        } catch (error) {
          console.warn(`Failed to get mint info for ${mintAddress}:`, error);
          // Still include the holding with basic info
          holdings.push({
            mintAddress,
            balance,
            decimals: decimals,
          });
        }
      }
    }

    // Sort by balance (descending)
    holdings.sort((a, b) => b.balance - a.balance);

    res.status(200).json({ holdings });
  } catch (error) {
    console.error('Error fetching token holdings:', error);
    res.status(500).json({ error: 'Failed to fetch token holdings' });
  } finally {
    await prisma.$disconnect();
  }
}
