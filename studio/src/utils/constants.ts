import { NATIVE_MINT } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { CommandOption } from './types';

export const LOCALNET_RPC_URL = 'http://localhost:8899';
export const DEVNET_RPC_URL = 'https://api.devnet.solana.com';
export const MAINNET_RPC_URL = 'https://api.mainnet-beta.solana.com';

export const DEFAULT_COMMITMENT_LEVEL = 'confirmed';
export const DEFAULT_SEND_TX_MAX_RETRIES = 3;

export const SOL_TOKEN_MINT = NATIVE_MINT;
export const USDC_TOKEN_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
export const SOL_TOKEN_DECIMALS = 9;
export const USDC_TOKEN_DECIMALS = 6;

export const TX_SIZE_LIMIT_BYTES = 1232;
export const MAX_INSTRUCTIONS_PER_STAKE_ESCROW_ACCOUNTS_CREATED = 8;

export const DEFAULT_NODES_PER_TREE = 10_000;

export const DLMM_PROGRAM_IDS = {
  devnet: 'LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo',
  localhost: 'LbVRzDTvBDEcrthxfZ4RL6yiq3uZw8bS6MwtdY6UhFQ',
  'mainnet-beta': 'LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo',
};

export const DYNAMIC_AMM_PROGRAM_IDS = {
  devnet: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB',
  localhost: 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB',
  'mainnet-beta': 'Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB',
};

export const ALPHA_VAULT_PROGRAM_IDS = {
  devnet: 'vaU6kP7iNEGkbmPkLmZfGwiGxd4Mob24QQCie5R9kd2',
  localhost: 'SNPmGgnywBvvrAKMLundzG6StojyHTHDLu7T4sdhP4k',
  'mainnet-beta': 'vaU6kP7iNEGkbmPkLmZfGwiGxd4Mob24QQCie5R9kd2',
};

export const STAKE2EARN_PROGRAM_IDS = {
  'mainnet-beta': 'FEESngU3neckdwib9X3KWqdL7Mjmqk9XNp3uh5JbP4KP',
};

export const METAPLEX_PROGRAM_ID = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

export const GENERATE_KEYPAIR_COMMAND_OPTIONS: CommandOption[] = [
  {
    flag: 'network',
    description: 'Specify the network to use',
    required: false,
    type: 'string',
    example: 'devnet',
  },
  {
    flag: 'airdrop',
    description:
      'Automatically airdrop SOL after generating keypair (only works on devnet/localnet)',
    required: false,
    type: 'boolean',
  },
  {
    flag: 'help',
    description: 'Show this help message',
    required: false,
    type: 'boolean',
  },
];

export const AIRDROP_SOL_COMMAND_OPTIONS: CommandOption[] = [
  {
    flag: 'network',
    description: 'Specify the network to use',
    required: true,
    type: 'string',
    example: 'devnet',
  },
  {
    flag: 'help',
    description: 'Show this help message',
    required: false,
    type: 'boolean',
  },
];
