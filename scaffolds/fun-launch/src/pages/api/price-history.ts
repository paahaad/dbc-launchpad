import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

/**
 * API endpoint to fetch historical price data for a token
 * 
 * Query parameters:
 * - mint: Token mint address (required)
 * - hours: Number of hours to look back (default: 24)
 * 
 * Returns:
 * - priceHistory: Array of price data points
 * - currentPrice: Most recent price
 * - price24hAgo: Price from approximately 24 hours ago
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { mint, hours = '24' } = req.query;

  if (!mint) {
    return res.status(400).json({ error: 'Mint address is required' });
  }

  try {
    const hoursBack = parseInt(hours as string, 10);
    const cutoffTime = new Date(Date.now() - hoursBack * 60 * 60 * 1000);

    // Find the token by mint address
    const token = await prisma.token.findUnique({
      where: { mintAddress: mint as string },
      select: { id: true }
    });

    if (!token) {
      return res.status(404).json({ error: 'Token not found' });
    }

    // Get price history for the specified time period
    const priceHistory = await prisma.priceHistory.findMany({
      where: {
        tokenId: token.id,
        timestamp: {
          gte: BigInt(Math.floor(cutoffTime.getTime() / 1000))
        }
      },
      orderBy: {
        timestamp: 'asc'
      },
      select: {
        price: true,
        timestamp: true,
        interval: true
      }
    });

    // Convert BigInt timestamps to numbers and parse price strings
    const formattedHistory = priceHistory.map(entry => ({
      price: parseFloat(entry.price),
      timestamp: Number(entry.timestamp),
      interval: entry.interval
    }));

    // Find the closest price to 24 hours ago
    const now = Math.floor(Date.now() / 1000);
    const twentyFourHoursAgo = now - (24 * 60 * 60);
    
    let price24hAgo = null;
    if (formattedHistory.length > 0) {
      // Find the closest entry to 24 hours ago
      const closestTo24h = formattedHistory.reduce((closest, entry) => {
        const currentDiff = Math.abs(entry.timestamp - twentyFourHoursAgo);
        const closestDiff = Math.abs(closest.timestamp - twentyFourHoursAgo);
        return currentDiff < closestDiff ? entry : closest;
      });
      
      // Only use it if it's within 2 hours of the target time
      if (Math.abs(closestTo24h.timestamp - twentyFourHoursAgo) <= 2 * 60 * 60) {
        price24hAgo = closestTo24h.price;
      } else {
        // Fallback to the oldest available price
        price24hAgo = formattedHistory[0].price;
      }
    }

    res.status(200).json({ 
      priceHistory: formattedHistory,
      currentPrice: formattedHistory.length > 0 ? formattedHistory[formattedHistory.length - 1].price : null,
      price24hAgo
    });
  } catch (error) {
    console.error('Error fetching price history:', error);
    res.status(500).json({ error: 'Failed to fetch price history' });
  } finally {
    await prisma.$disconnect();
  }
}
