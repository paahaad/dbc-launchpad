import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';
import { NATIVE_MINT } from '@solana/spl-token';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Compiler would throw an error if a switch-case is not exhaustive.
 * @see {@link https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-exhaustiveness-checking Unions and Intersection Types}
 */
export function assertNever(_arg: never, message = 'Unknown error occured.'): never {
  throw new Error(message);
}

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:3000`;
  } else {
    let url = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;

    if (url?.includes('vercel.app')) {
      url = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`;
    } else {
      url = `https://jup.ag`;
    }

    return typeof window === 'undefined' ? url : window.location.origin;
  }
};

/**
 * Serialize value to string
 */
export function serializeValue(value: unknown): string {
  // String
  if (typeof value === 'string') {
    return value;
  }
  // Boolean
  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }
  // Number
  if (typeof value === 'number') {
    return value.toString();
  }
  // BigInt
  if (typeof value === 'bigint') {
    return value.toString();
  }
  // Date
  if (value instanceof Date) {
    return value.toISOString();
  }
  // Array, join with comma delimiter
  if (Array.isArray(value)) {
    return value.map((v) => serializeValue(v)).join(',');
  }
  throw new Error(`Cannot serialize value: ${value}`);
}

/**
 * Serialize params to a new object with all values serialized to strings.
 */
export function serializeParams(params: Record<string, unknown>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(params)
      .filter(([, v]) => v !== undefined) // Remove undefined values
      .map(([k, v]) => [k, serializeValue(v)])
  );
}

export function shortenAddress(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export const delay = async (time: number) =>
  await new Promise((resolve) => setTimeout(resolve, time));

// Utility function to convert decimal amount to lamports/smallest unit
export function getAmountInLamports(amount: number | string, decimals: number): BN {
  const amountStr = amount.toString();
  const [integerPart, decimalPart = ''] = amountStr.split('.');
  const paddedDecimal = decimalPart.padEnd(decimals, '0').slice(0, decimals);
  const lamportsStr = integerPart + paddedDecimal;
  return new BN(lamportsStr);
}

// Helper functions for derivePoolAccount
export function getFirstKey(key1: PublicKey, key2: PublicKey) {
  const buf1 = key1.toBuffer();
  const buf2 = key2.toBuffer();
  return Buffer.compare(buf1, buf2) === 1 ? buf1 : buf2;
}

export function getSecondKey(key1: PublicKey, key2: PublicKey) {
  const buf1 = key1.toBuffer();
  const buf2 = key2.toBuffer();
  return Buffer.compare(buf1, buf2) === 1 ? buf2 : buf1;
}

export function derivePoolAccount(configAccount: string, tokenMint: string, programId: PublicKey) {
  const config = new PublicKey(configAccount);
  const baseMint = new PublicKey(tokenMint);
  const quoteMint = NATIVE_MINT;

  return PublicKey.findProgramAddressSync(
    [
      Buffer.from('pool'),
      config.toBuffer(),
      getFirstKey(baseMint, quoteMint),
      getSecondKey(baseMint, quoteMint),
    ],
    programId
  )[0];
}
