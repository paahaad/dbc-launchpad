import { Connection, PublicKey } from '@solana/web3.js';
import {
  getQuoteMint,
  safeParseKeypairFromFile,
  parseConfigFromCli,
  createTokenMint,
} from '../../helpers';
import { Wallet } from '@coral-xyz/anchor';
import { createPermissionlessDammV1Pool } from '../../lib/damm_v1';
import { MeteoraConfig } from '../../utils/types';
import { DEFAULT_COMMITMENT_LEVEL } from '../../utils/constants';

async function main() {
  const config: MeteoraConfig = await parseConfigFromCli();

  console.log(`> Using keypair file path ${config.keypairFilePath}`);
  const keypair = await safeParseKeypairFromFile(config.keypairFilePath);

  console.log('\n> Initializing with general configuration...');
  console.log(`- Using RPC URL ${config.rpcUrl}`);
  console.log(`- Dry run = ${config.dryRun}`);
  console.log(`- Using payer ${keypair.publicKey} to execute commands`);

  const connection = new Connection(config.rpcUrl, DEFAULT_COMMITMENT_LEVEL);
  const wallet = new Wallet(keypair);

  let baseMint: PublicKey;
  const quoteMint = getQuoteMint(config.quoteSymbol, config.quoteMint);

  // If we want to create a new token mint
  if (config.createBaseToken) {
    baseMint = await createTokenMint(connection, wallet, {
      dryRun: config.dryRun,
      mintTokenAmount: config.createBaseToken.mintBaseTokenAmount,
      decimals: config.createBaseToken.baseDecimals,
      computeUnitPriceMicroLamports: config.computeUnitPriceMicroLamports,
    });
  } else {
    if (!config.baseMint) {
      throw new Error('Missing baseMint in configuration');
    }
    baseMint = new PublicKey(config.baseMint);
  }

  console.log(`- Using base token mint ${baseMint.toString()}`);
  console.log(`- Using quote token mint ${quoteMint.toString()}`);

  /// --------------------------------------------------------------------------
  if (config.dynamicAmm && !config.dlmm) {
    await createPermissionlessDammV1Pool(config, connection, wallet, baseMint, quoteMint);
  } else {
    throw new Error('Must provide DAMM V1 configuration');
  }
}

main();
