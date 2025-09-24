import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { readFileSync } from 'fs';
import { 
  createDammV2Program, 
  getDynamicFeeParams,
  deriveDbcPoolAuthority,
  DAMM_V2_MIGRATION_FEE_ADDRESS 
} from '@meteora-ag/dynamic-bonding-curve-sdk';
import { MAX_SQRT_PRICE, MIN_SQRT_PRICE } from '@meteora-ag/cp-amm-sdk';
import BN from 'bn.js';


function loadKeypair(filePath) {
  try {
    const keypairData = JSON.parse(readFileSync(filePath, 'utf8'));
    return Keypair.fromSecretKey(new Uint8Array(keypairData));
  } catch (error) {
    throw new Error(`Failed to load keypair from ${filePath}: ${error.message}`);
  }
}

async function createDammV2Config(
  connection,
  payer,
  poolCreatorAuthority,
  migrationFeeOption
) {
  console.log('> Creating DAMM V2 config...');
  console.log(`> Pool Creator Authority: ${poolCreatorAuthority.toString()}`);
  console.log(`> Migration Fee Option: ${migrationFeeOption}`);
  
  const program = createDammV2Program(connection);

  // Set fee parameters based on migration fee option
  let baseFeeBps = 100;
  let cliffFeeNumerator = new BN(10000000);
  
  if (migrationFeeOption === 0) {
    baseFeeBps = 25;
    cliffFeeNumerator = new BN(2500000);
  } else if (migrationFeeOption === 1) {
    cliffFeeNumerator = new BN(3000000);
    baseFeeBps = 30;
  } else if (migrationFeeOption === 2) {
    baseFeeBps = 100;
    cliffFeeNumerator = new BN(10000000);
  } else if (migrationFeeOption === 3) {
    baseFeeBps = 200;
    cliffFeeNumerator = new BN(20000000);
  } else if (migrationFeeOption === 4) {
    baseFeeBps = 400;
    cliffFeeNumerator = new BN(40000000);
  } else if (migrationFeeOption === 5) {
    baseFeeBps = 600;
    cliffFeeNumerator = new BN(60000000);
  }
  
  console.log(`> Base Fee BPS: ${baseFeeBps}`);
  console.log(`> Cliff Fee Numerator: ${cliffFeeNumerator.toString()}`);
  
  const dynamicFeeParams = getDynamicFeeParams(baseFeeBps);

  // Find program address for config
  const [configAddress] = PublicKey.findProgramAddressSync(
    [Buffer.from('config'), new BN(migrationFeeOption).toBuffer('le', 8)],
    program.programId
  );
  
  console.log(`> Config Address: ${configAddress.toString()}`);

  // Check if config already exists
  const existingConfig = await connection.getAccountInfo(configAddress);
  if (existingConfig) {
    console.log('> Config already exists, returning existing address');
    return configAddress;
  }

  const configParameters = {
    poolFees: {
      baseFee: {
        cliffFeeNumerator: cliffFeeNumerator,
        numberOfPeriod: 0,
        periodFrequency: new BN(0),
        reductionFactor: new BN(0),
        feeSchedulerMode: 0,
      },
      padding: new Array(32).fill(0),
      dynamicFee: dynamicFeeParams,
    },
    sqrtMinPrice: MIN_SQRT_PRICE,
    sqrtMaxPrice: MAX_SQRT_PRICE,
    vaultConfigKey: PublicKey.default,
    poolCreatorAuthority,
    collectFeeMode: 1,
    activationType: 0,
  };

  console.log('> Building create config transaction...');
  const transaction = await program.methods
    .createConfig(new BN(migrationFeeOption), configParameters)
    .accountsPartial({
      config: configAddress,
      admin: payer.publicKey,
    })
    .transaction();

  console.log('> Signing and sending transaction...');
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.sign(payer);
  
  const signature = await connection.sendRawTransaction(transaction.serialize());
  console.log(`> Transaction signature: ${signature}`);
  
  console.log('> Waiting for confirmation...');
  await connection.confirmTransaction(signature, 'confirmed');
  
  console.log('> DAMM V2 config created successfully!');
  return configAddress;
}

async function main() {
  try {
    console.log('=== DAMM V2 Config Creator ===\n');
    // Please add you admin keypair here
    console.log(`> Loading keypair from: ./studio/keypair.json`);
    const keypair = loadKeypair('./studio/keypair.json');
    console.log(`> Loaded keypair: ${keypair.publicKey.toString()}`);
    
    console.log(`> Connecting to RPC: https://rpc.gorbagana.wtf`);
    const connection = new Connection('https://rpc.gorbagana.wtf', 'confirmed');

    //- migration_fee_option == 0: 7F6dnUcRuyM2TwR8myT1dYypFXpPSxqwKNSFNkxyNESd
    // - migration_fee_option == 1: 2nHK1kju6XjphBLbNxpM5XRGFj7p9U8vvNzyZiha1z6k
    // - migration_fee_option == 2: Hv8Lmzmnju6m7kcokVKvwqz7QPmdX9XfKjJsXz8RXcjp
    // - migration_fee_option == 3: 2c4cYd4reUYVRAB9kUUkrq55VPyy2FNQ3FDL4o12JXmq
    // - migration_fee_option == 4: AkmQWebAwFvWk55wBoCr5D62C6VVDTzi84NJuD9H7cFD
    // - migration_fee_option == 5: DbCRBj8McvPYHJG1ukj8RE15h2dCNUdTAESG49XpQ44u
    // - migration_fee_option == 6: A8gMrEPJkacWkcb3DGwtJwTe16HktSEfvwtuDh2MCtck
    const migrationFeeOption = 2; // Default to 100 bps (1.00%)
    const poolAuthority = deriveDbcPoolAuthority();
    
    // IMPORTANT: dammConfigAddress will be one for DAMM_V2_MIGRATION_FEE_ADDRESS based on the migrationFeeOption
    const dammConfigAddress = await createDammV2Config(
      connection,
      keypair,
      poolAuthority,
      migrationFeeOption
    );    
    console.log('\n=== SUCCESS ===');
    console.log(`Config Address: ${dammConfigAddress.toString()}`);
    console.log(`Migration Fee Option: ${migrationFeeOption}`);
    console.log(`Pool Creator Authority: ${poolAuthority.toString()}`);
    
  } catch (error) {
    console.error('\n=== ERROR ===');
    console.error(error.message);
    process.exit(1);
  }
}

// Run the main function
main().catch(console.error);
