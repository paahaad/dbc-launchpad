// Helper functions for Dynamic Bonding Curve status management

export enum MigrationProgress {
  PreBondingCurve = 0,
  PostBondingCurve = 1,
  LockedVesting = 2,
  CreatedPool = 3,
}

export interface BondingCurveStatus {
  isBonding: boolean;
  isAboutToGraduate: boolean;
  isGraduated: boolean;
  completionPercentage: number;
  statusLabel: string;
  canTrade: boolean; // Whether trading is still allowed
}

/**
 * Determines the bonding curve status based on migration progress
 */
export function getBondingCurveStatus(
  migrationProgress: number,
  quoteReserve: number,
  migrationThreshold: number
): BondingCurveStatus {
  const completionPercentage = migrationThreshold > 0 
    ? Math.min((quoteReserve / migrationThreshold) * 100, 100)
    : 0;

  switch (migrationProgress) {
    case MigrationProgress.PreBondingCurve:
      return {
        isBonding: true,
        isAboutToGraduate: false,
        isGraduated: false,
        completionPercentage,
        statusLabel: 'Bonding',
        canTrade: true, // Trading allowed during bonding
      };
    
    case MigrationProgress.PostBondingCurve:
      return {
        isBonding: false,
        isAboutToGraduate: true,
        isGraduated: false,
        completionPercentage: 100,
        statusLabel: 'Ready for Migration',
        canTrade: false, // Trading disabled - pool completed
      };
    
    case MigrationProgress.LockedVesting:
      return {
        isBonding: false,
        isAboutToGraduate: true,
        isGraduated: false,
        completionPercentage: 100,
        statusLabel: 'Locked Vesting',
        canTrade: false, // Trading disabled - in vesting
      };
    
    case MigrationProgress.CreatedPool:
      return {
        isBonding: false,
        isAboutToGraduate: false,
        isGraduated: true,
        completionPercentage: 100,
        statusLabel: 'Graduated',
        canTrade: false, // Trading disabled - moved to DEX
      };
    
    default:
      return {
        isBonding: false,
        isAboutToGraduate: false,
        isGraduated: false,
        completionPercentage: 0,
        statusLabel: 'Unknown',
        canTrade: false, // Disabled by default for safety
      };
  }
}

/**
 * Calculates the current token price based on bonding curve state
 */
export function calculateTokenPrice(
  quoteReserve: number,
  totalSupply: number,
  completionPercentage: number,
  solPriceUSD: number = 150
): number {
  if (quoteReserve <= 0 || totalSupply <= 0 || completionPercentage <= 0) {
    return 0;
  }
  
  // Convert lamports to SOL (1 SOL = 1e9 lamports)
  const solReserve = quoteReserve / 1e9;
  
  // Calculate effective circulating supply based on completion
  const effectiveSupply = totalSupply * (completionPercentage / 100);
  
  // Price = (SOL Reserve / Effective Supply) * SOL Price in USD
  return (solReserve / effectiveSupply) * solPriceUSD;
}

/**
 * Calculates market cap based on current price and total supply
 */
export function calculateMarketCap(
  currentPrice: number,
  totalSupply: number
): number {
  return currentPrice * totalSupply;
}

/**
 * Calculates liquidity in USD based on quote reserve
 */
export function calculateLiquidity(
  quoteReserve: number,
  solPriceUSD: number = 150
): number {
  const solReserve = quoteReserve / 1e9;
  return solReserve * solPriceUSD;
}

/**
 * Helper to format bonding curve completion percentage for display
 */
export function formatCompletionPercentage(percentage: number): string {
  return `${percentage.toFixed(1)}%`;
}

/**
 * Helper to determine if a token should be shown in the "Recent" tab
 */
export function isRecentToken(status: BondingCurveStatus): boolean {
  return status.isBonding;
}

/**
 * Helper to determine if a token should be shown in the "About to Graduate" tab
 */
export function isAboutToGraduateToken(status: BondingCurveStatus): boolean {
  return status.isAboutToGraduate;
}

/**
 * Helper to determine if a token should be shown in the "Graduated" tab
 */
export function isGraduatedToken(status: BondingCurveStatus): boolean {
  return status.isGraduated;
}
