
import { PrismaClient } from '../../../generated/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { pubkey, name } = req.body;

    if (!pubkey) {
      res.status(400).json({ error: 'pubkey is required' });
      return;
    }

    try {
      const user = await prisma.user.upsert({
        where: { pubkey },
        update: name ? { name } : {},
        create: {
          pubkey,
          name: name || `User_${pubkey.slice(0, 6)}`,
        },
      });

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create/update user' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
