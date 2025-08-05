# Meteora Invent

A toolkit consisting of everything you need to invent innovative token launches. Powered by
**Meteora**, the most secure, sustainable and composable liquidity layer on Solana.

![Mikasa](/assets/mascot/mikasa.png)

## 🏗️ Structure

```
meteora-invent/
├── packages/          # Shared packages
│   └── config/
│       ├── eslint/
│       ├── prettier/
│       └── typescript/
├── scaffolds/         # Scaffolds - production-ready frontend application templates
│   └── fun-launch/
└── studio/            # Studio - a collection of scripts for you to innovate and create
    ├── config
    │   ├── damm_v1_config.jsonc
    │   ├── damm_v2_config.jsonc
    │   ├── dbc_config.jsonc
    │   └── dlmm_config.jsonc
    ├── data
    │   ├── kv_proof.json
    │   └── whitelist_wallet.csv
    ├── LLM.txt
    ├── package.json
    ├── README.md
    ├── src
    │   ├── helpers
    │   │   ├── accounts.ts
    │   │   ├── cli.ts
    │   │   ├── common.ts
    │   │   ├── config.ts
    │   │   ├── index.ts
    │   │   ├── token.ts
    │   │   ├── transaction.ts
    │   │   ├── utils.ts
    │   │   └── validation.ts
    │   ├── lib
    │   │   ├── alpha_vault
    │   │   │   ├── index.ts
    │   │   │   ├── merkle_tree
    │   │   │   │   ├── balance_tree.ts
    │   │   │   │   ├── index.ts
    │   │   │   │   └── merkle_tree.ts
    │   │   │   └── utils.ts
    │   │   ├── damm_v1
    │   │   │   ├── index.ts
    │   │   │   └── stake2earn.ts
    │   │   ├── damm_v2
    │   │   │   └── index.ts
    │   │   ├── dbc
    │   │   │   └── index.ts
    │   │   └── dlmm
    │   │       └── index.ts
    │   ├── scripts
    │   │   ├── alpha_vault
    │   │   │   └── create_alpha_vault.ts
    │   │   ├── damm_v1
    │   │   │   ├── create_pool.ts
    │   │   │   ├── create_stake2earn_farm.ts
    │   │   │   ├── lock_liquidity_stake2earn.ts
    │   │   │   └── lock_liquidity.ts
    │   │   ├── damm-v2
    │   │   │   ├── create_balanced_pool.ts
    │   │   │   └── create_one_sided_pool.ts
    │   │   ├── dbc
    │   │   │   ├── claim_trading_fee.ts
    │   │   │   ├── create_config.ts
    │   │   │   ├── create_pool.ts
    │   │   │   ├── migrate_damm_v1.ts
    │   │   │   ├── migrate_damm_v2.ts
    │   │   │   └── swap.ts
    │   │   ├── dlmm
    │   │   │   ├── create_pool.ts
    │   │   │   ├── seed_liquidity_lfg.ts
    │   │   │   ├── seed_liquidity_single_bin.ts
    │   │   │   └── set_pool_status.ts
    │   │   └── settings
    │   │       └── generate_keypair.ts
    │   ├── tests
    │   │   ├── artifacts
    │   │   │   ├── accounts
    │   │   │   │   └── 3ifhD4Ywaa8aBZAaQSqYgN4Q1kaFArioLU8uumJMaqkE.json
    │   │   │   ├── alpha_vault.so
    │   │   │   ├── cp_amm.so
    │   │   │   ├── dynamic_amm.so
    │   │   │   ├── dynamic_bonding_curve.so
    │   │   │   ├── dynamic_fee_sharing.so
    │   │   │   ├── dynamic_vault.so
    │   │   │   ├── lb_clmm.so
    │   │   │   ├── locker.so
    │   │   │   └── metaplex.so
    │   │   └── keys
    │   │       └── localnet
    │   │           └── admin-bossj3JvwiNK7pvjr149DqdtJxf2gdygbcmEPTkb2F1.json
    │   └── utils
    │       ├── constants.ts
    │       └── types.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install all dependencies
pnpm install

# Build all packages
pnpm build
```

## 📦 Workspaces

### Studio (`@meteora-invent/studio`)

The studio workspace contains all the scripts for interacting with Meteora's programs.

#### Getting Started

Copy the `.env.example` file to `.env` and configure the environment variables.

```bash
cp studio/.env.example studio/.env
```

#### Install Dependencies

```bash
pnpm install
```

#### Studio Scripts

**DAMM v1 Scripts:**

```bash
pnpm studio damm-v1-create-constant-product-pool
pnpm studio damm-v1-create-memecoin-pool
pnpm studio damm-v1-create-stable-pool
pnpm studio damm-v1-get-configs
pnpm studio damm-v1-create-position
pnpm studio damm-v1-withdraw-liquidity
pnpm studio damm-v1-claim-locked-fees
pnpm studio damm-v1-get-locked-fees
```

**DAMM v2 Scripts:**

```bash
pnpm studio damm-v2-create-pool
pnpm studio damm-v2-get-configs
pnpm studio damm-v2-create-position
pnpm studio damm-v2-get-positions
pnpm studio damm-v2-lock-position
pnpm studio damm-v2-withdraw-liquidity
pnpm studio damm-v2-get-position-fees
pnpm studio damm-v2-claim-position-fees
```

**DLMM Scripts:**

```bash
pnpm studio dlmm-create-balanced-position
pnpm studio dlmm-create-imbalanced-position
pnpm studio dlmm-get-active-bin
pnpm studio dlmm-get-positions-list
pnpm studio dlmm-add-balanced-liquidity
pnpm studio dlmm-add-imbalanced-liquidity
```

**DBC Scripts:**

```bash
pnpm studio dbc-quick-launch
pnpm studio dbc-create-config
pnpm studio dbc-create-partner-metadata
pnpm studio dbc-simulate-curve
pnpm studio dbc-migrate-to-damm-v1
pnpm studio dbc-migrate-to-damm-v2
pnpm studio dbc-swap-buy
pnpm studio dbc-swap-quote
```

### Scaffolds

#### Fun Launch (`@meteora-invent/scaffold-fun-launch`)

A Next.js application template for creating a launchpad.

#### Getting Started

Copy the `.env.example` file to `.env` and configure the environment variables.

```bash
cp scaffolds/fun-launch/.env.example scaffolds/fun-launch/.env
```

#### Install Dependencies

```bash
pnpm install
```

#### Running the Scaffold

```bash
# Run the fun-launch scaffold in development
pnpm --filter @meteora-invent/scaffold/fun-launch dev

# Build the fun-launch scaffold
pnpm --filter @meteora-invent/scaffold/fun-launch build
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm format` and `pnpm lint`
4. Submit a pull request

## 📄 License

ISC

---
