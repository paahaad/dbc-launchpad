import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const since = req.query.since as string | undefined;
    const where = since ? { createdAt: { gt: new Date(since) } } : {};

    const tokens = await prisma.token.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 30,
      select: {
        mintAddress: true,
        createdAt: true,
        name: true,
        symbol: true,
        imageUrl: true
      }
    });

    res.status(200).json({ tokens });
  } catch (error) {
    console.error('Error fetching tokens:', error);
    res.status(500).json({ error: 'Failed to fetch tokens' });
  } finally {
    await prisma.$disconnect();
  }
}
