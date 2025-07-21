import { Wallet } from '@coral-xyz/anchor';
import { Connection, PublicKey } from '@solana/web3.js';
import { MeteoraConfig } from '../../utils/types';
import { DEFAULT_COMMITMENT_LEVEL } from '../../utils/constants';
import { safeParseKeypairFromFile, getQuoteMint, parseConfigFromCli } from '../../helpers';
import {
  createProgram,
  deriveCustomizablePermissionlessConstantProductPoolAddress,
} from '@meteora-ag/dynamic-amm-sdk/dist/cjs/src/amm/utils';
import { createStake2EarnFarm } from '../../lib/stake2earn';

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

  if (!config.baseMint) {
    throw new Error('Missing baseMint in configuration');
  }
  const baseMint = new PublicKey(config.baseMint);
  const quoteMint = getQuoteMint(config.quoteSymbol, config.quoteMint);
  const ammProgram = createProgram(connection as any).ammProgram;
  const poolKey = deriveCustomizablePermissionlessConstantProductPoolAddress(
    baseMint,
    quoteMint,
    ammProgram.programId
  );

  const poolAccount = await connection.getAccountInfo(poolKey, {
    commitment: 'confirmed',
  });

  if (!poolAccount) {
    throw new Error(`Pool ${poolKey} didn't exist. Please create it first.`);
  }

  console.log(`- Using base token mint ${baseMint.toString()}`);
  console.log(`- Using quote token mint ${quoteMint.toString()}`);
  console.log(`- Pool key ${poolKey}`);

  if (!config.m3m3) {
    throw new Error('Missing M3M3 configuration');
  }

  // 3. Create Stake2Earn farm
  await createStake2EarnFarm(
    connection,
    wallet.payer,
    poolKey,
    baseMint,
    config.m3m3,
    config.dryRun,
    config.computeUnitPriceMicroLamports
  );
}

main();
