import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

type StoreTokenRequest = {
  tokenName: string;
  tokenSymbol: string;
  totalSupply: number;
  website?: string;
  twitter?: string;
  description?: string;
  mintAddress: string;
  imageUrl: string;
  metadataUrl: string;
  userWallet: string;
  telegram?: string;
  discord?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const tokenData = req.body as StoreTokenRequest;

    const user = await prisma.user.upsert({
      where: { address: tokenData.userWallet },
      update: {},
      create: { address: tokenData.userWallet },
    });

    await prisma.token.create({
      data: {
        name: tokenData.tokenName,
        symbol: tokenData.tokenSymbol,
        url: tokenData.imageUrl,
        userId: user.id,
        website: tokenData.website,
        twitter: tokenData.twitter,
        supply: tokenData.totalSupply.toString(),
        description: tokenData.description,
        metadataUrl: tokenData.metadataUrl,
        imageUrl: tokenData.imageUrl,
        mintAddress: tokenData.mintAddress,
        decimals: 9,
        telegram: tokenData.telegram,
        discord: tokenData.discord,
        holders: 0,
      },
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Store token error:', error);
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
}
