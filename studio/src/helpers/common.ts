import { SOL_TOKEN_DECIMALS, SOL_TOKEN_MINT, USDC_TOKEN_MINT } from '../utils/constants';
import Decimal from 'decimal.js';
import BN from 'bn.js';
import { Signer, PublicKey, Connection } from '@solana/web3.js';
import { getMint } from '@solana/spl-token';
import { AllocationByAmount, LockLiquidityAllocation } from '../utils/types';

export function getQuoteMint(quoteSymbol?: string, quoteMint?: string): PublicKey {
  if (quoteSymbol == null && quoteMint == null) {
    throw new Error(`Either quoteSymbol or quoteMint must be provided`);
  }
  if (quoteSymbol && quoteMint) {
    throw new Error(`Cannot provide quoteSymbol and quoteMint at the same time`);
  }

  if (quoteMint) {
    return new PublicKey(quoteMint);
  }

  if (quoteSymbol.toLowerCase() == 'sol') {
    return new PublicKey(SOL_TOKEN_MINT);
  } else if (quoteSymbol.toLowerCase() == 'usdc') {
    return new PublicKey(USDC_TOKEN_MINT);
  } else {
    throw new Error(`Unsupported quote symbol: ${quoteSymbol}`);
  }
}

export function getAmountInLamports(amount: number | string, decimals: number): BN {
  const amountD = new Decimal(amount);
  const amountLamports = amountD.mul(new Decimal(10 ** decimals));
  return new BN(amountLamports.toString());
}

export function getSigners(
  signerOrMultisig: Signer | PublicKey,
  multiSigners: Signer[]
): [PublicKey, Signer[]] {
  return signerOrMultisig instanceof PublicKey
    ? [signerOrMultisig, multiSigners]
    : [signerOrMultisig.publicKey, [signerOrMultisig]];
}

export async function getQuoteDecimals(
  connection: Connection,
  quoteMint?: string
): Promise<number> {
  if (quoteMint) {
    const quoteMintInfo = await connection.getAccountInfo(new PublicKey(quoteMint));
    const mintAccount = await getMint(
      connection,
      new PublicKey(quoteMint),
      connection.commitment,
      quoteMintInfo.owner
    );
    const decimals = mintAccount.decimals;
    return decimals;
  }
  return SOL_TOKEN_DECIMALS;
}

export function getDecimalizedAmount(amountLamport: BN, decimals: number): BN {
  return amountLamport.div(new BN(10 ** decimals));
}

export function fromAllocationsToAmount(
  lpAmount: BN,
  allocations: LockLiquidityAllocation[]
): AllocationByAmount[] {
  const sumPercentage = allocations.reduce((partialSum, a) => partialSum + a.percentage, 0);
  if (sumPercentage === 0) {
    throw Error('sumPercentage is zero');
  } else if (sumPercentage > 100) {
    throw Error('sumPercentage is greater than 100');
  }

  const amounts: AllocationByAmount[] = [];
  let sum = new BN(0);
  for (let i = 0; i < allocations.length - 1; i++) {
    const amount = lpAmount.mul(new BN(allocations[i].percentage)).div(new BN(sumPercentage));
    sum = sum.add(amount);
    amounts.push({
      address: new PublicKey(allocations[i].address),
      amount,
      percentage: allocations[i].percentage,
    });
  }
  // the last wallet get remaining amount
  amounts.push({
    address: new PublicKey(allocations[allocations.length - 1].address),
    amount: lpAmount.sub(sum),
    percentage: allocations[allocations.length - 1].percentage,
  });
  return amounts;
}
