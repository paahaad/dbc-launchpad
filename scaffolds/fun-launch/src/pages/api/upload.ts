import { NextApiRequest, NextApiResponse } from 'next';
import AWS from 'aws-sdk';
import { Connection, PublicKey, Keypair, Transaction } from '@solana/web3.js';
import { DynamicBondingCurveClient } from '@meteora-ag/dynamic-bonding-curve-sdk';

// Environment variables with type assertions
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID as string;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY as string;
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID as string;
const R2_BUCKET = process.env.R2_BUCKET as string;
const RPC_URL = process.env.RPC_URL as string;
const POOL_CONFIG_KEY = process.env.POOL_CONFIG_KEY as string;

if (
  !R2_ACCESS_KEY_ID ||
  !R2_SECRET_ACCESS_KEY ||
  !R2_ACCOUNT_ID ||
  !R2_BUCKET ||
  !RPC_URL ||
  !POOL_CONFIG_KEY
) {
  throw new Error('Missing required environment variables');
}

const PRIVATE_R2_URL = `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
const PUBLIC_R2_URL = 'https://pub-f44e6969b3f94f18bf51922e5c8e4ce7.r2.dev';

// Types
type UploadRequest = {
  tokenLogo: string;
  tokenName: string;
  tokenSymbol: string;
  mintKeypair: string; // base58 encoded secret key
  userWallet: string;
};

type Metadata = {
  name: string;
  symbol: string;
  image: string;
};

type MetadataUploadParams = {
  tokenName: string;
  tokenSymbol: string;
  mint: string;
  image: string;
};

// R2 client setup
const r2 = new AWS.S3({
  endpoint: PRIVATE_R2_URL,
  accessKeyId: R2_ACCESS_KEY_ID,
  secretAccessKey: R2_SECRET_ACCESS_KEY,
  region: 'auto',
  signatureVersion: 'v4',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { tokenLogo, tokenName, tokenSymbol, mintKeypair, userWallet } = req.body as UploadRequest;

    // Validate required fields
    if (!tokenLogo || !tokenName || !tokenSymbol || !mintKeypair || !userWallet) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Decode the mint keypair (client generates fresh keypair)
    const mintKeypairDecoded = Keypair.fromSecretKey(
      Buffer.from(mintKeypair, 'base64')
    );
    const mintAddress = mintKeypairDecoded.publicKey.toBase58();

    // Upload image and metadata
    const imageUrl = await uploadImage(tokenLogo, mintAddress);
    if (!imageUrl) {
      return res.status(400).json({ error: 'Failed to upload image' });
    }

    const metadataUrl = await uploadMetadata({ tokenName, tokenSymbol, mint: mintAddress, image: imageUrl });
    if (!metadataUrl) {
      return res.status(400).json({ error: 'Failed to upload metadata' });
    }

    // Create pool transaction
    const result = await createPoolTransaction({
      mintKeypair: mintKeypairDecoded,
      tokenName,
      tokenSymbol,
      metadataUrl,
      userWallet,
    });

    res.status(200).json({
      success: true,
      poolTx: result.transaction
        .serialize({
          requireAllSignatures: false,
          verifySignatures: false,
        })
        .toString('base64'),
      mintAddress: result.mintKeypair.publicKey.toBase58(),
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
}

async function uploadImage(tokenLogo: string, mint: string): Promise<string | false> {
  const matches = tokenLogo.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    return false;
  }

  const [, contentType, base64Data] = matches;

  if (!contentType || !base64Data) {
    return false;
  }

  const fileBuffer = Buffer.from(base64Data, 'base64');
  const fileName = `images/${mint}.${contentType.split('/')[1]}`;

  try {
    await uploadToR2(fileBuffer, contentType, fileName);
    return `${PUBLIC_R2_URL}/${fileName}`;
  } catch (error) {
    console.error('Error uploading image:', error);
    return false;
  }
}

async function uploadMetadata(params: MetadataUploadParams): Promise<string | false> {
  const metadata: Metadata = {
    name: params.tokenName,
    symbol: params.tokenSymbol,
    image: params.image,
  };
  const fileName = `metadata/${params.mint}.json`;

  try {
    await uploadToR2(Buffer.from(JSON.stringify(metadata, null, 2)), 'application/json', fileName);
    return `${PUBLIC_R2_URL}/${fileName}`;
  } catch (error) {
    console.error('Error uploading metadata:', error);
    return false;
  }
}

async function uploadToR2(
  fileBuffer: Buffer,
  contentType: string,
  fileName: string
): Promise<AWS.S3.PutObjectOutput> {
  return new Promise((resolve, reject) => {
    r2.putObject(
      {
        Bucket: R2_BUCKET,
        Key: fileName,
        Body: fileBuffer,
        ContentType: contentType,
      },
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
}



async function createPoolTransaction({
  mintKeypair,
  tokenName,
  tokenSymbol,
  metadataUrl,
  userWallet,
}: {
  mintKeypair: Keypair;
  tokenName: string;
  tokenSymbol: string;
  metadataUrl: string;
  userWallet: string;
}) {
  const connection = new Connection(RPC_URL, 'confirmed');
  const client = new DynamicBondingCurveClient(connection, 'confirmed');
  const userPublicKey = new PublicKey(userWallet);

  // Create the DBC pool (program creates mint and metadata)
  const poolTx = await client.pool.createPool({
    config: new PublicKey(POOL_CONFIG_KEY),
    baseMint: mintKeypair.publicKey,
    name: tokenName,
    symbol: tokenSymbol,
    uri: metadataUrl,
    payer: userPublicKey,
    poolCreator: userPublicKey,
  });

  // Transaction contains pool instructions
  const combinedTx = new Transaction();
  combinedTx.add(...poolTx.instructions);

  const { blockhash } = await connection.getLatestBlockhash();
  combinedTx.feePayer = userPublicKey;
  combinedTx.recentBlockhash = blockhash;

  return { transaction: combinedTx, mintKeypair: mintKeypair };
}
