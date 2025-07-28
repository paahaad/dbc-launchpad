import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
} from '@solana/web3.js';
import { DbcConfig } from '../utils/types';
import { Wallet } from '@coral-xyz/anchor';
import { modifyComputeUnitPriceIx, runSimulateTransaction } from '../helpers';
import { DEFAULT_SEND_TX_MAX_RETRIES } from '../utils/constants';
import {
  buildCurve,
  buildCurveWithLiquidityWeights,
  buildCurveWithMarketCap,
  buildCurveWithTwoSegments,
  ConfigParameters,
  DynamicBondingCurveClient,
} from '@meteora-ag/dynamic-bonding-curve-sdk';

export async function createDbcConfig(
  config: DbcConfig,
  connection: Connection,
  wallet: Wallet,
  quoteMint: PublicKey
): Promise<PublicKey> {
  if (!config.dbcConfig) {
    throw new Error('Missing dbc configuration');
  }
  console.log('\n> Initializing DBC config...');

  // Check if we're using an existing config key address
  if ('configKeyAddress' in config.dbcConfig) {
    console.log(`> Using existing config key: ${config.dbcConfig.configKeyAddress.toString()}`);
    return config.dbcConfig.configKeyAddress;
  }

  let curveConfig: ConfigParameters | null = null;

  if (config.dbcConfig.buildCurveMode === 0) {
    curveConfig = buildCurve(config.dbcConfig);
  } else if (config.dbcConfig.buildCurveMode === 1) {
    curveConfig = buildCurveWithMarketCap(config.dbcConfig);
  } else if (config.dbcConfig.buildCurveMode === 2) {
    curveConfig = buildCurveWithTwoSegments(config.dbcConfig);
  } else if (config.dbcConfig.buildCurveMode === 3) {
    curveConfig = buildCurveWithLiquidityWeights(config.dbcConfig);
  } else {
    throw new Error(
      `Unsupported DBC build curve mode: ${(config.dbcConfig as any).buildCurveMode}`
    );
  }

  if (!curveConfig) {
    throw new Error('Failed to build curve config');
  }

  const dbcInstance = new DynamicBondingCurveClient(connection, 'confirmed');

  const configKeypair = Keypair.generate();
  console.log(`> Generated config keypair: ${configKeypair.publicKey.toString()}`);

  const createConfigTx = await dbcInstance.partner.createConfig({
    config: configKeypair.publicKey,
    quoteMint,
    feeClaimer: new PublicKey(config.dbcConfig.feeClaimer),
    leftoverReceiver: new PublicKey(config.dbcConfig.leftoverReceiver),
    payer: wallet.publicKey,
    ...curveConfig,
  });

  modifyComputeUnitPriceIx(createConfigTx as any, config.computeUnitPriceMicroLamports);

  if (config.dryRun) {
    console.log(`> Simulating create config tx...`);
    await runSimulateTransaction(connection, [wallet.payer, configKeypair], wallet.publicKey, [
      createConfigTx,
    ]);
    console.log(`> Config simulation successful`);
  } else {
    console.log(`>> Sending create config transaction...`);
    const createConfigTxHash = await sendAndConfirmTransaction(
      connection,
      createConfigTx,
      [wallet.payer, configKeypair],
      {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      }
    ).catch((err) => {
      console.error('Failed to create config:', err);
      throw err;
    });

    console.log(`>>> Config created successfully with tx hash: ${createConfigTxHash}`);
    console.log(`>>> Config public key: ${configKeypair.publicKey.toString()}`);

    console.log(`> Waiting for config transaction to be finalized...`);
    await connection.confirmTransaction(createConfigTxHash, 'finalized');
    console.log(`>>> Config transaction finalized`);
  }

  return configKeypair.publicKey;
}

