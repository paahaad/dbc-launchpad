import { BN, Wallet } from '@coral-xyz/anchor';
import {
  BaseFee,
  BIN_STEP_BPS_DEFAULT,
  BIN_STEP_BPS_U128_DEFAULT,
  calculateTransferFeeIncludedAmount,
  CpAmm,
  getBaseFeeParams,
  getDynamicFeeParams,
  getLiquidityDeltaFromAmountA,
  getPriceFromSqrtPrice,
  getSqrtPriceFromPrice,
  getTokenProgram,
  getUnClaimReward,
  MAX_SQRT_PRICE,
  MIN_SQRT_PRICE,
  PoolFeesParams,
} from '@meteora-ag/cp-amm-sdk';
import { TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID, unpackMint } from '@solana/spl-token';
import { Connection, Keypair, PublicKey, sendAndConfirmTransaction } from '@solana/web3.js';
import { DammV2Config } from '../../utils/types';
import {
  getAmountInLamports,
  getDecimalizedAmount,
  getAmountInTokens,
  getQuoteDecimals,
  modifyComputeUnitPriceIx,
  runSimulateTransaction,
} from '../../helpers';
import { promptForSelection } from '../../helpers/cli';
import { DEFAULT_SEND_TX_MAX_RETRIES } from '../../utils/constants';

/**
 * Create a one-sided DAMM V2 pool
 * @param config - The DAMM V2 config
 * @param connection - The connection to the network
 * @param wallet - The wallet to use for the transaction
 * @param baseTokenMint - The base token mint
 * @param quoteTokenMint - The quote token mint
 */
