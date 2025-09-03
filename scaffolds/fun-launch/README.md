# DBC Token Launchpad

A platform for launching tokens with Dynamic Bonding Curves on Solana using Meteora's DBC protocol.

## Features

- **DBC Token Launches**: Create tokens with Dynamic Bonding Curves for fair price discovery
- **Customizable Parameters**: Set initial price, bonding curve slope, and total supply
- **Token Metadata**: Upload logos, descriptions, and social links
- **Real-time Discovery**: Explore and discover DBC tokens
- **Mobile Responsive**: Optimized for all devices
- **Wallet Integration**: Full Solana wallet support

## What is DBC?

Dynamic Bonding Curves (DBC) provide a fair and transparent way to launch tokens where:
- **Price Discovery**: Token price automatically adjusts based on supply and demand
- **Fair Launch**: No pre-mines or unfair advantages
- **Liquidity**: Built-in liquidity from the start
- **Transparency**: All parameters are visible and verifiable on-chain

## Setup

1. Clone the repository

```bash
git clone https://github.com/MeteoraAg/meteora-invent.git
cd scaffolds/fun-launch
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables Create a `.env` file in the root directory with the following
   variables:

```bash
cp .env.example .env
```

```env
# Cloudflare R2 Storage
R2_ACCESS_KEY_ID=your_r2_access_key_id
R2_SECRET_ACCESS_KEY=your_r2_secret_access_key
R2_ACCOUNT_ID=your_r2_account_id
R2_BUCKET=your_r2_bucket_name

# Solana RPC URL
RPC_URL=your_rpc_url

# Pool Configuration
POOL_CONFIG_KEY=your_pool_config_key
```

### Getting R2 Credentials

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to R2
3. Create a new bucket or select an existing one
4. Go to "Manage R2 API Tokens"
5. Create a new API token with the following permissions:
   - Account R2 Storage: Edit
   - Bucket: Your bucket name
6. Copy the Access Key ID and Secret Access Key
7. Your Account ID can be found in the Cloudflare dashboard URL or in the Account Home page

### Getting RPC URL

1. Get your RPC URL from any of 3rd party providers

### Pool Config Key

The pool config key is used to configure the bonding curve parameters. You'll need to:

1. Deploy your own pool config program
2. Or use an existing pool config program
3. Get the public key of the pool config account

4. Run the development server

```bash
pnpm dev
```

## How to Launch a DBC Token

1. **Connect Wallet**: Connect your Solana wallet
2. **Token Details**: Enter token name, symbol, and upload logo
3. **DBC Parameters**: Set initial price, bonding curve slope, and total supply
4. **Metadata**: Add description and social links (optional)
5. **Launch**: Confirm and launch your token

## DBC Parameters Explained

- **Initial Price**: Starting price per token in SOL
- **Bonding Curve Slope**: Controls how quickly price increases with demand
- **Total Supply**: Maximum number of tokens that can exist
- **Bonding Curve**: Price = Initial Price × (Supply / Initial Supply)^Slope

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository

2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account

3. Click "New Project"

4. Import your GitHub repository

5. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `pnpm build`
   - Output Directory: .next

6. Add Environment Variables:
   - Add all the environment variables from your `.env` file:
     - `R2_ACCESS_KEY_ID`
     - `R2_SECRET_ACCESS_KEY`
     - `R2_ACCOUNT_ID`
     - `R2_BUCKET`
     - `RPC_URL`
     - `POOL_CONFIG_KEY`

7. Click "Deploy"

8. Vercel will automatically deploy your site and provide you with a URL

### Environment Variables in Vercel

You can manage your environment variables in Vercel:

1. Go to your project settings
2. Click on "Environment Variables"
3. Add each variable from your `.env` file
4. You can set different values for Production, Preview, and Development environments

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure your DNS settings

## Tech Stack

- **Frontend**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: Solana Web3.js + Wallet Adapter
- **Protocol**: Meteora DBC SDK (@meteora-ag/dynamic-bonding-curve-sdk)
- **Storage**: Cloudflare R2 for metadata and images
- **State Management**: React Context + Custom Hooks

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC
