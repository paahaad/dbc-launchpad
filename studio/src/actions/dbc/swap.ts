import { Connection, PublicKey } from '@solana/web3.js';
import { safeParseKeypairFromFile, getDbcConfig, parseCliArguments } from '../../helpers';
import { Wallet } from '@coral-xyz/anchor';
import { DEFAULT_COMMITMENT_LEVEL } from '../../utils/constants';
import { swap } from '../../lib/dbc';

async function main() {
  const config = await getDbcConfig();

  console.log(`> Using keypair file path ${config.keypairFilePath}`);
  const keypair = await safeParseKeypairFromFile(config.keypairFilePath);

  console.log('\n> Initializing with general configuration...');
  console.log(`- Using RPC URL ${config.rpcUrl}`);
  console.log(`- Dry run = ${config.dryRun}`);
  console.log(`- Using wallet ${keypair.publicKey} to swap`);

  const connection = new Connection(config.rpcUrl, DEFAULT_COMMITMENT_LEVEL);
  const wallet = new Wallet(keypair);

  if (!config.quoteMint) {
    throw new Error('Missing quoteMint in configuration');
  }
  const quoteMint = new PublicKey(config.quoteMint);

  // parse baseMint
  const baseMint = new PublicKey(parseCliArguments().baseMint);
  if (!baseMint) {
    throw new Error('Please provide --baseMint flag to do this action');
  }

  console.log(`- Using quote token mint ${quoteMint.toString()}`);
  console.log(`- Using base token mint ${baseMint.toString()}`);

  /// --------------------------------------------------------------------------
  if (config) {
    await swap(config, connection, wallet);
  } else {
    throw new Error('Must provide DBC configuration');
  }
}

main();
