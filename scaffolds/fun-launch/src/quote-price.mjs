import { 
    PublicKey, 
    Connection, 
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL 
  } from "@solana/web3.js";
  import { 
    NATIVE_MINT,
    getAssociatedTokenAddress,
    createAssociatedTokenAccountInstruction 
  } from "@solana/spl-token";
  

  async function getVirtualPool(connection, program, poolAddress) {
    const account = await connection.getAccountInfo(poolAddress);
    if (!account) throw new Error("Pool account not found");
    
    return program.coder.accounts.decode("virtualPool", account.data);
  }

  async function getConfig(connection, program, configAddress) {
    const account = await connection.getAccountInfo(configAddress);
    if (!account) throw new Error("Config account not found");
    
    return program.coder.accounts.decode("poolConfig", account.data);
  }

  async function getQuoteBySimulation(
    connection,
    program, // Your anchor program
    configAddress,
    poolAddress,
    yourTokenMint,
    solAmountIn, // in lamports
    walletPubkey
  ){
    try {
      const config = new PublicKey(configAddress);
      const pool = new PublicKey(poolAddress);
      const baseMint = new PublicKey(yourTokenMint);
      
      // Get pool state
      const poolState = await getVirtualPool(connection, program, pool);
      const configState = await getConfig(connection, program, config);
      
      // Get or create token accounts
      const wsolAccount = await getAssociatedTokenAddress(NATIVE_MINT, walletPubkey);
      const baseTokenAccount = await getAssociatedTokenAddress(baseMint, walletPubkey);
      
      // Get initial balances
      const initialBaseBalance = await connection.getTokenAccountBalance(baseTokenAccount)
        .then(balance => balance.value.uiAmount || 0)
        .catch(() => 0);
      
      // Create swap instruction
      const swapParams = {
        amount_0: new BN(solAmountIn),     // Amount in (SOL)
        amount_1: new BN(0),              // Minimum amount out (0 for simulation)
        swap_mode: 0,                     // ExactIn mode
      };
      
      const poolAuthority = derivePoolAuthority();
      
      const swapInstruction = await program.methods
        .swap2(swapParams)
        .accountsPartial({
          poolAuthority,
          config,
          pool,
          inputTokenAccount: wsolAccount,
          outputTokenAccount: baseTokenAccount,
          baseVault: poolState.baseVault,
          quoteVault: poolState.quoteVault,
          baseMint: poolState.baseMint,
          quoteMint: NATIVE_MINT,
          payer: walletPubkey,
          tokenBaseProgram: configState.tokenType === 0 ? TOKEN_PROGRAM_ID : TOKEN_2022_PROGRAM_ID,
          tokenQuoteProgram: TOKEN_PROGRAM_ID,
          referralTokenAccount: null,
        })
        .instruction();
      
      // Create transaction
      const transaction = new Transaction();
      transaction.add(swapInstruction);
      transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
      transaction.feePayer = walletPubkey;
      
      // Simulate transaction
      const simulation = await connection.simulateTransaction(transaction);
      
      if (simulation.value.err) {
        return {
          estimatedOutput: 0,
          success: false,
          logs: simulation.value.logs || [],
        };
      }
      
      // Parse logs to extract output amount
      // The exact parsing depends on your program's log format
      const logs = simulation.value.logs || [];
      let estimatedOutput = 0;
      
      // Look for swap event logs to extract output amount
      for (const log of logs) {
        if (log.includes("swap_result")) {
          // Parse the log to extract output amount
          // This is program-specific
          console.log('log', log);
        }
      }
      
      return {
        estimatedOutput,
        success: true,
        logs,
      };
      
    } catch (error) {
      console.error("Quote simulation failed:", error);
      return {
        estimatedOutput: 0,
        success: false,
        logs: [],
      };
    }
  }

  // Example usage for 1 SOL
const solAmount = 1 * LAMPORTS_PER_SOL; // 1 SOL in lamports
const connection = new Connection("https://rpc.gorbagana.wtf/", 'confirmed');

const quote = await getQuoteBySimulation(
  connection,
  'dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN',
  "HBqdy1Kq4ybRoBCYL8LiRWhCJLeYW98yp7hKLYzxwPwF", // Your config
  "ExtdwJmDKTaRBjvGUKmvG3gaV68PpTeybidGUmEdtwo5", // Your derived pool address
  "9epEiuPxrGcogxJmfcUqo7uWphwzbMZbPB51cPWfGGoR", // Your token mint address
  solAmount,
  "FFqzQSgqsKwRsn8tu24qFXU9zj1VLtY9G7zQZyCHDNfU"
);

console.log(`For 1 SOL, you would receive approximately ${quote.estimatedOutput} tokens`);