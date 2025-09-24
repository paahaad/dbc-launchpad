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

    // Find user and get their watchlist
    const user = await prisma.user.findUnique({
      where: { address: userId as string },
      select: {
        watchlist: {
          select: {
            mintAddress: true
          }
        }
      }
    });

    if (!user) {
      return res.status(200).json({ watchlist: [] });
    }

    // Return array of mint addresses in watchlist
    const watchlistMintAddresses = user.watchlist.map(token => token.mintAddress);
    
    res.status(200).json({ watchlist: watchlistMintAddresses });
  } catch (error) {
    console.error('Error fetching watchlist status:', error);
    res.status(500).json({ error: 'Failed to fetch watchlist status' });
  } finally {
    await prisma.$disconnect();
  }
}
