DBC configuration pubkey: HBqdy1Kq4ybRoBCYL8LiRWhCJLeYW98yp7hKLYzxwPwF
Its private key: ./keypair.json

---
Error: Simulation failed. 
Message: Transaction simulation failed: Error processing Instruction 2: custom program error: 0x0. 
Logs: 
[
  "Program log: Instruction: InitializeMint2",
  "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2827 of 402850 compute units",
  "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
  "Program dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN invoke [1]",
  "Program log: Instruction: InitializeVirtualPoolWithSplToken",
  "Program 11111111111111111111111111111111 invoke [2]",
  "Allocate: account Address { address: 8KFBy9TP2yihof395NWmj4xx9jtH7vAnTTkU1u74n4iR, base: None } already in use",
  "Program 11111111111111111111111111111111 failed: custom program error: 0x0",
  "Program dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN consumed 8243 of 400023 compute units",
  "Program dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN failed: custom program error: 0x0"
]. 
Catch the `SendTransactionError` and call `getLogs()` on it for full details.
    at CreatePool.useForm[form] [as onSubmit] (http://localhost:3000/_next/static/chunks/%5Broot-of-the-server%5D__dd90b4e9._.js:886:31)
    at async FormApi.handleSubmit (http://localhost:3000/_next/static/chunks/node_modules__pnpm_c6b408b1._.js:32890:13)