export async function createDammV2OneSidedPool(
  config: DammV2Config,
  connection: Connection,
  wallet: Wallet,
  baseTokenMint: PublicKey,
  quoteTokenMint: PublicKey
) {
  if (!config.dammV2Config) {
    throw new Error('Missing DAMM V2 configuration');
  }
  console.log('\n> Initializing one-sided DAMM V2 pool...');

  if (!config.quoteMint) {
    throw new Error('Quote mint is required');
  }

  const quoteDecimals = await getQuoteDecimals(connection, config.quoteMint);

  let baseTokenInfo = null;
  let baseTokenProgram = TOKEN_PROGRAM_ID;

  const baseMintAccountInfo = await connection.getAccountInfo(
    new PublicKey(baseTokenMint),
    connection.commitment
  );

  if (!baseMintAccountInfo) {
    throw new Error(`Base mint account not found: ${baseTokenMint}`);
  }

  const baseMint = unpackMint(baseTokenMint, baseMintAccountInfo, baseMintAccountInfo.owner);

  if (baseMintAccountInfo.owner.equals(TOKEN_2022_PROGRAM_ID)) {
    const epochInfo = await connection.getEpochInfo();
    baseTokenInfo = {
      mint: baseMint,
      currentEpoch: epochInfo.epoch,
    };
    baseTokenProgram = TOKEN_2022_PROGRAM_ID;
  }

  const baseDecimals = baseMint.decimals;

  const cpAmmInstance = new CpAmm(connection);

  const {
    initPrice,
    maxPrice,
    poolFees,
    baseAmount,
    quoteAmount,
    hasAlphaVault,
    activationPoint,
    activationType,
    collectFeeMode,
  } = config.dammV2Config;

  const {
    maxBaseFeeBps,
    minBaseFeeBps,
    feeSchedulerMode,
    totalDuration,
    numberOfPeriod,
    useDynamicFee,
  } = poolFees;

  let tokenAAmount = getAmountInLamports(baseAmount, baseDecimals);
  let tokenBAmount = new BN(0);

  // transfer fee if token2022
  if (baseTokenInfo) {
    tokenAAmount = tokenAAmount.sub(
      calculateTransferFeeIncludedAmount(
        tokenAAmount,
        baseTokenInfo.mint,
        baseTokenInfo.currentEpoch
      ).transferFee
    );
  }

  const maxSqrtPrice = maxPrice
    ? getSqrtPriceFromPrice(maxPrice.toString(), baseDecimals, quoteDecimals)
    : MAX_SQRT_PRICE;

  const initSqrtPrice = getSqrtPriceFromPrice(initPrice.toString(), baseDecimals, quoteDecimals);
  let minSqrtPrice = initSqrtPrice;

  const liquidityDelta = getLiquidityDeltaFromAmountA(tokenAAmount, initSqrtPrice, maxSqrtPrice);

  if (quoteAmount) {
    tokenBAmount = getAmountInLamports(quoteAmount, quoteDecimals);
    // L = Δb / (√P_upper - √P_lower)
    // √P_lower = √P_upper - Δb / L
    const numerator = tokenBAmount.shln(128).div(liquidityDelta);
    minSqrtPrice = initSqrtPrice.sub(numerator);
  }
  console.log(
    `- Using base token with amount = ${getDecimalizedAmount(tokenAAmount, baseDecimals)}`
  );

  console.log(`- Init price ${getPriceFromSqrtPrice(initSqrtPrice, baseDecimals, quoteDecimals)}`);

  console.log(
    `- Price range [${getPriceFromSqrtPrice(minSqrtPrice, baseDecimals, quoteDecimals)}, ${getPriceFromSqrtPrice(maxSqrtPrice, baseDecimals, quoteDecimals)}]`
  );

  let dynamicFee = null;
  if (useDynamicFee) {
    const dynamicFeeConfig = config.dammV2Config.poolFees.dynamicFeeConfig;
    if (dynamicFeeConfig) {
      dynamicFee = {
        binStep: BIN_STEP_BPS_DEFAULT,
        binStepU128: BIN_STEP_BPS_U128_DEFAULT,
        filterPeriod: dynamicFeeConfig.filterPeriod,
        decayPeriod: dynamicFeeConfig.decayPeriod,
        reductionFactor: dynamicFeeConfig.reductionFactor,
        variableFeeControl: dynamicFeeConfig.variableFeeControl,
        maxVolatilityAccumulator: dynamicFeeConfig.maxVolatilityAccumulator,
      };
    } else {
      dynamicFee = getDynamicFeeParams(config.dammV2Config.poolFees.minBaseFeeBps);
    }
  }

  const baseFee: BaseFee = getBaseFeeParams(
    maxBaseFeeBps,
    minBaseFeeBps,
    feeSchedulerMode,
    numberOfPeriod,
    totalDuration
  );

  const poolFeesParams: PoolFeesParams = {
    baseFee,
    padding: [],
    dynamicFee,
  };
  const positionNft = Keypair.generate();

  const {
    tx: initCustomizePoolTx,
    pool,
    position,
  } = await cpAmmInstance.createCustomPool({
    payer: wallet.publicKey,
    creator: new PublicKey(config.dammV2Config.creator),
    positionNft: positionNft.publicKey,
    tokenAMint: baseTokenMint,
    tokenBMint: quoteTokenMint,
    tokenAAmount: tokenAAmount,
    tokenBAmount: tokenBAmount,
    sqrtMinPrice: minSqrtPrice,
    sqrtMaxPrice: maxSqrtPrice,
    liquidityDelta: liquidityDelta,
    initSqrtPrice,
    poolFees: poolFeesParams,
    hasAlphaVault: hasAlphaVault,
    activationType,
    collectFeeMode: collectFeeMode,
    activationPoint: activationPoint ? new BN(activationPoint) : null,
    tokenAProgram: baseTokenProgram,
    tokenBProgram: TOKEN_PROGRAM_ID,
  });

  modifyComputeUnitPriceIx(initCustomizePoolTx, config.computeUnitPriceMicroLamports);

  console.log(`\n> Pool address: ${pool}`);
  console.log(`\n> Position address: ${position}`);

  if (config.dryRun) {
    console.log(`> Simulating init pool tx...`);
    await runSimulateTransaction(connection, [wallet.payer, positionNft], wallet.publicKey, [
      initCustomizePoolTx,
    ]);
  } else {
    console.log(`>> Sending init pool transaction...`);
    const initPoolTxHash = await sendAndConfirmTransaction(
      connection,
      initCustomizePoolTx,
      [wallet.payer, positionNft],
      {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      }
    ).catch((err) => {
      console.error(err);
      throw err;
    });
    console.log(`>>> Pool initialized successfully with tx hash: ${initPoolTxHash}`);
  }
}

