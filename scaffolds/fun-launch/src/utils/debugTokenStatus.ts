// Debug helper to troubleshoot token bonding status
import { Pool } from '@/components/Explore/types';
import { getBondingCurveStatus } from './bondingCurveHelpers';

export function debugTokenStatus(pool: Pool): void {
  const { baseAsset } = pool;
  
  console.log(`🔍 Token Debug: ${baseAsset.symbol} (${baseAsset.id})`);
  console.log(`  Migration Progress: ${baseAsset.migrationProgress}`);
  console.log(`  Bonding Curve Completion: ${pool.bondingCurve}%`);
  console.log(`  Status Flags:`);
  console.log(`    - isBonding: ${baseAsset.isBonding}`);
  console.log(`    - isAboutToGraduate: ${baseAsset.isAboutToGraduate}`);
  console.log(`    - isGraduated: ${baseAsset.isGraduated}`);
  console.log(`    - canTrade: ${baseAsset.canTrade}`);
  console.log(`  Price: $${baseAsset.usdPrice?.toFixed(6) || 'N/A'}`);
  console.log(`  Market Cap: $${baseAsset.mcap?.toFixed(2) || 'N/A'}`);
  console.log(`  Liquidity: $${baseAsset.liquidity?.toFixed(2) || 'N/A'}`);
  
  if (baseAsset.graduatedAt) {
    console.log(`  Graduated At: ${new Date(baseAsset.graduatedAt).toLocaleString()}`);
  }
  
  // Show which tab this token should appear in
  const tabs = [];
  if (baseAsset.isBonding) tabs.push('Recent');
  if (baseAsset.isAboutToGraduate) tabs.push('About to Graduate');
  if (baseAsset.isGraduated) tabs.push('Graduated');
  
  console.log(`  Should appear in tabs: ${tabs.join(', ') || 'None'}`);
  console.log('---');
}

export function debugAllTokenStatuses(pools: Pool[]): void {
  console.log(`🔍 Debugging ${pools.length} tokens:`);
  console.log('='.repeat(50));
  
  pools.forEach(debugTokenStatus);
  
  // Summary
  const bondingCount = pools.filter(p => p.baseAsset.isBonding).length;
  const aboutToGraduateCount = pools.filter(p => p.baseAsset.isAboutToGraduate).length;
  const graduatedCount = pools.filter(p => p.baseAsset.isGraduated).length;
  
  console.log('📊 Summary:');
  console.log(`  Bonding: ${bondingCount}`);
  console.log(`  About to Graduate: ${aboutToGraduateCount}`);
  console.log(`  Graduated: ${graduatedCount}`);
  console.log(`  Total: ${pools.length}`);
}

export function logMigrationProgressMapping(): void {
  console.log('📋 Migration Progress Mapping:');
  console.log('  0 = PreBondingCurve (Bonding) → Recent tab');
  console.log('  1 = PostBondingCurve (Ready) → About to Graduate tab');
  console.log('  2 = LockedVesting (Vesting) → About to Graduate tab');
  console.log('  3 = CreatedPool (Graduated) → Graduated tab');
}
