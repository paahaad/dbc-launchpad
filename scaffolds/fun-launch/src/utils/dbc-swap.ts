// DBC Swap utility for building and executing swap transactions
import { 
  Connection, 
  PublicKey, 
  Transaction, 
  TransactionInstruction,
} from '@solana/web3.js';
import { 
  TOKEN_PROGRAM_ID, 
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
} from '@solana/spl-token';
import { BN } from '@coral-xyz/anchor';
import { dbcClient, TradeDirection, SwapMode, SwapParams } from './dbc-client';
import { GOR_CONFIG } from '@/config/gor-config';

export interface SwapQuote {
  inputAmount: number;
  outputAmount: number;
  priceImpact: number;
  minimumReceived: number;
  route: string;
  fees: {
    protocolFee: number;
    tradingFee: number;
    referralFee?: number;
  };
}

export interface SwapTransactionParams {
  userWallet: PublicKey;
  tokenMint: PublicKey;
  quoteMint: PublicKey;
  inputAmount: number;
  minimumOutputAmount: number;
  tradeDirection: 'buy' | 'sell';
  slippage?: number; // in percentage (e.g., 1 for 1%)
  referralAccount?: PublicKey;
}

/**
 * DBC Swap Builder
 */
export class DBCSwapBuilder {
  private connection: Connection;
  private quoteMint: PublicKey;

  constructor(connection?: Connection) {
    this.connection = connection || dbcClient.connection;
    this.quoteMint = new PublicKey(GOR_CONFIG.QUOTE_TOKEN.mint);
  }

  /**
   * Get swap quote without executing transaction
   */
  async getSwapQuote(
    tokenMint: PublicKey,
    inputAmount: number,
    tradeDirection: 'buy' | 'sell'
  ): Promise<SwapQuote | null> {
    try {
      const poolResult = await dbcClient.findPoolByToken(tokenMint);
      if (!poolResult) {
        throw new Error('Pool not found for token');
      }

      const { pool } = poolResult;
      
      // Convert input amount to base units
      const inputDecimals = tradeDirection === 'buy' ? GOR_CONFIG.QUOTE_TOKEN.decimals : 9; // Assuming token has 9 decimals
      const inputAmountBN = new BN(inputAmount * Math.pow(10, inputDecimals));
      
      // Calculate swap using the bonding curve logic
      // This is simplified - in production, you'd use the actual DBC SDK calculation
      const currentPrice = dbcClient.calculatePrice(pool.sqrtPrice);
      
      let outputAmount: number;
      let priceImpact: number;
      
      if (tradeDirection === 'buy') {
        // Buying tokens with quote currency
        outputAmount = inputAmount / currentPrice;
        priceImpact = this.calculatePriceImpact(pool, inputAmountBN, TradeDirection.QuoteToBase);
      } else {
        // Selling tokens for quote currency
        outputAmount = inputAmount * currentPrice;
        priceImpact = this.calculatePriceImpact(pool, inputAmountBN, TradeDirection.BaseToQuote);
      }

      // Calculate fees (simplified)
      const tradingFee = outputAmount * 0.003; // 0.3% fee
      const protocolFee = tradingFee * 0.2; // 20% of trading fee
      const actualOutput = outputAmount - tradingFee;

      return {
        inputAmount,
        outputAmount: actualOutput,
        priceImpact,
        minimumReceived: actualOutput * 0.99, // Default 1% slippage
        route: 'DBC',
        fees: {
          protocolFee,
          tradingFee,
        },
      };
    } catch (error) {
      console.error('Error getting swap quote:', error);
      return null;
    }
  }

  /**
   * Build swap transaction
   */
  async buildSwapTransaction(params: SwapTransactionParams): Promise<Transaction> {
    const {
      userWallet,
      tokenMint,
      quoteMint,
      inputAmount,
      minimumOutputAmount,
      tradeDirection,
      slippage = 1,
      referralAccount,
    } = params;

    // Find the pool
    const poolResult = await dbcClient.findPoolByToken(tokenMint);
    if (!poolResult) {
      throw new Error('Pool not found for token');
    }

    const { pool, poolPDA } = poolResult;
    
    // Determine input/output mints based on trade direction
    const inputMint = tradeDirection === 'buy' ? quoteMint : tokenMint;
    const outputMint = tradeDirection === 'buy' ? tokenMint : quoteMint;
    
    // Get or create associated token accounts
    const inputTokenAccount = await getAssociatedTokenAddress(inputMint, userWallet);
    const outputTokenAccount = await getAssociatedTokenAddress(outputMint, userWallet);
    
    // Get vault addresses
    const [inputVault] = dbcClient.getVaultPDA(inputMint, poolPDA);
    const [outputVault] = dbcClient.getVaultPDA(outputMint, poolPDA);

    const transaction = new Transaction();
    
    // Check if we need to create output token account
    try {
      await this.connection.getAccountInfo(outputTokenAccount);
    } catch {
      // Account doesn't exist, create it
      transaction.add(
        createAssociatedTokenAccountInstruction(
          userWallet, // payer
          outputTokenAccount, // account to create
          userWallet, // owner
          outputMint // mint
        )
      );
    }

    // Convert amounts to base units
    const inputDecimals = tradeDirection === 'buy' ? GOR_CONFIG.QUOTE_TOKEN.decimals : 9;
    const outputDecimals = tradeDirection === 'buy' ? 9 : GOR_CONFIG.QUOTE_TOKEN.decimals;
    
    const amount0 = new BN(inputAmount * Math.pow(10, inputDecimals));
    const amount1 = new BN(minimumOutputAmount * Math.pow(10, outputDecimals));

    // Create swap instruction
    const swapInstruction = this.createSwapInstruction({
      poolAuthority: dbcClient.poolAuthorityPDA,
      config: pool.config,
      pool: poolPDA,
      inputTokenAccount,
      outputTokenAccount,
      inputVault,
      outputVault,
      inputMint,
      outputMint,
      user: userWallet,
      tokenBaseProgram: TOKEN_PROGRAM_ID,
      tokenQuoteProgram: TOKEN_PROGRAM_ID,
      referralTokenAccount: referralAccount,
      swapParams: {
        amount0,
        amount1,
        swapMode: SwapMode.ExactIn,
      },
    });

    transaction.add(swapInstruction);

    return transaction;
  }

