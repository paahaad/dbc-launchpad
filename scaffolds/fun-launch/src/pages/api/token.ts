import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const mint = req.query.mint as string;
  if (!mint) {
    return res.status(400).json({ error: 'Mint address required' });
  }

  try {
    const token = await prisma.token.findUnique({
      where: { mintAddress: mint },
      select: {
        mintAddress: true,
        createdAt: true,
        name: true,
        symbol: true,
        imageUrl: true,
        description: true,
        website: true,
        twitter: true,
        telegram: true,
        discord: true
      }
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error fetching token:', error);
    res.status(500).json({ error: 'Failed to fetch token' });
  } finally {
    await prisma.$disconnect();
  }
}
