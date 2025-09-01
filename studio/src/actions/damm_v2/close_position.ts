import { Connection, PublicKey } from '@solana/web3.js';
import { Wallet } from '@coral-xyz/anchor';
import { DammV2Config } from '../../utils/types';
import { DEFAULT_COMMITMENT_LEVEL } from '../../utils/constants';
import { parseConfigFromCli, safeParseKeypairFromFile } from '../../helpers';
import { closePosition } from '../../lib/damm_v2';

async function main() {
  const config: DammV2Config = (await parseConfigFromCli()) as DammV2Config;

  console.log(`> Using keypair file path ${config.keypairFilePath}`);
  const keypair = await safeParseKeypairFromFile(config.keypairFilePath);

  console.log('\n> Initializing with general configuration...');
  console.log(`- Using RPC URL ${config.rpcUrl}`);
  console.log(`- Dry run = ${config.dryRun}`);
  console.log(`- Using payer ${keypair.publicKey} to execute commands`);

  const connection = new Connection(config.rpcUrl, DEFAULT_COMMITMENT_LEVEL);
  const wallet = new Wallet(keypair);

  if (!config.poolAddress) {
    throw new Error('Missing pool address in configuration');
  }
  const poolAddress = new PublicKey(config.poolAddress);

  console.log(`- Using pool address ${poolAddress.toString()}`);

  /// --------------------------------------------------------------------------
  if (config) {
    await closePosition(config, connection, wallet, poolAddress);
  } else {
    throw new Error('Must provide Dynamic V2 configuration');
  }
}

main();