  /**
   * Create swap instruction
   */
  private createSwapInstruction(params: {
    poolAuthority: PublicKey;
    config: PublicKey;
    pool: PublicKey;
    inputTokenAccount: PublicKey;
    outputTokenAccount: PublicKey;
    inputVault: PublicKey;
    outputVault: PublicKey;
    inputMint: PublicKey;
    outputMint: PublicKey;
    user: PublicKey;
    tokenBaseProgram: PublicKey;
    tokenQuoteProgram: PublicKey;
    referralTokenAccount?: PublicKey;
    swapParams: SwapParams;
  }): TransactionInstruction {
    const {
      poolAuthority,
      config,
      pool,
      inputTokenAccount,
      outputTokenAccount,
      inputVault,
      outputVault,
      inputMint,
      outputMint,
      user,
      tokenBaseProgram,
      tokenQuoteProgram,
      referralTokenAccount,
      swapParams,
    } = params;

    const keys = [
      { pubkey: poolAuthority, isSigner: false, isWritable: false },
      { pubkey: config, isSigner: false, isWritable: false },
      { pubkey: pool, isSigner: false, isWritable: true },
      { pubkey: inputTokenAccount, isSigner: false, isWritable: true },
      { pubkey: outputTokenAccount, isSigner: false, isWritable: true },
      { pubkey: inputVault, isSigner: false, isWritable: true },
      { pubkey: outputVault, isSigner: false, isWritable: true },
      { pubkey: inputMint, isSigner: false, isWritable: false },
      { pubkey: outputMint, isSigner: false, isWritable: false },
      { pubkey: user, isSigner: true, isWritable: false },
      { pubkey: tokenBaseProgram, isSigner: false, isWritable: false },
      { pubkey: tokenQuoteProgram, isSigner: false, isWritable: false },
    ];

    if (referralTokenAccount) {
      keys.push({
        pubkey: referralTokenAccount,
        isSigner: false,
        isWritable: true,
      });
    }

    // Encode instruction data for swap2 instruction
    const data = this.encodeSwap2Data(swapParams);

    return new TransactionInstruction({
      keys,
      programId: dbcClient.programId,
      data,
    });
  }

  /**
   * Encode swap2 instruction data
   */
  private encodeSwap2Data(params: SwapParams): Buffer {
    // Instruction discriminator for swap2 (8 bytes)
    // This should match the hash of "global:swap2" in the Anchor program
    const discriminator = Buffer.from([0x9a, 0x1e, 0x13, 0xc8, 0x87, 0x0b, 0x9f, 0x8c]); // Placeholder
    
    // Encode SwapParameters2
    const buffer = Buffer.alloc(8 + 8 + 8 + 1); // amount0 + amount1 + swap_mode
    let offset = 0;
    
    // amount0 (u64)
    buffer.writeBigUInt64LE(BigInt(params.amount0.toString()), offset);
    offset += 8;
    
    // amount1 (u64)
    buffer.writeBigUInt64LE(BigInt(params.amount1.toString()), offset);
    offset += 8;
    
    // swap_mode (u8)
    buffer.writeUInt8(params.swapMode, offset);
    
    return Buffer.concat([discriminator, buffer]);
  }

  /**
   * Calculate price impact (simplified)
   */
  private calculatePriceImpact(
    pool: any,
    inputAmount: BN,
    direction: TradeDirection
  ): number {
    // Simplified price impact calculation
    // In production, this would use the actual bonding curve math
    
    const totalLiquidity = direction === TradeDirection.QuoteToBase 
      ? pool.quoteReserve.toNumber() 
      : pool.baseReserve.toNumber();
    
    const impact = inputAmount.toNumber() / totalLiquidity;
    return Math.min(impact * 100, 50); // Cap at 50%
  }

  /**
   * Execute swap transaction
   */
  async executeSwap(
    transaction: Transaction,
    signTransaction: (transaction: Transaction) => Promise<Transaction>
  ): Promise<string> {
    try {
      // Get recent blockhash
      const { blockhash } = await this.connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;

      // Sign transaction
      const signedTransaction = await signTransaction(transaction);

      // Send transaction
      const signature = await this.connection.sendRawTransaction(
        signedTransaction.serialize(),
        {
          skipPreflight: false,
          preflightCommitment: 'confirmed',
        }
      );

      // Confirm transaction
      await this.connection.confirmTransaction(signature, 'confirmed');

      return signature;
    } catch (error) {
      console.error('Error executing swap:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const dbcSwapBuilder = new DBCSwapBuilder();
