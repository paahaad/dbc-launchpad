import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: 'Missing required field: userId' });
    }

    // Find user and get their watchlist with full token details
    const user = await prisma.user.findUnique({
      where: { address: userId as string },
      select: {
        watchlist: {
          select: {
            id: true,
            mintAddress: true,
            name: true,
            symbol: true,
            imageUrl: true,
            marketCap: true,
            supply: true,
            decimals: true,
            description: true,
            createdAt: true,
            holders: true,
            website: true,
            twitter: true,
            telegram: true,
            discord: true,
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    });

    if (!user) {
      return res.status(200).json({ tokens: [] });
    }

    res.status(200).json({ tokens: user.watchlist });
  } catch (error) {
    console.error('Error fetching watchlist tokens:', error);
    res.status(500).json({ error: 'Failed to fetch watchlist tokens' });
  } finally {
    await prisma.$disconnect();
  }
}