/**
 * Create a balanced DAMM V2 pool
 * @param config - The DAMM V2 config
 * @param connection - The connection to the network
 * @param wallet - The wallet to use for the transaction
 * @param baseTokenMint - The base token mint
 * @param quoteTokenMint - The quote token mint
 */
export async function createDammV2BalancedPool(
  config: DammV2Config,
  connection: Connection,
  wallet: Wallet,
  baseTokenMint: PublicKey,
  quoteTokenMint: PublicKey
) {
  if (!config.dammV2Config) {
    throw new Error('Missing DAMM V2 configuration');
  }
  console.log('\n> Initializing balanced DAMM V2 pool...');

  if (!config.quoteMint) {
    throw new Error('Quote mint is required');
  }

  const quoteDecimals = await getQuoteDecimals(connection, config.quoteMint);

  let baseTokenInfo = null;
  let baseTokenProgram = TOKEN_PROGRAM_ID;

  const baseMintAccountInfo = await connection.getAccountInfo(
    new PublicKey(baseTokenMint),
    connection.commitment
  );

  if (!baseMintAccountInfo) {
    throw new Error(`Base mint account not found: ${baseTokenMint}`);
  }

  const baseMint = unpackMint(baseTokenMint, baseMintAccountInfo, baseMintAccountInfo.owner);

  if (baseMintAccountInfo.owner.equals(TOKEN_2022_PROGRAM_ID)) {
    const epochInfo = await connection.getEpochInfo();
    baseTokenInfo = {
      mint: baseMint,
      currentEpoch: epochInfo.epoch,
    };
    baseTokenProgram = TOKEN_2022_PROGRAM_ID;
  }

  let quoteTokenInfo = null;
  let quoteTokenProgram = TOKEN_PROGRAM_ID;

  const quoteMintAccountInfo = await connection.getAccountInfo(
    new PublicKey(quoteTokenMint),
    connection.commitment
  );

  if (!quoteMintAccountInfo) {
    throw new Error(`Quote mint account not found: ${quoteTokenMint}`);
  }

  const quoteMint = unpackMint(quoteTokenMint, quoteMintAccountInfo, quoteMintAccountInfo.owner);

  if (quoteMintAccountInfo.owner.equals(TOKEN_2022_PROGRAM_ID)) {
    const epochInfo = await connection.getEpochInfo();
    quoteTokenInfo = {
      mint: quoteMint,
      currentEpoch: epochInfo.epoch,
    };
    quoteTokenProgram = TOKEN_2022_PROGRAM_ID;
  }

  const baseDecimals = baseMint.decimals;

  // create cp amm instance
  const cpAmmInstance = new CpAmm(connection);
  const {
    baseAmount,
    quoteAmount,
    initPrice,
    poolFees,
    hasAlphaVault,
    activationPoint,
    activationType,
    collectFeeMode,
  } = config.dammV2Config;

  const {
    maxBaseFeeBps,
    minBaseFeeBps,
    numberOfPeriod,
    totalDuration,
    feeSchedulerMode,
    useDynamicFee,
  } = poolFees;

  if (!quoteAmount) {
    throw new Error('Quote amount is required for balanced pool');
  }

  let tokenAAmount = getAmountInLamports(baseAmount, baseDecimals);
  let tokenBAmount = getAmountInLamports(quoteAmount, quoteDecimals);

  if (baseTokenInfo) {
    tokenAAmount = tokenAAmount.sub(
      calculateTransferFeeIncludedAmount(
        tokenAAmount,
        baseTokenInfo.mint,
        baseTokenInfo.currentEpoch
      ).transferFee
    );
  }

  if (quoteTokenInfo) {
    tokenBAmount = tokenBAmount.sub(
      calculateTransferFeeIncludedAmount(
        tokenBAmount,
        quoteTokenInfo.mint,
        quoteTokenInfo.currentEpoch
      ).transferFee
    );
  }

  const initSqrtPrice = getSqrtPriceFromPrice(initPrice.toString(), baseDecimals, quoteDecimals);

  const minSqrtPrice = MIN_SQRT_PRICE;
  const maxSqrtPrice = MAX_SQRT_PRICE;

  const liquidityDelta = cpAmmInstance.getLiquidityDelta({
    maxAmountTokenA: tokenAAmount,
    maxAmountTokenB: tokenBAmount,
    sqrtPrice: initSqrtPrice,
    sqrtMinPrice: minSqrtPrice,
    sqrtMaxPrice: maxSqrtPrice,
    tokenAInfo: baseTokenInfo || undefined,
  });

  console.log(
    `- Using base token with amount = ${getDecimalizedAmount(tokenAAmount, baseDecimals)}`
  );
  console.log(
    `- Using quote token with amount = ${getDecimalizedAmount(tokenBAmount, quoteDecimals)}`
  );

  console.log(`- Init price ${getPriceFromSqrtPrice(initSqrtPrice, baseDecimals, quoteDecimals)}`);

  console.log(
    `- Price range [${getPriceFromSqrtPrice(minSqrtPrice, baseDecimals, quoteDecimals)}, ${getPriceFromSqrtPrice(maxSqrtPrice, baseDecimals, quoteDecimals)}]`
  );

  let dynamicFee = null;
  if (useDynamicFee) {
    const dynamicFeeConfig = config.dammV2Config.poolFees.dynamicFeeConfig;
    if (dynamicFeeConfig) {
      dynamicFee = {
        binStep: BIN_STEP_BPS_DEFAULT,
        binStepU128: BIN_STEP_BPS_U128_DEFAULT,
        filterPeriod: dynamicFeeConfig.filterPeriod,
        decayPeriod: dynamicFeeConfig.decayPeriod,
        reductionFactor: dynamicFeeConfig.reductionFactor,
        variableFeeControl: dynamicFeeConfig.variableFeeControl,
        maxVolatilityAccumulator: dynamicFeeConfig.maxVolatilityAccumulator,
      };
    } else {
      dynamicFee = getDynamicFeeParams(config.dammV2Config.poolFees.minBaseFeeBps);
    }
  }

  const baseFee: BaseFee = getBaseFeeParams(
    maxBaseFeeBps,
    minBaseFeeBps,
    feeSchedulerMode,
    numberOfPeriod,
    totalDuration
  );

  const poolFeesParams: PoolFeesParams = {
    baseFee,
    padding: [],
    dynamicFee,
  };

  const positionNft = Keypair.generate();

  const {
    tx: initCustomizePoolTx,
    pool,
    position,
  } = await cpAmmInstance.createCustomPool({
    payer: wallet.publicKey,
    creator: new PublicKey(config.dammV2Config.creator),
    positionNft: positionNft.publicKey,
    tokenAMint: baseTokenMint,
    tokenBMint: quoteTokenMint,
    tokenAAmount: tokenAAmount,
    tokenBAmount: tokenBAmount,
    sqrtMinPrice: minSqrtPrice,
    sqrtMaxPrice: maxSqrtPrice,
    liquidityDelta: liquidityDelta,
    initSqrtPrice,
    poolFees: poolFeesParams,
    hasAlphaVault: hasAlphaVault,
    activationType,
    collectFeeMode: collectFeeMode,
    activationPoint: activationPoint ? new BN(activationPoint) : null,
    tokenAProgram: baseTokenProgram,
    tokenBProgram: TOKEN_PROGRAM_ID,
  });

  modifyComputeUnitPriceIx(initCustomizePoolTx, config.computeUnitPriceMicroLamports);

  console.log(`\n> Pool address: ${pool}`);
  console.log(`\n> Position address: ${position}`);

  if (config.dryRun) {
    console.log(`> Simulating init pool tx...`);
    await runSimulateTransaction(connection, [wallet.payer, positionNft], wallet.publicKey, [
      initCustomizePoolTx,
    ]);
  } else {
    console.log(`>> Sending init pool transaction...`);
    const initPoolTxHash = await sendAndConfirmTransaction(
      connection,
      initCustomizePoolTx,
      [wallet.payer, positionNft],
      {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      }
    ).catch((err) => {
      console.error(err);
      throw err;
    });
    console.log(`>>> Pool initialized successfully with tx hash: ${initPoolTxHash}`);
  }
}

