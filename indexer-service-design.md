# Dynamic Bonding Curve Indexer Service Design

## Problem Statement
Currently, the frontend fetches pool data directly from RPC on every page load, which is:
- **Slow**: Multiple RPC calls per token
- **Expensive**: High RPC usage costs
- **Unreliable**: RPC rate limits and timeouts
- **Inefficient**: Re-fetching the same data repeatedly

## Proposed Solution: Dedicated Indexer Service

### Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GOR RPC       │    │ Indexer Service │    │  Frontend App   │
│                 │    │                 │    │                 │
│ Pool States     │───▶│ • Pool Monitor  │───▶│ • Fast API      │
│ Transactions    │    │ • Price Calc    │    │ • Real-time UI  │
│ Token Metadata  │    │ • Status Track  │    │ • WebSocket     │
└─────────────────┘    │ • Event Stream  │    └─────────────────┘
                       │                 │
                       │ ┌─────────────┐ │
                       │ │ PostgreSQL  │ │
                       │ │ Database    │ │
                       │ └─────────────┘ │
                       └─────────────────┘
```

### Core Components

#### 1. **Pool Monitor Service**
```typescript
interface PoolMonitor {
  // Continuously watch all DBC pools
  watchPools(): void;
  
  // Index new pools as they're created
  indexNewPool(poolAddress: string): Promise<void>;
  
  // Update existing pool data
  updatePool(poolAddress: string): Promise<void>;
  
  // Handle migration events
  handleMigrationEvent(poolAddress: string, event: MigrationEvent): Promise<void>;
}
```

#### 2. **Database Schema**
```sql
-- Pools table
CREATE TABLE pools (
  id SERIAL PRIMARY KEY,
  pool_address VARCHAR(44) UNIQUE NOT NULL,
  config_address VARCHAR(44) NOT NULL,
  base_mint VARCHAR(44) NOT NULL,
  quote_mint VARCHAR(44) NOT NULL,
  
  -- Pool state
  migration_progress INTEGER NOT NULL DEFAULT 0,
  base_reserve BIGINT NOT NULL DEFAULT 0,
  quote_reserve BIGINT NOT NULL DEFAULT 0,
  sqrt_price DECIMAL(40,0) NOT NULL DEFAULT 0,
  
  -- Thresholds
  migration_quote_threshold BIGINT NOT NULL,
  migration_base_threshold BIGINT NOT NULL,
  
  -- Timestamps
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  finish_curve_timestamp BIGINT,
  last_updated TIMESTAMP NOT NULL DEFAULT NOW(),
  
  -- Computed fields (updated by indexer)
  bonding_completion_percentage DECIMAL(5,2) DEFAULT 0,
  current_price_usd DECIMAL(20,8) DEFAULT 0,
  market_cap_usd DECIMAL(20,2) DEFAULT 0,
  liquidity_usd DECIMAL(20,2) DEFAULT 0,
  
  -- Trading status
  can_trade BOOLEAN NOT NULL DEFAULT true,
  is_bonding BOOLEAN NOT NULL DEFAULT true,
  is_about_to_graduate BOOLEAN NOT NULL DEFAULT false,
  is_graduated BOOLEAN NOT NULL DEFAULT false
);

