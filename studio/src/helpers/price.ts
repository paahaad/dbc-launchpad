import { PriceRoundingConfig } from '../utils/types';

export function isPriceRoundingUp(priceRoundingConfig: PriceRoundingConfig): boolean {
  return priceRoundingConfig == PriceRoundingConfig.Up;
}
