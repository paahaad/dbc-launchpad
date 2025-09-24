
import { PrismaClient } from '../../../generated/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { address, name } = req.body;

    if (!address) {
      res.status(400).json({ error: 'address is required' });
      return;
    }

    try {
      const user = await prisma.user.upsert({
        where: { address },
        update: name ? { name } : {},
        create: {
          address,
          name: name || `User_${address.slice(0, 6)}`,
        },
      });

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create/update user' });
    }
  } else if (req.method === 'GET') {
    const { address } = req.query;

    if (!address) {
      res.status(400).json({ error: 'address is required' });
      return;
    }

    try {
      const user = await prisma.user.findUnique({
        where: { address: address as string },
        include: { launchedTokens: true },
      });

      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