/**
 * Split position for DAMM V2
 * @param config - The DAMM V2 config
 * @param connection - The connection to the network
 * @param wallet - The wallet to use for the transaction
 * @param poolAddress - The pool address
 */
export async function splitPosition(
  config: DammV2Config,
  connection: Connection,
  wallet: Wallet,
  poolAddress: PublicKey
) {
  if (!poolAddress) {
    throw new Error('Pool address is required');
  }

  if (!config.splitPosition) {
    throw new Error('Split position configuration is required');
  }

  console.log('\n> Splitting position...');

  const cpAmmInstance = new CpAmm(connection);

  const poolState = await cpAmmInstance.fetchPoolState(poolAddress);

  const userPositions = await cpAmmInstance.getUserPositionByPool(poolAddress, wallet.publicKey);

  if (userPositions.length === 0) {
    console.log('> No position found');
    return;
  }

  console.log(`\n> Pool address: ${poolAddress.toString()}`);
  console.log(`\n> Found ${userPositions.length} position(s) in this pool`);

  const positionDataArray = [];
  for (const userPosition of userPositions) {
    const positionState = await cpAmmInstance.fetchPositionState(userPosition.position);
    const unclaimReward = getUnClaimReward(poolState, positionState);
    positionDataArray.push({
      userPosition,
      positionState,
      unclaimReward,
      totalPositionFeeA: positionState.metrics.totalClaimedAFee.add(unclaimReward.feeTokenA),
      totalPositionFeeB: positionState.metrics.totalClaimedBFee.add(unclaimReward.feeTokenB),
    });
  }

  let selectedPositionData;

  if (userPositions.length === 1) {
    selectedPositionData = positionDataArray[0];
    console.log('> Only one position found, splitting that position...');
  } else {
    const tokenAMintInfo = await connection.getAccountInfo(poolState.tokenAMint);
    const tokenBMintInfo = await connection.getAccountInfo(poolState.tokenBMint);

    if (!tokenAMintInfo || !tokenBMintInfo) {
      throw new Error('Failed to fetch token mint information');
    }
    const tokenAMint = unpackMint(poolState.tokenAMint, tokenAMintInfo, tokenAMintInfo.owner);
    const tokenBMint = unpackMint(poolState.tokenBMint, tokenBMintInfo, tokenBMintInfo.owner);

    const positionOptions = positionDataArray.map((data, index) => {
      const { unclaimReward, totalPositionFeeA, totalPositionFeeB } = data;
      const positionAddress = data.userPosition.position.toString().slice(0, 8) + '...';

      return [
        `Position ${index + 1} (${positionAddress})`,
        `  - Unclaimed Fee A: ${getAmountInTokens(unclaimReward.feeTokenA, tokenAMint.decimals)}`,
        `  - Unclaimed Fee B: ${getAmountInTokens(unclaimReward.feeTokenB, tokenBMint.decimals)}`,
        `  - Total Position Fee A: ${getAmountInTokens(totalPositionFeeA, tokenAMint.decimals)}`,
        `  - Total Position Fee B: ${getAmountInTokens(totalPositionFeeB, tokenBMint.decimals)}`,
      ].join('\n');
    });

    const selectedIndex = await promptForSelection(
      positionOptions,
      'Which position would you like to split from?'
    );

    selectedPositionData = positionDataArray[selectedIndex];
    console.log(`\n> Selected position ${selectedIndex + 1} for splitting...`);
  }

  if (!selectedPositionData) {
    throw new Error('No position selected');
  }

  const { userPosition, positionState, unclaimReward, totalPositionFeeA, totalPositionFeeB } =
    selectedPositionData;

  console.log('\n> Position Fee Information:');
  console.log(`- Position Address: ${userPosition.position.toString()}`);
  console.log(`- Total Claimed Fee A: ${positionState.metrics.totalClaimedAFee.toString()}`);
  console.log(`- Unclaimed Fee A: ${unclaimReward.feeTokenA.toString()}`);
  console.log(`- TOTAL POSITION FEE A: ${totalPositionFeeA.toString()}`);
  console.log(`- Total Claimed Fee B: ${positionState.metrics.totalClaimedBFee.toString()}`);
  console.log(`- Unclaimed Fee B: ${unclaimReward.feeTokenB.toString()}`);
  console.log(`- TOTAL POSITION FEE B: ${totalPositionFeeB.toString()}`);

  // CREATE THE SECOND POSITION FIRST
  const secondPositionKP = Keypair.generate();

  const createSecondPositionTx = await cpAmmInstance.createPosition({
    owner: new PublicKey(config.splitPosition.newPositionOwner),
    payer: wallet.publicKey,
    pool: poolAddress,
    positionNft: secondPositionKP.publicKey,
  });

  const createSignature = await sendAndConfirmTransaction(
    connection,
    createSecondPositionTx,
    [wallet.payer, secondPositionKP],
    {
      commitment: 'confirmed',
      skipPreflight: true,
    }
  );
  console.log('Second position created:', createSignature);

  // Now get the newly created second position
  const secondPositions = await cpAmmInstance.getUserPositionByPool(
    poolAddress,
    new PublicKey(config.splitPosition.newPositionOwner)
  );

  console.log('secondPositions', secondPositions);
  console.log('secondPositionKP', secondPositionKP.publicKey);

  const secondPosition = secondPositions.find((pos) =>
    pos.positionState.nftMint.equals(secondPositionKP.publicKey)
  );

  if (!secondPosition) {
    throw new Error('Could not find the newly created second position');
  }

  const splitPositionTx = await cpAmmInstance.splitPosition({
    firstPositionOwner: wallet.publicKey,
    secondPositionOwner: new PublicKey(config.splitPosition.newPositionOwner),
    pool: poolAddress,
    firstPosition: userPosition.position,
    firstPositionNftAccount: userPosition.positionNftAccount,
    secondPosition: secondPosition.position,
    secondPositionNftAccount: secondPosition.positionNftAccount,
    unlockedLiquidityPercentage: config.splitPosition.unlockedLiquidityPercentage,
    permanentLockedLiquidityPercentage: config.splitPosition.permanentLockedLiquidityPercentage,
    feeAPercentage: config.splitPosition.feeAPercentage,
    feeBPercentage: config.splitPosition.feeBPercentage,
    reward0Percentage: config.splitPosition.reward0Percentage,
    reward1Percentage: config.splitPosition.reward1Percentage,
  });

  modifyComputeUnitPriceIx(splitPositionTx, config.computeUnitPriceMicroLamports);

  if (config.dryRun) {
    console.log(`\n> Simulating split position transaction...`);
    await runSimulateTransaction(connection, [wallet.payer], wallet.publicKey, [splitPositionTx]);
    console.log('> Split position simulation successful');
  } else {
    console.log(`\n>> Sending split position transaction...`);

    const claimFeeTxHash = await sendAndConfirmTransaction(
      connection,
      splitPositionTx,
      [wallet.payer],
      {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      }
    ).catch((err) => {
      console.error(`Failed to claim fee for position:`, err);
      throw err;
    });

    console.log(`>>> Position split successfully with tx hash: ${claimFeeTxHash}`);
  }
}

