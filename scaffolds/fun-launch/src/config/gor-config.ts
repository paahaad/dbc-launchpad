// GOR Chain Configuration for Dynamic Bonding Curve Integration

import { PublicKey } from '@solana/web3.js';

export const GOR_CONFIG = {
  // RPC endpoint for GOR chain
  RPC_URL: process.env.GOR_RPC_URL || process.env.RPC_URL || 'https://rpc.gorbagana.wtf/',
  
  // Dynamic Bonding Curve Program ID deployed on GOR chain
  // This should be updated with the actual program ID from your deployment
  DBC_PROGRAM_ID: 'dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN',
  
  // Metaplex Metadata Program ID (standard across Solana ecosystem)
  METADATA_PROGRAM_ID: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  
  // Default quote token configuration (typically USDC on bonding curves)
  QUOTE_TOKEN: {
    // USDC mint address on GOR chain (update as needed)
    mint: process.env.GOR_USDC_MINT || 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    decimals: 6, // USDC typically has 6 decimals
    symbol: 'USDC'
  },
  
  // VirtualPool account data structure offsets
  // These offsets are based on the Rust struct definition
  VIRTUAL_POOL_OFFSETS: {
    VOLATILITY_TRACKER: 0,     // Variable size, approximately 80 bytes
    CONFIG: 80,                // Pubkey (32 bytes)
    CREATOR: 112,              // Pubkey (32 bytes)
    BASE_MINT: 144,            // Pubkey (32 bytes)
    BASE_VAULT: 176,           // Pubkey (32 bytes)
    QUOTE_VAULT: 208,          // Pubkey (32 bytes)
    BASE_RESERVE: 240,         // u64 (8 bytes)
    QUOTE_RESERVE: 248,        // u64 (8 bytes)
    PROTOCOL_BASE_FEE: 256,    // u64 (8 bytes)
    PROTOCOL_QUOTE_FEE: 264,   // u64 (8 bytes)
    PARTNER_BASE_FEE: 272,     // u64 (8 bytes)
    PARTNER_QUOTE_FEE: 280,    // u64 (8 bytes)
    SQRT_PRICE: 288,           // u128 (16 bytes)
    // ... other fields follow
  }
} as const;

export function getGorConnection() {
  const { Connection } = require('@solana/web3.js');
  return new Connection(GOR_CONFIG.RPC_URL, 'confirmed');
}

export function getDynamicBondingCurveProgramId(): PublicKey {
  return new PublicKey(GOR_CONFIG.DBC_PROGRAM_ID);
}

export function getMetadataProgramId(): PublicKey {
  return new PublicKey(GOR_CONFIG.METADATA_PROGRAM_ID);
}

export function getQuoteTokenMint(): PublicKey {
  return new PublicKey(GOR_CONFIG.QUOTE_TOKEN.mint);
}
