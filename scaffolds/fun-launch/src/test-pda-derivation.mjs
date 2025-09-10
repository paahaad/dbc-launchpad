import { PublicKey, Connection } from '@solana/web3.js';
import { NATIVE_MINT } from "@solana/spl-token";

// Configuration - update these values
const RPC_URL = 'https://rpc.gorbagana.wtf/';
const PROGRAM_ID = new PublicKey('dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN'); // Your DBC program ID
const POOL_CONFIG_KEY = new PublicKey('HBqdy1Kq4ybRoBCYL8LiRWhCJLeYW98yp7hKLYzxwPwF'); // From process.env.POOL_CONFIG_KEY
const QUOTE_MINT = 'So11111111111111111111111111111111111111112'; // Wrapped SOL

// Test with this token mint (replace with your actual tokenId from a launch)
const tokenId = '9epEiuPxrGcogxJmfcUqo7uWphwzbMZbPB51cPWfGGoR'; // e.g., from your transaction
// FIND THE POOL AUTHORITY FOR YOUR TOKEN THIS WILL BE ALWAYS CONSTANT
async function testPdaDerivation() {

  // Your program ID
  const DYNAMIC_BONDING_CURVE_PROGRAM_ID = new PublicKey(
    "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
  );
  
  const connection = new Connection(RPC_URL, 'confirmed');


  // Derive pool authority
  function derivePoolAuthority() {
    return PublicKey.findProgramAddressSync(
      [Buffer.from("pool_authority")],
      DYNAMIC_BONDING_CURVE_PROGRAM_ID
    )[0];
  }

  console.log('pool authority', derivePoolAuthority().toBase58().toString());
}

// Run the test
testPdaDerivation().catch(console.error);


// ===============================================
// FIND THE POOL ACCOUNT FOR YOUR TOKEN

const DYNAMIC_BONDING_CURVE_PROGRAM_ID = new PublicKey(
  "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN"
);

function getFirstKey(key1, key2) {
  const buf1 = key1.toBuffer();
  const buf2 = key2.toBuffer();
  if (Buffer.compare(buf1, buf2) === 1) {
    return buf1;
  }
  return buf2;
}

function getSecondKey(key1, key2) {
  const buf1 = key1.toBuffer();
  const buf2 = key2.toBuffer();
  if (Buffer.compare(buf1, buf2) === 1) {
    return buf2;
  }
  return buf1;
}

export function getPoolAccountForYourToken(
  configAccount,
  yourTokenMint
) {
  const config = new PublicKey(configAccount);
  const baseMint = new PublicKey(yourTokenMint);
  const quoteMint = NATIVE_MINT;
  
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("pool"),
      config.toBuffer(),
      getFirstKey(baseMint, quoteMint),
      getSecondKey(baseMint, quoteMint),
    ],
    DYNAMIC_BONDING_CURVE_PROGRAM_ID
  )[0];
}

// Usage:
const poolAccount = getPoolAccountForYourToken(
  "HBqdy1Kq4ybRoBCYL8LiRWhCJLeYW98yp7hKLYzxwPwF",
  "9epEiuPxrGcogxJmfcUqo7uWphwzbMZbPB51cPWfGGoR"
);

console.log('pool account', poolAccount.toBase58().toString());