/**
 * Claim position fee for user positions (with interactive selection if multiple positions exist)
 * @param config - The DAMM V2 config
 * @param connection - The connection to the network
 * @param wallet - The wallet to use for the transaction
 * @param poolAddress - The pool address
 */
export async function claimPositionFee(
  config: DammV2Config,
  connection: Connection,
  wallet: Wallet,
  poolAddress: PublicKey
) {
  if (!poolAddress) {
    throw new Error('Pool address is required');
  }

  console.log('\n> Claiming position fee...');

  const cpAmmInstance = new CpAmm(connection);

  const poolState = await cpAmmInstance.fetchPoolState(poolAddress);

  const userPositions = await cpAmmInstance.getUserPositionByPool(poolAddress, wallet.publicKey);

  if (userPositions.length === 0) {
    console.log('> No position found');
    return;
  }

  console.log(`\n> Pool address: ${poolAddress.toString()}`);
  console.log(`\n> Found ${userPositions.length} position(s) in this pool`);

  const positionDataArray = [];
  for (const userPosition of userPositions) {
    const positionState = await cpAmmInstance.fetchPositionState(userPosition.position);
    const unclaimReward = getUnClaimReward(poolState, positionState);
    positionDataArray.push({
      userPosition,
      positionState,
      unclaimReward,
      totalPositionFeeA: positionState.metrics.totalClaimedAFee.add(unclaimReward.feeTokenA),
      totalPositionFeeB: positionState.metrics.totalClaimedBFee.add(unclaimReward.feeTokenB),
    });
  }

  let selectedPositionData;

  if (userPositions.length === 1) {
    selectedPositionData = positionDataArray[0];
    console.log('> Only one position found, claiming fees from that position...');
  } else {
    const tokenAMintInfo = await connection.getAccountInfo(poolState.tokenAMint);
    const tokenBMintInfo = await connection.getAccountInfo(poolState.tokenBMint);

    if (!tokenAMintInfo || !tokenBMintInfo) {
      throw new Error('Failed to fetch token mint information');
    }
    const tokenAMint = unpackMint(poolState.tokenAMint, tokenAMintInfo, tokenAMintInfo.owner);
    const tokenBMint = unpackMint(poolState.tokenBMint, tokenBMintInfo, tokenBMintInfo.owner);

    const positionOptions = positionDataArray.map((data, index) => {
      const { unclaimReward, totalPositionFeeA, totalPositionFeeB } = data;
      const positionAddress = data.userPosition.position.toString().slice(0, 8) + '...';

      return [
        `Position ${index + 1} (${positionAddress})`,
        `  - Unclaimed Fee A: ${getAmountInTokens(unclaimReward.feeTokenA, tokenAMint.decimals)}`,
        `  - Unclaimed Fee B: ${getAmountInTokens(unclaimReward.feeTokenB, tokenBMint.decimals)}`,
        `  - Total Position Fee A: ${getAmountInTokens(totalPositionFeeA, tokenAMint.decimals)}`,
        `  - Total Position Fee B: ${getAmountInTokens(totalPositionFeeB, tokenBMint.decimals)}`,
      ].join('\n');
    });

    const selectedIndex = await promptForSelection(
      positionOptions,
      'Which position would you like to claim fees from?'
    );

    selectedPositionData = positionDataArray[selectedIndex];
    console.log(`\n> Selected position ${selectedIndex + 1} for fee claiming...`);
  }

  if (!selectedPositionData) {
    throw new Error('No position selected');
  }
  const { userPosition, positionState, unclaimReward, totalPositionFeeA, totalPositionFeeB } =
    selectedPositionData;

  console.log('\n> Position Fee Information:');
  console.log(`- Position Address: ${userPosition.position.toString()}`);
  console.log(`- Total Claimed Fee A: ${positionState.metrics.totalClaimedAFee.toString()}`);
  console.log(`- Unclaimed Fee A: ${unclaimReward.feeTokenA.toString()}`);
  console.log(`- TOTAL POSITION FEE A: ${totalPositionFeeA.toString()}`);
  console.log(`- Total Claimed Fee B: ${positionState.metrics.totalClaimedBFee.toString()}`);
  console.log(`- Unclaimed Fee B: ${unclaimReward.feeTokenB.toString()}`);
  console.log(`- TOTAL POSITION FEE B: ${totalPositionFeeB.toString()}`);

  const claimPositionFeeTx = await cpAmmInstance.claimPositionFee({
    owner: wallet.publicKey,
    receiver: wallet.publicKey,
    pool: poolAddress,
    position: userPosition.position,
    positionNftAccount: userPosition.positionNftAccount,
    tokenAVault: poolState.tokenAVault,
    tokenBVault: poolState.tokenBVault,
    tokenAMint: poolState.tokenAMint,
    tokenBMint: poolState.tokenBMint,
    tokenAProgram: getTokenProgram(poolState.tokenAFlag),
    tokenBProgram: getTokenProgram(poolState.tokenBFlag),
    feePayer: wallet.publicKey,
  });

  modifyComputeUnitPriceIx(claimPositionFeeTx, config.computeUnitPriceMicroLamports);

  if (config.dryRun) {
    console.log(`\n> Simulating claim position fee transaction...`);
    await runSimulateTransaction(connection, [wallet.payer], wallet.publicKey, [
      claimPositionFeeTx,
    ]);
    console.log('> Claim position fee simulation successful');
  } else {
    console.log(`\n>> Sending claim position fee transaction...`);

    const claimFeeTxHash = await sendAndConfirmTransaction(
      connection,
      claimPositionFeeTx,
      [wallet.payer],
      {
        commitment: connection.commitment,
        maxRetries: DEFAULT_SEND_TX_MAX_RETRIES,
      }
    ).catch((err) => {
      console.error(`Failed to claim fee for position:`, err);
      throw err;
    });

    console.log(`>>> Position fee claimed successfully with tx hash: ${claimFeeTxHash}`);
  }
}