-- Token metadata
CREATE TABLE token_metadata (
  mint_address VARCHAR(44) PRIMARY KEY,
  name VARCHAR(200),
  symbol VARCHAR(50),
  image_url TEXT,
  description TEXT,
  decimals INTEGER NOT NULL,
  total_supply DECIMAL(40,0),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Price history for charts
CREATE TABLE price_history (
  id SERIAL PRIMARY KEY,
  pool_address VARCHAR(44) NOT NULL,
  price_usd DECIMAL(20,8) NOT NULL,
  volume_24h DECIMAL(20,2) DEFAULT 0,
  timestamp TIMESTAMP NOT NULL DEFAULT NOW(),
  
  FOREIGN KEY (pool_address) REFERENCES pools(pool_address),
  INDEX idx_pool_timestamp (pool_address, timestamp)
);

-- Transaction history
CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  pool_address VARCHAR(44) NOT NULL,
  signature VARCHAR(88) NOT NULL UNIQUE,
  trader_address VARCHAR(44) NOT NULL,
  
  -- Trade details
  trade_direction VARCHAR(20) NOT NULL, -- 'buy' or 'sell'
  input_amount BIGINT NOT NULL,
  output_amount BIGINT NOT NULL,
  price_usd DECIMAL(20,8),
  
  -- Timestamps
  timestamp TIMESTAMP NOT NULL,
  slot BIGINT NOT NULL,
  
  FOREIGN KEY (pool_address) REFERENCES pools(pool_address),
  INDEX idx_pool_timestamp (pool_address, timestamp),
  INDEX idx_trader (trader_address)
);
```

#### 3. **Real-time Updates**
```typescript
interface EventHandler {
  // Listen to on-chain events
  onSwap(event: SwapEvent): Promise<void>;
  onPoolCreated(event: PoolCreatedEvent): Promise<void>;
  onCurveComplete(event: CurveCompleteEvent): Promise<void>;
  onMigration(event: MigrationEvent): Promise<void>;
}

interface WebSocketServer {
  // Push updates to frontend
  broadcastPoolUpdate(poolAddress: string, data: PoolData): void;
  broadcastPriceUpdate(poolAddress: string, price: number): void;
  broadcastNewPool(pool: Pool): void;
}
```

#### 4. **API Endpoints**
```typescript
// Fast API endpoints (cached data)
GET /api/pools/recent        // Bonding tokens
GET /api/pools/graduating    // About to graduate
GET /api/pools/graduated     // Graduated tokens
GET /api/pools/:address      // Individual pool data
GET /api/pools/:address/chart // Price history
GET /api/pools/:address/txs  // Transaction history

// Real-time WebSocket
WS /ws/pools                 // Pool updates
WS /ws/prices               // Price updates
```

### Implementation Plan

#### Phase 1: Basic Indexer
1. **Pool Discovery**: Find all existing DBC pools
2. **Data Indexing**: Fetch and store pool states
3. **Status Calculation**: Compute bonding status
4. **Basic API**: Serve cached pool data

#### Phase 2: Real-time Updates
1. **Event Listening**: Monitor on-chain events
2. **WebSocket Server**: Real-time updates to frontend
3. **Price Tracking**: Historical price data
4. **Transaction Indexing**: Trade history

#### Phase 3: Advanced Features
1. **Chart Data**: OHLCV candles
2. **Analytics**: Volume, holder analysis
3. **Alerts**: Migration notifications
4. **Performance**: Caching, optimization

### Technology Stack

```yaml
Backend:
  - Node.js/TypeScript
  - Express.js + WebSocket
  - PostgreSQL + Redis (caching)
  - @solana/web3.js
  - @meteora-ag/dynamic-bonding-curve-sdk

Infrastructure:
  - Docker containers
  - PM2 for process management
  - nginx reverse proxy
  - Postgres + Redis

Monitoring:
  - Health checks
  - Error tracking (Sentry)
  - Performance metrics
  - RPC usage monitoring
```

### Benefits

1. **Performance**: 100x faster loading (cached DB vs RPC)
2. **Reliability**: No RPC rate limits for users
3. **Real-time**: WebSocket updates
4. **Features**: Charts, history, analytics
5. **Scalability**: Handles many concurrent users
6. **Cost**: Lower RPC costs (one indexer vs many users)

### Migration Strategy

1. **Parallel Development**: Build indexer alongside current system
2. **Gradual Migration**: Switch endpoints one by one
3. **Fallback**: Keep RPC as backup for new pools
4. **Testing**: Verify data accuracy vs RPC

Would you like me to start implementing this indexer service?
