// GOR Chain Configuration for Dynamic Bonding Curve Integration
export const GOR_CONFIG = {
  RPC_URL: process.env.GOR_RPC_URL || process.env.RPC_URL || 'https://rpc.gorbagana.wtf/',
  DBC_PROGRAM_ID: 'dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN',
  POOL_AUTHORITY_PDA: 'FhVo3mqL8PW5pH5U2CN4XE33DokiyZnUwuGpH2hmHLuM',
  POOL_CONFIG_KEY: 'HBqdy1Kq4ybRoBCYL8LiRWhCJLeYW98yp7hKLYzxwPwF',
} as const;


// Core  Accounts needed for swap

// const swapAccounts = {
//   poolAuthority: poolAuthorityPDA,     // Derived PDA
//   config: configAccount,               // Pool config account
//   pool: poolAccount,                   // Your pool account
  
//   // Token accounts
//   inputTokenAccount: wsolTokenAccount,   // Your WSOL token account
//   outputTokenAccount: baseTokenAccount,  // Your base token account
  
//   // Vault accounts (from pool state)
//   baseVault: poolState.baseVault,       // Base token vault
//   quoteVault: poolState.quoteVault,     // Quote token vault (WSOL)
  
//   // Mint accounts
//   baseMint: poolState.baseMint,         // Your token mint
//   quoteMint: NATIVE_MINT,               // WSOL mint
  
//   // Programs
//   tokenBaseProgram: TOKEN_PROGRAM_ID,   // Or TOKEN_2022_PROGRAM_ID
//   tokenQuoteProgram: TOKEN_PROGRAM_ID,  // Always TOKEN_PROGRAM_ID for SOL
  
//   // Signer
//   payer: yourWallet.publicKey,
  
//   // Optional
//   referralTokenAccount: null,           // Or referral account if you have one
// };