import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId, mintAddress, action } = req.body;

    if (!userId || !mintAddress || !action) {
      return res.status(400).json({ error: 'Missing required fields: userId, mintAddress, action' });
    }

    if (!['add', 'remove'].includes(action)) {
      return res.status(400).json({ error: 'Action must be either "add" or "remove"' });
    }

    // Find the token by mint address
    const token = await prisma.token.findUnique({
      where: { mintAddress },
      select: { id: true }
    });

    if (!token) {
      return res.status(404).json({ error: 'Token not found' });
    }

    // Find or create the user
    let user = await prisma.user.findUnique({
      where: { address: userId },
      select: { id: true }
    });

    if (!user) {
      // Create user if doesn't exist
      user = await prisma.user.create({
        data: { address: userId },
        select: { id: true }
      });
    }

    if (action === 'add') {
      // Add token to user's watchlist
      await prisma.user.update({
        where: { id: user.id },
        data: {
          watchlist: {
            connect: { id: token.id }
          }
        }
      });
    } else {
      // Remove token from user's watchlist
      await prisma.user.update({
        where: { id: user.id },
        data: {
          watchlist: {
            disconnect: { id: token.id }
          }
        }
      });
    }

    res.status(200).json({ 
      success: true, 
      message: `Token ${action === 'add' ? 'added to' : 'removed from'} watchlist` 
    });
  } catch (error) {
    console.error('Error updating watchlist:', error);
    res.status(500).json({ error: 'Failed to update watchlist' });
  } finally {
    await prisma.$disconnect();
  }
}