export async function createDbcPool(
  config: DbcConfig,
  connection: Connection,
  wallet: Wallet,
  quoteMint: PublicKey,
  baseMint: Keypair
) {
  if (!config.dbcConfig) {
    throw new Error('Missing dbc configuration');
  }

  const configPublicKey = await createDbcConfig(config, connection, wallet, quoteMint);

  const dbcInstance = new DynamicBondingCurveClient(connection, 'confirmed');

  if (config.dryRun) {
    console.log(
      `> Simulating create pool tx (note: this may fail in dry-run mode due to missing config state)...`
    );
    try {
      const createPoolTx = await dbcInstance.pool.createPool({
        baseMint: baseMint.publicKey,
        config: configPublicKey,
        name: config.dbcPool.name,
        symbol: config.dbcPool.symbol,
        uri: config.dbcPool.uri,
        payer: wallet.publicKey,
        poolCreator: wallet.publicKey,
      });

      modifyComputeUnitPriceIx(createPoolTx as any, config.computeUnitPriceMicroLamports);

      await runSimulateTransaction(connection, [wallet.payer, baseMint], wallet.publicKey, [
        createPoolTx,
      ]);
      console.log(`> Pool simulation successful`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.log(`> Pool simulation failed (expected in dry-run mode): ${errorMessage}`);
      console.log(`> This is normal since the config doesn't exist on-chain during dry-run`);
    }
  } else {
    console.log(`>> Creating pool transaction...`);
    const createPoolTx = await dbcInstance.pool.createPool({
      baseMint: baseMint.publicKey,
      config: configPublicKey,
      name: config.dbcPool.name,
      symbol: config.dbcPool.symbol,
      uri: config.dbcPool.uri,
      payer: wallet.publicKey,
      poolCreator: wallet.publicKey,
    });

    modifyComputeUnitPriceIx(createPoolTx as any, config.computeUnitPriceMicroLamports);

    console.log(`>> Sending create pool transaction...`);
    const createPoolTxHash = await sendAndConfirmTransaction(
      connection,
      createPoolTx,
      [wallet.payer, baseMint],
      {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      }
    ).catch((err) => {
      console.error('Failed to create pool:', err);
      throw err;
    });

    console.log(`>>> Pool created successfully with tx hash: ${createPoolTxHash}`);
    console.log(`>>> Base mint public key: ${baseMint.publicKey.toString()}`);
  }
}

export async function claimTradingFee(config: DbcConfig, connection: Connection, wallet: Wallet) {
  if (!config.baseMint) {
    throw new Error('Missing baseMint configuration');
  }

  console.log('\n> Initializing DBC claim trading fee...');

  const baseMint = new PublicKey(config.baseMint);
  const dbcInstance = new DynamicBondingCurveClient(connection, 'confirmed');

  const poolState = await dbcInstance.state.getPoolByBaseMint(baseMint);
  if (!poolState) {
    throw new Error(`DBC Pool not found for ${baseMint.toString()}`);
  }

  const dbcConfig = poolState.account.config;
  const poolConfig = await dbcInstance.state.getPoolConfig(dbcConfig);
  if (!poolConfig) {
    throw new Error(`DBC Pool config not found for ${dbcConfig.toString()}`);
  }

  const poolAddress = poolState.publicKey;
  const creator = poolState.account.creator;
  const partner = poolConfig.feeClaimer;
  const feeMetrics = await dbcInstance.state.getPoolFeeMetrics(poolAddress);

  const isCreator = creator.toString() === wallet.publicKey.toString();
  console.log(`> Is creator: ${isCreator}`);
  const isPartner = partner.toString() === wallet.publicKey.toString();
  console.log(`> Is partner: ${isPartner}`);

  if (!isCreator && !isPartner) {
    console.log('> User is neither the creator nor the launchpad fee claimer');
    return;
  }

  const transactions: Transaction[] = [];

  if (isCreator) {
    const claimCreatorTradingFeeTx = await dbcInstance.creator.claimCreatorTradingFee({
      creator: wallet.publicKey,
      pool: poolAddress,
      maxBaseAmount: feeMetrics.current.creatorBaseFee,
      maxQuoteAmount: feeMetrics.current.creatorQuoteFee,
      payer: wallet.publicKey,
    });
    modifyComputeUnitPriceIx(claimCreatorTradingFeeTx, config.computeUnitPriceMicroLamports);
    transactions.push(claimCreatorTradingFeeTx);
  } else {
    console.log('> This is not the creator of the pool');
  }

  if (isPartner) {
    const claimPartnerTradingFeeTx = await dbcInstance.partner.claimPartnerTradingFee({
      feeClaimer: wallet.publicKey,
      pool: poolAddress,
      maxBaseAmount: feeMetrics.current.partnerBaseFee,
      maxQuoteAmount: feeMetrics.current.partnerQuoteFee,
      payer: wallet.publicKey,
    });
    modifyComputeUnitPriceIx(claimPartnerTradingFeeTx, config.computeUnitPriceMicroLamports);
    transactions.push(claimPartnerTradingFeeTx);
  } else {
    console.log('> This is not the launchpad fee claimer');
  }

  if (transactions.length === 0) {
    console.log('> No trading fees to claim');
    return;
  }

  if (config.dryRun) {
    console.log('> Simulating claim trading fee tx...');
    await runSimulateTransaction(connection, [wallet.payer], wallet.publicKey, transactions);
    console.log('> Claim trading fee simulation successful');
    return;
  }

  try {
    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i];
      const txType = i === 0 && isCreator ? 'creator' : 'partner';

      console.log(`> Sending ${txType} trading fee claim transaction...`);

      const txHash = await sendAndConfirmTransaction(connection, transaction, [wallet.payer], {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      });

      console.log(`> ${txType} trading fee claimed successfully with tx hash: ${txHash}`);
    }
  } catch (error) {
    console.error('Failed to claim trading fee:', error);
    throw error;
  }
}
