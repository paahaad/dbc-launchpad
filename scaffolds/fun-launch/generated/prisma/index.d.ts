
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Gor
 * 
 */
export type Gor = $Result.DefaultSelection<Prisma.$GorPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model TokenPurchase
 * 
 */
export type TokenPurchase = $Result.DefaultSelection<Prisma.$TokenPurchasePayload>
/**
 * Model PoolConfig
 * 
 */
export type PoolConfig = $Result.DefaultSelection<Prisma.$PoolConfigPayload>
/**
 * Model Pool
 * 
 */
export type Pool = $Result.DefaultSelection<Prisma.$PoolPayload>
/**
 * Model PoolState
 * 
 */
export type PoolState = $Result.DefaultSelection<Prisma.$PoolStatePayload>
/**
 * Model TokenLaunch
 * 
 */
export type TokenLaunch = $Result.DefaultSelection<Prisma.$TokenLaunchPayload>
/**
 * Model TokenHolder
 * 
 */
export type TokenHolder = $Result.DefaultSelection<Prisma.$TokenHolderPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TxType: {
  BUY: 'BUY',
  SELL: 'SELL',
  CREATE_POOL: 'CREATE_POOL',
  ADD_LIQUIDITY: 'ADD_LIQUIDITY',
  REMOVE_LIQUIDITY: 'REMOVE_LIQUIDITY',
  CLAIM_FEES: 'CLAIM_FEES'
};

export type TxType = (typeof TxType)[keyof typeof TxType]

}

export type TxType = $Enums.TxType

export const TxType: typeof $Enums.TxType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gors
 * const gors = await prisma.gor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Gors
   * const gors = await prisma.gor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gor`: Exposes CRUD operations for the **Gor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gors
    * const gors = await prisma.gor.findMany()
    * ```
    */
  get gor(): Prisma.GorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenPurchase`: Exposes CRUD operations for the **TokenPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenPurchases
    * const tokenPurchases = await prisma.tokenPurchase.findMany()
    * ```
    */
  get tokenPurchase(): Prisma.TokenPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolConfig`: Exposes CRUD operations for the **PoolConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolConfigs
    * const poolConfigs = await prisma.poolConfig.findMany()
    * ```
    */
  get poolConfig(): Prisma.PoolConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pool`: Exposes CRUD operations for the **Pool** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pools
    * const pools = await prisma.pool.findMany()
    * ```
    */
  get pool(): Prisma.PoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.poolState`: Exposes CRUD operations for the **PoolState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PoolStates
    * const poolStates = await prisma.poolState.findMany()
    * ```
    */
  get poolState(): Prisma.PoolStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenLaunch`: Exposes CRUD operations for the **TokenLaunch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenLaunches
    * const tokenLaunches = await prisma.tokenLaunch.findMany()
    * ```
    */
  get tokenLaunch(): Prisma.TokenLaunchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tokenHolder`: Exposes CRUD operations for the **TokenHolder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenHolders
    * const tokenHolders = await prisma.tokenHolder.findMany()
    * ```
    */
  get tokenHolder(): Prisma.TokenHolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Gor: 'Gor',
    User: 'User',
    Token: 'Token',
    TokenPurchase: 'TokenPurchase',
    PoolConfig: 'PoolConfig',
    Pool: 'Pool',
    PoolState: 'PoolState',
    TokenLaunch: 'TokenLaunch',
    TokenHolder: 'TokenHolder',
    Transaction: 'Transaction',
    PriceHistory: 'PriceHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gor" | "user" | "token" | "tokenPurchase" | "poolConfig" | "pool" | "poolState" | "tokenLaunch" | "tokenHolder" | "transaction" | "priceHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Gor: {
        payload: Prisma.$GorPayload<ExtArgs>
        fields: Prisma.GorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>
          }
          findFirst: {
            args: Prisma.GorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>
          }
          findMany: {
            args: Prisma.GorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>[]
          }
          create: {
            args: Prisma.GorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>
          }
          createMany: {
            args: Prisma.GorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>[]
          }
          delete: {
            args: Prisma.GorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>
          }
          update: {
            args: Prisma.GorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>
          }
          deleteMany: {
            args: Prisma.GorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>[]
          }
          upsert: {
            args: Prisma.GorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GorPayload>
          }
          aggregate: {
            args: Prisma.GorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGor>
          }
          groupBy: {
            args: Prisma.GorGroupByArgs<ExtArgs>
            result: $Utils.Optional<GorGroupByOutputType>[]
          }
          count: {
            args: Prisma.GorCountArgs<ExtArgs>
            result: $Utils.Optional<GorCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      TokenPurchase: {
        payload: Prisma.$TokenPurchasePayload<ExtArgs>
        fields: Prisma.TokenPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>
          }
          findFirst: {
            args: Prisma.TokenPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>
          }
          findMany: {
            args: Prisma.TokenPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>[]
          }
          create: {
            args: Prisma.TokenPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>
          }
          createMany: {
            args: Prisma.TokenPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>[]
          }
          delete: {
            args: Prisma.TokenPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>
          }
          update: {
            args: Prisma.TokenPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>
          }
          deleteMany: {
            args: Prisma.TokenPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>[]
          }
          upsert: {
            args: Prisma.TokenPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPurchasePayload>
          }
          aggregate: {
            args: Prisma.TokenPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenPurchase>
          }
          groupBy: {
            args: Prisma.TokenPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<TokenPurchaseCountAggregateOutputType> | number
          }
        }
      }
      PoolConfig: {
        payload: Prisma.$PoolConfigPayload<ExtArgs>
        fields: Prisma.PoolConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>
          }
          findFirst: {
            args: Prisma.PoolConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>
          }
          findMany: {
            args: Prisma.PoolConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>[]
          }
          create: {
            args: Prisma.PoolConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>
          }
          createMany: {
            args: Prisma.PoolConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>[]
          }
          delete: {
            args: Prisma.PoolConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>
          }
          update: {
            args: Prisma.PoolConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>
          }
          deleteMany: {
            args: Prisma.PoolConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>[]
          }
          upsert: {
            args: Prisma.PoolConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolConfigPayload>
          }
          aggregate: {
            args: Prisma.PoolConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolConfig>
          }
          groupBy: {
            args: Prisma.PoolConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PoolConfigCountAggregateOutputType> | number
          }
        }
      }
      Pool: {
        payload: Prisma.$PoolPayload<ExtArgs>
        fields: Prisma.PoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findFirst: {
            args: Prisma.PoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          findMany: {
            args: Prisma.PoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          create: {
            args: Prisma.PoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          createMany: {
            args: Prisma.PoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          delete: {
            args: Prisma.PoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          update: {
            args: Prisma.PoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          deleteMany: {
            args: Prisma.PoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>[]
          }
          upsert: {
            args: Prisma.PoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolPayload>
          }
          aggregate: {
            args: Prisma.PoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePool>
          }
          groupBy: {
            args: Prisma.PoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolCountArgs<ExtArgs>
            result: $Utils.Optional<PoolCountAggregateOutputType> | number
          }
        }
      }
      PoolState: {
        payload: Prisma.$PoolStatePayload<ExtArgs>
        fields: Prisma.PoolStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoolStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoolStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>
          }
          findFirst: {
            args: Prisma.PoolStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoolStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>
          }
          findMany: {
            args: Prisma.PoolStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>[]
          }
          create: {
            args: Prisma.PoolStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>
          }
          createMany: {
            args: Prisma.PoolStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoolStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>[]
          }
          delete: {
            args: Prisma.PoolStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>
          }
          update: {
            args: Prisma.PoolStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>
          }
          deleteMany: {
            args: Prisma.PoolStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoolStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoolStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>[]
          }
          upsert: {
            args: Prisma.PoolStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PoolStatePayload>
          }
          aggregate: {
            args: Prisma.PoolStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoolState>
          }
          groupBy: {
            args: Prisma.PoolStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoolStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoolStateCountArgs<ExtArgs>
            result: $Utils.Optional<PoolStateCountAggregateOutputType> | number
          }
        }
      }
      TokenLaunch: {
        payload: Prisma.$TokenLaunchPayload<ExtArgs>
        fields: Prisma.TokenLaunchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenLaunchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenLaunchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>
          }
          findFirst: {
            args: Prisma.TokenLaunchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenLaunchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>
          }
          findMany: {
            args: Prisma.TokenLaunchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>[]
          }
          create: {
            args: Prisma.TokenLaunchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>
          }
          createMany: {
            args: Prisma.TokenLaunchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenLaunchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>[]
          }
          delete: {
            args: Prisma.TokenLaunchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>
          }
          update: {
            args: Prisma.TokenLaunchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>
          }
          deleteMany: {
            args: Prisma.TokenLaunchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenLaunchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenLaunchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>[]
          }
          upsert: {
            args: Prisma.TokenLaunchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenLaunchPayload>
          }
          aggregate: {
            args: Prisma.TokenLaunchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenLaunch>
          }
          groupBy: {
            args: Prisma.TokenLaunchGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenLaunchGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenLaunchCountArgs<ExtArgs>
            result: $Utils.Optional<TokenLaunchCountAggregateOutputType> | number
          }
        }
      }
      TokenHolder: {
        payload: Prisma.$TokenHolderPayload<ExtArgs>
        fields: Prisma.TokenHolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenHolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenHolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>
          }
          findFirst: {
            args: Prisma.TokenHolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenHolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>
          }
          findMany: {
            args: Prisma.TokenHolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>[]
          }
          create: {
            args: Prisma.TokenHolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>
          }
          createMany: {
            args: Prisma.TokenHolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenHolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>[]
          }
          delete: {
            args: Prisma.TokenHolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>
          }
          update: {
            args: Prisma.TokenHolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>
          }
          deleteMany: {
            args: Prisma.TokenHolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenHolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenHolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>[]
          }
          upsert: {
            args: Prisma.TokenHolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenHolderPayload>
          }
          aggregate: {
            args: Prisma.TokenHolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenHolder>
          }
          groupBy: {
            args: Prisma.TokenHolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenHolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenHolderCountArgs<ExtArgs>
            result: $Utils.Optional<TokenHolderCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    gor?: GorOmit
    user?: UserOmit
    token?: TokenOmit
    tokenPurchase?: TokenPurchaseOmit
    poolConfig?: PoolConfigOmit
    pool?: PoolOmit
    poolState?: PoolStateOmit
    tokenLaunch?: TokenLaunchOmit
    tokenHolder?: TokenHolderOmit
    transaction?: TransactionOmit
    priceHistory?: PriceHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    launchedTokens: number
    purchases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    launchedTokens?: boolean | UserCountOutputTypeCountLaunchedTokensArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaunchedTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenPurchaseWhereInput
  }


  /**
   * Count Type TokenCountOutputType
   */

  export type TokenCountOutputType = {
    basePools: number
    quotePools: number
    launches: number
    tokenHolders: number
    transactions: number
    priceHistory: number
    purchases: number
  }

  export type TokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    basePools?: boolean | TokenCountOutputTypeCountBasePoolsArgs
    quotePools?: boolean | TokenCountOutputTypeCountQuotePoolsArgs
    launches?: boolean | TokenCountOutputTypeCountLaunchesArgs
    tokenHolders?: boolean | TokenCountOutputTypeCountTokenHoldersArgs
    transactions?: boolean | TokenCountOutputTypeCountTransactionsArgs
    priceHistory?: boolean | TokenCountOutputTypeCountPriceHistoryArgs
    purchases?: boolean | TokenCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenCountOutputType
     */
    select?: TokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountBasePoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountQuotePoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountLaunchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenLaunchWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTokenHoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenHolderWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }

  /**
   * TokenCountOutputType without action
   */
  export type TokenCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenPurchaseWhereInput
  }


  /**
   * Count Type PoolConfigCountOutputType
   */

  export type PoolConfigCountOutputType = {
    pools: number
  }

  export type PoolConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pools?: boolean | PoolConfigCountOutputTypeCountPoolsArgs
  }

  // Custom InputTypes
  /**
   * PoolConfigCountOutputType without action
   */
  export type PoolConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfigCountOutputType
     */
    select?: PoolConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoolConfigCountOutputType without action
   */
  export type PoolConfigCountOutputTypeCountPoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
  }


  /**
   * Count Type PoolCountOutputType
   */

  export type PoolCountOutputType = {
    states: number
    transactions: number
    launches: number
    priceHistory: number
  }

  export type PoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    states?: boolean | PoolCountOutputTypeCountStatesArgs
    transactions?: boolean | PoolCountOutputTypeCountTransactionsArgs
    launches?: boolean | PoolCountOutputTypeCountLaunchesArgs
    priceHistory?: boolean | PoolCountOutputTypeCountPriceHistoryArgs
  }

  // Custom InputTypes
  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolCountOutputType
     */
    select?: PoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeCountStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolStateWhereInput
  }

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeCountLaunchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenLaunchWhereInput
  }

  /**
   * PoolCountOutputType without action
   */
  export type PoolCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Gor
   */

  export type AggregateGor = {
    _count: GorCountAggregateOutputType | null
    _min: GorMinAggregateOutputType | null
    _max: GorMaxAggregateOutputType | null
  }

  export type GorMinAggregateOutputType = {
    id: string | null
    priceUsd: string | null
    fetchedAt: Date | null
  }

  export type GorMaxAggregateOutputType = {
    id: string | null
    priceUsd: string | null
    fetchedAt: Date | null
  }

  export type GorCountAggregateOutputType = {
    id: number
    priceUsd: number
    fetchedAt: number
    _all: number
  }


  export type GorMinAggregateInputType = {
    id?: true
    priceUsd?: true
    fetchedAt?: true
  }

  export type GorMaxAggregateInputType = {
    id?: true
    priceUsd?: true
    fetchedAt?: true
  }

  export type GorCountAggregateInputType = {
    id?: true
    priceUsd?: true
    fetchedAt?: true
    _all?: true
  }

  export type GorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gor to aggregate.
     */
    where?: GorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gors to fetch.
     */
    orderBy?: GorOrderByWithRelationInput | GorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gors
    **/
    _count?: true | GorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GorMaxAggregateInputType
  }

  export type GetGorAggregateType<T extends GorAggregateArgs> = {
        [P in keyof T & keyof AggregateGor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGor[P]>
      : GetScalarType<T[P], AggregateGor[P]>
  }




  export type GorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GorWhereInput
    orderBy?: GorOrderByWithAggregationInput | GorOrderByWithAggregationInput[]
    by: GorScalarFieldEnum[] | GorScalarFieldEnum
    having?: GorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GorCountAggregateInputType | true
    _min?: GorMinAggregateInputType
    _max?: GorMaxAggregateInputType
  }

  export type GorGroupByOutputType = {
    id: string
    priceUsd: string
    fetchedAt: Date
    _count: GorCountAggregateOutputType | null
    _min: GorMinAggregateOutputType | null
    _max: GorMaxAggregateOutputType | null
  }

  type GetGorGroupByPayload<T extends GorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GorGroupByOutputType[P]>
            : GetScalarType<T[P], GorGroupByOutputType[P]>
        }
      >
    >


  export type GorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priceUsd?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["gor"]>

  export type GorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priceUsd?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["gor"]>

  export type GorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    priceUsd?: boolean
    fetchedAt?: boolean
  }, ExtArgs["result"]["gor"]>

  export type GorSelectScalar = {
    id?: boolean
    priceUsd?: boolean
    fetchedAt?: boolean
  }

  export type GorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "priceUsd" | "fetchedAt", ExtArgs["result"]["gor"]>

  export type $GorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      priceUsd: string
      fetchedAt: Date
    }, ExtArgs["result"]["gor"]>
    composites: {}
  }

  type GorGetPayload<S extends boolean | null | undefined | GorDefaultArgs> = $Result.GetResult<Prisma.$GorPayload, S>

  type GorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GorCountAggregateInputType | true
    }

  export interface GorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gor'], meta: { name: 'Gor' } }
    /**
     * Find zero or one Gor that matches the filter.
     * @param {GorFindUniqueArgs} args - Arguments to find a Gor
     * @example
     * // Get one Gor
     * const gor = await prisma.gor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GorFindUniqueArgs>(args: SelectSubset<T, GorFindUniqueArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GorFindUniqueOrThrowArgs} args - Arguments to find a Gor
     * @example
     * // Get one Gor
     * const gor = await prisma.gor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GorFindUniqueOrThrowArgs>(args: SelectSubset<T, GorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorFindFirstArgs} args - Arguments to find a Gor
     * @example
     * // Get one Gor
     * const gor = await prisma.gor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GorFindFirstArgs>(args?: SelectSubset<T, GorFindFirstArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorFindFirstOrThrowArgs} args - Arguments to find a Gor
     * @example
     * // Get one Gor
     * const gor = await prisma.gor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GorFindFirstOrThrowArgs>(args?: SelectSubset<T, GorFindFirstOrThrowArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gors
     * const gors = await prisma.gor.findMany()
     * 
     * // Get first 10 Gors
     * const gors = await prisma.gor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gorWithIdOnly = await prisma.gor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GorFindManyArgs>(args?: SelectSubset<T, GorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gor.
     * @param {GorCreateArgs} args - Arguments to create a Gor.
     * @example
     * // Create one Gor
     * const Gor = await prisma.gor.create({
     *   data: {
     *     // ... data to create a Gor
     *   }
     * })
     * 
     */
    create<T extends GorCreateArgs>(args: SelectSubset<T, GorCreateArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gors.
     * @param {GorCreateManyArgs} args - Arguments to create many Gors.
     * @example
     * // Create many Gors
     * const gor = await prisma.gor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GorCreateManyArgs>(args?: SelectSubset<T, GorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gors and returns the data saved in the database.
     * @param {GorCreateManyAndReturnArgs} args - Arguments to create many Gors.
     * @example
     * // Create many Gors
     * const gor = await prisma.gor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gors and only return the `id`
     * const gorWithIdOnly = await prisma.gor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GorCreateManyAndReturnArgs>(args?: SelectSubset<T, GorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gor.
     * @param {GorDeleteArgs} args - Arguments to delete one Gor.
     * @example
     * // Delete one Gor
     * const Gor = await prisma.gor.delete({
     *   where: {
     *     // ... filter to delete one Gor
     *   }
     * })
     * 
     */
    delete<T extends GorDeleteArgs>(args: SelectSubset<T, GorDeleteArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gor.
     * @param {GorUpdateArgs} args - Arguments to update one Gor.
     * @example
     * // Update one Gor
     * const gor = await prisma.gor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GorUpdateArgs>(args: SelectSubset<T, GorUpdateArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gors.
     * @param {GorDeleteManyArgs} args - Arguments to filter Gors to delete.
     * @example
     * // Delete a few Gors
     * const { count } = await prisma.gor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GorDeleteManyArgs>(args?: SelectSubset<T, GorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gors
     * const gor = await prisma.gor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GorUpdateManyArgs>(args: SelectSubset<T, GorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gors and returns the data updated in the database.
     * @param {GorUpdateManyAndReturnArgs} args - Arguments to update many Gors.
     * @example
     * // Update many Gors
     * const gor = await prisma.gor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gors and only return the `id`
     * const gorWithIdOnly = await prisma.gor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GorUpdateManyAndReturnArgs>(args: SelectSubset<T, GorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gor.
     * @param {GorUpsertArgs} args - Arguments to update or create a Gor.
     * @example
     * // Update or create a Gor
     * const gor = await prisma.gor.upsert({
     *   create: {
     *     // ... data to create a Gor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gor we want to update
     *   }
     * })
     */
    upsert<T extends GorUpsertArgs>(args: SelectSubset<T, GorUpsertArgs<ExtArgs>>): Prisma__GorClient<$Result.GetResult<Prisma.$GorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorCountArgs} args - Arguments to filter Gors to count.
     * @example
     * // Count the number of Gors
     * const count = await prisma.gor.count({
     *   where: {
     *     // ... the filter for the Gors we want to count
     *   }
     * })
    **/
    count<T extends GorCountArgs>(
      args?: Subset<T, GorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GorAggregateArgs>(args: Subset<T, GorAggregateArgs>): Prisma.PrismaPromise<GetGorAggregateType<T>>

    /**
     * Group by Gor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GorGroupByArgs['orderBy'] }
        : { orderBy?: GorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gor model
   */
  readonly fields: GorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gor model
   */
  interface GorFieldRefs {
    readonly id: FieldRef<"Gor", 'String'>
    readonly priceUsd: FieldRef<"Gor", 'String'>
    readonly fetchedAt: FieldRef<"Gor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gor findUnique
   */
  export type GorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * Filter, which Gor to fetch.
     */
    where: GorWhereUniqueInput
  }

  /**
   * Gor findUniqueOrThrow
   */
  export type GorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * Filter, which Gor to fetch.
     */
    where: GorWhereUniqueInput
  }

  /**
   * Gor findFirst
   */
  export type GorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * Filter, which Gor to fetch.
     */
    where?: GorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gors to fetch.
     */
    orderBy?: GorOrderByWithRelationInput | GorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gors.
     */
    cursor?: GorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gors.
     */
    distinct?: GorScalarFieldEnum | GorScalarFieldEnum[]
  }

  /**
   * Gor findFirstOrThrow
   */
  export type GorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * Filter, which Gor to fetch.
     */
    where?: GorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gors to fetch.
     */
    orderBy?: GorOrderByWithRelationInput | GorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gors.
     */
    cursor?: GorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gors.
     */
    distinct?: GorScalarFieldEnum | GorScalarFieldEnum[]
  }

  /**
   * Gor findMany
   */
  export type GorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * Filter, which Gors to fetch.
     */
    where?: GorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gors to fetch.
     */
    orderBy?: GorOrderByWithRelationInput | GorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gors.
     */
    cursor?: GorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gors.
     */
    skip?: number
    distinct?: GorScalarFieldEnum | GorScalarFieldEnum[]
  }

  /**
   * Gor create
   */
  export type GorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * The data needed to create a Gor.
     */
    data: XOR<GorCreateInput, GorUncheckedCreateInput>
  }

  /**
   * Gor createMany
   */
  export type GorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gors.
     */
    data: GorCreateManyInput | GorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gor createManyAndReturn
   */
  export type GorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * The data used to create many Gors.
     */
    data: GorCreateManyInput | GorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gor update
   */
  export type GorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * The data needed to update a Gor.
     */
    data: XOR<GorUpdateInput, GorUncheckedUpdateInput>
    /**
     * Choose, which Gor to update.
     */
    where: GorWhereUniqueInput
  }

  /**
   * Gor updateMany
   */
  export type GorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gors.
     */
    data: XOR<GorUpdateManyMutationInput, GorUncheckedUpdateManyInput>
    /**
     * Filter which Gors to update
     */
    where?: GorWhereInput
    /**
     * Limit how many Gors to update.
     */
    limit?: number
  }

  /**
   * Gor updateManyAndReturn
   */
  export type GorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * The data used to update Gors.
     */
    data: XOR<GorUpdateManyMutationInput, GorUncheckedUpdateManyInput>
    /**
     * Filter which Gors to update
     */
    where?: GorWhereInput
    /**
     * Limit how many Gors to update.
     */
    limit?: number
  }

  /**
   * Gor upsert
   */
  export type GorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * The filter to search for the Gor to update in case it exists.
     */
    where: GorWhereUniqueInput
    /**
     * In case the Gor found by the `where` argument doesn't exist, create a new Gor with this data.
     */
    create: XOR<GorCreateInput, GorUncheckedCreateInput>
    /**
     * In case the Gor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GorUpdateInput, GorUncheckedUpdateInput>
  }

  /**
   * Gor delete
   */
  export type GorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
    /**
     * Filter which Gor to delete.
     */
    where: GorWhereUniqueInput
  }

  /**
   * Gor deleteMany
   */
  export type GorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gors to delete
     */
    where?: GorWhereInput
    /**
     * Limit how many Gors to delete.
     */
    limit?: number
  }

  /**
   * Gor without action
   */
  export type GorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gor
     */
    select?: GorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gor
     */
    omit?: GorOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    address: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    launchedTokens?: boolean | User$launchedTokensArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    launchedTokens?: boolean | User$launchedTokensArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      launchedTokens: Prisma.$TokenPayload<ExtArgs>[]
      purchases: Prisma.$TokenPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      address: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    launchedTokens<T extends User$launchedTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$launchedTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.launchedTokens
   */
  export type User$launchedTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    where?: TokenPurchaseWhereInput
    orderBy?: TokenPurchaseOrderByWithRelationInput | TokenPurchaseOrderByWithRelationInput[]
    cursor?: TokenPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenPurchaseScalarFieldEnum | TokenPurchaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    decimals: number | null
    bondingCurveSlope: number | null
    holders: number | null
  }

  export type TokenSumAggregateOutputType = {
    decimals: number | null
    bondingCurveSlope: number | null
    holders: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    symbol: string | null
    url: string | null
    mintAddress: string | null
    userId: string | null
    website: string | null
    twitter: string | null
    supply: string | null
    decimals: number | null
    bondingCurveSlope: number | null
    metadataUrl: string | null
    imageUrl: string | null
    description: string | null
    contractAddress: string | null
    marketCap: string | null
    totalRaised: string | null
    launchDate: Date | null
    telegram: string | null
    discord: string | null
    holders: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    symbol: string | null
    url: string | null
    mintAddress: string | null
    userId: string | null
    website: string | null
    twitter: string | null
    supply: string | null
    decimals: number | null
    bondingCurveSlope: number | null
    metadataUrl: string | null
    imageUrl: string | null
    description: string | null
    contractAddress: string | null
    marketCap: string | null
    totalRaised: string | null
    launchDate: Date | null
    telegram: string | null
    discord: string | null
    holders: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    address: number
    name: number
    symbol: number
    url: number
    mintAddress: number
    userId: number
    website: number
    twitter: number
    supply: number
    decimals: number
    bondingCurveSlope: number
    metadataUrl: number
    imageUrl: number
    description: number
    contractAddress: number
    marketCap: number
    totalRaised: number
    launchDate: number
    telegram: number
    discord: number
    holders: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    decimals?: true
    bondingCurveSlope?: true
    holders?: true
  }

  export type TokenSumAggregateInputType = {
    decimals?: true
    bondingCurveSlope?: true
    holders?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    address?: true
    name?: true
    symbol?: true
    url?: true
    mintAddress?: true
    userId?: true
    website?: true
    twitter?: true
    supply?: true
    decimals?: true
    bondingCurveSlope?: true
    metadataUrl?: true
    imageUrl?: true
    description?: true
    contractAddress?: true
    marketCap?: true
    totalRaised?: true
    launchDate?: true
    telegram?: true
    discord?: true
    holders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    address?: true
    name?: true
    symbol?: true
    url?: true
    mintAddress?: true
    userId?: true
    website?: true
    twitter?: true
    supply?: true
    decimals?: true
    bondingCurveSlope?: true
    metadataUrl?: true
    imageUrl?: true
    description?: true
    contractAddress?: true
    marketCap?: true
    totalRaised?: true
    launchDate?: true
    telegram?: true
    discord?: true
    holders?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    address?: true
    name?: true
    symbol?: true
    url?: true
    mintAddress?: true
    userId?: true
    website?: true
    twitter?: true
    supply?: true
    decimals?: true
    bondingCurveSlope?: true
    metadataUrl?: true
    imageUrl?: true
    description?: true
    contractAddress?: true
    marketCap?: true
    totalRaised?: true
    launchDate?: true
    telegram?: true
    discord?: true
    holders?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    address: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website: string | null
    twitter: string | null
    supply: string | null
    decimals: number
    bondingCurveSlope: number | null
    metadataUrl: string | null
    imageUrl: string | null
    description: string | null
    contractAddress: string | null
    marketCap: string | null
    totalRaised: string
    launchDate: Date | null
    telegram: string | null
    discord: string | null
    holders: number
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    symbol?: boolean
    url?: boolean
    mintAddress?: boolean
    userId?: boolean
    website?: boolean
    twitter?: boolean
    supply?: boolean
    decimals?: boolean
    bondingCurveSlope?: boolean
    metadataUrl?: boolean
    imageUrl?: boolean
    description?: boolean
    contractAddress?: boolean
    marketCap?: boolean
    totalRaised?: boolean
    launchDate?: boolean
    telegram?: boolean
    discord?: boolean
    holders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    basePools?: boolean | Token$basePoolsArgs<ExtArgs>
    quotePools?: boolean | Token$quotePoolsArgs<ExtArgs>
    launches?: boolean | Token$launchesArgs<ExtArgs>
    tokenHolders?: boolean | Token$tokenHoldersArgs<ExtArgs>
    transactions?: boolean | Token$transactionsArgs<ExtArgs>
    priceHistory?: boolean | Token$priceHistoryArgs<ExtArgs>
    purchases?: boolean | Token$purchasesArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    symbol?: boolean
    url?: boolean
    mintAddress?: boolean
    userId?: boolean
    website?: boolean
    twitter?: boolean
    supply?: boolean
    decimals?: boolean
    bondingCurveSlope?: boolean
    metadataUrl?: boolean
    imageUrl?: boolean
    description?: boolean
    contractAddress?: boolean
    marketCap?: boolean
    totalRaised?: boolean
    launchDate?: boolean
    telegram?: boolean
    discord?: boolean
    holders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    symbol?: boolean
    url?: boolean
    mintAddress?: boolean
    userId?: boolean
    website?: boolean
    twitter?: boolean
    supply?: boolean
    decimals?: boolean
    bondingCurveSlope?: boolean
    metadataUrl?: boolean
    imageUrl?: boolean
    description?: boolean
    contractAddress?: boolean
    marketCap?: boolean
    totalRaised?: boolean
    launchDate?: boolean
    telegram?: boolean
    discord?: boolean
    holders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    address?: boolean
    name?: boolean
    symbol?: boolean
    url?: boolean
    mintAddress?: boolean
    userId?: boolean
    website?: boolean
    twitter?: boolean
    supply?: boolean
    decimals?: boolean
    bondingCurveSlope?: boolean
    metadataUrl?: boolean
    imageUrl?: boolean
    description?: boolean
    contractAddress?: boolean
    marketCap?: boolean
    totalRaised?: boolean
    launchDate?: boolean
    telegram?: boolean
    discord?: boolean
    holders?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "name" | "symbol" | "url" | "mintAddress" | "userId" | "website" | "twitter" | "supply" | "decimals" | "bondingCurveSlope" | "metadataUrl" | "imageUrl" | "description" | "contractAddress" | "marketCap" | "totalRaised" | "launchDate" | "telegram" | "discord" | "holders" | "createdAt" | "updatedAt", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    basePools?: boolean | Token$basePoolsArgs<ExtArgs>
    quotePools?: boolean | Token$quotePoolsArgs<ExtArgs>
    launches?: boolean | Token$launchesArgs<ExtArgs>
    tokenHolders?: boolean | Token$tokenHoldersArgs<ExtArgs>
    transactions?: boolean | Token$transactionsArgs<ExtArgs>
    priceHistory?: boolean | Token$priceHistoryArgs<ExtArgs>
    purchases?: boolean | Token$purchasesArgs<ExtArgs>
    _count?: boolean | TokenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      basePools: Prisma.$PoolPayload<ExtArgs>[]
      quotePools: Prisma.$PoolPayload<ExtArgs>[]
      launches: Prisma.$TokenLaunchPayload<ExtArgs>[]
      tokenHolders: Prisma.$TokenHolderPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
      purchases: Prisma.$TokenPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string | null
      name: string
      symbol: string
      url: string
      mintAddress: string
      userId: string
      website: string | null
      twitter: string | null
      supply: string | null
      decimals: number
      bondingCurveSlope: number | null
      metadataUrl: string | null
      imageUrl: string | null
      description: string | null
      contractAddress: string | null
      marketCap: string | null
      totalRaised: string
      launchDate: Date | null
      telegram: string | null
      discord: string | null
      holders: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    basePools<T extends Token$basePoolsArgs<ExtArgs> = {}>(args?: Subset<T, Token$basePoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quotePools<T extends Token$quotePoolsArgs<ExtArgs> = {}>(args?: Subset<T, Token$quotePoolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    launches<T extends Token$launchesArgs<ExtArgs> = {}>(args?: Subset<T, Token$launchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokenHolders<T extends Token$tokenHoldersArgs<ExtArgs> = {}>(args?: Subset<T, Token$tokenHoldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Token$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Token$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistory<T extends Token$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Token$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends Token$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Token$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly address: FieldRef<"Token", 'String'>
    readonly name: FieldRef<"Token", 'String'>
    readonly symbol: FieldRef<"Token", 'String'>
    readonly url: FieldRef<"Token", 'String'>
    readonly mintAddress: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly website: FieldRef<"Token", 'String'>
    readonly twitter: FieldRef<"Token", 'String'>
    readonly supply: FieldRef<"Token", 'String'>
    readonly decimals: FieldRef<"Token", 'Int'>
    readonly bondingCurveSlope: FieldRef<"Token", 'Float'>
    readonly metadataUrl: FieldRef<"Token", 'String'>
    readonly imageUrl: FieldRef<"Token", 'String'>
    readonly description: FieldRef<"Token", 'String'>
    readonly contractAddress: FieldRef<"Token", 'String'>
    readonly marketCap: FieldRef<"Token", 'String'>
    readonly totalRaised: FieldRef<"Token", 'String'>
    readonly launchDate: FieldRef<"Token", 'DateTime'>
    readonly telegram: FieldRef<"Token", 'String'>
    readonly discord: FieldRef<"Token", 'String'>
    readonly holders: FieldRef<"Token", 'Int'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly updatedAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token.basePools
   */
  export type Token$basePoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    cursor?: PoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Token.quotePools
   */
  export type Token$quotePoolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    cursor?: PoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Token.launches
   */
  export type Token$launchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    where?: TokenLaunchWhereInput
    orderBy?: TokenLaunchOrderByWithRelationInput | TokenLaunchOrderByWithRelationInput[]
    cursor?: TokenLaunchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenLaunchScalarFieldEnum | TokenLaunchScalarFieldEnum[]
  }

  /**
   * Token.tokenHolders
   */
  export type Token$tokenHoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    where?: TokenHolderWhereInput
    orderBy?: TokenHolderOrderByWithRelationInput | TokenHolderOrderByWithRelationInput[]
    cursor?: TokenHolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenHolderScalarFieldEnum | TokenHolderScalarFieldEnum[]
  }

  /**
   * Token.transactions
   */
  export type Token$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Token.priceHistory
   */
  export type Token$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Token.purchases
   */
  export type Token$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    where?: TokenPurchaseWhereInput
    orderBy?: TokenPurchaseOrderByWithRelationInput | TokenPurchaseOrderByWithRelationInput[]
    cursor?: TokenPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenPurchaseScalarFieldEnum | TokenPurchaseScalarFieldEnum[]
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model TokenPurchase
   */

  export type AggregateTokenPurchase = {
    _count: TokenPurchaseCountAggregateOutputType | null
    _avg: TokenPurchaseAvgAggregateOutputType | null
    _sum: TokenPurchaseSumAggregateOutputType | null
    _min: TokenPurchaseMinAggregateOutputType | null
    _max: TokenPurchaseMaxAggregateOutputType | null
  }

  export type TokenPurchaseAvgAggregateOutputType = {
    quantity: number | null
  }

  export type TokenPurchaseSumAggregateOutputType = {
    quantity: number | null
  }

  export type TokenPurchaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenId: string | null
    quantity: number | null
    pricePerToken: string | null
    totalPrice: string | null
    purchaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenPurchaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenId: string | null
    quantity: number | null
    pricePerToken: string | null
    totalPrice: string | null
    purchaseDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    tokenId: number
    quantity: number
    pricePerToken: number
    totalPrice: number
    purchaseDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenPurchaseAvgAggregateInputType = {
    quantity?: true
  }

  export type TokenPurchaseSumAggregateInputType = {
    quantity?: true
  }

  export type TokenPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    tokenId?: true
    quantity?: true
    pricePerToken?: true
    totalPrice?: true
    purchaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenId?: true
    quantity?: true
    pricePerToken?: true
    totalPrice?: true
    purchaseDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    tokenId?: true
    quantity?: true
    pricePerToken?: true
    totalPrice?: true
    purchaseDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenPurchase to aggregate.
     */
    where?: TokenPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPurchases to fetch.
     */
    orderBy?: TokenPurchaseOrderByWithRelationInput | TokenPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenPurchases
    **/
    _count?: true | TokenPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenPurchaseMaxAggregateInputType
  }

  export type GetTokenPurchaseAggregateType<T extends TokenPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenPurchase[P]>
      : GetScalarType<T[P], AggregateTokenPurchase[P]>
  }




  export type TokenPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenPurchaseWhereInput
    orderBy?: TokenPurchaseOrderByWithAggregationInput | TokenPurchaseOrderByWithAggregationInput[]
    by: TokenPurchaseScalarFieldEnum[] | TokenPurchaseScalarFieldEnum
    having?: TokenPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenPurchaseCountAggregateInputType | true
    _avg?: TokenPurchaseAvgAggregateInputType
    _sum?: TokenPurchaseSumAggregateInputType
    _min?: TokenPurchaseMinAggregateInputType
    _max?: TokenPurchaseMaxAggregateInputType
  }

  export type TokenPurchaseGroupByOutputType = {
    id: string
    userId: string
    tokenId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate: Date
    createdAt: Date
    updatedAt: Date
    _count: TokenPurchaseCountAggregateOutputType | null
    _avg: TokenPurchaseAvgAggregateOutputType | null
    _sum: TokenPurchaseSumAggregateOutputType | null
    _min: TokenPurchaseMinAggregateOutputType | null
    _max: TokenPurchaseMaxAggregateOutputType | null
  }

  type GetTokenPurchaseGroupByPayload<T extends TokenPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], TokenPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type TokenPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenId?: boolean
    quantity?: boolean
    pricePerToken?: boolean
    totalPrice?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenPurchase"]>

  export type TokenPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenId?: boolean
    quantity?: boolean
    pricePerToken?: boolean
    totalPrice?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenPurchase"]>

  export type TokenPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenId?: boolean
    quantity?: boolean
    pricePerToken?: boolean
    totalPrice?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenPurchase"]>

  export type TokenPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenId?: boolean
    quantity?: boolean
    pricePerToken?: boolean
    totalPrice?: boolean
    purchaseDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenId" | "quantity" | "pricePerToken" | "totalPrice" | "purchaseDate" | "createdAt" | "updatedAt", ExtArgs["result"]["tokenPurchase"]>
  export type TokenPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $TokenPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenPurchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenId: string
      quantity: number
      pricePerToken: string
      totalPrice: string
      purchaseDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tokenPurchase"]>
    composites: {}
  }

  type TokenPurchaseGetPayload<S extends boolean | null | undefined | TokenPurchaseDefaultArgs> = $Result.GetResult<Prisma.$TokenPurchasePayload, S>

  type TokenPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenPurchaseCountAggregateInputType | true
    }

  export interface TokenPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenPurchase'], meta: { name: 'TokenPurchase' } }
    /**
     * Find zero or one TokenPurchase that matches the filter.
     * @param {TokenPurchaseFindUniqueArgs} args - Arguments to find a TokenPurchase
     * @example
     * // Get one TokenPurchase
     * const tokenPurchase = await prisma.tokenPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenPurchaseFindUniqueArgs>(args: SelectSubset<T, TokenPurchaseFindUniqueArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenPurchaseFindUniqueOrThrowArgs} args - Arguments to find a TokenPurchase
     * @example
     * // Get one TokenPurchase
     * const tokenPurchase = await prisma.tokenPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseFindFirstArgs} args - Arguments to find a TokenPurchase
     * @example
     * // Get one TokenPurchase
     * const tokenPurchase = await prisma.tokenPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenPurchaseFindFirstArgs>(args?: SelectSubset<T, TokenPurchaseFindFirstArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseFindFirstOrThrowArgs} args - Arguments to find a TokenPurchase
     * @example
     * // Get one TokenPurchase
     * const tokenPurchase = await prisma.tokenPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenPurchases
     * const tokenPurchases = await prisma.tokenPurchase.findMany()
     * 
     * // Get first 10 TokenPurchases
     * const tokenPurchases = await prisma.tokenPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenPurchaseWithIdOnly = await prisma.tokenPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenPurchaseFindManyArgs>(args?: SelectSubset<T, TokenPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenPurchase.
     * @param {TokenPurchaseCreateArgs} args - Arguments to create a TokenPurchase.
     * @example
     * // Create one TokenPurchase
     * const TokenPurchase = await prisma.tokenPurchase.create({
     *   data: {
     *     // ... data to create a TokenPurchase
     *   }
     * })
     * 
     */
    create<T extends TokenPurchaseCreateArgs>(args: SelectSubset<T, TokenPurchaseCreateArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenPurchases.
     * @param {TokenPurchaseCreateManyArgs} args - Arguments to create many TokenPurchases.
     * @example
     * // Create many TokenPurchases
     * const tokenPurchase = await prisma.tokenPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenPurchaseCreateManyArgs>(args?: SelectSubset<T, TokenPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenPurchases and returns the data saved in the database.
     * @param {TokenPurchaseCreateManyAndReturnArgs} args - Arguments to create many TokenPurchases.
     * @example
     * // Create many TokenPurchases
     * const tokenPurchase = await prisma.tokenPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenPurchases and only return the `id`
     * const tokenPurchaseWithIdOnly = await prisma.tokenPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenPurchase.
     * @param {TokenPurchaseDeleteArgs} args - Arguments to delete one TokenPurchase.
     * @example
     * // Delete one TokenPurchase
     * const TokenPurchase = await prisma.tokenPurchase.delete({
     *   where: {
     *     // ... filter to delete one TokenPurchase
     *   }
     * })
     * 
     */
    delete<T extends TokenPurchaseDeleteArgs>(args: SelectSubset<T, TokenPurchaseDeleteArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenPurchase.
     * @param {TokenPurchaseUpdateArgs} args - Arguments to update one TokenPurchase.
     * @example
     * // Update one TokenPurchase
     * const tokenPurchase = await prisma.tokenPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenPurchaseUpdateArgs>(args: SelectSubset<T, TokenPurchaseUpdateArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenPurchases.
     * @param {TokenPurchaseDeleteManyArgs} args - Arguments to filter TokenPurchases to delete.
     * @example
     * // Delete a few TokenPurchases
     * const { count } = await prisma.tokenPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenPurchaseDeleteManyArgs>(args?: SelectSubset<T, TokenPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenPurchases
     * const tokenPurchase = await prisma.tokenPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenPurchaseUpdateManyArgs>(args: SelectSubset<T, TokenPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenPurchases and returns the data updated in the database.
     * @param {TokenPurchaseUpdateManyAndReturnArgs} args - Arguments to update many TokenPurchases.
     * @example
     * // Update many TokenPurchases
     * const tokenPurchase = await prisma.tokenPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenPurchases and only return the `id`
     * const tokenPurchaseWithIdOnly = await prisma.tokenPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenPurchase.
     * @param {TokenPurchaseUpsertArgs} args - Arguments to update or create a TokenPurchase.
     * @example
     * // Update or create a TokenPurchase
     * const tokenPurchase = await prisma.tokenPurchase.upsert({
     *   create: {
     *     // ... data to create a TokenPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenPurchase we want to update
     *   }
     * })
     */
    upsert<T extends TokenPurchaseUpsertArgs>(args: SelectSubset<T, TokenPurchaseUpsertArgs<ExtArgs>>): Prisma__TokenPurchaseClient<$Result.GetResult<Prisma.$TokenPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseCountArgs} args - Arguments to filter TokenPurchases to count.
     * @example
     * // Count the number of TokenPurchases
     * const count = await prisma.tokenPurchase.count({
     *   where: {
     *     // ... the filter for the TokenPurchases we want to count
     *   }
     * })
    **/
    count<T extends TokenPurchaseCountArgs>(
      args?: Subset<T, TokenPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenPurchaseAggregateArgs>(args: Subset<T, TokenPurchaseAggregateArgs>): Prisma.PrismaPromise<GetTokenPurchaseAggregateType<T>>

    /**
     * Group by TokenPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenPurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: TokenPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenPurchase model
   */
  readonly fields: TokenPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenPurchase model
   */
  interface TokenPurchaseFieldRefs {
    readonly id: FieldRef<"TokenPurchase", 'String'>
    readonly userId: FieldRef<"TokenPurchase", 'String'>
    readonly tokenId: FieldRef<"TokenPurchase", 'String'>
    readonly quantity: FieldRef<"TokenPurchase", 'Int'>
    readonly pricePerToken: FieldRef<"TokenPurchase", 'String'>
    readonly totalPrice: FieldRef<"TokenPurchase", 'String'>
    readonly purchaseDate: FieldRef<"TokenPurchase", 'DateTime'>
    readonly createdAt: FieldRef<"TokenPurchase", 'DateTime'>
    readonly updatedAt: FieldRef<"TokenPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenPurchase findUnique
   */
  export type TokenPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TokenPurchase to fetch.
     */
    where: TokenPurchaseWhereUniqueInput
  }

  /**
   * TokenPurchase findUniqueOrThrow
   */
  export type TokenPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TokenPurchase to fetch.
     */
    where: TokenPurchaseWhereUniqueInput
  }

  /**
   * TokenPurchase findFirst
   */
  export type TokenPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TokenPurchase to fetch.
     */
    where?: TokenPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPurchases to fetch.
     */
    orderBy?: TokenPurchaseOrderByWithRelationInput | TokenPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenPurchases.
     */
    cursor?: TokenPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenPurchases.
     */
    distinct?: TokenPurchaseScalarFieldEnum | TokenPurchaseScalarFieldEnum[]
  }

  /**
   * TokenPurchase findFirstOrThrow
   */
  export type TokenPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TokenPurchase to fetch.
     */
    where?: TokenPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPurchases to fetch.
     */
    orderBy?: TokenPurchaseOrderByWithRelationInput | TokenPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenPurchases.
     */
    cursor?: TokenPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenPurchases.
     */
    distinct?: TokenPurchaseScalarFieldEnum | TokenPurchaseScalarFieldEnum[]
  }

  /**
   * TokenPurchase findMany
   */
  export type TokenPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TokenPurchases to fetch.
     */
    where?: TokenPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenPurchases to fetch.
     */
    orderBy?: TokenPurchaseOrderByWithRelationInput | TokenPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenPurchases.
     */
    cursor?: TokenPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenPurchases.
     */
    skip?: number
    distinct?: TokenPurchaseScalarFieldEnum | TokenPurchaseScalarFieldEnum[]
  }

  /**
   * TokenPurchase create
   */
  export type TokenPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenPurchase.
     */
    data: XOR<TokenPurchaseCreateInput, TokenPurchaseUncheckedCreateInput>
  }

  /**
   * TokenPurchase createMany
   */
  export type TokenPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenPurchases.
     */
    data: TokenPurchaseCreateManyInput | TokenPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenPurchase createManyAndReturn
   */
  export type TokenPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many TokenPurchases.
     */
    data: TokenPurchaseCreateManyInput | TokenPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenPurchase update
   */
  export type TokenPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenPurchase.
     */
    data: XOR<TokenPurchaseUpdateInput, TokenPurchaseUncheckedUpdateInput>
    /**
     * Choose, which TokenPurchase to update.
     */
    where: TokenPurchaseWhereUniqueInput
  }

  /**
   * TokenPurchase updateMany
   */
  export type TokenPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenPurchases.
     */
    data: XOR<TokenPurchaseUpdateManyMutationInput, TokenPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which TokenPurchases to update
     */
    where?: TokenPurchaseWhereInput
    /**
     * Limit how many TokenPurchases to update.
     */
    limit?: number
  }

  /**
   * TokenPurchase updateManyAndReturn
   */
  export type TokenPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update TokenPurchases.
     */
    data: XOR<TokenPurchaseUpdateManyMutationInput, TokenPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which TokenPurchases to update
     */
    where?: TokenPurchaseWhereInput
    /**
     * Limit how many TokenPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenPurchase upsert
   */
  export type TokenPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenPurchase to update in case it exists.
     */
    where: TokenPurchaseWhereUniqueInput
    /**
     * In case the TokenPurchase found by the `where` argument doesn't exist, create a new TokenPurchase with this data.
     */
    create: XOR<TokenPurchaseCreateInput, TokenPurchaseUncheckedCreateInput>
    /**
     * In case the TokenPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenPurchaseUpdateInput, TokenPurchaseUncheckedUpdateInput>
  }

  /**
   * TokenPurchase delete
   */
  export type TokenPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
    /**
     * Filter which TokenPurchase to delete.
     */
    where: TokenPurchaseWhereUniqueInput
  }

  /**
   * TokenPurchase deleteMany
   */
  export type TokenPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenPurchases to delete
     */
    where?: TokenPurchaseWhereInput
    /**
     * Limit how many TokenPurchases to delete.
     */
    limit?: number
  }

  /**
   * TokenPurchase without action
   */
  export type TokenPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenPurchase
     */
    select?: TokenPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenPurchase
     */
    omit?: TokenPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PoolConfig
   */

  export type AggregatePoolConfig = {
    _count: PoolConfigCountAggregateOutputType | null
    _min: PoolConfigMinAggregateOutputType | null
    _max: PoolConfigMaxAggregateOutputType | null
  }

  export type PoolConfigMinAggregateOutputType = {
    id: string | null
    address: string | null
    tradeFee: string | null
    protocolFee: string | null
    referralFee: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PoolConfigMaxAggregateOutputType = {
    id: string | null
    address: string | null
    tradeFee: string | null
    protocolFee: string | null
    referralFee: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PoolConfigCountAggregateOutputType = {
    id: number
    address: number
    tradeFee: number
    protocolFee: number
    referralFee: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PoolConfigMinAggregateInputType = {
    id?: true
    address?: true
    tradeFee?: true
    protocolFee?: true
    referralFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PoolConfigMaxAggregateInputType = {
    id?: true
    address?: true
    tradeFee?: true
    protocolFee?: true
    referralFee?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PoolConfigCountAggregateInputType = {
    id?: true
    address?: true
    tradeFee?: true
    protocolFee?: true
    referralFee?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PoolConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolConfig to aggregate.
     */
    where?: PoolConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolConfigs to fetch.
     */
    orderBy?: PoolConfigOrderByWithRelationInput | PoolConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolConfigs
    **/
    _count?: true | PoolConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolConfigMaxAggregateInputType
  }

  export type GetPoolConfigAggregateType<T extends PoolConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolConfig[P]>
      : GetScalarType<T[P], AggregatePoolConfig[P]>
  }




  export type PoolConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolConfigWhereInput
    orderBy?: PoolConfigOrderByWithAggregationInput | PoolConfigOrderByWithAggregationInput[]
    by: PoolConfigScalarFieldEnum[] | PoolConfigScalarFieldEnum
    having?: PoolConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolConfigCountAggregateInputType | true
    _min?: PoolConfigMinAggregateInputType
    _max?: PoolConfigMaxAggregateInputType
  }

  export type PoolConfigGroupByOutputType = {
    id: string
    address: string
    tradeFee: string
    protocolFee: string
    referralFee: string
    createdAt: Date
    updatedAt: Date
    _count: PoolConfigCountAggregateOutputType | null
    _min: PoolConfigMinAggregateOutputType | null
    _max: PoolConfigMaxAggregateOutputType | null
  }

  type GetPoolConfigGroupByPayload<T extends PoolConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PoolConfigGroupByOutputType[P]>
        }
      >
    >


  export type PoolConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    tradeFee?: boolean
    protocolFee?: boolean
    referralFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pools?: boolean | PoolConfig$poolsArgs<ExtArgs>
    _count?: boolean | PoolConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolConfig"]>

  export type PoolConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    tradeFee?: boolean
    protocolFee?: boolean
    referralFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["poolConfig"]>

  export type PoolConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    tradeFee?: boolean
    protocolFee?: boolean
    referralFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["poolConfig"]>

  export type PoolConfigSelectScalar = {
    id?: boolean
    address?: boolean
    tradeFee?: boolean
    protocolFee?: boolean
    referralFee?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PoolConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "tradeFee" | "protocolFee" | "referralFee" | "createdAt" | "updatedAt", ExtArgs["result"]["poolConfig"]>
  export type PoolConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pools?: boolean | PoolConfig$poolsArgs<ExtArgs>
    _count?: boolean | PoolConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoolConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PoolConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PoolConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolConfig"
    objects: {
      pools: Prisma.$PoolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      tradeFee: string
      protocolFee: string
      referralFee: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["poolConfig"]>
    composites: {}
  }

  type PoolConfigGetPayload<S extends boolean | null | undefined | PoolConfigDefaultArgs> = $Result.GetResult<Prisma.$PoolConfigPayload, S>

  type PoolConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolConfigCountAggregateInputType | true
    }

  export interface PoolConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolConfig'], meta: { name: 'PoolConfig' } }
    /**
     * Find zero or one PoolConfig that matches the filter.
     * @param {PoolConfigFindUniqueArgs} args - Arguments to find a PoolConfig
     * @example
     * // Get one PoolConfig
     * const poolConfig = await prisma.poolConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolConfigFindUniqueArgs>(args: SelectSubset<T, PoolConfigFindUniqueArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolConfigFindUniqueOrThrowArgs} args - Arguments to find a PoolConfig
     * @example
     * // Get one PoolConfig
     * const poolConfig = await prisma.poolConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigFindFirstArgs} args - Arguments to find a PoolConfig
     * @example
     * // Get one PoolConfig
     * const poolConfig = await prisma.poolConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolConfigFindFirstArgs>(args?: SelectSubset<T, PoolConfigFindFirstArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigFindFirstOrThrowArgs} args - Arguments to find a PoolConfig
     * @example
     * // Get one PoolConfig
     * const poolConfig = await prisma.poolConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolConfigs
     * const poolConfigs = await prisma.poolConfig.findMany()
     * 
     * // Get first 10 PoolConfigs
     * const poolConfigs = await prisma.poolConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolConfigWithIdOnly = await prisma.poolConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolConfigFindManyArgs>(args?: SelectSubset<T, PoolConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolConfig.
     * @param {PoolConfigCreateArgs} args - Arguments to create a PoolConfig.
     * @example
     * // Create one PoolConfig
     * const PoolConfig = await prisma.poolConfig.create({
     *   data: {
     *     // ... data to create a PoolConfig
     *   }
     * })
     * 
     */
    create<T extends PoolConfigCreateArgs>(args: SelectSubset<T, PoolConfigCreateArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolConfigs.
     * @param {PoolConfigCreateManyArgs} args - Arguments to create many PoolConfigs.
     * @example
     * // Create many PoolConfigs
     * const poolConfig = await prisma.poolConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolConfigCreateManyArgs>(args?: SelectSubset<T, PoolConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolConfigs and returns the data saved in the database.
     * @param {PoolConfigCreateManyAndReturnArgs} args - Arguments to create many PoolConfigs.
     * @example
     * // Create many PoolConfigs
     * const poolConfig = await prisma.poolConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolConfigs and only return the `id`
     * const poolConfigWithIdOnly = await prisma.poolConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolConfig.
     * @param {PoolConfigDeleteArgs} args - Arguments to delete one PoolConfig.
     * @example
     * // Delete one PoolConfig
     * const PoolConfig = await prisma.poolConfig.delete({
     *   where: {
     *     // ... filter to delete one PoolConfig
     *   }
     * })
     * 
     */
    delete<T extends PoolConfigDeleteArgs>(args: SelectSubset<T, PoolConfigDeleteArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolConfig.
     * @param {PoolConfigUpdateArgs} args - Arguments to update one PoolConfig.
     * @example
     * // Update one PoolConfig
     * const poolConfig = await prisma.poolConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolConfigUpdateArgs>(args: SelectSubset<T, PoolConfigUpdateArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolConfigs.
     * @param {PoolConfigDeleteManyArgs} args - Arguments to filter PoolConfigs to delete.
     * @example
     * // Delete a few PoolConfigs
     * const { count } = await prisma.poolConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolConfigDeleteManyArgs>(args?: SelectSubset<T, PoolConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolConfigs
     * const poolConfig = await prisma.poolConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolConfigUpdateManyArgs>(args: SelectSubset<T, PoolConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolConfigs and returns the data updated in the database.
     * @param {PoolConfigUpdateManyAndReturnArgs} args - Arguments to update many PoolConfigs.
     * @example
     * // Update many PoolConfigs
     * const poolConfig = await prisma.poolConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolConfigs and only return the `id`
     * const poolConfigWithIdOnly = await prisma.poolConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolConfig.
     * @param {PoolConfigUpsertArgs} args - Arguments to update or create a PoolConfig.
     * @example
     * // Update or create a PoolConfig
     * const poolConfig = await prisma.poolConfig.upsert({
     *   create: {
     *     // ... data to create a PoolConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolConfig we want to update
     *   }
     * })
     */
    upsert<T extends PoolConfigUpsertArgs>(args: SelectSubset<T, PoolConfigUpsertArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigCountArgs} args - Arguments to filter PoolConfigs to count.
     * @example
     * // Count the number of PoolConfigs
     * const count = await prisma.poolConfig.count({
     *   where: {
     *     // ... the filter for the PoolConfigs we want to count
     *   }
     * })
    **/
    count<T extends PoolConfigCountArgs>(
      args?: Subset<T, PoolConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolConfigAggregateArgs>(args: Subset<T, PoolConfigAggregateArgs>): Prisma.PrismaPromise<GetPoolConfigAggregateType<T>>

    /**
     * Group by PoolConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolConfigGroupByArgs['orderBy'] }
        : { orderBy?: PoolConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolConfig model
   */
  readonly fields: PoolConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pools<T extends PoolConfig$poolsArgs<ExtArgs> = {}>(args?: Subset<T, PoolConfig$poolsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoolConfig model
   */
  interface PoolConfigFieldRefs {
    readonly id: FieldRef<"PoolConfig", 'String'>
    readonly address: FieldRef<"PoolConfig", 'String'>
    readonly tradeFee: FieldRef<"PoolConfig", 'String'>
    readonly protocolFee: FieldRef<"PoolConfig", 'String'>
    readonly referralFee: FieldRef<"PoolConfig", 'String'>
    readonly createdAt: FieldRef<"PoolConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PoolConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PoolConfig findUnique
   */
  export type PoolConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * Filter, which PoolConfig to fetch.
     */
    where: PoolConfigWhereUniqueInput
  }

  /**
   * PoolConfig findUniqueOrThrow
   */
  export type PoolConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * Filter, which PoolConfig to fetch.
     */
    where: PoolConfigWhereUniqueInput
  }

  /**
   * PoolConfig findFirst
   */
  export type PoolConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * Filter, which PoolConfig to fetch.
     */
    where?: PoolConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolConfigs to fetch.
     */
    orderBy?: PoolConfigOrderByWithRelationInput | PoolConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolConfigs.
     */
    cursor?: PoolConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolConfigs.
     */
    distinct?: PoolConfigScalarFieldEnum | PoolConfigScalarFieldEnum[]
  }

  /**
   * PoolConfig findFirstOrThrow
   */
  export type PoolConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * Filter, which PoolConfig to fetch.
     */
    where?: PoolConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolConfigs to fetch.
     */
    orderBy?: PoolConfigOrderByWithRelationInput | PoolConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolConfigs.
     */
    cursor?: PoolConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolConfigs.
     */
    distinct?: PoolConfigScalarFieldEnum | PoolConfigScalarFieldEnum[]
  }

  /**
   * PoolConfig findMany
   */
  export type PoolConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * Filter, which PoolConfigs to fetch.
     */
    where?: PoolConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolConfigs to fetch.
     */
    orderBy?: PoolConfigOrderByWithRelationInput | PoolConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolConfigs.
     */
    cursor?: PoolConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolConfigs.
     */
    skip?: number
    distinct?: PoolConfigScalarFieldEnum | PoolConfigScalarFieldEnum[]
  }

  /**
   * PoolConfig create
   */
  export type PoolConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a PoolConfig.
     */
    data: XOR<PoolConfigCreateInput, PoolConfigUncheckedCreateInput>
  }

  /**
   * PoolConfig createMany
   */
  export type PoolConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolConfigs.
     */
    data: PoolConfigCreateManyInput | PoolConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolConfig createManyAndReturn
   */
  export type PoolConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * The data used to create many PoolConfigs.
     */
    data: PoolConfigCreateManyInput | PoolConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolConfig update
   */
  export type PoolConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a PoolConfig.
     */
    data: XOR<PoolConfigUpdateInput, PoolConfigUncheckedUpdateInput>
    /**
     * Choose, which PoolConfig to update.
     */
    where: PoolConfigWhereUniqueInput
  }

  /**
   * PoolConfig updateMany
   */
  export type PoolConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolConfigs.
     */
    data: XOR<PoolConfigUpdateManyMutationInput, PoolConfigUncheckedUpdateManyInput>
    /**
     * Filter which PoolConfigs to update
     */
    where?: PoolConfigWhereInput
    /**
     * Limit how many PoolConfigs to update.
     */
    limit?: number
  }

  /**
   * PoolConfig updateManyAndReturn
   */
  export type PoolConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * The data used to update PoolConfigs.
     */
    data: XOR<PoolConfigUpdateManyMutationInput, PoolConfigUncheckedUpdateManyInput>
    /**
     * Filter which PoolConfigs to update
     */
    where?: PoolConfigWhereInput
    /**
     * Limit how many PoolConfigs to update.
     */
    limit?: number
  }

  /**
   * PoolConfig upsert
   */
  export type PoolConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the PoolConfig to update in case it exists.
     */
    where: PoolConfigWhereUniqueInput
    /**
     * In case the PoolConfig found by the `where` argument doesn't exist, create a new PoolConfig with this data.
     */
    create: XOR<PoolConfigCreateInput, PoolConfigUncheckedCreateInput>
    /**
     * In case the PoolConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolConfigUpdateInput, PoolConfigUncheckedUpdateInput>
  }

  /**
   * PoolConfig delete
   */
  export type PoolConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
    /**
     * Filter which PoolConfig to delete.
     */
    where: PoolConfigWhereUniqueInput
  }

  /**
   * PoolConfig deleteMany
   */
  export type PoolConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolConfigs to delete
     */
    where?: PoolConfigWhereInput
    /**
     * Limit how many PoolConfigs to delete.
     */
    limit?: number
  }

  /**
   * PoolConfig.pools
   */
  export type PoolConfig$poolsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    cursor?: PoolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * PoolConfig without action
   */
  export type PoolConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolConfig
     */
    select?: PoolConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolConfig
     */
    omit?: PoolConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolConfigInclude<ExtArgs> | null
  }


  /**
   * Model Pool
   */

  export type AggregatePool = {
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  export type PoolAvgAggregateOutputType = {
    totalTrades: number | null
  }

  export type PoolSumAggregateOutputType = {
    totalTrades: number | null
  }

  export type PoolMinAggregateOutputType = {
    id: string | null
    address: string | null
    baseTokenId: string | null
    quoteTokenId: string | null
    configId: string | null
    creator: string | null
    isActive: boolean | null
    totalVolume: string | null
    totalTrades: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PoolMaxAggregateOutputType = {
    id: string | null
    address: string | null
    baseTokenId: string | null
    quoteTokenId: string | null
    configId: string | null
    creator: string | null
    isActive: boolean | null
    totalVolume: string | null
    totalTrades: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PoolCountAggregateOutputType = {
    id: number
    address: number
    baseTokenId: number
    quoteTokenId: number
    configId: number
    creator: number
    isActive: number
    totalVolume: number
    totalTrades: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PoolAvgAggregateInputType = {
    totalTrades?: true
  }

  export type PoolSumAggregateInputType = {
    totalTrades?: true
  }

  export type PoolMinAggregateInputType = {
    id?: true
    address?: true
    baseTokenId?: true
    quoteTokenId?: true
    configId?: true
    creator?: true
    isActive?: true
    totalVolume?: true
    totalTrades?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PoolMaxAggregateInputType = {
    id?: true
    address?: true
    baseTokenId?: true
    quoteTokenId?: true
    configId?: true
    creator?: true
    isActive?: true
    totalVolume?: true
    totalTrades?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PoolCountAggregateInputType = {
    id?: true
    address?: true
    baseTokenId?: true
    quoteTokenId?: true
    configId?: true
    creator?: true
    isActive?: true
    totalVolume?: true
    totalTrades?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pool to aggregate.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pools
    **/
    _count?: true | PoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolMaxAggregateInputType
  }

  export type GetPoolAggregateType<T extends PoolAggregateArgs> = {
        [P in keyof T & keyof AggregatePool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePool[P]>
      : GetScalarType<T[P], AggregatePool[P]>
  }




  export type PoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolWhereInput
    orderBy?: PoolOrderByWithAggregationInput | PoolOrderByWithAggregationInput[]
    by: PoolScalarFieldEnum[] | PoolScalarFieldEnum
    having?: PoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolCountAggregateInputType | true
    _avg?: PoolAvgAggregateInputType
    _sum?: PoolSumAggregateInputType
    _min?: PoolMinAggregateInputType
    _max?: PoolMaxAggregateInputType
  }

  export type PoolGroupByOutputType = {
    id: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive: boolean
    totalVolume: string
    totalTrades: number
    createdAt: Date
    updatedAt: Date
    _count: PoolCountAggregateOutputType | null
    _avg: PoolAvgAggregateOutputType | null
    _sum: PoolSumAggregateOutputType | null
    _min: PoolMinAggregateOutputType | null
    _max: PoolMaxAggregateOutputType | null
  }

  type GetPoolGroupByPayload<T extends PoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolGroupByOutputType[P]>
            : GetScalarType<T[P], PoolGroupByOutputType[P]>
        }
      >
    >


  export type PoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    baseTokenId?: boolean
    quoteTokenId?: boolean
    configId?: boolean
    creator?: boolean
    isActive?: boolean
    totalVolume?: boolean
    totalTrades?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseToken?: boolean | TokenDefaultArgs<ExtArgs>
    quoteToken?: boolean | TokenDefaultArgs<ExtArgs>
    config?: boolean | PoolConfigDefaultArgs<ExtArgs>
    states?: boolean | Pool$statesArgs<ExtArgs>
    transactions?: boolean | Pool$transactionsArgs<ExtArgs>
    launches?: boolean | Pool$launchesArgs<ExtArgs>
    priceHistory?: boolean | Pool$priceHistoryArgs<ExtArgs>
    _count?: boolean | PoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    baseTokenId?: boolean
    quoteTokenId?: boolean
    configId?: boolean
    creator?: boolean
    isActive?: boolean
    totalVolume?: boolean
    totalTrades?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseToken?: boolean | TokenDefaultArgs<ExtArgs>
    quoteToken?: boolean | TokenDefaultArgs<ExtArgs>
    config?: boolean | PoolConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    baseTokenId?: boolean
    quoteTokenId?: boolean
    configId?: boolean
    creator?: boolean
    isActive?: boolean
    totalVolume?: boolean
    totalTrades?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseToken?: boolean | TokenDefaultArgs<ExtArgs>
    quoteToken?: boolean | TokenDefaultArgs<ExtArgs>
    config?: boolean | PoolConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pool"]>

  export type PoolSelectScalar = {
    id?: boolean
    address?: boolean
    baseTokenId?: boolean
    quoteTokenId?: boolean
    configId?: boolean
    creator?: boolean
    isActive?: boolean
    totalVolume?: boolean
    totalTrades?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "baseTokenId" | "quoteTokenId" | "configId" | "creator" | "isActive" | "totalVolume" | "totalTrades" | "createdAt" | "updatedAt", ExtArgs["result"]["pool"]>
  export type PoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseToken?: boolean | TokenDefaultArgs<ExtArgs>
    quoteToken?: boolean | TokenDefaultArgs<ExtArgs>
    config?: boolean | PoolConfigDefaultArgs<ExtArgs>
    states?: boolean | Pool$statesArgs<ExtArgs>
    transactions?: boolean | Pool$transactionsArgs<ExtArgs>
    launches?: boolean | Pool$launchesArgs<ExtArgs>
    priceHistory?: boolean | Pool$priceHistoryArgs<ExtArgs>
    _count?: boolean | PoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseToken?: boolean | TokenDefaultArgs<ExtArgs>
    quoteToken?: boolean | TokenDefaultArgs<ExtArgs>
    config?: boolean | PoolConfigDefaultArgs<ExtArgs>
  }
  export type PoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseToken?: boolean | TokenDefaultArgs<ExtArgs>
    quoteToken?: boolean | TokenDefaultArgs<ExtArgs>
    config?: boolean | PoolConfigDefaultArgs<ExtArgs>
  }

  export type $PoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pool"
    objects: {
      baseToken: Prisma.$TokenPayload<ExtArgs>
      quoteToken: Prisma.$TokenPayload<ExtArgs>
      config: Prisma.$PoolConfigPayload<ExtArgs>
      states: Prisma.$PoolStatePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      launches: Prisma.$TokenLaunchPayload<ExtArgs>[]
      priceHistory: Prisma.$PriceHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      baseTokenId: string
      quoteTokenId: string
      configId: string
      creator: string
      isActive: boolean
      totalVolume: string
      totalTrades: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pool"]>
    composites: {}
  }

  type PoolGetPayload<S extends boolean | null | undefined | PoolDefaultArgs> = $Result.GetResult<Prisma.$PoolPayload, S>

  type PoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolCountAggregateInputType | true
    }

  export interface PoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pool'], meta: { name: 'Pool' } }
    /**
     * Find zero or one Pool that matches the filter.
     * @param {PoolFindUniqueArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolFindUniqueArgs>(args: SelectSubset<T, PoolFindUniqueArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pool that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolFindUniqueOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolFindFirstArgs>(args?: SelectSubset<T, PoolFindFirstArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindFirstOrThrowArgs} args - Arguments to find a Pool
     * @example
     * // Get one Pool
     * const pool = await prisma.pool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pools
     * const pools = await prisma.pool.findMany()
     * 
     * // Get first 10 Pools
     * const pools = await prisma.pool.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolWithIdOnly = await prisma.pool.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolFindManyArgs>(args?: SelectSubset<T, PoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pool.
     * @param {PoolCreateArgs} args - Arguments to create a Pool.
     * @example
     * // Create one Pool
     * const Pool = await prisma.pool.create({
     *   data: {
     *     // ... data to create a Pool
     *   }
     * })
     * 
     */
    create<T extends PoolCreateArgs>(args: SelectSubset<T, PoolCreateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pools.
     * @param {PoolCreateManyArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolCreateManyArgs>(args?: SelectSubset<T, PoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pools and returns the data saved in the database.
     * @param {PoolCreateManyAndReturnArgs} args - Arguments to create many Pools.
     * @example
     * // Create many Pools
     * const pool = await prisma.pool.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pools and only return the `id`
     * const poolWithIdOnly = await prisma.pool.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pool.
     * @param {PoolDeleteArgs} args - Arguments to delete one Pool.
     * @example
     * // Delete one Pool
     * const Pool = await prisma.pool.delete({
     *   where: {
     *     // ... filter to delete one Pool
     *   }
     * })
     * 
     */
    delete<T extends PoolDeleteArgs>(args: SelectSubset<T, PoolDeleteArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pool.
     * @param {PoolUpdateArgs} args - Arguments to update one Pool.
     * @example
     * // Update one Pool
     * const pool = await prisma.pool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolUpdateArgs>(args: SelectSubset<T, PoolUpdateArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pools.
     * @param {PoolDeleteManyArgs} args - Arguments to filter Pools to delete.
     * @example
     * // Delete a few Pools
     * const { count } = await prisma.pool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolDeleteManyArgs>(args?: SelectSubset<T, PoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolUpdateManyArgs>(args: SelectSubset<T, PoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pools and returns the data updated in the database.
     * @param {PoolUpdateManyAndReturnArgs} args - Arguments to update many Pools.
     * @example
     * // Update many Pools
     * const pool = await prisma.pool.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pools and only return the `id`
     * const poolWithIdOnly = await prisma.pool.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pool.
     * @param {PoolUpsertArgs} args - Arguments to update or create a Pool.
     * @example
     * // Update or create a Pool
     * const pool = await prisma.pool.upsert({
     *   create: {
     *     // ... data to create a Pool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pool we want to update
     *   }
     * })
     */
    upsert<T extends PoolUpsertArgs>(args: SelectSubset<T, PoolUpsertArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolCountArgs} args - Arguments to filter Pools to count.
     * @example
     * // Count the number of Pools
     * const count = await prisma.pool.count({
     *   where: {
     *     // ... the filter for the Pools we want to count
     *   }
     * })
    **/
    count<T extends PoolCountArgs>(
      args?: Subset<T, PoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolAggregateArgs>(args: Subset<T, PoolAggregateArgs>): Prisma.PrismaPromise<GetPoolAggregateType<T>>

    /**
     * Group by Pool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolGroupByArgs['orderBy'] }
        : { orderBy?: PoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pool model
   */
  readonly fields: PoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseToken<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quoteToken<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    config<T extends PoolConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolConfigDefaultArgs<ExtArgs>>): Prisma__PoolConfigClient<$Result.GetResult<Prisma.$PoolConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    states<T extends Pool$statesArgs<ExtArgs> = {}>(args?: Subset<T, Pool$statesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Pool$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Pool$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    launches<T extends Pool$launchesArgs<ExtArgs> = {}>(args?: Subset<T, Pool$launchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistory<T extends Pool$priceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Pool$priceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pool model
   */
  interface PoolFieldRefs {
    readonly id: FieldRef<"Pool", 'String'>
    readonly address: FieldRef<"Pool", 'String'>
    readonly baseTokenId: FieldRef<"Pool", 'String'>
    readonly quoteTokenId: FieldRef<"Pool", 'String'>
    readonly configId: FieldRef<"Pool", 'String'>
    readonly creator: FieldRef<"Pool", 'String'>
    readonly isActive: FieldRef<"Pool", 'Boolean'>
    readonly totalVolume: FieldRef<"Pool", 'String'>
    readonly totalTrades: FieldRef<"Pool", 'Int'>
    readonly createdAt: FieldRef<"Pool", 'DateTime'>
    readonly updatedAt: FieldRef<"Pool", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pool findUnique
   */
  export type PoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findUniqueOrThrow
   */
  export type PoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool findFirst
   */
  export type PoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findFirstOrThrow
   */
  export type PoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pool to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pools.
     */
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool findMany
   */
  export type PoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter, which Pools to fetch.
     */
    where?: PoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pools to fetch.
     */
    orderBy?: PoolOrderByWithRelationInput | PoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pools.
     */
    cursor?: PoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pools.
     */
    skip?: number
    distinct?: PoolScalarFieldEnum | PoolScalarFieldEnum[]
  }

  /**
   * Pool create
   */
  export type PoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The data needed to create a Pool.
     */
    data: XOR<PoolCreateInput, PoolUncheckedCreateInput>
  }

  /**
   * Pool createMany
   */
  export type PoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pool createManyAndReturn
   */
  export type PoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data used to create many Pools.
     */
    data: PoolCreateManyInput | PoolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pool update
   */
  export type PoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The data needed to update a Pool.
     */
    data: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
    /**
     * Choose, which Pool to update.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool updateMany
   */
  export type PoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
  }

  /**
   * Pool updateManyAndReturn
   */
  export type PoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * The data used to update Pools.
     */
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyInput>
    /**
     * Filter which Pools to update
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pool upsert
   */
  export type PoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * The filter to search for the Pool to update in case it exists.
     */
    where: PoolWhereUniqueInput
    /**
     * In case the Pool found by the `where` argument doesn't exist, create a new Pool with this data.
     */
    create: XOR<PoolCreateInput, PoolUncheckedCreateInput>
    /**
     * In case the Pool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolUpdateInput, PoolUncheckedUpdateInput>
  }

  /**
   * Pool delete
   */
  export type PoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
    /**
     * Filter which Pool to delete.
     */
    where: PoolWhereUniqueInput
  }

  /**
   * Pool deleteMany
   */
  export type PoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pools to delete
     */
    where?: PoolWhereInput
    /**
     * Limit how many Pools to delete.
     */
    limit?: number
  }

  /**
   * Pool.states
   */
  export type Pool$statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    where?: PoolStateWhereInput
    orderBy?: PoolStateOrderByWithRelationInput | PoolStateOrderByWithRelationInput[]
    cursor?: PoolStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PoolStateScalarFieldEnum | PoolStateScalarFieldEnum[]
  }

  /**
   * Pool.transactions
   */
  export type Pool$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Pool.launches
   */
  export type Pool$launchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    where?: TokenLaunchWhereInput
    orderBy?: TokenLaunchOrderByWithRelationInput | TokenLaunchOrderByWithRelationInput[]
    cursor?: TokenLaunchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenLaunchScalarFieldEnum | TokenLaunchScalarFieldEnum[]
  }

  /**
   * Pool.priceHistory
   */
  export type Pool$priceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Pool without action
   */
  export type PoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pool
     */
    select?: PoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pool
     */
    omit?: PoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolInclude<ExtArgs> | null
  }


  /**
   * Model PoolState
   */

  export type AggregatePoolState = {
    _count: PoolStateCountAggregateOutputType | null
    _avg: PoolStateAvgAggregateOutputType | null
    _sum: PoolStateSumAggregateOutputType | null
    _min: PoolStateMinAggregateOutputType | null
    _max: PoolStateMaxAggregateOutputType | null
  }

  export type PoolStateAvgAggregateOutputType = {
    lastUpdateTimestamp: number | null
  }

  export type PoolStateSumAggregateOutputType = {
    lastUpdateTimestamp: bigint | null
  }

  export type PoolStateMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    lastUpdateTimestamp: bigint | null
    sqrtPriceReference: string | null
    volatilityAccumulator: string | null
    volatilityReference: string | null
    baseReserve: string | null
    quoteReserve: string | null
    currentPrice: string | null
    rawData: string | null
    createdAt: Date | null
  }

  export type PoolStateMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    lastUpdateTimestamp: bigint | null
    sqrtPriceReference: string | null
    volatilityAccumulator: string | null
    volatilityReference: string | null
    baseReserve: string | null
    quoteReserve: string | null
    currentPrice: string | null
    rawData: string | null
    createdAt: Date | null
  }

  export type PoolStateCountAggregateOutputType = {
    id: number
    poolId: number
    lastUpdateTimestamp: number
    sqrtPriceReference: number
    volatilityAccumulator: number
    volatilityReference: number
    baseReserve: number
    quoteReserve: number
    currentPrice: number
    rawData: number
    createdAt: number
    _all: number
  }


  export type PoolStateAvgAggregateInputType = {
    lastUpdateTimestamp?: true
  }

  export type PoolStateSumAggregateInputType = {
    lastUpdateTimestamp?: true
  }

  export type PoolStateMinAggregateInputType = {
    id?: true
    poolId?: true
    lastUpdateTimestamp?: true
    sqrtPriceReference?: true
    volatilityAccumulator?: true
    volatilityReference?: true
    baseReserve?: true
    quoteReserve?: true
    currentPrice?: true
    rawData?: true
    createdAt?: true
  }

  export type PoolStateMaxAggregateInputType = {
    id?: true
    poolId?: true
    lastUpdateTimestamp?: true
    sqrtPriceReference?: true
    volatilityAccumulator?: true
    volatilityReference?: true
    baseReserve?: true
    quoteReserve?: true
    currentPrice?: true
    rawData?: true
    createdAt?: true
  }

  export type PoolStateCountAggregateInputType = {
    id?: true
    poolId?: true
    lastUpdateTimestamp?: true
    sqrtPriceReference?: true
    volatilityAccumulator?: true
    volatilityReference?: true
    baseReserve?: true
    quoteReserve?: true
    currentPrice?: true
    rawData?: true
    createdAt?: true
    _all?: true
  }

  export type PoolStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolState to aggregate.
     */
    where?: PoolStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolStates to fetch.
     */
    orderBy?: PoolStateOrderByWithRelationInput | PoolStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoolStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PoolStates
    **/
    _count?: true | PoolStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoolStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoolStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoolStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoolStateMaxAggregateInputType
  }

  export type GetPoolStateAggregateType<T extends PoolStateAggregateArgs> = {
        [P in keyof T & keyof AggregatePoolState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoolState[P]>
      : GetScalarType<T[P], AggregatePoolState[P]>
  }




  export type PoolStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoolStateWhereInput
    orderBy?: PoolStateOrderByWithAggregationInput | PoolStateOrderByWithAggregationInput[]
    by: PoolStateScalarFieldEnum[] | PoolStateScalarFieldEnum
    having?: PoolStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoolStateCountAggregateInputType | true
    _avg?: PoolStateAvgAggregateInputType
    _sum?: PoolStateSumAggregateInputType
    _min?: PoolStateMinAggregateInputType
    _max?: PoolStateMaxAggregateInputType
  }

  export type PoolStateGroupByOutputType = {
    id: string
    poolId: string
    lastUpdateTimestamp: bigint
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve: string
    quoteReserve: string
    currentPrice: string | null
    rawData: string | null
    createdAt: Date
    _count: PoolStateCountAggregateOutputType | null
    _avg: PoolStateAvgAggregateOutputType | null
    _sum: PoolStateSumAggregateOutputType | null
    _min: PoolStateMinAggregateOutputType | null
    _max: PoolStateMaxAggregateOutputType | null
  }

  type GetPoolStateGroupByPayload<T extends PoolStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoolStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoolStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoolStateGroupByOutputType[P]>
            : GetScalarType<T[P], PoolStateGroupByOutputType[P]>
        }
      >
    >


  export type PoolStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    lastUpdateTimestamp?: boolean
    sqrtPriceReference?: boolean
    volatilityAccumulator?: boolean
    volatilityReference?: boolean
    baseReserve?: boolean
    quoteReserve?: boolean
    currentPrice?: boolean
    rawData?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolState"]>

  export type PoolStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    lastUpdateTimestamp?: boolean
    sqrtPriceReference?: boolean
    volatilityAccumulator?: boolean
    volatilityReference?: boolean
    baseReserve?: boolean
    quoteReserve?: boolean
    currentPrice?: boolean
    rawData?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolState"]>

  export type PoolStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    lastUpdateTimestamp?: boolean
    sqrtPriceReference?: boolean
    volatilityAccumulator?: boolean
    volatilityReference?: boolean
    baseReserve?: boolean
    quoteReserve?: boolean
    currentPrice?: boolean
    rawData?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["poolState"]>

  export type PoolStateSelectScalar = {
    id?: boolean
    poolId?: boolean
    lastUpdateTimestamp?: boolean
    sqrtPriceReference?: boolean
    volatilityAccumulator?: boolean
    volatilityReference?: boolean
    baseReserve?: boolean
    quoteReserve?: boolean
    currentPrice?: boolean
    rawData?: boolean
    createdAt?: boolean
  }

  export type PoolStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "lastUpdateTimestamp" | "sqrtPriceReference" | "volatilityAccumulator" | "volatilityReference" | "baseReserve" | "quoteReserve" | "currentPrice" | "rawData" | "createdAt", ExtArgs["result"]["poolState"]>
  export type PoolStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }
  export type PoolStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }
  export type PoolStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }

  export type $PoolStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PoolState"
    objects: {
      pool: Prisma.$PoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      lastUpdateTimestamp: bigint
      sqrtPriceReference: string
      volatilityAccumulator: string
      volatilityReference: string
      baseReserve: string
      quoteReserve: string
      currentPrice: string | null
      rawData: string | null
      createdAt: Date
    }, ExtArgs["result"]["poolState"]>
    composites: {}
  }

  type PoolStateGetPayload<S extends boolean | null | undefined | PoolStateDefaultArgs> = $Result.GetResult<Prisma.$PoolStatePayload, S>

  type PoolStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoolStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoolStateCountAggregateInputType | true
    }

  export interface PoolStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PoolState'], meta: { name: 'PoolState' } }
    /**
     * Find zero or one PoolState that matches the filter.
     * @param {PoolStateFindUniqueArgs} args - Arguments to find a PoolState
     * @example
     * // Get one PoolState
     * const poolState = await prisma.poolState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoolStateFindUniqueArgs>(args: SelectSubset<T, PoolStateFindUniqueArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PoolState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoolStateFindUniqueOrThrowArgs} args - Arguments to find a PoolState
     * @example
     * // Get one PoolState
     * const poolState = await prisma.poolState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoolStateFindUniqueOrThrowArgs>(args: SelectSubset<T, PoolStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateFindFirstArgs} args - Arguments to find a PoolState
     * @example
     * // Get one PoolState
     * const poolState = await prisma.poolState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoolStateFindFirstArgs>(args?: SelectSubset<T, PoolStateFindFirstArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PoolState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateFindFirstOrThrowArgs} args - Arguments to find a PoolState
     * @example
     * // Get one PoolState
     * const poolState = await prisma.poolState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoolStateFindFirstOrThrowArgs>(args?: SelectSubset<T, PoolStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PoolStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PoolStates
     * const poolStates = await prisma.poolState.findMany()
     * 
     * // Get first 10 PoolStates
     * const poolStates = await prisma.poolState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const poolStateWithIdOnly = await prisma.poolState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoolStateFindManyArgs>(args?: SelectSubset<T, PoolStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PoolState.
     * @param {PoolStateCreateArgs} args - Arguments to create a PoolState.
     * @example
     * // Create one PoolState
     * const PoolState = await prisma.poolState.create({
     *   data: {
     *     // ... data to create a PoolState
     *   }
     * })
     * 
     */
    create<T extends PoolStateCreateArgs>(args: SelectSubset<T, PoolStateCreateArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PoolStates.
     * @param {PoolStateCreateManyArgs} args - Arguments to create many PoolStates.
     * @example
     * // Create many PoolStates
     * const poolState = await prisma.poolState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoolStateCreateManyArgs>(args?: SelectSubset<T, PoolStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PoolStates and returns the data saved in the database.
     * @param {PoolStateCreateManyAndReturnArgs} args - Arguments to create many PoolStates.
     * @example
     * // Create many PoolStates
     * const poolState = await prisma.poolState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PoolStates and only return the `id`
     * const poolStateWithIdOnly = await prisma.poolState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoolStateCreateManyAndReturnArgs>(args?: SelectSubset<T, PoolStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PoolState.
     * @param {PoolStateDeleteArgs} args - Arguments to delete one PoolState.
     * @example
     * // Delete one PoolState
     * const PoolState = await prisma.poolState.delete({
     *   where: {
     *     // ... filter to delete one PoolState
     *   }
     * })
     * 
     */
    delete<T extends PoolStateDeleteArgs>(args: SelectSubset<T, PoolStateDeleteArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PoolState.
     * @param {PoolStateUpdateArgs} args - Arguments to update one PoolState.
     * @example
     * // Update one PoolState
     * const poolState = await prisma.poolState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoolStateUpdateArgs>(args: SelectSubset<T, PoolStateUpdateArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PoolStates.
     * @param {PoolStateDeleteManyArgs} args - Arguments to filter PoolStates to delete.
     * @example
     * // Delete a few PoolStates
     * const { count } = await prisma.poolState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoolStateDeleteManyArgs>(args?: SelectSubset<T, PoolStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PoolStates
     * const poolState = await prisma.poolState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoolStateUpdateManyArgs>(args: SelectSubset<T, PoolStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PoolStates and returns the data updated in the database.
     * @param {PoolStateUpdateManyAndReturnArgs} args - Arguments to update many PoolStates.
     * @example
     * // Update many PoolStates
     * const poolState = await prisma.poolState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PoolStates and only return the `id`
     * const poolStateWithIdOnly = await prisma.poolState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoolStateUpdateManyAndReturnArgs>(args: SelectSubset<T, PoolStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PoolState.
     * @param {PoolStateUpsertArgs} args - Arguments to update or create a PoolState.
     * @example
     * // Update or create a PoolState
     * const poolState = await prisma.poolState.upsert({
     *   create: {
     *     // ... data to create a PoolState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PoolState we want to update
     *   }
     * })
     */
    upsert<T extends PoolStateUpsertArgs>(args: SelectSubset<T, PoolStateUpsertArgs<ExtArgs>>): Prisma__PoolStateClient<$Result.GetResult<Prisma.$PoolStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PoolStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateCountArgs} args - Arguments to filter PoolStates to count.
     * @example
     * // Count the number of PoolStates
     * const count = await prisma.poolState.count({
     *   where: {
     *     // ... the filter for the PoolStates we want to count
     *   }
     * })
    **/
    count<T extends PoolStateCountArgs>(
      args?: Subset<T, PoolStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoolStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PoolState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PoolStateAggregateArgs>(args: Subset<T, PoolStateAggregateArgs>): Prisma.PrismaPromise<GetPoolStateAggregateType<T>>

    /**
     * Group by PoolState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoolStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PoolStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoolStateGroupByArgs['orderBy'] }
        : { orderBy?: PoolStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PoolStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoolStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PoolState model
   */
  readonly fields: PoolStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PoolState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoolStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends PoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDefaultArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PoolState model
   */
  interface PoolStateFieldRefs {
    readonly id: FieldRef<"PoolState", 'String'>
    readonly poolId: FieldRef<"PoolState", 'String'>
    readonly lastUpdateTimestamp: FieldRef<"PoolState", 'BigInt'>
    readonly sqrtPriceReference: FieldRef<"PoolState", 'String'>
    readonly volatilityAccumulator: FieldRef<"PoolState", 'String'>
    readonly volatilityReference: FieldRef<"PoolState", 'String'>
    readonly baseReserve: FieldRef<"PoolState", 'String'>
    readonly quoteReserve: FieldRef<"PoolState", 'String'>
    readonly currentPrice: FieldRef<"PoolState", 'String'>
    readonly rawData: FieldRef<"PoolState", 'String'>
    readonly createdAt: FieldRef<"PoolState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PoolState findUnique
   */
  export type PoolStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * Filter, which PoolState to fetch.
     */
    where: PoolStateWhereUniqueInput
  }

  /**
   * PoolState findUniqueOrThrow
   */
  export type PoolStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * Filter, which PoolState to fetch.
     */
    where: PoolStateWhereUniqueInput
  }

  /**
   * PoolState findFirst
   */
  export type PoolStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * Filter, which PoolState to fetch.
     */
    where?: PoolStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolStates to fetch.
     */
    orderBy?: PoolStateOrderByWithRelationInput | PoolStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolStates.
     */
    cursor?: PoolStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolStates.
     */
    distinct?: PoolStateScalarFieldEnum | PoolStateScalarFieldEnum[]
  }

  /**
   * PoolState findFirstOrThrow
   */
  export type PoolStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * Filter, which PoolState to fetch.
     */
    where?: PoolStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolStates to fetch.
     */
    orderBy?: PoolStateOrderByWithRelationInput | PoolStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PoolStates.
     */
    cursor?: PoolStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PoolStates.
     */
    distinct?: PoolStateScalarFieldEnum | PoolStateScalarFieldEnum[]
  }

  /**
   * PoolState findMany
   */
  export type PoolStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * Filter, which PoolStates to fetch.
     */
    where?: PoolStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PoolStates to fetch.
     */
    orderBy?: PoolStateOrderByWithRelationInput | PoolStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PoolStates.
     */
    cursor?: PoolStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PoolStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PoolStates.
     */
    skip?: number
    distinct?: PoolStateScalarFieldEnum | PoolStateScalarFieldEnum[]
  }

  /**
   * PoolState create
   */
  export type PoolStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * The data needed to create a PoolState.
     */
    data: XOR<PoolStateCreateInput, PoolStateUncheckedCreateInput>
  }

  /**
   * PoolState createMany
   */
  export type PoolStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PoolStates.
     */
    data: PoolStateCreateManyInput | PoolStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PoolState createManyAndReturn
   */
  export type PoolStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * The data used to create many PoolStates.
     */
    data: PoolStateCreateManyInput | PoolStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolState update
   */
  export type PoolStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * The data needed to update a PoolState.
     */
    data: XOR<PoolStateUpdateInput, PoolStateUncheckedUpdateInput>
    /**
     * Choose, which PoolState to update.
     */
    where: PoolStateWhereUniqueInput
  }

  /**
   * PoolState updateMany
   */
  export type PoolStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PoolStates.
     */
    data: XOR<PoolStateUpdateManyMutationInput, PoolStateUncheckedUpdateManyInput>
    /**
     * Filter which PoolStates to update
     */
    where?: PoolStateWhereInput
    /**
     * Limit how many PoolStates to update.
     */
    limit?: number
  }

  /**
   * PoolState updateManyAndReturn
   */
  export type PoolStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * The data used to update PoolStates.
     */
    data: XOR<PoolStateUpdateManyMutationInput, PoolStateUncheckedUpdateManyInput>
    /**
     * Filter which PoolStates to update
     */
    where?: PoolStateWhereInput
    /**
     * Limit how many PoolStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PoolState upsert
   */
  export type PoolStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * The filter to search for the PoolState to update in case it exists.
     */
    where: PoolStateWhereUniqueInput
    /**
     * In case the PoolState found by the `where` argument doesn't exist, create a new PoolState with this data.
     */
    create: XOR<PoolStateCreateInput, PoolStateUncheckedCreateInput>
    /**
     * In case the PoolState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoolStateUpdateInput, PoolStateUncheckedUpdateInput>
  }

  /**
   * PoolState delete
   */
  export type PoolStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
    /**
     * Filter which PoolState to delete.
     */
    where: PoolStateWhereUniqueInput
  }

  /**
   * PoolState deleteMany
   */
  export type PoolStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PoolStates to delete
     */
    where?: PoolStateWhereInput
    /**
     * Limit how many PoolStates to delete.
     */
    limit?: number
  }

  /**
   * PoolState without action
   */
  export type PoolStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoolState
     */
    select?: PoolStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PoolState
     */
    omit?: PoolStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoolStateInclude<ExtArgs> | null
  }


  /**
   * Model TokenLaunch
   */

  export type AggregateTokenLaunch = {
    _count: TokenLaunchCountAggregateOutputType | null
    _min: TokenLaunchMinAggregateOutputType | null
    _max: TokenLaunchMaxAggregateOutputType | null
  }

  export type TokenLaunchMinAggregateOutputType = {
    id: string | null
    tokenId: string | null
    poolId: string | null
    launchPrice: string | null
    initialSupply: string | null
    launchTxHash: string | null
    launchedAt: Date | null
  }

  export type TokenLaunchMaxAggregateOutputType = {
    id: string | null
    tokenId: string | null
    poolId: string | null
    launchPrice: string | null
    initialSupply: string | null
    launchTxHash: string | null
    launchedAt: Date | null
  }

  export type TokenLaunchCountAggregateOutputType = {
    id: number
    tokenId: number
    poolId: number
    launchPrice: number
    initialSupply: number
    launchTxHash: number
    launchedAt: number
    _all: number
  }


  export type TokenLaunchMinAggregateInputType = {
    id?: true
    tokenId?: true
    poolId?: true
    launchPrice?: true
    initialSupply?: true
    launchTxHash?: true
    launchedAt?: true
  }

  export type TokenLaunchMaxAggregateInputType = {
    id?: true
    tokenId?: true
    poolId?: true
    launchPrice?: true
    initialSupply?: true
    launchTxHash?: true
    launchedAt?: true
  }

  export type TokenLaunchCountAggregateInputType = {
    id?: true
    tokenId?: true
    poolId?: true
    launchPrice?: true
    initialSupply?: true
    launchTxHash?: true
    launchedAt?: true
    _all?: true
  }

  export type TokenLaunchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenLaunch to aggregate.
     */
    where?: TokenLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenLaunches to fetch.
     */
    orderBy?: TokenLaunchOrderByWithRelationInput | TokenLaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenLaunches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenLaunches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenLaunches
    **/
    _count?: true | TokenLaunchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenLaunchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenLaunchMaxAggregateInputType
  }

  export type GetTokenLaunchAggregateType<T extends TokenLaunchAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenLaunch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenLaunch[P]>
      : GetScalarType<T[P], AggregateTokenLaunch[P]>
  }




  export type TokenLaunchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenLaunchWhereInput
    orderBy?: TokenLaunchOrderByWithAggregationInput | TokenLaunchOrderByWithAggregationInput[]
    by: TokenLaunchScalarFieldEnum[] | TokenLaunchScalarFieldEnum
    having?: TokenLaunchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenLaunchCountAggregateInputType | true
    _min?: TokenLaunchMinAggregateInputType
    _max?: TokenLaunchMaxAggregateInputType
  }

  export type TokenLaunchGroupByOutputType = {
    id: string
    tokenId: string
    poolId: string
    launchPrice: string
    initialSupply: string
    launchTxHash: string | null
    launchedAt: Date
    _count: TokenLaunchCountAggregateOutputType | null
    _min: TokenLaunchMinAggregateOutputType | null
    _max: TokenLaunchMaxAggregateOutputType | null
  }

  type GetTokenLaunchGroupByPayload<T extends TokenLaunchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenLaunchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenLaunchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenLaunchGroupByOutputType[P]>
            : GetScalarType<T[P], TokenLaunchGroupByOutputType[P]>
        }
      >
    >


  export type TokenLaunchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    poolId?: boolean
    launchPrice?: boolean
    initialSupply?: boolean
    launchTxHash?: boolean
    launchedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenLaunch"]>

  export type TokenLaunchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    poolId?: boolean
    launchPrice?: boolean
    initialSupply?: boolean
    launchTxHash?: boolean
    launchedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenLaunch"]>

  export type TokenLaunchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    poolId?: boolean
    launchPrice?: boolean
    initialSupply?: boolean
    launchTxHash?: boolean
    launchedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenLaunch"]>

  export type TokenLaunchSelectScalar = {
    id?: boolean
    tokenId?: boolean
    poolId?: boolean
    launchPrice?: boolean
    initialSupply?: boolean
    launchTxHash?: boolean
    launchedAt?: boolean
  }

  export type TokenLaunchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "poolId" | "launchPrice" | "initialSupply" | "launchTxHash" | "launchedAt", ExtArgs["result"]["tokenLaunch"]>
  export type TokenLaunchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }
  export type TokenLaunchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }
  export type TokenLaunchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
    pool?: boolean | PoolDefaultArgs<ExtArgs>
  }

  export type $TokenLaunchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenLaunch"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
      pool: Prisma.$PoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: string
      poolId: string
      launchPrice: string
      initialSupply: string
      launchTxHash: string | null
      launchedAt: Date
    }, ExtArgs["result"]["tokenLaunch"]>
    composites: {}
  }

  type TokenLaunchGetPayload<S extends boolean | null | undefined | TokenLaunchDefaultArgs> = $Result.GetResult<Prisma.$TokenLaunchPayload, S>

  type TokenLaunchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenLaunchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenLaunchCountAggregateInputType | true
    }

  export interface TokenLaunchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenLaunch'], meta: { name: 'TokenLaunch' } }
    /**
     * Find zero or one TokenLaunch that matches the filter.
     * @param {TokenLaunchFindUniqueArgs} args - Arguments to find a TokenLaunch
     * @example
     * // Get one TokenLaunch
     * const tokenLaunch = await prisma.tokenLaunch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenLaunchFindUniqueArgs>(args: SelectSubset<T, TokenLaunchFindUniqueArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenLaunch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenLaunchFindUniqueOrThrowArgs} args - Arguments to find a TokenLaunch
     * @example
     * // Get one TokenLaunch
     * const tokenLaunch = await prisma.tokenLaunch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenLaunchFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenLaunchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenLaunch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchFindFirstArgs} args - Arguments to find a TokenLaunch
     * @example
     * // Get one TokenLaunch
     * const tokenLaunch = await prisma.tokenLaunch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenLaunchFindFirstArgs>(args?: SelectSubset<T, TokenLaunchFindFirstArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenLaunch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchFindFirstOrThrowArgs} args - Arguments to find a TokenLaunch
     * @example
     * // Get one TokenLaunch
     * const tokenLaunch = await prisma.tokenLaunch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenLaunchFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenLaunchFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenLaunches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenLaunches
     * const tokenLaunches = await prisma.tokenLaunch.findMany()
     * 
     * // Get first 10 TokenLaunches
     * const tokenLaunches = await prisma.tokenLaunch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenLaunchWithIdOnly = await prisma.tokenLaunch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenLaunchFindManyArgs>(args?: SelectSubset<T, TokenLaunchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenLaunch.
     * @param {TokenLaunchCreateArgs} args - Arguments to create a TokenLaunch.
     * @example
     * // Create one TokenLaunch
     * const TokenLaunch = await prisma.tokenLaunch.create({
     *   data: {
     *     // ... data to create a TokenLaunch
     *   }
     * })
     * 
     */
    create<T extends TokenLaunchCreateArgs>(args: SelectSubset<T, TokenLaunchCreateArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenLaunches.
     * @param {TokenLaunchCreateManyArgs} args - Arguments to create many TokenLaunches.
     * @example
     * // Create many TokenLaunches
     * const tokenLaunch = await prisma.tokenLaunch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenLaunchCreateManyArgs>(args?: SelectSubset<T, TokenLaunchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenLaunches and returns the data saved in the database.
     * @param {TokenLaunchCreateManyAndReturnArgs} args - Arguments to create many TokenLaunches.
     * @example
     * // Create many TokenLaunches
     * const tokenLaunch = await prisma.tokenLaunch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenLaunches and only return the `id`
     * const tokenLaunchWithIdOnly = await prisma.tokenLaunch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenLaunchCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenLaunchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenLaunch.
     * @param {TokenLaunchDeleteArgs} args - Arguments to delete one TokenLaunch.
     * @example
     * // Delete one TokenLaunch
     * const TokenLaunch = await prisma.tokenLaunch.delete({
     *   where: {
     *     // ... filter to delete one TokenLaunch
     *   }
     * })
     * 
     */
    delete<T extends TokenLaunchDeleteArgs>(args: SelectSubset<T, TokenLaunchDeleteArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenLaunch.
     * @param {TokenLaunchUpdateArgs} args - Arguments to update one TokenLaunch.
     * @example
     * // Update one TokenLaunch
     * const tokenLaunch = await prisma.tokenLaunch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenLaunchUpdateArgs>(args: SelectSubset<T, TokenLaunchUpdateArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenLaunches.
     * @param {TokenLaunchDeleteManyArgs} args - Arguments to filter TokenLaunches to delete.
     * @example
     * // Delete a few TokenLaunches
     * const { count } = await prisma.tokenLaunch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenLaunchDeleteManyArgs>(args?: SelectSubset<T, TokenLaunchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenLaunches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenLaunches
     * const tokenLaunch = await prisma.tokenLaunch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenLaunchUpdateManyArgs>(args: SelectSubset<T, TokenLaunchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenLaunches and returns the data updated in the database.
     * @param {TokenLaunchUpdateManyAndReturnArgs} args - Arguments to update many TokenLaunches.
     * @example
     * // Update many TokenLaunches
     * const tokenLaunch = await prisma.tokenLaunch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenLaunches and only return the `id`
     * const tokenLaunchWithIdOnly = await prisma.tokenLaunch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenLaunchUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenLaunchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenLaunch.
     * @param {TokenLaunchUpsertArgs} args - Arguments to update or create a TokenLaunch.
     * @example
     * // Update or create a TokenLaunch
     * const tokenLaunch = await prisma.tokenLaunch.upsert({
     *   create: {
     *     // ... data to create a TokenLaunch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenLaunch we want to update
     *   }
     * })
     */
    upsert<T extends TokenLaunchUpsertArgs>(args: SelectSubset<T, TokenLaunchUpsertArgs<ExtArgs>>): Prisma__TokenLaunchClient<$Result.GetResult<Prisma.$TokenLaunchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenLaunches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchCountArgs} args - Arguments to filter TokenLaunches to count.
     * @example
     * // Count the number of TokenLaunches
     * const count = await prisma.tokenLaunch.count({
     *   where: {
     *     // ... the filter for the TokenLaunches we want to count
     *   }
     * })
    **/
    count<T extends TokenLaunchCountArgs>(
      args?: Subset<T, TokenLaunchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenLaunchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenLaunch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenLaunchAggregateArgs>(args: Subset<T, TokenLaunchAggregateArgs>): Prisma.PrismaPromise<GetTokenLaunchAggregateType<T>>

    /**
     * Group by TokenLaunch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenLaunchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenLaunchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenLaunchGroupByArgs['orderBy'] }
        : { orderBy?: TokenLaunchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenLaunchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenLaunchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenLaunch model
   */
  readonly fields: TokenLaunchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenLaunch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenLaunchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pool<T extends PoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDefaultArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenLaunch model
   */
  interface TokenLaunchFieldRefs {
    readonly id: FieldRef<"TokenLaunch", 'String'>
    readonly tokenId: FieldRef<"TokenLaunch", 'String'>
    readonly poolId: FieldRef<"TokenLaunch", 'String'>
    readonly launchPrice: FieldRef<"TokenLaunch", 'String'>
    readonly initialSupply: FieldRef<"TokenLaunch", 'String'>
    readonly launchTxHash: FieldRef<"TokenLaunch", 'String'>
    readonly launchedAt: FieldRef<"TokenLaunch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenLaunch findUnique
   */
  export type TokenLaunchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * Filter, which TokenLaunch to fetch.
     */
    where: TokenLaunchWhereUniqueInput
  }

  /**
   * TokenLaunch findUniqueOrThrow
   */
  export type TokenLaunchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * Filter, which TokenLaunch to fetch.
     */
    where: TokenLaunchWhereUniqueInput
  }

  /**
   * TokenLaunch findFirst
   */
  export type TokenLaunchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * Filter, which TokenLaunch to fetch.
     */
    where?: TokenLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenLaunches to fetch.
     */
    orderBy?: TokenLaunchOrderByWithRelationInput | TokenLaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenLaunches.
     */
    cursor?: TokenLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenLaunches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenLaunches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenLaunches.
     */
    distinct?: TokenLaunchScalarFieldEnum | TokenLaunchScalarFieldEnum[]
  }

  /**
   * TokenLaunch findFirstOrThrow
   */
  export type TokenLaunchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * Filter, which TokenLaunch to fetch.
     */
    where?: TokenLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenLaunches to fetch.
     */
    orderBy?: TokenLaunchOrderByWithRelationInput | TokenLaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenLaunches.
     */
    cursor?: TokenLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenLaunches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenLaunches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenLaunches.
     */
    distinct?: TokenLaunchScalarFieldEnum | TokenLaunchScalarFieldEnum[]
  }

  /**
   * TokenLaunch findMany
   */
  export type TokenLaunchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * Filter, which TokenLaunches to fetch.
     */
    where?: TokenLaunchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenLaunches to fetch.
     */
    orderBy?: TokenLaunchOrderByWithRelationInput | TokenLaunchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenLaunches.
     */
    cursor?: TokenLaunchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenLaunches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenLaunches.
     */
    skip?: number
    distinct?: TokenLaunchScalarFieldEnum | TokenLaunchScalarFieldEnum[]
  }

  /**
   * TokenLaunch create
   */
  export type TokenLaunchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenLaunch.
     */
    data: XOR<TokenLaunchCreateInput, TokenLaunchUncheckedCreateInput>
  }

  /**
   * TokenLaunch createMany
   */
  export type TokenLaunchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenLaunches.
     */
    data: TokenLaunchCreateManyInput | TokenLaunchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenLaunch createManyAndReturn
   */
  export type TokenLaunchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * The data used to create many TokenLaunches.
     */
    data: TokenLaunchCreateManyInput | TokenLaunchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenLaunch update
   */
  export type TokenLaunchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenLaunch.
     */
    data: XOR<TokenLaunchUpdateInput, TokenLaunchUncheckedUpdateInput>
    /**
     * Choose, which TokenLaunch to update.
     */
    where: TokenLaunchWhereUniqueInput
  }

  /**
   * TokenLaunch updateMany
   */
  export type TokenLaunchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenLaunches.
     */
    data: XOR<TokenLaunchUpdateManyMutationInput, TokenLaunchUncheckedUpdateManyInput>
    /**
     * Filter which TokenLaunches to update
     */
    where?: TokenLaunchWhereInput
    /**
     * Limit how many TokenLaunches to update.
     */
    limit?: number
  }

  /**
   * TokenLaunch updateManyAndReturn
   */
  export type TokenLaunchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * The data used to update TokenLaunches.
     */
    data: XOR<TokenLaunchUpdateManyMutationInput, TokenLaunchUncheckedUpdateManyInput>
    /**
     * Filter which TokenLaunches to update
     */
    where?: TokenLaunchWhereInput
    /**
     * Limit how many TokenLaunches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenLaunch upsert
   */
  export type TokenLaunchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenLaunch to update in case it exists.
     */
    where: TokenLaunchWhereUniqueInput
    /**
     * In case the TokenLaunch found by the `where` argument doesn't exist, create a new TokenLaunch with this data.
     */
    create: XOR<TokenLaunchCreateInput, TokenLaunchUncheckedCreateInput>
    /**
     * In case the TokenLaunch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenLaunchUpdateInput, TokenLaunchUncheckedUpdateInput>
  }

  /**
   * TokenLaunch delete
   */
  export type TokenLaunchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
    /**
     * Filter which TokenLaunch to delete.
     */
    where: TokenLaunchWhereUniqueInput
  }

  /**
   * TokenLaunch deleteMany
   */
  export type TokenLaunchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenLaunches to delete
     */
    where?: TokenLaunchWhereInput
    /**
     * Limit how many TokenLaunches to delete.
     */
    limit?: number
  }

  /**
   * TokenLaunch without action
   */
  export type TokenLaunchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenLaunch
     */
    select?: TokenLaunchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenLaunch
     */
    omit?: TokenLaunchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenLaunchInclude<ExtArgs> | null
  }


  /**
   * Model TokenHolder
   */

  export type AggregateTokenHolder = {
    _count: TokenHolderCountAggregateOutputType | null
    _avg: TokenHolderAvgAggregateOutputType | null
    _sum: TokenHolderSumAggregateOutputType | null
    _min: TokenHolderMinAggregateOutputType | null
    _max: TokenHolderMaxAggregateOutputType | null
  }

  export type TokenHolderAvgAggregateOutputType = {
    percentage: number | null
  }

  export type TokenHolderSumAggregateOutputType = {
    percentage: number | null
  }

  export type TokenHolderMinAggregateOutputType = {
    id: string | null
    tokenId: string | null
    holder: string | null
    balance: string | null
    percentage: number | null
    acquiredAt: Date | null
    updatedAt: Date | null
  }

  export type TokenHolderMaxAggregateOutputType = {
    id: string | null
    tokenId: string | null
    holder: string | null
    balance: string | null
    percentage: number | null
    acquiredAt: Date | null
    updatedAt: Date | null
  }

  export type TokenHolderCountAggregateOutputType = {
    id: number
    tokenId: number
    holder: number
    balance: number
    percentage: number
    acquiredAt: number
    updatedAt: number
    _all: number
  }


  export type TokenHolderAvgAggregateInputType = {
    percentage?: true
  }

  export type TokenHolderSumAggregateInputType = {
    percentage?: true
  }

  export type TokenHolderMinAggregateInputType = {
    id?: true
    tokenId?: true
    holder?: true
    balance?: true
    percentage?: true
    acquiredAt?: true
    updatedAt?: true
  }

  export type TokenHolderMaxAggregateInputType = {
    id?: true
    tokenId?: true
    holder?: true
    balance?: true
    percentage?: true
    acquiredAt?: true
    updatedAt?: true
  }

  export type TokenHolderCountAggregateInputType = {
    id?: true
    tokenId?: true
    holder?: true
    balance?: true
    percentage?: true
    acquiredAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenHolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenHolder to aggregate.
     */
    where?: TokenHolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenHolders to fetch.
     */
    orderBy?: TokenHolderOrderByWithRelationInput | TokenHolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenHolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenHolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenHolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenHolders
    **/
    _count?: true | TokenHolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenHolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenHolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenHolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenHolderMaxAggregateInputType
  }

  export type GetTokenHolderAggregateType<T extends TokenHolderAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenHolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenHolder[P]>
      : GetScalarType<T[P], AggregateTokenHolder[P]>
  }




  export type TokenHolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenHolderWhereInput
    orderBy?: TokenHolderOrderByWithAggregationInput | TokenHolderOrderByWithAggregationInput[]
    by: TokenHolderScalarFieldEnum[] | TokenHolderScalarFieldEnum
    having?: TokenHolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenHolderCountAggregateInputType | true
    _avg?: TokenHolderAvgAggregateInputType
    _sum?: TokenHolderSumAggregateInputType
    _min?: TokenHolderMinAggregateInputType
    _max?: TokenHolderMaxAggregateInputType
  }

  export type TokenHolderGroupByOutputType = {
    id: string
    tokenId: string
    holder: string
    balance: string
    percentage: number | null
    acquiredAt: Date
    updatedAt: Date
    _count: TokenHolderCountAggregateOutputType | null
    _avg: TokenHolderAvgAggregateOutputType | null
    _sum: TokenHolderSumAggregateOutputType | null
    _min: TokenHolderMinAggregateOutputType | null
    _max: TokenHolderMaxAggregateOutputType | null
  }

  type GetTokenHolderGroupByPayload<T extends TokenHolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenHolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenHolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenHolderGroupByOutputType[P]>
            : GetScalarType<T[P], TokenHolderGroupByOutputType[P]>
        }
      >
    >


  export type TokenHolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    holder?: boolean
    balance?: boolean
    percentage?: boolean
    acquiredAt?: boolean
    updatedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenHolder"]>

  export type TokenHolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    holder?: boolean
    balance?: boolean
    percentage?: boolean
    acquiredAt?: boolean
    updatedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenHolder"]>

  export type TokenHolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    holder?: boolean
    balance?: boolean
    percentage?: boolean
    acquiredAt?: boolean
    updatedAt?: boolean
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tokenHolder"]>

  export type TokenHolderSelectScalar = {
    id?: boolean
    tokenId?: boolean
    holder?: boolean
    balance?: boolean
    percentage?: boolean
    acquiredAt?: boolean
    updatedAt?: boolean
  }

  export type TokenHolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenId" | "holder" | "balance" | "percentage" | "acquiredAt" | "updatedAt", ExtArgs["result"]["tokenHolder"]>
  export type TokenHolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenHolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type TokenHolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $TokenHolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenHolder"
    objects: {
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: string
      holder: string
      balance: string
      percentage: number | null
      acquiredAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tokenHolder"]>
    composites: {}
  }

  type TokenHolderGetPayload<S extends boolean | null | undefined | TokenHolderDefaultArgs> = $Result.GetResult<Prisma.$TokenHolderPayload, S>

  type TokenHolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenHolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenHolderCountAggregateInputType | true
    }

  export interface TokenHolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenHolder'], meta: { name: 'TokenHolder' } }
    /**
     * Find zero or one TokenHolder that matches the filter.
     * @param {TokenHolderFindUniqueArgs} args - Arguments to find a TokenHolder
     * @example
     * // Get one TokenHolder
     * const tokenHolder = await prisma.tokenHolder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenHolderFindUniqueArgs>(args: SelectSubset<T, TokenHolderFindUniqueArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenHolder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenHolderFindUniqueOrThrowArgs} args - Arguments to find a TokenHolder
     * @example
     * // Get one TokenHolder
     * const tokenHolder = await prisma.tokenHolder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenHolderFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenHolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenHolder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderFindFirstArgs} args - Arguments to find a TokenHolder
     * @example
     * // Get one TokenHolder
     * const tokenHolder = await prisma.tokenHolder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenHolderFindFirstArgs>(args?: SelectSubset<T, TokenHolderFindFirstArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenHolder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderFindFirstOrThrowArgs} args - Arguments to find a TokenHolder
     * @example
     * // Get one TokenHolder
     * const tokenHolder = await prisma.tokenHolder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenHolderFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenHolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenHolders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenHolders
     * const tokenHolders = await prisma.tokenHolder.findMany()
     * 
     * // Get first 10 TokenHolders
     * const tokenHolders = await prisma.tokenHolder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenHolderWithIdOnly = await prisma.tokenHolder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenHolderFindManyArgs>(args?: SelectSubset<T, TokenHolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenHolder.
     * @param {TokenHolderCreateArgs} args - Arguments to create a TokenHolder.
     * @example
     * // Create one TokenHolder
     * const TokenHolder = await prisma.tokenHolder.create({
     *   data: {
     *     // ... data to create a TokenHolder
     *   }
     * })
     * 
     */
    create<T extends TokenHolderCreateArgs>(args: SelectSubset<T, TokenHolderCreateArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenHolders.
     * @param {TokenHolderCreateManyArgs} args - Arguments to create many TokenHolders.
     * @example
     * // Create many TokenHolders
     * const tokenHolder = await prisma.tokenHolder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenHolderCreateManyArgs>(args?: SelectSubset<T, TokenHolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenHolders and returns the data saved in the database.
     * @param {TokenHolderCreateManyAndReturnArgs} args - Arguments to create many TokenHolders.
     * @example
     * // Create many TokenHolders
     * const tokenHolder = await prisma.tokenHolder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenHolders and only return the `id`
     * const tokenHolderWithIdOnly = await prisma.tokenHolder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenHolderCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenHolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TokenHolder.
     * @param {TokenHolderDeleteArgs} args - Arguments to delete one TokenHolder.
     * @example
     * // Delete one TokenHolder
     * const TokenHolder = await prisma.tokenHolder.delete({
     *   where: {
     *     // ... filter to delete one TokenHolder
     *   }
     * })
     * 
     */
    delete<T extends TokenHolderDeleteArgs>(args: SelectSubset<T, TokenHolderDeleteArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenHolder.
     * @param {TokenHolderUpdateArgs} args - Arguments to update one TokenHolder.
     * @example
     * // Update one TokenHolder
     * const tokenHolder = await prisma.tokenHolder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenHolderUpdateArgs>(args: SelectSubset<T, TokenHolderUpdateArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenHolders.
     * @param {TokenHolderDeleteManyArgs} args - Arguments to filter TokenHolders to delete.
     * @example
     * // Delete a few TokenHolders
     * const { count } = await prisma.tokenHolder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenHolderDeleteManyArgs>(args?: SelectSubset<T, TokenHolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenHolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenHolders
     * const tokenHolder = await prisma.tokenHolder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenHolderUpdateManyArgs>(args: SelectSubset<T, TokenHolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenHolders and returns the data updated in the database.
     * @param {TokenHolderUpdateManyAndReturnArgs} args - Arguments to update many TokenHolders.
     * @example
     * // Update many TokenHolders
     * const tokenHolder = await prisma.tokenHolder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TokenHolders and only return the `id`
     * const tokenHolderWithIdOnly = await prisma.tokenHolder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenHolderUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenHolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TokenHolder.
     * @param {TokenHolderUpsertArgs} args - Arguments to update or create a TokenHolder.
     * @example
     * // Update or create a TokenHolder
     * const tokenHolder = await prisma.tokenHolder.upsert({
     *   create: {
     *     // ... data to create a TokenHolder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenHolder we want to update
     *   }
     * })
     */
    upsert<T extends TokenHolderUpsertArgs>(args: SelectSubset<T, TokenHolderUpsertArgs<ExtArgs>>): Prisma__TokenHolderClient<$Result.GetResult<Prisma.$TokenHolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenHolders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderCountArgs} args - Arguments to filter TokenHolders to count.
     * @example
     * // Count the number of TokenHolders
     * const count = await prisma.tokenHolder.count({
     *   where: {
     *     // ... the filter for the TokenHolders we want to count
     *   }
     * })
    **/
    count<T extends TokenHolderCountArgs>(
      args?: Subset<T, TokenHolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenHolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenHolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenHolderAggregateArgs>(args: Subset<T, TokenHolderAggregateArgs>): Prisma.PrismaPromise<GetTokenHolderAggregateType<T>>

    /**
     * Group by TokenHolder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenHolderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenHolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenHolderGroupByArgs['orderBy'] }
        : { orderBy?: TokenHolderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenHolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenHolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenHolder model
   */
  readonly fields: TokenHolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenHolder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenHolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenHolder model
   */
  interface TokenHolderFieldRefs {
    readonly id: FieldRef<"TokenHolder", 'String'>
    readonly tokenId: FieldRef<"TokenHolder", 'String'>
    readonly holder: FieldRef<"TokenHolder", 'String'>
    readonly balance: FieldRef<"TokenHolder", 'String'>
    readonly percentage: FieldRef<"TokenHolder", 'Float'>
    readonly acquiredAt: FieldRef<"TokenHolder", 'DateTime'>
    readonly updatedAt: FieldRef<"TokenHolder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenHolder findUnique
   */
  export type TokenHolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * Filter, which TokenHolder to fetch.
     */
    where: TokenHolderWhereUniqueInput
  }

  /**
   * TokenHolder findUniqueOrThrow
   */
  export type TokenHolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * Filter, which TokenHolder to fetch.
     */
    where: TokenHolderWhereUniqueInput
  }

  /**
   * TokenHolder findFirst
   */
  export type TokenHolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * Filter, which TokenHolder to fetch.
     */
    where?: TokenHolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenHolders to fetch.
     */
    orderBy?: TokenHolderOrderByWithRelationInput | TokenHolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenHolders.
     */
    cursor?: TokenHolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenHolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenHolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenHolders.
     */
    distinct?: TokenHolderScalarFieldEnum | TokenHolderScalarFieldEnum[]
  }

  /**
   * TokenHolder findFirstOrThrow
   */
  export type TokenHolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * Filter, which TokenHolder to fetch.
     */
    where?: TokenHolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenHolders to fetch.
     */
    orderBy?: TokenHolderOrderByWithRelationInput | TokenHolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenHolders.
     */
    cursor?: TokenHolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenHolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenHolders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenHolders.
     */
    distinct?: TokenHolderScalarFieldEnum | TokenHolderScalarFieldEnum[]
  }

  /**
   * TokenHolder findMany
   */
  export type TokenHolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * Filter, which TokenHolders to fetch.
     */
    where?: TokenHolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenHolders to fetch.
     */
    orderBy?: TokenHolderOrderByWithRelationInput | TokenHolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenHolders.
     */
    cursor?: TokenHolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenHolders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenHolders.
     */
    skip?: number
    distinct?: TokenHolderScalarFieldEnum | TokenHolderScalarFieldEnum[]
  }

  /**
   * TokenHolder create
   */
  export type TokenHolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * The data needed to create a TokenHolder.
     */
    data: XOR<TokenHolderCreateInput, TokenHolderUncheckedCreateInput>
  }

  /**
   * TokenHolder createMany
   */
  export type TokenHolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenHolders.
     */
    data: TokenHolderCreateManyInput | TokenHolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenHolder createManyAndReturn
   */
  export type TokenHolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * The data used to create many TokenHolders.
     */
    data: TokenHolderCreateManyInput | TokenHolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenHolder update
   */
  export type TokenHolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * The data needed to update a TokenHolder.
     */
    data: XOR<TokenHolderUpdateInput, TokenHolderUncheckedUpdateInput>
    /**
     * Choose, which TokenHolder to update.
     */
    where: TokenHolderWhereUniqueInput
  }

  /**
   * TokenHolder updateMany
   */
  export type TokenHolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenHolders.
     */
    data: XOR<TokenHolderUpdateManyMutationInput, TokenHolderUncheckedUpdateManyInput>
    /**
     * Filter which TokenHolders to update
     */
    where?: TokenHolderWhereInput
    /**
     * Limit how many TokenHolders to update.
     */
    limit?: number
  }

  /**
   * TokenHolder updateManyAndReturn
   */
  export type TokenHolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * The data used to update TokenHolders.
     */
    data: XOR<TokenHolderUpdateManyMutationInput, TokenHolderUncheckedUpdateManyInput>
    /**
     * Filter which TokenHolders to update
     */
    where?: TokenHolderWhereInput
    /**
     * Limit how many TokenHolders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TokenHolder upsert
   */
  export type TokenHolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * The filter to search for the TokenHolder to update in case it exists.
     */
    where: TokenHolderWhereUniqueInput
    /**
     * In case the TokenHolder found by the `where` argument doesn't exist, create a new TokenHolder with this data.
     */
    create: XOR<TokenHolderCreateInput, TokenHolderUncheckedCreateInput>
    /**
     * In case the TokenHolder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenHolderUpdateInput, TokenHolderUncheckedUpdateInput>
  }

  /**
   * TokenHolder delete
   */
  export type TokenHolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
    /**
     * Filter which TokenHolder to delete.
     */
    where: TokenHolderWhereUniqueInput
  }

  /**
   * TokenHolder deleteMany
   */
  export type TokenHolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenHolders to delete
     */
    where?: TokenHolderWhereInput
    /**
     * Limit how many TokenHolders to delete.
     */
    limit?: number
  }

  /**
   * TokenHolder without action
   */
  export type TokenHolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenHolder
     */
    select?: TokenHolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenHolder
     */
    omit?: TokenHolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenHolderInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    timestamp: number | null
    blockNumber: number | null
  }

  export type TransactionSumAggregateOutputType = {
    timestamp: bigint | null
    blockNumber: bigint | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    tokenId: string | null
    txHash: string | null
    txType: $Enums.TxType | null
    wallet: string | null
    amountIn: string | null
    amountOut: string | null
    fee: string | null
    price: string | null
    timestamp: bigint | null
    blockNumber: bigint | null
    gasUsed: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    tokenId: string | null
    txHash: string | null
    txType: $Enums.TxType | null
    wallet: string | null
    amountIn: string | null
    amountOut: string | null
    fee: string | null
    price: string | null
    timestamp: bigint | null
    blockNumber: bigint | null
    gasUsed: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    poolId: number
    tokenId: number
    txHash: number
    txType: number
    wallet: number
    amountIn: number
    amountOut: number
    fee: number
    price: number
    timestamp: number
    blockNumber: number
    gasUsed: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    timestamp?: true
    blockNumber?: true
  }

  export type TransactionSumAggregateInputType = {
    timestamp?: true
    blockNumber?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    poolId?: true
    tokenId?: true
    txHash?: true
    txType?: true
    wallet?: true
    amountIn?: true
    amountOut?: true
    fee?: true
    price?: true
    timestamp?: true
    blockNumber?: true
    gasUsed?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    poolId?: true
    tokenId?: true
    txHash?: true
    txType?: true
    wallet?: true
    amountIn?: true
    amountOut?: true
    fee?: true
    price?: true
    timestamp?: true
    blockNumber?: true
    gasUsed?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    poolId?: true
    tokenId?: true
    txHash?: true
    txType?: true
    wallet?: true
    amountIn?: true
    amountOut?: true
    fee?: true
    price?: true
    timestamp?: true
    blockNumber?: true
    gasUsed?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    poolId: string
    tokenId: string | null
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint
    blockNumber: bigint
    gasUsed: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    txHash?: boolean
    txType?: boolean
    wallet?: boolean
    amountIn?: boolean
    amountOut?: boolean
    fee?: boolean
    price?: boolean
    timestamp?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | Transaction$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    txHash?: boolean
    txType?: boolean
    wallet?: boolean
    amountIn?: boolean
    amountOut?: boolean
    fee?: boolean
    price?: boolean
    timestamp?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | Transaction$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    txHash?: boolean
    txType?: boolean
    wallet?: boolean
    amountIn?: boolean
    amountOut?: boolean
    fee?: boolean
    price?: boolean
    timestamp?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | Transaction$tokenArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    txHash?: boolean
    txType?: boolean
    wallet?: boolean
    amountIn?: boolean
    amountOut?: boolean
    fee?: boolean
    price?: boolean
    timestamp?: boolean
    blockNumber?: boolean
    gasUsed?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "tokenId" | "txHash" | "txType" | "wallet" | "amountIn" | "amountOut" | "fee" | "price" | "timestamp" | "blockNumber" | "gasUsed" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | Transaction$tokenArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | Transaction$tokenArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | Transaction$tokenArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      pool: Prisma.$PoolPayload<ExtArgs>
      token: Prisma.$TokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      tokenId: string | null
      txHash: string
      txType: $Enums.TxType
      wallet: string
      amountIn: string
      amountOut: string
      fee: string
      price: string
      timestamp: bigint
      blockNumber: bigint
      gasUsed: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends PoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDefaultArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token<T extends Transaction$tokenArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$tokenArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly poolId: FieldRef<"Transaction", 'String'>
    readonly tokenId: FieldRef<"Transaction", 'String'>
    readonly txHash: FieldRef<"Transaction", 'String'>
    readonly txType: FieldRef<"Transaction", 'TxType'>
    readonly wallet: FieldRef<"Transaction", 'String'>
    readonly amountIn: FieldRef<"Transaction", 'String'>
    readonly amountOut: FieldRef<"Transaction", 'String'>
    readonly fee: FieldRef<"Transaction", 'String'>
    readonly price: FieldRef<"Transaction", 'String'>
    readonly timestamp: FieldRef<"Transaction", 'BigInt'>
    readonly blockNumber: FieldRef<"Transaction", 'BigInt'>
    readonly gasUsed: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.token
   */
  export type Transaction$tokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    timestamp: number | null
  }

  export type PriceHistorySumAggregateOutputType = {
    timestamp: bigint | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    id: string | null
    poolId: string | null
    tokenId: string | null
    price: string | null
    volume: string | null
    timestamp: bigint | null
    interval: string | null
    openPrice: string | null
    highPrice: string | null
    lowPrice: string | null
    closePrice: string | null
    createdAt: Date | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    id: string | null
    poolId: string | null
    tokenId: string | null
    price: string | null
    volume: string | null
    timestamp: bigint | null
    interval: string | null
    openPrice: string | null
    highPrice: string | null
    lowPrice: string | null
    closePrice: string | null
    createdAt: Date | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    id: number
    poolId: number
    tokenId: number
    price: number
    volume: number
    timestamp: number
    interval: number
    openPrice: number
    highPrice: number
    lowPrice: number
    closePrice: number
    createdAt: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    timestamp?: true
  }

  export type PriceHistorySumAggregateInputType = {
    timestamp?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    id?: true
    poolId?: true
    tokenId?: true
    price?: true
    volume?: true
    timestamp?: true
    interval?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    createdAt?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    id?: true
    poolId?: true
    tokenId?: true
    price?: true
    volume?: true
    timestamp?: true
    interval?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    createdAt?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    id?: true
    poolId?: true
    tokenId?: true
    price?: true
    volume?: true
    timestamp?: true
    interval?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    closePrice?: true
    createdAt?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    id: string
    poolId: string
    tokenId: string
    price: string
    volume: string
    timestamp: bigint
    interval: string
    openPrice: string | null
    highPrice: string | null
    lowPrice: string | null
    closePrice: string | null
    createdAt: Date
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
    interval?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
    interval?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
    interval?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    createdAt?: boolean
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>

  export type PriceHistorySelectScalar = {
    id?: boolean
    poolId?: boolean
    tokenId?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
    interval?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    closePrice?: boolean
    createdAt?: boolean
  }

  export type PriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "poolId" | "tokenId" | "price" | "volume" | "timestamp" | "interval" | "openPrice" | "highPrice" | "lowPrice" | "closePrice" | "createdAt", ExtArgs["result"]["priceHistory"]>
  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }
  export type PriceHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pool?: boolean | PoolDefaultArgs<ExtArgs>
    token?: boolean | TokenDefaultArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      pool: Prisma.$PoolPayload<ExtArgs>
      token: Prisma.$TokenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      poolId: string
      tokenId: string
      price: string
      volume: string
      timestamp: bigint
      interval: string
      openPrice: string | null
      highPrice: string | null
      lowPrice: string | null
      closePrice: string | null
      createdAt: Date
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceHistories and returns the data saved in the database.
     * @param {PriceHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories and returns the data updated in the database.
     * @param {PriceHistoryUpdateManyAndReturnArgs} args - Arguments to update many PriceHistories.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceHistories and only return the `id`
     * const priceHistoryWithIdOnly = await prisma.priceHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pool<T extends PoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PoolDefaultArgs<ExtArgs>>): Prisma__PoolClient<$Result.GetResult<Prisma.$PoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    token<T extends TokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TokenDefaultArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PriceHistory model
   */
  interface PriceHistoryFieldRefs {
    readonly id: FieldRef<"PriceHistory", 'String'>
    readonly poolId: FieldRef<"PriceHistory", 'String'>
    readonly tokenId: FieldRef<"PriceHistory", 'String'>
    readonly price: FieldRef<"PriceHistory", 'String'>
    readonly volume: FieldRef<"PriceHistory", 'String'>
    readonly timestamp: FieldRef<"PriceHistory", 'BigInt'>
    readonly interval: FieldRef<"PriceHistory", 'String'>
    readonly openPrice: FieldRef<"PriceHistory", 'String'>
    readonly highPrice: FieldRef<"PriceHistory", 'String'>
    readonly lowPrice: FieldRef<"PriceHistory", 'String'>
    readonly closePrice: FieldRef<"PriceHistory", 'String'>
    readonly createdAt: FieldRef<"PriceHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceHistory createManyAndReturn
   */
  export type PriceHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number
  }

  /**
   * PriceHistory updateManyAndReturn
   */
  export type PriceHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to delete.
     */
    limit?: number
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GorScalarFieldEnum: {
    id: 'id',
    priceUsd: 'priceUsd',
    fetchedAt: 'fetchedAt'
  };

  export type GorScalarFieldEnum = (typeof GorScalarFieldEnum)[keyof typeof GorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    address: 'address',
    name: 'name',
    symbol: 'symbol',
    url: 'url',
    mintAddress: 'mintAddress',
    userId: 'userId',
    website: 'website',
    twitter: 'twitter',
    supply: 'supply',
    decimals: 'decimals',
    bondingCurveSlope: 'bondingCurveSlope',
    metadataUrl: 'metadataUrl',
    imageUrl: 'imageUrl',
    description: 'description',
    contractAddress: 'contractAddress',
    marketCap: 'marketCap',
    totalRaised: 'totalRaised',
    launchDate: 'launchDate',
    telegram: 'telegram',
    discord: 'discord',
    holders: 'holders',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TokenPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenId: 'tokenId',
    quantity: 'quantity',
    pricePerToken: 'pricePerToken',
    totalPrice: 'totalPrice',
    purchaseDate: 'purchaseDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenPurchaseScalarFieldEnum = (typeof TokenPurchaseScalarFieldEnum)[keyof typeof TokenPurchaseScalarFieldEnum]


  export const PoolConfigScalarFieldEnum: {
    id: 'id',
    address: 'address',
    tradeFee: 'tradeFee',
    protocolFee: 'protocolFee',
    referralFee: 'referralFee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PoolConfigScalarFieldEnum = (typeof PoolConfigScalarFieldEnum)[keyof typeof PoolConfigScalarFieldEnum]


  export const PoolScalarFieldEnum: {
    id: 'id',
    address: 'address',
    baseTokenId: 'baseTokenId',
    quoteTokenId: 'quoteTokenId',
    configId: 'configId',
    creator: 'creator',
    isActive: 'isActive',
    totalVolume: 'totalVolume',
    totalTrades: 'totalTrades',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PoolScalarFieldEnum = (typeof PoolScalarFieldEnum)[keyof typeof PoolScalarFieldEnum]


  export const PoolStateScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    lastUpdateTimestamp: 'lastUpdateTimestamp',
    sqrtPriceReference: 'sqrtPriceReference',
    volatilityAccumulator: 'volatilityAccumulator',
    volatilityReference: 'volatilityReference',
    baseReserve: 'baseReserve',
    quoteReserve: 'quoteReserve',
    currentPrice: 'currentPrice',
    rawData: 'rawData',
    createdAt: 'createdAt'
  };

  export type PoolStateScalarFieldEnum = (typeof PoolStateScalarFieldEnum)[keyof typeof PoolStateScalarFieldEnum]


  export const TokenLaunchScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    poolId: 'poolId',
    launchPrice: 'launchPrice',
    initialSupply: 'initialSupply',
    launchTxHash: 'launchTxHash',
    launchedAt: 'launchedAt'
  };

  export type TokenLaunchScalarFieldEnum = (typeof TokenLaunchScalarFieldEnum)[keyof typeof TokenLaunchScalarFieldEnum]


  export const TokenHolderScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    holder: 'holder',
    balance: 'balance',
    percentage: 'percentage',
    acquiredAt: 'acquiredAt',
    updatedAt: 'updatedAt'
  };

  export type TokenHolderScalarFieldEnum = (typeof TokenHolderScalarFieldEnum)[keyof typeof TokenHolderScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    tokenId: 'tokenId',
    txHash: 'txHash',
    txType: 'txType',
    wallet: 'wallet',
    amountIn: 'amountIn',
    amountOut: 'amountOut',
    fee: 'fee',
    price: 'price',
    timestamp: 'timestamp',
    blockNumber: 'blockNumber',
    gasUsed: 'gasUsed',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    id: 'id',
    poolId: 'poolId',
    tokenId: 'tokenId',
    price: 'price',
    volume: 'volume',
    timestamp: 'timestamp',
    interval: 'interval',
    openPrice: 'openPrice',
    highPrice: 'highPrice',
    lowPrice: 'lowPrice',
    closePrice: 'closePrice',
    createdAt: 'createdAt'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'TxType'
   */
  export type EnumTxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxType'>
    


  /**
   * Reference to a field of type 'TxType[]'
   */
  export type ListEnumTxTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TxType[]'>
    
  /**
   * Deep Input Types
   */


  export type GorWhereInput = {
    AND?: GorWhereInput | GorWhereInput[]
    OR?: GorWhereInput[]
    NOT?: GorWhereInput | GorWhereInput[]
    id?: StringFilter<"Gor"> | string
    priceUsd?: StringFilter<"Gor"> | string
    fetchedAt?: DateTimeFilter<"Gor"> | Date | string
  }

  export type GorOrderByWithRelationInput = {
    id?: SortOrder
    priceUsd?: SortOrder
    fetchedAt?: SortOrder
  }

  export type GorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GorWhereInput | GorWhereInput[]
    OR?: GorWhereInput[]
    NOT?: GorWhereInput | GorWhereInput[]
    priceUsd?: StringFilter<"Gor"> | string
    fetchedAt?: DateTimeFilter<"Gor"> | Date | string
  }, "id">

  export type GorOrderByWithAggregationInput = {
    id?: SortOrder
    priceUsd?: SortOrder
    fetchedAt?: SortOrder
    _count?: GorCountOrderByAggregateInput
    _max?: GorMaxOrderByAggregateInput
    _min?: GorMinOrderByAggregateInput
  }

  export type GorScalarWhereWithAggregatesInput = {
    AND?: GorScalarWhereWithAggregatesInput | GorScalarWhereWithAggregatesInput[]
    OR?: GorScalarWhereWithAggregatesInput[]
    NOT?: GorScalarWhereWithAggregatesInput | GorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gor"> | string
    priceUsd?: StringWithAggregatesFilter<"Gor"> | string
    fetchedAt?: DateTimeWithAggregatesFilter<"Gor"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    address?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    launchedTokens?: TokenListRelationFilter
    purchases?: TokenPurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    launchedTokens?: TokenOrderByRelationAggregateInput
    purchases?: TokenPurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    launchedTokens?: TokenListRelationFilter
    purchases?: TokenPurchaseListRelationFilter
  }, "id" | "address">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    address?: StringNullableFilter<"Token"> | string | null
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    url?: StringFilter<"Token"> | string
    mintAddress?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    website?: StringNullableFilter<"Token"> | string | null
    twitter?: StringNullableFilter<"Token"> | string | null
    supply?: StringNullableFilter<"Token"> | string | null
    decimals?: IntFilter<"Token"> | number
    bondingCurveSlope?: FloatNullableFilter<"Token"> | number | null
    metadataUrl?: StringNullableFilter<"Token"> | string | null
    imageUrl?: StringNullableFilter<"Token"> | string | null
    description?: StringNullableFilter<"Token"> | string | null
    contractAddress?: StringNullableFilter<"Token"> | string | null
    marketCap?: StringNullableFilter<"Token"> | string | null
    totalRaised?: StringFilter<"Token"> | string
    launchDate?: DateTimeNullableFilter<"Token"> | Date | string | null
    telegram?: StringNullableFilter<"Token"> | string | null
    discord?: StringNullableFilter<"Token"> | string | null
    holders?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    basePools?: PoolListRelationFilter
    quotePools?: PoolListRelationFilter
    launches?: TokenLaunchListRelationFilter
    tokenHolders?: TokenHolderListRelationFilter
    transactions?: TransactionListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
    purchases?: TokenPurchaseListRelationFilter
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    name?: SortOrder
    symbol?: SortOrder
    url?: SortOrder
    mintAddress?: SortOrder
    userId?: SortOrder
    website?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    supply?: SortOrderInput | SortOrder
    decimals?: SortOrder
    bondingCurveSlope?: SortOrderInput | SortOrder
    metadataUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    contractAddress?: SortOrderInput | SortOrder
    marketCap?: SortOrderInput | SortOrder
    totalRaised?: SortOrder
    launchDate?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    discord?: SortOrderInput | SortOrder
    holders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    basePools?: PoolOrderByRelationAggregateInput
    quotePools?: PoolOrderByRelationAggregateInput
    launches?: TokenLaunchOrderByRelationAggregateInput
    tokenHolders?: TokenHolderOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
    purchases?: TokenPurchaseOrderByRelationAggregateInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    mintAddress?: string
    contractAddress?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    url?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    website?: StringNullableFilter<"Token"> | string | null
    twitter?: StringNullableFilter<"Token"> | string | null
    supply?: StringNullableFilter<"Token"> | string | null
    decimals?: IntFilter<"Token"> | number
    bondingCurveSlope?: FloatNullableFilter<"Token"> | number | null
    metadataUrl?: StringNullableFilter<"Token"> | string | null
    imageUrl?: StringNullableFilter<"Token"> | string | null
    description?: StringNullableFilter<"Token"> | string | null
    marketCap?: StringNullableFilter<"Token"> | string | null
    totalRaised?: StringFilter<"Token"> | string
    launchDate?: DateTimeNullableFilter<"Token"> | Date | string | null
    telegram?: StringNullableFilter<"Token"> | string | null
    discord?: StringNullableFilter<"Token"> | string | null
    holders?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    basePools?: PoolListRelationFilter
    quotePools?: PoolListRelationFilter
    launches?: TokenLaunchListRelationFilter
    tokenHolders?: TokenHolderListRelationFilter
    transactions?: TransactionListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
    purchases?: TokenPurchaseListRelationFilter
  }, "id" | "address" | "mintAddress" | "contractAddress">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    name?: SortOrder
    symbol?: SortOrder
    url?: SortOrder
    mintAddress?: SortOrder
    userId?: SortOrder
    website?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    supply?: SortOrderInput | SortOrder
    decimals?: SortOrder
    bondingCurveSlope?: SortOrderInput | SortOrder
    metadataUrl?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    contractAddress?: SortOrderInput | SortOrder
    marketCap?: SortOrderInput | SortOrder
    totalRaised?: SortOrder
    launchDate?: SortOrderInput | SortOrder
    telegram?: SortOrderInput | SortOrder
    discord?: SortOrderInput | SortOrder
    holders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    address?: StringNullableWithAggregatesFilter<"Token"> | string | null
    name?: StringWithAggregatesFilter<"Token"> | string
    symbol?: StringWithAggregatesFilter<"Token"> | string
    url?: StringWithAggregatesFilter<"Token"> | string
    mintAddress?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    website?: StringNullableWithAggregatesFilter<"Token"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Token"> | string | null
    supply?: StringNullableWithAggregatesFilter<"Token"> | string | null
    decimals?: IntWithAggregatesFilter<"Token"> | number
    bondingCurveSlope?: FloatNullableWithAggregatesFilter<"Token"> | number | null
    metadataUrl?: StringNullableWithAggregatesFilter<"Token"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Token"> | string | null
    description?: StringNullableWithAggregatesFilter<"Token"> | string | null
    contractAddress?: StringNullableWithAggregatesFilter<"Token"> | string | null
    marketCap?: StringNullableWithAggregatesFilter<"Token"> | string | null
    totalRaised?: StringWithAggregatesFilter<"Token"> | string
    launchDate?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    telegram?: StringNullableWithAggregatesFilter<"Token"> | string | null
    discord?: StringNullableWithAggregatesFilter<"Token"> | string | null
    holders?: IntWithAggregatesFilter<"Token"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type TokenPurchaseWhereInput = {
    AND?: TokenPurchaseWhereInput | TokenPurchaseWhereInput[]
    OR?: TokenPurchaseWhereInput[]
    NOT?: TokenPurchaseWhereInput | TokenPurchaseWhereInput[]
    id?: StringFilter<"TokenPurchase"> | string
    userId?: StringFilter<"TokenPurchase"> | string
    tokenId?: StringFilter<"TokenPurchase"> | string
    quantity?: IntFilter<"TokenPurchase"> | number
    pricePerToken?: StringFilter<"TokenPurchase"> | string
    totalPrice?: StringFilter<"TokenPurchase"> | string
    purchaseDate?: DateTimeFilter<"TokenPurchase"> | Date | string
    createdAt?: DateTimeFilter<"TokenPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"TokenPurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type TokenPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenId?: SortOrder
    quantity?: SortOrder
    pricePerToken?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    token?: TokenOrderByWithRelationInput
  }

  export type TokenPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenPurchaseWhereInput | TokenPurchaseWhereInput[]
    OR?: TokenPurchaseWhereInput[]
    NOT?: TokenPurchaseWhereInput | TokenPurchaseWhereInput[]
    userId?: StringFilter<"TokenPurchase"> | string
    tokenId?: StringFilter<"TokenPurchase"> | string
    quantity?: IntFilter<"TokenPurchase"> | number
    pricePerToken?: StringFilter<"TokenPurchase"> | string
    totalPrice?: StringFilter<"TokenPurchase"> | string
    purchaseDate?: DateTimeFilter<"TokenPurchase"> | Date | string
    createdAt?: DateTimeFilter<"TokenPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"TokenPurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id">

  export type TokenPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenId?: SortOrder
    quantity?: SortOrder
    pricePerToken?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenPurchaseCountOrderByAggregateInput
    _avg?: TokenPurchaseAvgOrderByAggregateInput
    _max?: TokenPurchaseMaxOrderByAggregateInput
    _min?: TokenPurchaseMinOrderByAggregateInput
    _sum?: TokenPurchaseSumOrderByAggregateInput
  }

  export type TokenPurchaseScalarWhereWithAggregatesInput = {
    AND?: TokenPurchaseScalarWhereWithAggregatesInput | TokenPurchaseScalarWhereWithAggregatesInput[]
    OR?: TokenPurchaseScalarWhereWithAggregatesInput[]
    NOT?: TokenPurchaseScalarWhereWithAggregatesInput | TokenPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenPurchase"> | string
    userId?: StringWithAggregatesFilter<"TokenPurchase"> | string
    tokenId?: StringWithAggregatesFilter<"TokenPurchase"> | string
    quantity?: IntWithAggregatesFilter<"TokenPurchase"> | number
    pricePerToken?: StringWithAggregatesFilter<"TokenPurchase"> | string
    totalPrice?: StringWithAggregatesFilter<"TokenPurchase"> | string
    purchaseDate?: DateTimeWithAggregatesFilter<"TokenPurchase"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenPurchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TokenPurchase"> | Date | string
  }

  export type PoolConfigWhereInput = {
    AND?: PoolConfigWhereInput | PoolConfigWhereInput[]
    OR?: PoolConfigWhereInput[]
    NOT?: PoolConfigWhereInput | PoolConfigWhereInput[]
    id?: StringFilter<"PoolConfig"> | string
    address?: StringFilter<"PoolConfig"> | string
    tradeFee?: StringFilter<"PoolConfig"> | string
    protocolFee?: StringFilter<"PoolConfig"> | string
    referralFee?: StringFilter<"PoolConfig"> | string
    createdAt?: DateTimeFilter<"PoolConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PoolConfig"> | Date | string
    pools?: PoolListRelationFilter
  }

  export type PoolConfigOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    tradeFee?: SortOrder
    protocolFee?: SortOrder
    referralFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pools?: PoolOrderByRelationAggregateInput
  }

  export type PoolConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: PoolConfigWhereInput | PoolConfigWhereInput[]
    OR?: PoolConfigWhereInput[]
    NOT?: PoolConfigWhereInput | PoolConfigWhereInput[]
    tradeFee?: StringFilter<"PoolConfig"> | string
    protocolFee?: StringFilter<"PoolConfig"> | string
    referralFee?: StringFilter<"PoolConfig"> | string
    createdAt?: DateTimeFilter<"PoolConfig"> | Date | string
    updatedAt?: DateTimeFilter<"PoolConfig"> | Date | string
    pools?: PoolListRelationFilter
  }, "id" | "address">

  export type PoolConfigOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    tradeFee?: SortOrder
    protocolFee?: SortOrder
    referralFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PoolConfigCountOrderByAggregateInput
    _max?: PoolConfigMaxOrderByAggregateInput
    _min?: PoolConfigMinOrderByAggregateInput
  }

  export type PoolConfigScalarWhereWithAggregatesInput = {
    AND?: PoolConfigScalarWhereWithAggregatesInput | PoolConfigScalarWhereWithAggregatesInput[]
    OR?: PoolConfigScalarWhereWithAggregatesInput[]
    NOT?: PoolConfigScalarWhereWithAggregatesInput | PoolConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolConfig"> | string
    address?: StringWithAggregatesFilter<"PoolConfig"> | string
    tradeFee?: StringWithAggregatesFilter<"PoolConfig"> | string
    protocolFee?: StringWithAggregatesFilter<"PoolConfig"> | string
    referralFee?: StringWithAggregatesFilter<"PoolConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PoolConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PoolConfig"> | Date | string
  }

  export type PoolWhereInput = {
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    id?: StringFilter<"Pool"> | string
    address?: StringFilter<"Pool"> | string
    baseTokenId?: StringFilter<"Pool"> | string
    quoteTokenId?: StringFilter<"Pool"> | string
    configId?: StringFilter<"Pool"> | string
    creator?: StringFilter<"Pool"> | string
    isActive?: BoolFilter<"Pool"> | boolean
    totalVolume?: StringFilter<"Pool"> | string
    totalTrades?: IntFilter<"Pool"> | number
    createdAt?: DateTimeFilter<"Pool"> | Date | string
    updatedAt?: DateTimeFilter<"Pool"> | Date | string
    baseToken?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    quoteToken?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    config?: XOR<PoolConfigScalarRelationFilter, PoolConfigWhereInput>
    states?: PoolStateListRelationFilter
    transactions?: TransactionListRelationFilter
    launches?: TokenLaunchListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
  }

  export type PoolOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    baseTokenId?: SortOrder
    quoteTokenId?: SortOrder
    configId?: SortOrder
    creator?: SortOrder
    isActive?: SortOrder
    totalVolume?: SortOrder
    totalTrades?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseToken?: TokenOrderByWithRelationInput
    quoteToken?: TokenOrderByWithRelationInput
    config?: PoolConfigOrderByWithRelationInput
    states?: PoolStateOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    launches?: TokenLaunchOrderByRelationAggregateInput
    priceHistory?: PriceHistoryOrderByRelationAggregateInput
  }

  export type PoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    address?: string
    AND?: PoolWhereInput | PoolWhereInput[]
    OR?: PoolWhereInput[]
    NOT?: PoolWhereInput | PoolWhereInput[]
    baseTokenId?: StringFilter<"Pool"> | string
    quoteTokenId?: StringFilter<"Pool"> | string
    configId?: StringFilter<"Pool"> | string
    creator?: StringFilter<"Pool"> | string
    isActive?: BoolFilter<"Pool"> | boolean
    totalVolume?: StringFilter<"Pool"> | string
    totalTrades?: IntFilter<"Pool"> | number
    createdAt?: DateTimeFilter<"Pool"> | Date | string
    updatedAt?: DateTimeFilter<"Pool"> | Date | string
    baseToken?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    quoteToken?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    config?: XOR<PoolConfigScalarRelationFilter, PoolConfigWhereInput>
    states?: PoolStateListRelationFilter
    transactions?: TransactionListRelationFilter
    launches?: TokenLaunchListRelationFilter
    priceHistory?: PriceHistoryListRelationFilter
  }, "id" | "address">

  export type PoolOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    baseTokenId?: SortOrder
    quoteTokenId?: SortOrder
    configId?: SortOrder
    creator?: SortOrder
    isActive?: SortOrder
    totalVolume?: SortOrder
    totalTrades?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PoolCountOrderByAggregateInput
    _avg?: PoolAvgOrderByAggregateInput
    _max?: PoolMaxOrderByAggregateInput
    _min?: PoolMinOrderByAggregateInput
    _sum?: PoolSumOrderByAggregateInput
  }

  export type PoolScalarWhereWithAggregatesInput = {
    AND?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    OR?: PoolScalarWhereWithAggregatesInput[]
    NOT?: PoolScalarWhereWithAggregatesInput | PoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pool"> | string
    address?: StringWithAggregatesFilter<"Pool"> | string
    baseTokenId?: StringWithAggregatesFilter<"Pool"> | string
    quoteTokenId?: StringWithAggregatesFilter<"Pool"> | string
    configId?: StringWithAggregatesFilter<"Pool"> | string
    creator?: StringWithAggregatesFilter<"Pool"> | string
    isActive?: BoolWithAggregatesFilter<"Pool"> | boolean
    totalVolume?: StringWithAggregatesFilter<"Pool"> | string
    totalTrades?: IntWithAggregatesFilter<"Pool"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pool"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pool"> | Date | string
  }

  export type PoolStateWhereInput = {
    AND?: PoolStateWhereInput | PoolStateWhereInput[]
    OR?: PoolStateWhereInput[]
    NOT?: PoolStateWhereInput | PoolStateWhereInput[]
    id?: StringFilter<"PoolState"> | string
    poolId?: StringFilter<"PoolState"> | string
    lastUpdateTimestamp?: BigIntFilter<"PoolState"> | bigint | number
    sqrtPriceReference?: StringFilter<"PoolState"> | string
    volatilityAccumulator?: StringFilter<"PoolState"> | string
    volatilityReference?: StringFilter<"PoolState"> | string
    baseReserve?: StringFilter<"PoolState"> | string
    quoteReserve?: StringFilter<"PoolState"> | string
    currentPrice?: StringNullableFilter<"PoolState"> | string | null
    rawData?: StringNullableFilter<"PoolState"> | string | null
    createdAt?: DateTimeFilter<"PoolState"> | Date | string
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }

  export type PoolStateOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    lastUpdateTimestamp?: SortOrder
    sqrtPriceReference?: SortOrder
    volatilityAccumulator?: SortOrder
    volatilityReference?: SortOrder
    baseReserve?: SortOrder
    quoteReserve?: SortOrder
    currentPrice?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pool?: PoolOrderByWithRelationInput
  }

  export type PoolStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    poolId_lastUpdateTimestamp?: PoolStatePoolIdLastUpdateTimestampCompoundUniqueInput
    AND?: PoolStateWhereInput | PoolStateWhereInput[]
    OR?: PoolStateWhereInput[]
    NOT?: PoolStateWhereInput | PoolStateWhereInput[]
    poolId?: StringFilter<"PoolState"> | string
    lastUpdateTimestamp?: BigIntFilter<"PoolState"> | bigint | number
    sqrtPriceReference?: StringFilter<"PoolState"> | string
    volatilityAccumulator?: StringFilter<"PoolState"> | string
    volatilityReference?: StringFilter<"PoolState"> | string
    baseReserve?: StringFilter<"PoolState"> | string
    quoteReserve?: StringFilter<"PoolState"> | string
    currentPrice?: StringNullableFilter<"PoolState"> | string | null
    rawData?: StringNullableFilter<"PoolState"> | string | null
    createdAt?: DateTimeFilter<"PoolState"> | Date | string
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }, "id" | "poolId_lastUpdateTimestamp">

  export type PoolStateOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    lastUpdateTimestamp?: SortOrder
    sqrtPriceReference?: SortOrder
    volatilityAccumulator?: SortOrder
    volatilityReference?: SortOrder
    baseReserve?: SortOrder
    quoteReserve?: SortOrder
    currentPrice?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PoolStateCountOrderByAggregateInput
    _avg?: PoolStateAvgOrderByAggregateInput
    _max?: PoolStateMaxOrderByAggregateInput
    _min?: PoolStateMinOrderByAggregateInput
    _sum?: PoolStateSumOrderByAggregateInput
  }

  export type PoolStateScalarWhereWithAggregatesInput = {
    AND?: PoolStateScalarWhereWithAggregatesInput | PoolStateScalarWhereWithAggregatesInput[]
    OR?: PoolStateScalarWhereWithAggregatesInput[]
    NOT?: PoolStateScalarWhereWithAggregatesInput | PoolStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PoolState"> | string
    poolId?: StringWithAggregatesFilter<"PoolState"> | string
    lastUpdateTimestamp?: BigIntWithAggregatesFilter<"PoolState"> | bigint | number
    sqrtPriceReference?: StringWithAggregatesFilter<"PoolState"> | string
    volatilityAccumulator?: StringWithAggregatesFilter<"PoolState"> | string
    volatilityReference?: StringWithAggregatesFilter<"PoolState"> | string
    baseReserve?: StringWithAggregatesFilter<"PoolState"> | string
    quoteReserve?: StringWithAggregatesFilter<"PoolState"> | string
    currentPrice?: StringNullableWithAggregatesFilter<"PoolState"> | string | null
    rawData?: StringNullableWithAggregatesFilter<"PoolState"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PoolState"> | Date | string
  }

  export type TokenLaunchWhereInput = {
    AND?: TokenLaunchWhereInput | TokenLaunchWhereInput[]
    OR?: TokenLaunchWhereInput[]
    NOT?: TokenLaunchWhereInput | TokenLaunchWhereInput[]
    id?: StringFilter<"TokenLaunch"> | string
    tokenId?: StringFilter<"TokenLaunch"> | string
    poolId?: StringFilter<"TokenLaunch"> | string
    launchPrice?: StringFilter<"TokenLaunch"> | string
    initialSupply?: StringFilter<"TokenLaunch"> | string
    launchTxHash?: StringNullableFilter<"TokenLaunch"> | string | null
    launchedAt?: DateTimeFilter<"TokenLaunch"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }

  export type TokenLaunchOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    poolId?: SortOrder
    launchPrice?: SortOrder
    initialSupply?: SortOrder
    launchTxHash?: SortOrderInput | SortOrder
    launchedAt?: SortOrder
    token?: TokenOrderByWithRelationInput
    pool?: PoolOrderByWithRelationInput
  }

  export type TokenLaunchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenId_poolId?: TokenLaunchTokenIdPoolIdCompoundUniqueInput
    AND?: TokenLaunchWhereInput | TokenLaunchWhereInput[]
    OR?: TokenLaunchWhereInput[]
    NOT?: TokenLaunchWhereInput | TokenLaunchWhereInput[]
    tokenId?: StringFilter<"TokenLaunch"> | string
    poolId?: StringFilter<"TokenLaunch"> | string
    launchPrice?: StringFilter<"TokenLaunch"> | string
    initialSupply?: StringFilter<"TokenLaunch"> | string
    launchTxHash?: StringNullableFilter<"TokenLaunch"> | string | null
    launchedAt?: DateTimeFilter<"TokenLaunch"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
  }, "id" | "tokenId_poolId">

  export type TokenLaunchOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    poolId?: SortOrder
    launchPrice?: SortOrder
    initialSupply?: SortOrder
    launchTxHash?: SortOrderInput | SortOrder
    launchedAt?: SortOrder
    _count?: TokenLaunchCountOrderByAggregateInput
    _max?: TokenLaunchMaxOrderByAggregateInput
    _min?: TokenLaunchMinOrderByAggregateInput
  }

  export type TokenLaunchScalarWhereWithAggregatesInput = {
    AND?: TokenLaunchScalarWhereWithAggregatesInput | TokenLaunchScalarWhereWithAggregatesInput[]
    OR?: TokenLaunchScalarWhereWithAggregatesInput[]
    NOT?: TokenLaunchScalarWhereWithAggregatesInput | TokenLaunchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenLaunch"> | string
    tokenId?: StringWithAggregatesFilter<"TokenLaunch"> | string
    poolId?: StringWithAggregatesFilter<"TokenLaunch"> | string
    launchPrice?: StringWithAggregatesFilter<"TokenLaunch"> | string
    initialSupply?: StringWithAggregatesFilter<"TokenLaunch"> | string
    launchTxHash?: StringNullableWithAggregatesFilter<"TokenLaunch"> | string | null
    launchedAt?: DateTimeWithAggregatesFilter<"TokenLaunch"> | Date | string
  }

  export type TokenHolderWhereInput = {
    AND?: TokenHolderWhereInput | TokenHolderWhereInput[]
    OR?: TokenHolderWhereInput[]
    NOT?: TokenHolderWhereInput | TokenHolderWhereInput[]
    id?: StringFilter<"TokenHolder"> | string
    tokenId?: StringFilter<"TokenHolder"> | string
    holder?: StringFilter<"TokenHolder"> | string
    balance?: StringFilter<"TokenHolder"> | string
    percentage?: FloatNullableFilter<"TokenHolder"> | number | null
    acquiredAt?: DateTimeFilter<"TokenHolder"> | Date | string
    updatedAt?: DateTimeFilter<"TokenHolder"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type TokenHolderOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    holder?: SortOrder
    balance?: SortOrder
    percentage?: SortOrderInput | SortOrder
    acquiredAt?: SortOrder
    updatedAt?: SortOrder
    token?: TokenOrderByWithRelationInput
  }

  export type TokenHolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenId_holder?: TokenHolderTokenIdHolderCompoundUniqueInput
    AND?: TokenHolderWhereInput | TokenHolderWhereInput[]
    OR?: TokenHolderWhereInput[]
    NOT?: TokenHolderWhereInput | TokenHolderWhereInput[]
    tokenId?: StringFilter<"TokenHolder"> | string
    holder?: StringFilter<"TokenHolder"> | string
    balance?: StringFilter<"TokenHolder"> | string
    percentage?: FloatNullableFilter<"TokenHolder"> | number | null
    acquiredAt?: DateTimeFilter<"TokenHolder"> | Date | string
    updatedAt?: DateTimeFilter<"TokenHolder"> | Date | string
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id" | "tokenId_holder">

  export type TokenHolderOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    holder?: SortOrder
    balance?: SortOrder
    percentage?: SortOrderInput | SortOrder
    acquiredAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenHolderCountOrderByAggregateInput
    _avg?: TokenHolderAvgOrderByAggregateInput
    _max?: TokenHolderMaxOrderByAggregateInput
    _min?: TokenHolderMinOrderByAggregateInput
    _sum?: TokenHolderSumOrderByAggregateInput
  }

  export type TokenHolderScalarWhereWithAggregatesInput = {
    AND?: TokenHolderScalarWhereWithAggregatesInput | TokenHolderScalarWhereWithAggregatesInput[]
    OR?: TokenHolderScalarWhereWithAggregatesInput[]
    NOT?: TokenHolderScalarWhereWithAggregatesInput | TokenHolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenHolder"> | string
    tokenId?: StringWithAggregatesFilter<"TokenHolder"> | string
    holder?: StringWithAggregatesFilter<"TokenHolder"> | string
    balance?: StringWithAggregatesFilter<"TokenHolder"> | string
    percentage?: FloatNullableWithAggregatesFilter<"TokenHolder"> | number | null
    acquiredAt?: DateTimeWithAggregatesFilter<"TokenHolder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TokenHolder"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    poolId?: StringFilter<"Transaction"> | string
    tokenId?: StringNullableFilter<"Transaction"> | string | null
    txHash?: StringFilter<"Transaction"> | string
    txType?: EnumTxTypeFilter<"Transaction"> | $Enums.TxType
    wallet?: StringFilter<"Transaction"> | string
    amountIn?: StringFilter<"Transaction"> | string
    amountOut?: StringFilter<"Transaction"> | string
    fee?: StringFilter<"Transaction"> | string
    price?: StringFilter<"Transaction"> | string
    timestamp?: BigIntFilter<"Transaction"> | bigint | number
    blockNumber?: BigIntFilter<"Transaction"> | bigint | number
    gasUsed?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
    token?: XOR<TokenNullableScalarRelationFilter, TokenWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrderInput | SortOrder
    txHash?: SortOrder
    txType?: SortOrder
    wallet?: SortOrder
    amountIn?: SortOrder
    amountOut?: SortOrder
    fee?: SortOrder
    price?: SortOrder
    timestamp?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pool?: PoolOrderByWithRelationInput
    token?: TokenOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    txHash?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    poolId?: StringFilter<"Transaction"> | string
    tokenId?: StringNullableFilter<"Transaction"> | string | null
    txType?: EnumTxTypeFilter<"Transaction"> | $Enums.TxType
    wallet?: StringFilter<"Transaction"> | string
    amountIn?: StringFilter<"Transaction"> | string
    amountOut?: StringFilter<"Transaction"> | string
    fee?: StringFilter<"Transaction"> | string
    price?: StringFilter<"Transaction"> | string
    timestamp?: BigIntFilter<"Transaction"> | bigint | number
    blockNumber?: BigIntFilter<"Transaction"> | bigint | number
    gasUsed?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
    token?: XOR<TokenNullableScalarRelationFilter, TokenWhereInput> | null
  }, "id" | "txHash">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrderInput | SortOrder
    txHash?: SortOrder
    txType?: SortOrder
    wallet?: SortOrder
    amountIn?: SortOrder
    amountOut?: SortOrder
    fee?: SortOrder
    price?: SortOrder
    timestamp?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    poolId?: StringWithAggregatesFilter<"Transaction"> | string
    tokenId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    txHash?: StringWithAggregatesFilter<"Transaction"> | string
    txType?: EnumTxTypeWithAggregatesFilter<"Transaction"> | $Enums.TxType
    wallet?: StringWithAggregatesFilter<"Transaction"> | string
    amountIn?: StringWithAggregatesFilter<"Transaction"> | string
    amountOut?: StringWithAggregatesFilter<"Transaction"> | string
    fee?: StringWithAggregatesFilter<"Transaction"> | string
    price?: StringWithAggregatesFilter<"Transaction"> | string
    timestamp?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    blockNumber?: BigIntWithAggregatesFilter<"Transaction"> | bigint | number
    gasUsed?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    id?: StringFilter<"PriceHistory"> | string
    poolId?: StringFilter<"PriceHistory"> | string
    tokenId?: StringFilter<"PriceHistory"> | string
    price?: StringFilter<"PriceHistory"> | string
    volume?: StringFilter<"PriceHistory"> | string
    timestamp?: BigIntFilter<"PriceHistory"> | bigint | number
    interval?: StringFilter<"PriceHistory"> | string
    openPrice?: StringNullableFilter<"PriceHistory"> | string | null
    highPrice?: StringNullableFilter<"PriceHistory"> | string | null
    lowPrice?: StringNullableFilter<"PriceHistory"> | string | null
    closePrice?: StringNullableFilter<"PriceHistory"> | string | null
    createdAt?: DateTimeFilter<"PriceHistory"> | Date | string
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }

  export type PriceHistoryOrderByWithRelationInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    interval?: SortOrder
    openPrice?: SortOrderInput | SortOrder
    highPrice?: SortOrderInput | SortOrder
    lowPrice?: SortOrderInput | SortOrder
    closePrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pool?: PoolOrderByWithRelationInput
    token?: TokenOrderByWithRelationInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    poolId_timestamp_interval?: PriceHistoryPoolIdTimestampIntervalCompoundUniqueInput
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    poolId?: StringFilter<"PriceHistory"> | string
    tokenId?: StringFilter<"PriceHistory"> | string
    price?: StringFilter<"PriceHistory"> | string
    volume?: StringFilter<"PriceHistory"> | string
    timestamp?: BigIntFilter<"PriceHistory"> | bigint | number
    interval?: StringFilter<"PriceHistory"> | string
    openPrice?: StringNullableFilter<"PriceHistory"> | string | null
    highPrice?: StringNullableFilter<"PriceHistory"> | string | null
    lowPrice?: StringNullableFilter<"PriceHistory"> | string | null
    closePrice?: StringNullableFilter<"PriceHistory"> | string | null
    createdAt?: DateTimeFilter<"PriceHistory"> | Date | string
    pool?: XOR<PoolScalarRelationFilter, PoolWhereInput>
    token?: XOR<TokenScalarRelationFilter, TokenWhereInput>
  }, "id" | "poolId_timestamp_interval">

  export type PriceHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    interval?: SortOrder
    openPrice?: SortOrderInput | SortOrder
    highPrice?: SortOrderInput | SortOrder
    lowPrice?: SortOrderInput | SortOrder
    closePrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceHistory"> | string
    poolId?: StringWithAggregatesFilter<"PriceHistory"> | string
    tokenId?: StringWithAggregatesFilter<"PriceHistory"> | string
    price?: StringWithAggregatesFilter<"PriceHistory"> | string
    volume?: StringWithAggregatesFilter<"PriceHistory"> | string
    timestamp?: BigIntWithAggregatesFilter<"PriceHistory"> | bigint | number
    interval?: StringWithAggregatesFilter<"PriceHistory"> | string
    openPrice?: StringNullableWithAggregatesFilter<"PriceHistory"> | string | null
    highPrice?: StringNullableWithAggregatesFilter<"PriceHistory"> | string | null
    lowPrice?: StringNullableWithAggregatesFilter<"PriceHistory"> | string | null
    closePrice?: StringNullableWithAggregatesFilter<"PriceHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
  }

  export type GorCreateInput = {
    id?: string
    priceUsd: string
    fetchedAt?: Date | string
  }

  export type GorUncheckedCreateInput = {
    id?: string
    priceUsd: string
    fetchedAt?: Date | string
  }

  export type GorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GorCreateManyInput = {
    id?: string
    priceUsd: string
    fetchedAt?: Date | string
  }

  export type GorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    priceUsd?: StringFieldUpdateOperationsInput | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    launchedTokens?: TokenCreateNestedManyWithoutUserInput
    purchases?: TokenPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    launchedTokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    launchedTokens?: TokenUpdateManyWithoutUserNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    launchedTokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseCreateInput = {
    id?: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    token: TokenCreateNestedOneWithoutPurchasesInput
  }

  export type TokenPurchaseUncheckedCreateInput = {
    id?: string
    userId: string
    tokenId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    token?: TokenUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TokenPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseCreateManyInput = {
    id?: string
    userId: string
    tokenId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolConfigCreateInput = {
    id?: string
    address: string
    tradeFee: string
    protocolFee: string
    referralFee: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pools?: PoolCreateNestedManyWithoutConfigInput
  }

  export type PoolConfigUncheckedCreateInput = {
    id?: string
    address: string
    tradeFee: string
    protocolFee: string
    referralFee: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pools?: PoolUncheckedCreateNestedManyWithoutConfigInput
  }

  export type PoolConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tradeFee?: StringFieldUpdateOperationsInput | string
    protocolFee?: StringFieldUpdateOperationsInput | string
    referralFee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pools?: PoolUpdateManyWithoutConfigNestedInput
  }

  export type PoolConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tradeFee?: StringFieldUpdateOperationsInput | string
    protocolFee?: StringFieldUpdateOperationsInput | string
    referralFee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pools?: PoolUncheckedUpdateManyWithoutConfigNestedInput
  }

  export type PoolConfigCreateManyInput = {
    id?: string
    address: string
    tradeFee: string
    protocolFee: string
    referralFee: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tradeFee?: StringFieldUpdateOperationsInput | string
    protocolFee?: StringFieldUpdateOperationsInput | string
    referralFee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tradeFee?: StringFieldUpdateOperationsInput | string
    protocolFee?: StringFieldUpdateOperationsInput | string
    referralFee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolCreateInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolCreateManyInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateCreateInput = {
    id?: string
    lastUpdateTimestamp: bigint | number
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve?: string
    quoteReserve?: string
    currentPrice?: string | null
    rawData?: string | null
    createdAt?: Date | string
    pool: PoolCreateNestedOneWithoutStatesInput
  }

  export type PoolStateUncheckedCreateInput = {
    id?: string
    poolId: string
    lastUpdateTimestamp: bigint | number
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve?: string
    quoteReserve?: string
    currentPrice?: string | null
    rawData?: string | null
    createdAt?: Date | string
  }

  export type PoolStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: PoolUpdateOneRequiredWithoutStatesNestedInput
  }

  export type PoolStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateCreateManyInput = {
    id?: string
    poolId: string
    lastUpdateTimestamp: bigint | number
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve?: string
    quoteReserve?: string
    currentPrice?: string | null
    rawData?: string | null
    createdAt?: Date | string
  }

  export type PoolStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchCreateInput = {
    id?: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
    token: TokenCreateNestedOneWithoutLaunchesInput
    pool: PoolCreateNestedOneWithoutLaunchesInput
  }

  export type TokenLaunchUncheckedCreateInput = {
    id?: string
    tokenId: string
    poolId: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
  }

  export type TokenLaunchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutLaunchesNestedInput
    pool?: PoolUpdateOneRequiredWithoutLaunchesNestedInput
  }

  export type TokenLaunchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchCreateManyInput = {
    id?: string
    tokenId: string
    poolId: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
  }

  export type TokenLaunchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenHolderCreateInput = {
    id?: string
    holder: string
    balance: string
    percentage?: number | null
    acquiredAt?: Date | string
    updatedAt?: Date | string
    token: TokenCreateNestedOneWithoutTokenHoldersInput
  }

  export type TokenHolderUncheckedCreateInput = {
    id?: string
    tokenId: string
    holder: string
    balance: string
    percentage?: number | null
    acquiredAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenHolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutTokenHoldersNestedInput
  }

  export type TokenHolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenHolderCreateManyInput = {
    id?: string
    tokenId: string
    holder: string
    balance: string
    percentage?: number | null
    acquiredAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenHolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenHolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
    pool: PoolCreateNestedOneWithoutTransactionsInput
    token?: TokenCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    poolId: string
    tokenId?: string | null
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: PoolUpdateOneRequiredWithoutTransactionsNestedInput
    token?: TokenUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    poolId: string
    tokenId?: string | null
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateInput = {
    id?: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
    pool: PoolCreateNestedOneWithoutPriceHistoryInput
    token: TokenCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    id?: string
    poolId: string
    tokenId: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
  }

  export type PriceHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: PoolUpdateOneRequiredWithoutPriceHistoryNestedInput
    token?: TokenUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateManyInput = {
    id?: string
    poolId: string
    tokenId: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
  }

  export type PriceHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GorCountOrderByAggregateInput = {
    id?: SortOrder
    priceUsd?: SortOrder
    fetchedAt?: SortOrder
  }

  export type GorMaxOrderByAggregateInput = {
    id?: SortOrder
    priceUsd?: SortOrder
    fetchedAt?: SortOrder
  }

  export type GorMinOrderByAggregateInput = {
    id?: SortOrder
    priceUsd?: SortOrder
    fetchedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type TokenPurchaseListRelationFilter = {
    every?: TokenPurchaseWhereInput
    some?: TokenPurchaseWhereInput
    none?: TokenPurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PoolListRelationFilter = {
    every?: PoolWhereInput
    some?: PoolWhereInput
    none?: PoolWhereInput
  }

  export type TokenLaunchListRelationFilter = {
    every?: TokenLaunchWhereInput
    some?: TokenLaunchWhereInput
    none?: TokenLaunchWhereInput
  }

  export type TokenHolderListRelationFilter = {
    every?: TokenHolderWhereInput
    some?: TokenHolderWhereInput
    none?: TokenHolderWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type PoolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenLaunchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenHolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    url?: SortOrder
    mintAddress?: SortOrder
    userId?: SortOrder
    website?: SortOrder
    twitter?: SortOrder
    supply?: SortOrder
    decimals?: SortOrder
    bondingCurveSlope?: SortOrder
    metadataUrl?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    contractAddress?: SortOrder
    marketCap?: SortOrder
    totalRaised?: SortOrder
    launchDate?: SortOrder
    telegram?: SortOrder
    discord?: SortOrder
    holders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    decimals?: SortOrder
    bondingCurveSlope?: SortOrder
    holders?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    url?: SortOrder
    mintAddress?: SortOrder
    userId?: SortOrder
    website?: SortOrder
    twitter?: SortOrder
    supply?: SortOrder
    decimals?: SortOrder
    bondingCurveSlope?: SortOrder
    metadataUrl?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    contractAddress?: SortOrder
    marketCap?: SortOrder
    totalRaised?: SortOrder
    launchDate?: SortOrder
    telegram?: SortOrder
    discord?: SortOrder
    holders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    url?: SortOrder
    mintAddress?: SortOrder
    userId?: SortOrder
    website?: SortOrder
    twitter?: SortOrder
    supply?: SortOrder
    decimals?: SortOrder
    bondingCurveSlope?: SortOrder
    metadataUrl?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    contractAddress?: SortOrder
    marketCap?: SortOrder
    totalRaised?: SortOrder
    launchDate?: SortOrder
    telegram?: SortOrder
    discord?: SortOrder
    holders?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    decimals?: SortOrder
    bondingCurveSlope?: SortOrder
    holders?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TokenScalarRelationFilter = {
    is?: TokenWhereInput
    isNot?: TokenWhereInput
  }

  export type TokenPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenId?: SortOrder
    quantity?: SortOrder
    pricePerToken?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenPurchaseAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type TokenPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenId?: SortOrder
    quantity?: SortOrder
    pricePerToken?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenId?: SortOrder
    quantity?: SortOrder
    pricePerToken?: SortOrder
    totalPrice?: SortOrder
    purchaseDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenPurchaseSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type PoolConfigCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    tradeFee?: SortOrder
    protocolFee?: SortOrder
    referralFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoolConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    tradeFee?: SortOrder
    protocolFee?: SortOrder
    referralFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoolConfigMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    tradeFee?: SortOrder
    protocolFee?: SortOrder
    referralFee?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PoolConfigScalarRelationFilter = {
    is?: PoolConfigWhereInput
    isNot?: PoolConfigWhereInput
  }

  export type PoolStateListRelationFilter = {
    every?: PoolStateWhereInput
    some?: PoolStateWhereInput
    none?: PoolStateWhereInput
  }

  export type PoolStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PoolCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    baseTokenId?: SortOrder
    quoteTokenId?: SortOrder
    configId?: SortOrder
    creator?: SortOrder
    isActive?: SortOrder
    totalVolume?: SortOrder
    totalTrades?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoolAvgOrderByAggregateInput = {
    totalTrades?: SortOrder
  }

  export type PoolMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    baseTokenId?: SortOrder
    quoteTokenId?: SortOrder
    configId?: SortOrder
    creator?: SortOrder
    isActive?: SortOrder
    totalVolume?: SortOrder
    totalTrades?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoolMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    baseTokenId?: SortOrder
    quoteTokenId?: SortOrder
    configId?: SortOrder
    creator?: SortOrder
    isActive?: SortOrder
    totalVolume?: SortOrder
    totalTrades?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PoolSumOrderByAggregateInput = {
    totalTrades?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type PoolScalarRelationFilter = {
    is?: PoolWhereInput
    isNot?: PoolWhereInput
  }

  export type PoolStatePoolIdLastUpdateTimestampCompoundUniqueInput = {
    poolId: string
    lastUpdateTimestamp: bigint | number
  }

  export type PoolStateCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    lastUpdateTimestamp?: SortOrder
    sqrtPriceReference?: SortOrder
    volatilityAccumulator?: SortOrder
    volatilityReference?: SortOrder
    baseReserve?: SortOrder
    quoteReserve?: SortOrder
    currentPrice?: SortOrder
    rawData?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolStateAvgOrderByAggregateInput = {
    lastUpdateTimestamp?: SortOrder
  }

  export type PoolStateMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    lastUpdateTimestamp?: SortOrder
    sqrtPriceReference?: SortOrder
    volatilityAccumulator?: SortOrder
    volatilityReference?: SortOrder
    baseReserve?: SortOrder
    quoteReserve?: SortOrder
    currentPrice?: SortOrder
    rawData?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolStateMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    lastUpdateTimestamp?: SortOrder
    sqrtPriceReference?: SortOrder
    volatilityAccumulator?: SortOrder
    volatilityReference?: SortOrder
    baseReserve?: SortOrder
    quoteReserve?: SortOrder
    currentPrice?: SortOrder
    rawData?: SortOrder
    createdAt?: SortOrder
  }

  export type PoolStateSumOrderByAggregateInput = {
    lastUpdateTimestamp?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type TokenLaunchTokenIdPoolIdCompoundUniqueInput = {
    tokenId: string
    poolId: string
  }

  export type TokenLaunchCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    poolId?: SortOrder
    launchPrice?: SortOrder
    initialSupply?: SortOrder
    launchTxHash?: SortOrder
    launchedAt?: SortOrder
  }

  export type TokenLaunchMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    poolId?: SortOrder
    launchPrice?: SortOrder
    initialSupply?: SortOrder
    launchTxHash?: SortOrder
    launchedAt?: SortOrder
  }

  export type TokenLaunchMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    poolId?: SortOrder
    launchPrice?: SortOrder
    initialSupply?: SortOrder
    launchTxHash?: SortOrder
    launchedAt?: SortOrder
  }

  export type TokenHolderTokenIdHolderCompoundUniqueInput = {
    tokenId: string
    holder: string
  }

  export type TokenHolderCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    holder?: SortOrder
    balance?: SortOrder
    percentage?: SortOrder
    acquiredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenHolderAvgOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type TokenHolderMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    holder?: SortOrder
    balance?: SortOrder
    percentage?: SortOrder
    acquiredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenHolderMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    holder?: SortOrder
    balance?: SortOrder
    percentage?: SortOrder
    acquiredAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenHolderSumOrderByAggregateInput = {
    percentage?: SortOrder
  }

  export type EnumTxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeFilter<$PrismaModel> | $Enums.TxType
  }

  export type TokenNullableScalarRelationFilter = {
    is?: TokenWhereInput | null
    isNot?: TokenWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    txHash?: SortOrder
    txType?: SortOrder
    wallet?: SortOrder
    amountIn?: SortOrder
    amountOut?: SortOrder
    fee?: SortOrder
    price?: SortOrder
    timestamp?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    timestamp?: SortOrder
    blockNumber?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    txHash?: SortOrder
    txType?: SortOrder
    wallet?: SortOrder
    amountIn?: SortOrder
    amountOut?: SortOrder
    fee?: SortOrder
    price?: SortOrder
    timestamp?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    txHash?: SortOrder
    txType?: SortOrder
    wallet?: SortOrder
    amountIn?: SortOrder
    amountOut?: SortOrder
    fee?: SortOrder
    price?: SortOrder
    timestamp?: SortOrder
    blockNumber?: SortOrder
    gasUsed?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    timestamp?: SortOrder
    blockNumber?: SortOrder
  }

  export type EnumTxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeWithAggregatesFilter<$PrismaModel> | $Enums.TxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxTypeFilter<$PrismaModel>
    _max?: NestedEnumTxTypeFilter<$PrismaModel>
  }

  export type PriceHistoryPoolIdTimestampIntervalCompoundUniqueInput = {
    poolId: string
    timestamp: bigint | number
    interval: string
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    interval?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    interval?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    poolId?: SortOrder
    tokenId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    interval?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    closePrice?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    timestamp?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TokenPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenPurchaseCreateWithoutUserInput, TokenPurchaseUncheckedCreateWithoutUserInput> | TokenPurchaseCreateWithoutUserInput[] | TokenPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutUserInput | TokenPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: TokenPurchaseCreateManyUserInputEnvelope
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type TokenPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenPurchaseCreateWithoutUserInput, TokenPurchaseUncheckedCreateWithoutUserInput> | TokenPurchaseCreateWithoutUserInput[] | TokenPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutUserInput | TokenPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: TokenPurchaseCreateManyUserInputEnvelope
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TokenPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenPurchaseCreateWithoutUserInput, TokenPurchaseUncheckedCreateWithoutUserInput> | TokenPurchaseCreateWithoutUserInput[] | TokenPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutUserInput | TokenPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: TokenPurchaseUpsertWithWhereUniqueWithoutUserInput | TokenPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenPurchaseCreateManyUserInputEnvelope
    set?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    disconnect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    delete?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    update?: TokenPurchaseUpdateWithWhereUniqueWithoutUserInput | TokenPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenPurchaseUpdateManyWithWhereWithoutUserInput | TokenPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenPurchaseScalarWhereInput | TokenPurchaseScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type TokenPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenPurchaseCreateWithoutUserInput, TokenPurchaseUncheckedCreateWithoutUserInput> | TokenPurchaseCreateWithoutUserInput[] | TokenPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutUserInput | TokenPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: TokenPurchaseUpsertWithWhereUniqueWithoutUserInput | TokenPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenPurchaseCreateManyUserInputEnvelope
    set?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    disconnect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    delete?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    update?: TokenPurchaseUpdateWithWhereUniqueWithoutUserInput | TokenPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenPurchaseUpdateManyWithWhereWithoutUserInput | TokenPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenPurchaseScalarWhereInput | TokenPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLaunchedTokensInput = {
    create?: XOR<UserCreateWithoutLaunchedTokensInput, UserUncheckedCreateWithoutLaunchedTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaunchedTokensInput
    connect?: UserWhereUniqueInput
  }

  export type PoolCreateNestedManyWithoutBaseTokenInput = {
    create?: XOR<PoolCreateWithoutBaseTokenInput, PoolUncheckedCreateWithoutBaseTokenInput> | PoolCreateWithoutBaseTokenInput[] | PoolUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutBaseTokenInput | PoolCreateOrConnectWithoutBaseTokenInput[]
    createMany?: PoolCreateManyBaseTokenInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolCreateNestedManyWithoutQuoteTokenInput = {
    create?: XOR<PoolCreateWithoutQuoteTokenInput, PoolUncheckedCreateWithoutQuoteTokenInput> | PoolCreateWithoutQuoteTokenInput[] | PoolUncheckedCreateWithoutQuoteTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutQuoteTokenInput | PoolCreateOrConnectWithoutQuoteTokenInput[]
    createMany?: PoolCreateManyQuoteTokenInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type TokenLaunchCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenLaunchCreateWithoutTokenInput, TokenLaunchUncheckedCreateWithoutTokenInput> | TokenLaunchCreateWithoutTokenInput[] | TokenLaunchUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutTokenInput | TokenLaunchCreateOrConnectWithoutTokenInput[]
    createMany?: TokenLaunchCreateManyTokenInputEnvelope
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
  }

  export type TokenHolderCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenHolderCreateWithoutTokenInput, TokenHolderUncheckedCreateWithoutTokenInput> | TokenHolderCreateWithoutTokenInput[] | TokenHolderUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenHolderCreateOrConnectWithoutTokenInput | TokenHolderCreateOrConnectWithoutTokenInput[]
    createMany?: TokenHolderCreateManyTokenInputEnvelope
    connect?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutTokenInput = {
    create?: XOR<TransactionCreateWithoutTokenInput, TransactionUncheckedCreateWithoutTokenInput> | TransactionCreateWithoutTokenInput[] | TransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTokenInput | TransactionCreateOrConnectWithoutTokenInput[]
    createMany?: TransactionCreateManyTokenInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutTokenInput = {
    create?: XOR<PriceHistoryCreateWithoutTokenInput, PriceHistoryUncheckedCreateWithoutTokenInput> | PriceHistoryCreateWithoutTokenInput[] | PriceHistoryUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutTokenInput | PriceHistoryCreateOrConnectWithoutTokenInput[]
    createMany?: PriceHistoryCreateManyTokenInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type TokenPurchaseCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenPurchaseCreateWithoutTokenInput, TokenPurchaseUncheckedCreateWithoutTokenInput> | TokenPurchaseCreateWithoutTokenInput[] | TokenPurchaseUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutTokenInput | TokenPurchaseCreateOrConnectWithoutTokenInput[]
    createMany?: TokenPurchaseCreateManyTokenInputEnvelope
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
  }

  export type PoolUncheckedCreateNestedManyWithoutBaseTokenInput = {
    create?: XOR<PoolCreateWithoutBaseTokenInput, PoolUncheckedCreateWithoutBaseTokenInput> | PoolCreateWithoutBaseTokenInput[] | PoolUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutBaseTokenInput | PoolCreateOrConnectWithoutBaseTokenInput[]
    createMany?: PoolCreateManyBaseTokenInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolUncheckedCreateNestedManyWithoutQuoteTokenInput = {
    create?: XOR<PoolCreateWithoutQuoteTokenInput, PoolUncheckedCreateWithoutQuoteTokenInput> | PoolCreateWithoutQuoteTokenInput[] | PoolUncheckedCreateWithoutQuoteTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutQuoteTokenInput | PoolCreateOrConnectWithoutQuoteTokenInput[]
    createMany?: PoolCreateManyQuoteTokenInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type TokenLaunchUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenLaunchCreateWithoutTokenInput, TokenLaunchUncheckedCreateWithoutTokenInput> | TokenLaunchCreateWithoutTokenInput[] | TokenLaunchUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutTokenInput | TokenLaunchCreateOrConnectWithoutTokenInput[]
    createMany?: TokenLaunchCreateManyTokenInputEnvelope
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
  }

  export type TokenHolderUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenHolderCreateWithoutTokenInput, TokenHolderUncheckedCreateWithoutTokenInput> | TokenHolderCreateWithoutTokenInput[] | TokenHolderUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenHolderCreateOrConnectWithoutTokenInput | TokenHolderCreateOrConnectWithoutTokenInput[]
    createMany?: TokenHolderCreateManyTokenInputEnvelope
    connect?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TransactionCreateWithoutTokenInput, TransactionUncheckedCreateWithoutTokenInput> | TransactionCreateWithoutTokenInput[] | TransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTokenInput | TransactionCreateOrConnectWithoutTokenInput[]
    createMany?: TransactionCreateManyTokenInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<PriceHistoryCreateWithoutTokenInput, PriceHistoryUncheckedCreateWithoutTokenInput> | PriceHistoryCreateWithoutTokenInput[] | PriceHistoryUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutTokenInput | PriceHistoryCreateOrConnectWithoutTokenInput[]
    createMany?: PriceHistoryCreateManyTokenInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput = {
    create?: XOR<TokenPurchaseCreateWithoutTokenInput, TokenPurchaseUncheckedCreateWithoutTokenInput> | TokenPurchaseCreateWithoutTokenInput[] | TokenPurchaseUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutTokenInput | TokenPurchaseCreateOrConnectWithoutTokenInput[]
    createMany?: TokenPurchaseCreateManyTokenInputEnvelope
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutLaunchedTokensNestedInput = {
    create?: XOR<UserCreateWithoutLaunchedTokensInput, UserUncheckedCreateWithoutLaunchedTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaunchedTokensInput
    upsert?: UserUpsertWithoutLaunchedTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaunchedTokensInput, UserUpdateWithoutLaunchedTokensInput>, UserUncheckedUpdateWithoutLaunchedTokensInput>
  }

  export type PoolUpdateManyWithoutBaseTokenNestedInput = {
    create?: XOR<PoolCreateWithoutBaseTokenInput, PoolUncheckedCreateWithoutBaseTokenInput> | PoolCreateWithoutBaseTokenInput[] | PoolUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutBaseTokenInput | PoolCreateOrConnectWithoutBaseTokenInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutBaseTokenInput | PoolUpsertWithWhereUniqueWithoutBaseTokenInput[]
    createMany?: PoolCreateManyBaseTokenInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutBaseTokenInput | PoolUpdateWithWhereUniqueWithoutBaseTokenInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutBaseTokenInput | PoolUpdateManyWithWhereWithoutBaseTokenInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type PoolUpdateManyWithoutQuoteTokenNestedInput = {
    create?: XOR<PoolCreateWithoutQuoteTokenInput, PoolUncheckedCreateWithoutQuoteTokenInput> | PoolCreateWithoutQuoteTokenInput[] | PoolUncheckedCreateWithoutQuoteTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutQuoteTokenInput | PoolCreateOrConnectWithoutQuoteTokenInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutQuoteTokenInput | PoolUpsertWithWhereUniqueWithoutQuoteTokenInput[]
    createMany?: PoolCreateManyQuoteTokenInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutQuoteTokenInput | PoolUpdateWithWhereUniqueWithoutQuoteTokenInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutQuoteTokenInput | PoolUpdateManyWithWhereWithoutQuoteTokenInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type TokenLaunchUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenLaunchCreateWithoutTokenInput, TokenLaunchUncheckedCreateWithoutTokenInput> | TokenLaunchCreateWithoutTokenInput[] | TokenLaunchUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutTokenInput | TokenLaunchCreateOrConnectWithoutTokenInput[]
    upsert?: TokenLaunchUpsertWithWhereUniqueWithoutTokenInput | TokenLaunchUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenLaunchCreateManyTokenInputEnvelope
    set?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    disconnect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    delete?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    update?: TokenLaunchUpdateWithWhereUniqueWithoutTokenInput | TokenLaunchUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenLaunchUpdateManyWithWhereWithoutTokenInput | TokenLaunchUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenLaunchScalarWhereInput | TokenLaunchScalarWhereInput[]
  }

  export type TokenHolderUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenHolderCreateWithoutTokenInput, TokenHolderUncheckedCreateWithoutTokenInput> | TokenHolderCreateWithoutTokenInput[] | TokenHolderUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenHolderCreateOrConnectWithoutTokenInput | TokenHolderCreateOrConnectWithoutTokenInput[]
    upsert?: TokenHolderUpsertWithWhereUniqueWithoutTokenInput | TokenHolderUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenHolderCreateManyTokenInputEnvelope
    set?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    disconnect?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    delete?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    connect?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    update?: TokenHolderUpdateWithWhereUniqueWithoutTokenInput | TokenHolderUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenHolderUpdateManyWithWhereWithoutTokenInput | TokenHolderUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenHolderScalarWhereInput | TokenHolderScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TransactionCreateWithoutTokenInput, TransactionUncheckedCreateWithoutTokenInput> | TransactionCreateWithoutTokenInput[] | TransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTokenInput | TransactionCreateOrConnectWithoutTokenInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTokenInput | TransactionUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TransactionCreateManyTokenInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTokenInput | TransactionUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTokenInput | TransactionUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutTokenNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutTokenInput, PriceHistoryUncheckedCreateWithoutTokenInput> | PriceHistoryCreateWithoutTokenInput[] | PriceHistoryUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutTokenInput | PriceHistoryCreateOrConnectWithoutTokenInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutTokenInput | PriceHistoryUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: PriceHistoryCreateManyTokenInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutTokenInput | PriceHistoryUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutTokenInput | PriceHistoryUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type TokenPurchaseUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenPurchaseCreateWithoutTokenInput, TokenPurchaseUncheckedCreateWithoutTokenInput> | TokenPurchaseCreateWithoutTokenInput[] | TokenPurchaseUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutTokenInput | TokenPurchaseCreateOrConnectWithoutTokenInput[]
    upsert?: TokenPurchaseUpsertWithWhereUniqueWithoutTokenInput | TokenPurchaseUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenPurchaseCreateManyTokenInputEnvelope
    set?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    disconnect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    delete?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    update?: TokenPurchaseUpdateWithWhereUniqueWithoutTokenInput | TokenPurchaseUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenPurchaseUpdateManyWithWhereWithoutTokenInput | TokenPurchaseUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenPurchaseScalarWhereInput | TokenPurchaseScalarWhereInput[]
  }

  export type PoolUncheckedUpdateManyWithoutBaseTokenNestedInput = {
    create?: XOR<PoolCreateWithoutBaseTokenInput, PoolUncheckedCreateWithoutBaseTokenInput> | PoolCreateWithoutBaseTokenInput[] | PoolUncheckedCreateWithoutBaseTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutBaseTokenInput | PoolCreateOrConnectWithoutBaseTokenInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutBaseTokenInput | PoolUpsertWithWhereUniqueWithoutBaseTokenInput[]
    createMany?: PoolCreateManyBaseTokenInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutBaseTokenInput | PoolUpdateWithWhereUniqueWithoutBaseTokenInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutBaseTokenInput | PoolUpdateManyWithWhereWithoutBaseTokenInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput = {
    create?: XOR<PoolCreateWithoutQuoteTokenInput, PoolUncheckedCreateWithoutQuoteTokenInput> | PoolCreateWithoutQuoteTokenInput[] | PoolUncheckedCreateWithoutQuoteTokenInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutQuoteTokenInput | PoolCreateOrConnectWithoutQuoteTokenInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutQuoteTokenInput | PoolUpsertWithWhereUniqueWithoutQuoteTokenInput[]
    createMany?: PoolCreateManyQuoteTokenInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutQuoteTokenInput | PoolUpdateWithWhereUniqueWithoutQuoteTokenInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutQuoteTokenInput | PoolUpdateManyWithWhereWithoutQuoteTokenInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenLaunchCreateWithoutTokenInput, TokenLaunchUncheckedCreateWithoutTokenInput> | TokenLaunchCreateWithoutTokenInput[] | TokenLaunchUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutTokenInput | TokenLaunchCreateOrConnectWithoutTokenInput[]
    upsert?: TokenLaunchUpsertWithWhereUniqueWithoutTokenInput | TokenLaunchUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenLaunchCreateManyTokenInputEnvelope
    set?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    disconnect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    delete?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    update?: TokenLaunchUpdateWithWhereUniqueWithoutTokenInput | TokenLaunchUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenLaunchUpdateManyWithWhereWithoutTokenInput | TokenLaunchUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenLaunchScalarWhereInput | TokenLaunchScalarWhereInput[]
  }

  export type TokenHolderUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenHolderCreateWithoutTokenInput, TokenHolderUncheckedCreateWithoutTokenInput> | TokenHolderCreateWithoutTokenInput[] | TokenHolderUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenHolderCreateOrConnectWithoutTokenInput | TokenHolderCreateOrConnectWithoutTokenInput[]
    upsert?: TokenHolderUpsertWithWhereUniqueWithoutTokenInput | TokenHolderUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenHolderCreateManyTokenInputEnvelope
    set?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    disconnect?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    delete?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    connect?: TokenHolderWhereUniqueInput | TokenHolderWhereUniqueInput[]
    update?: TokenHolderUpdateWithWhereUniqueWithoutTokenInput | TokenHolderUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenHolderUpdateManyWithWhereWithoutTokenInput | TokenHolderUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenHolderScalarWhereInput | TokenHolderScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TransactionCreateWithoutTokenInput, TransactionUncheckedCreateWithoutTokenInput> | TransactionCreateWithoutTokenInput[] | TransactionUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTokenInput | TransactionCreateOrConnectWithoutTokenInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTokenInput | TransactionUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TransactionCreateManyTokenInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTokenInput | TransactionUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTokenInput | TransactionUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutTokenInput, PriceHistoryUncheckedCreateWithoutTokenInput> | PriceHistoryCreateWithoutTokenInput[] | PriceHistoryUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutTokenInput | PriceHistoryCreateOrConnectWithoutTokenInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutTokenInput | PriceHistoryUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: PriceHistoryCreateManyTokenInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutTokenInput | PriceHistoryUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutTokenInput | PriceHistoryUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput = {
    create?: XOR<TokenPurchaseCreateWithoutTokenInput, TokenPurchaseUncheckedCreateWithoutTokenInput> | TokenPurchaseCreateWithoutTokenInput[] | TokenPurchaseUncheckedCreateWithoutTokenInput[]
    connectOrCreate?: TokenPurchaseCreateOrConnectWithoutTokenInput | TokenPurchaseCreateOrConnectWithoutTokenInput[]
    upsert?: TokenPurchaseUpsertWithWhereUniqueWithoutTokenInput | TokenPurchaseUpsertWithWhereUniqueWithoutTokenInput[]
    createMany?: TokenPurchaseCreateManyTokenInputEnvelope
    set?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    disconnect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    delete?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    connect?: TokenPurchaseWhereUniqueInput | TokenPurchaseWhereUniqueInput[]
    update?: TokenPurchaseUpdateWithWhereUniqueWithoutTokenInput | TokenPurchaseUpdateWithWhereUniqueWithoutTokenInput[]
    updateMany?: TokenPurchaseUpdateManyWithWhereWithoutTokenInput | TokenPurchaseUpdateManyWithWhereWithoutTokenInput[]
    deleteMany?: TokenPurchaseScalarWhereInput | TokenPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<TokenCreateWithoutPurchasesInput, TokenUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutPurchasesInput
    connect?: TokenWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type TokenUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<TokenCreateWithoutPurchasesInput, TokenUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutPurchasesInput
    upsert?: TokenUpsertWithoutPurchasesInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutPurchasesInput, TokenUpdateWithoutPurchasesInput>, TokenUncheckedUpdateWithoutPurchasesInput>
  }

  export type PoolCreateNestedManyWithoutConfigInput = {
    create?: XOR<PoolCreateWithoutConfigInput, PoolUncheckedCreateWithoutConfigInput> | PoolCreateWithoutConfigInput[] | PoolUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutConfigInput | PoolCreateOrConnectWithoutConfigInput[]
    createMany?: PoolCreateManyConfigInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolUncheckedCreateNestedManyWithoutConfigInput = {
    create?: XOR<PoolCreateWithoutConfigInput, PoolUncheckedCreateWithoutConfigInput> | PoolCreateWithoutConfigInput[] | PoolUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutConfigInput | PoolCreateOrConnectWithoutConfigInput[]
    createMany?: PoolCreateManyConfigInputEnvelope
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
  }

  export type PoolUpdateManyWithoutConfigNestedInput = {
    create?: XOR<PoolCreateWithoutConfigInput, PoolUncheckedCreateWithoutConfigInput> | PoolCreateWithoutConfigInput[] | PoolUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutConfigInput | PoolCreateOrConnectWithoutConfigInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutConfigInput | PoolUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: PoolCreateManyConfigInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutConfigInput | PoolUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutConfigInput | PoolUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type PoolUncheckedUpdateManyWithoutConfigNestedInput = {
    create?: XOR<PoolCreateWithoutConfigInput, PoolUncheckedCreateWithoutConfigInput> | PoolCreateWithoutConfigInput[] | PoolUncheckedCreateWithoutConfigInput[]
    connectOrCreate?: PoolCreateOrConnectWithoutConfigInput | PoolCreateOrConnectWithoutConfigInput[]
    upsert?: PoolUpsertWithWhereUniqueWithoutConfigInput | PoolUpsertWithWhereUniqueWithoutConfigInput[]
    createMany?: PoolCreateManyConfigInputEnvelope
    set?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    disconnect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    delete?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    connect?: PoolWhereUniqueInput | PoolWhereUniqueInput[]
    update?: PoolUpdateWithWhereUniqueWithoutConfigInput | PoolUpdateWithWhereUniqueWithoutConfigInput[]
    updateMany?: PoolUpdateManyWithWhereWithoutConfigInput | PoolUpdateManyWithWhereWithoutConfigInput[]
    deleteMany?: PoolScalarWhereInput | PoolScalarWhereInput[]
  }

  export type TokenCreateNestedOneWithoutBasePoolsInput = {
    create?: XOR<TokenCreateWithoutBasePoolsInput, TokenUncheckedCreateWithoutBasePoolsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutBasePoolsInput
    connect?: TokenWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutQuotePoolsInput = {
    create?: XOR<TokenCreateWithoutQuotePoolsInput, TokenUncheckedCreateWithoutQuotePoolsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutQuotePoolsInput
    connect?: TokenWhereUniqueInput
  }

  export type PoolConfigCreateNestedOneWithoutPoolsInput = {
    create?: XOR<PoolConfigCreateWithoutPoolsInput, PoolConfigUncheckedCreateWithoutPoolsInput>
    connectOrCreate?: PoolConfigCreateOrConnectWithoutPoolsInput
    connect?: PoolConfigWhereUniqueInput
  }

  export type PoolStateCreateNestedManyWithoutPoolInput = {
    create?: XOR<PoolStateCreateWithoutPoolInput, PoolStateUncheckedCreateWithoutPoolInput> | PoolStateCreateWithoutPoolInput[] | PoolStateUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolStateCreateOrConnectWithoutPoolInput | PoolStateCreateOrConnectWithoutPoolInput[]
    createMany?: PoolStateCreateManyPoolInputEnvelope
    connect?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutPoolInput = {
    create?: XOR<TransactionCreateWithoutPoolInput, TransactionUncheckedCreateWithoutPoolInput> | TransactionCreateWithoutPoolInput[] | TransactionUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPoolInput | TransactionCreateOrConnectWithoutPoolInput[]
    createMany?: TransactionCreateManyPoolInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TokenLaunchCreateNestedManyWithoutPoolInput = {
    create?: XOR<TokenLaunchCreateWithoutPoolInput, TokenLaunchUncheckedCreateWithoutPoolInput> | TokenLaunchCreateWithoutPoolInput[] | TokenLaunchUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutPoolInput | TokenLaunchCreateOrConnectWithoutPoolInput[]
    createMany?: TokenLaunchCreateManyPoolInputEnvelope
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutPoolInput = {
    create?: XOR<PriceHistoryCreateWithoutPoolInput, PriceHistoryUncheckedCreateWithoutPoolInput> | PriceHistoryCreateWithoutPoolInput[] | PriceHistoryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutPoolInput | PriceHistoryCreateOrConnectWithoutPoolInput[]
    createMany?: PriceHistoryCreateManyPoolInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type PoolStateUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<PoolStateCreateWithoutPoolInput, PoolStateUncheckedCreateWithoutPoolInput> | PoolStateCreateWithoutPoolInput[] | PoolStateUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolStateCreateOrConnectWithoutPoolInput | PoolStateCreateOrConnectWithoutPoolInput[]
    createMany?: PoolStateCreateManyPoolInputEnvelope
    connect?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<TransactionCreateWithoutPoolInput, TransactionUncheckedCreateWithoutPoolInput> | TransactionCreateWithoutPoolInput[] | TransactionUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPoolInput | TransactionCreateOrConnectWithoutPoolInput[]
    createMany?: TransactionCreateManyPoolInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TokenLaunchUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<TokenLaunchCreateWithoutPoolInput, TokenLaunchUncheckedCreateWithoutPoolInput> | TokenLaunchCreateWithoutPoolInput[] | TokenLaunchUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutPoolInput | TokenLaunchCreateOrConnectWithoutPoolInput[]
    createMany?: TokenLaunchCreateManyPoolInputEnvelope
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutPoolInput = {
    create?: XOR<PriceHistoryCreateWithoutPoolInput, PriceHistoryUncheckedCreateWithoutPoolInput> | PriceHistoryCreateWithoutPoolInput[] | PriceHistoryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutPoolInput | PriceHistoryCreateOrConnectWithoutPoolInput[]
    createMany?: PriceHistoryCreateManyPoolInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TokenUpdateOneRequiredWithoutBasePoolsNestedInput = {
    create?: XOR<TokenCreateWithoutBasePoolsInput, TokenUncheckedCreateWithoutBasePoolsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutBasePoolsInput
    upsert?: TokenUpsertWithoutBasePoolsInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutBasePoolsInput, TokenUpdateWithoutBasePoolsInput>, TokenUncheckedUpdateWithoutBasePoolsInput>
  }

  export type TokenUpdateOneRequiredWithoutQuotePoolsNestedInput = {
    create?: XOR<TokenCreateWithoutQuotePoolsInput, TokenUncheckedCreateWithoutQuotePoolsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutQuotePoolsInput
    upsert?: TokenUpsertWithoutQuotePoolsInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutQuotePoolsInput, TokenUpdateWithoutQuotePoolsInput>, TokenUncheckedUpdateWithoutQuotePoolsInput>
  }

  export type PoolConfigUpdateOneRequiredWithoutPoolsNestedInput = {
    create?: XOR<PoolConfigCreateWithoutPoolsInput, PoolConfigUncheckedCreateWithoutPoolsInput>
    connectOrCreate?: PoolConfigCreateOrConnectWithoutPoolsInput
    upsert?: PoolConfigUpsertWithoutPoolsInput
    connect?: PoolConfigWhereUniqueInput
    update?: XOR<XOR<PoolConfigUpdateToOneWithWhereWithoutPoolsInput, PoolConfigUpdateWithoutPoolsInput>, PoolConfigUncheckedUpdateWithoutPoolsInput>
  }

  export type PoolStateUpdateManyWithoutPoolNestedInput = {
    create?: XOR<PoolStateCreateWithoutPoolInput, PoolStateUncheckedCreateWithoutPoolInput> | PoolStateCreateWithoutPoolInput[] | PoolStateUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolStateCreateOrConnectWithoutPoolInput | PoolStateCreateOrConnectWithoutPoolInput[]
    upsert?: PoolStateUpsertWithWhereUniqueWithoutPoolInput | PoolStateUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: PoolStateCreateManyPoolInputEnvelope
    set?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    disconnect?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    delete?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    connect?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    update?: PoolStateUpdateWithWhereUniqueWithoutPoolInput | PoolStateUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: PoolStateUpdateManyWithWhereWithoutPoolInput | PoolStateUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: PoolStateScalarWhereInput | PoolStateScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutPoolNestedInput = {
    create?: XOR<TransactionCreateWithoutPoolInput, TransactionUncheckedCreateWithoutPoolInput> | TransactionCreateWithoutPoolInput[] | TransactionUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPoolInput | TransactionCreateOrConnectWithoutPoolInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPoolInput | TransactionUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: TransactionCreateManyPoolInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPoolInput | TransactionUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPoolInput | TransactionUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TokenLaunchUpdateManyWithoutPoolNestedInput = {
    create?: XOR<TokenLaunchCreateWithoutPoolInput, TokenLaunchUncheckedCreateWithoutPoolInput> | TokenLaunchCreateWithoutPoolInput[] | TokenLaunchUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutPoolInput | TokenLaunchCreateOrConnectWithoutPoolInput[]
    upsert?: TokenLaunchUpsertWithWhereUniqueWithoutPoolInput | TokenLaunchUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: TokenLaunchCreateManyPoolInputEnvelope
    set?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    disconnect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    delete?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    update?: TokenLaunchUpdateWithWhereUniqueWithoutPoolInput | TokenLaunchUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: TokenLaunchUpdateManyWithWhereWithoutPoolInput | TokenLaunchUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: TokenLaunchScalarWhereInput | TokenLaunchScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutPoolNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutPoolInput, PriceHistoryUncheckedCreateWithoutPoolInput> | PriceHistoryCreateWithoutPoolInput[] | PriceHistoryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutPoolInput | PriceHistoryCreateOrConnectWithoutPoolInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutPoolInput | PriceHistoryUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: PriceHistoryCreateManyPoolInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutPoolInput | PriceHistoryUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutPoolInput | PriceHistoryUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type PoolStateUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<PoolStateCreateWithoutPoolInput, PoolStateUncheckedCreateWithoutPoolInput> | PoolStateCreateWithoutPoolInput[] | PoolStateUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PoolStateCreateOrConnectWithoutPoolInput | PoolStateCreateOrConnectWithoutPoolInput[]
    upsert?: PoolStateUpsertWithWhereUniqueWithoutPoolInput | PoolStateUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: PoolStateCreateManyPoolInputEnvelope
    set?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    disconnect?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    delete?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    connect?: PoolStateWhereUniqueInput | PoolStateWhereUniqueInput[]
    update?: PoolStateUpdateWithWhereUniqueWithoutPoolInput | PoolStateUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: PoolStateUpdateManyWithWhereWithoutPoolInput | PoolStateUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: PoolStateScalarWhereInput | PoolStateScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<TransactionCreateWithoutPoolInput, TransactionUncheckedCreateWithoutPoolInput> | TransactionCreateWithoutPoolInput[] | TransactionUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPoolInput | TransactionCreateOrConnectWithoutPoolInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPoolInput | TransactionUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: TransactionCreateManyPoolInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPoolInput | TransactionUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPoolInput | TransactionUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<TokenLaunchCreateWithoutPoolInput, TokenLaunchUncheckedCreateWithoutPoolInput> | TokenLaunchCreateWithoutPoolInput[] | TokenLaunchUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: TokenLaunchCreateOrConnectWithoutPoolInput | TokenLaunchCreateOrConnectWithoutPoolInput[]
    upsert?: TokenLaunchUpsertWithWhereUniqueWithoutPoolInput | TokenLaunchUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: TokenLaunchCreateManyPoolInputEnvelope
    set?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    disconnect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    delete?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    connect?: TokenLaunchWhereUniqueInput | TokenLaunchWhereUniqueInput[]
    update?: TokenLaunchUpdateWithWhereUniqueWithoutPoolInput | TokenLaunchUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: TokenLaunchUpdateManyWithWhereWithoutPoolInput | TokenLaunchUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: TokenLaunchScalarWhereInput | TokenLaunchScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutPoolInput, PriceHistoryUncheckedCreateWithoutPoolInput> | PriceHistoryCreateWithoutPoolInput[] | PriceHistoryUncheckedCreateWithoutPoolInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutPoolInput | PriceHistoryCreateOrConnectWithoutPoolInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutPoolInput | PriceHistoryUpsertWithWhereUniqueWithoutPoolInput[]
    createMany?: PriceHistoryCreateManyPoolInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutPoolInput | PriceHistoryUpdateWithWhereUniqueWithoutPoolInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutPoolInput | PriceHistoryUpdateManyWithWhereWithoutPoolInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type PoolCreateNestedOneWithoutStatesInput = {
    create?: XOR<PoolCreateWithoutStatesInput, PoolUncheckedCreateWithoutStatesInput>
    connectOrCreate?: PoolCreateOrConnectWithoutStatesInput
    connect?: PoolWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type PoolUpdateOneRequiredWithoutStatesNestedInput = {
    create?: XOR<PoolCreateWithoutStatesInput, PoolUncheckedCreateWithoutStatesInput>
    connectOrCreate?: PoolCreateOrConnectWithoutStatesInput
    upsert?: PoolUpsertWithoutStatesInput
    connect?: PoolWhereUniqueInput
    update?: XOR<XOR<PoolUpdateToOneWithWhereWithoutStatesInput, PoolUpdateWithoutStatesInput>, PoolUncheckedUpdateWithoutStatesInput>
  }

  export type TokenCreateNestedOneWithoutLaunchesInput = {
    create?: XOR<TokenCreateWithoutLaunchesInput, TokenUncheckedCreateWithoutLaunchesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutLaunchesInput
    connect?: TokenWhereUniqueInput
  }

  export type PoolCreateNestedOneWithoutLaunchesInput = {
    create?: XOR<PoolCreateWithoutLaunchesInput, PoolUncheckedCreateWithoutLaunchesInput>
    connectOrCreate?: PoolCreateOrConnectWithoutLaunchesInput
    connect?: PoolWhereUniqueInput
  }

  export type TokenUpdateOneRequiredWithoutLaunchesNestedInput = {
    create?: XOR<TokenCreateWithoutLaunchesInput, TokenUncheckedCreateWithoutLaunchesInput>
    connectOrCreate?: TokenCreateOrConnectWithoutLaunchesInput
    upsert?: TokenUpsertWithoutLaunchesInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutLaunchesInput, TokenUpdateWithoutLaunchesInput>, TokenUncheckedUpdateWithoutLaunchesInput>
  }

  export type PoolUpdateOneRequiredWithoutLaunchesNestedInput = {
    create?: XOR<PoolCreateWithoutLaunchesInput, PoolUncheckedCreateWithoutLaunchesInput>
    connectOrCreate?: PoolCreateOrConnectWithoutLaunchesInput
    upsert?: PoolUpsertWithoutLaunchesInput
    connect?: PoolWhereUniqueInput
    update?: XOR<XOR<PoolUpdateToOneWithWhereWithoutLaunchesInput, PoolUpdateWithoutLaunchesInput>, PoolUncheckedUpdateWithoutLaunchesInput>
  }

  export type TokenCreateNestedOneWithoutTokenHoldersInput = {
    create?: XOR<TokenCreateWithoutTokenHoldersInput, TokenUncheckedCreateWithoutTokenHoldersInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTokenHoldersInput
    connect?: TokenWhereUniqueInput
  }

  export type TokenUpdateOneRequiredWithoutTokenHoldersNestedInput = {
    create?: XOR<TokenCreateWithoutTokenHoldersInput, TokenUncheckedCreateWithoutTokenHoldersInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTokenHoldersInput
    upsert?: TokenUpsertWithoutTokenHoldersInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutTokenHoldersInput, TokenUpdateWithoutTokenHoldersInput>, TokenUncheckedUpdateWithoutTokenHoldersInput>
  }

  export type PoolCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<PoolCreateWithoutTransactionsInput, PoolUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PoolCreateOrConnectWithoutTransactionsInput
    connect?: PoolWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTransactionsInput
    connect?: TokenWhereUniqueInput
  }

  export type EnumTxTypeFieldUpdateOperationsInput = {
    set?: $Enums.TxType
  }

  export type PoolUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<PoolCreateWithoutTransactionsInput, PoolUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: PoolCreateOrConnectWithoutTransactionsInput
    upsert?: PoolUpsertWithoutTransactionsInput
    connect?: PoolWhereUniqueInput
    update?: XOR<XOR<PoolUpdateToOneWithWhereWithoutTransactionsInput, PoolUpdateWithoutTransactionsInput>, PoolUncheckedUpdateWithoutTransactionsInput>
  }

  export type TokenUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TokenCreateOrConnectWithoutTransactionsInput
    upsert?: TokenUpsertWithoutTransactionsInput
    disconnect?: TokenWhereInput | boolean
    delete?: TokenWhereInput | boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutTransactionsInput, TokenUpdateWithoutTransactionsInput>, TokenUncheckedUpdateWithoutTransactionsInput>
  }

  export type PoolCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<PoolCreateWithoutPriceHistoryInput, PoolUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: PoolCreateOrConnectWithoutPriceHistoryInput
    connect?: PoolWhereUniqueInput
  }

  export type TokenCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<TokenCreateWithoutPriceHistoryInput, TokenUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: TokenCreateOrConnectWithoutPriceHistoryInput
    connect?: TokenWhereUniqueInput
  }

  export type PoolUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<PoolCreateWithoutPriceHistoryInput, PoolUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: PoolCreateOrConnectWithoutPriceHistoryInput
    upsert?: PoolUpsertWithoutPriceHistoryInput
    connect?: PoolWhereUniqueInput
    update?: XOR<XOR<PoolUpdateToOneWithWhereWithoutPriceHistoryInput, PoolUpdateWithoutPriceHistoryInput>, PoolUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type TokenUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<TokenCreateWithoutPriceHistoryInput, TokenUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: TokenCreateOrConnectWithoutPriceHistoryInput
    upsert?: TokenUpsertWithoutPriceHistoryInput
    connect?: TokenWhereUniqueInput
    update?: XOR<XOR<TokenUpdateToOneWithWhereWithoutPriceHistoryInput, TokenUpdateWithoutPriceHistoryInput>, TokenUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumTxTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeFilter<$PrismaModel> | $Enums.TxType
  }

  export type NestedEnumTxTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TxType | EnumTxTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TxType[] | ListEnumTxTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTxTypeWithAggregatesFilter<$PrismaModel> | $Enums.TxType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTxTypeFilter<$PrismaModel>
    _max?: NestedEnumTxTypeFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenPurchaseCreateWithoutUserInput = {
    id?: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    token: TokenCreateNestedOneWithoutPurchasesInput
  }

  export type TokenPurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    tokenId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenPurchaseCreateOrConnectWithoutUserInput = {
    where: TokenPurchaseWhereUniqueInput
    create: XOR<TokenPurchaseCreateWithoutUserInput, TokenPurchaseUncheckedCreateWithoutUserInput>
  }

  export type TokenPurchaseCreateManyUserInputEnvelope = {
    data: TokenPurchaseCreateManyUserInput | TokenPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    address?: StringNullableFilter<"Token"> | string | null
    name?: StringFilter<"Token"> | string
    symbol?: StringFilter<"Token"> | string
    url?: StringFilter<"Token"> | string
    mintAddress?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    website?: StringNullableFilter<"Token"> | string | null
    twitter?: StringNullableFilter<"Token"> | string | null
    supply?: StringNullableFilter<"Token"> | string | null
    decimals?: IntFilter<"Token"> | number
    bondingCurveSlope?: FloatNullableFilter<"Token"> | number | null
    metadataUrl?: StringNullableFilter<"Token"> | string | null
    imageUrl?: StringNullableFilter<"Token"> | string | null
    description?: StringNullableFilter<"Token"> | string | null
    contractAddress?: StringNullableFilter<"Token"> | string | null
    marketCap?: StringNullableFilter<"Token"> | string | null
    totalRaised?: StringFilter<"Token"> | string
    launchDate?: DateTimeNullableFilter<"Token"> | Date | string | null
    telegram?: StringNullableFilter<"Token"> | string | null
    discord?: StringNullableFilter<"Token"> | string | null
    holders?: IntFilter<"Token"> | number
    createdAt?: DateTimeFilter<"Token"> | Date | string
    updatedAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenPurchaseWhereUniqueInput
    update: XOR<TokenPurchaseUpdateWithoutUserInput, TokenPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<TokenPurchaseCreateWithoutUserInput, TokenPurchaseUncheckedCreateWithoutUserInput>
  }

  export type TokenPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenPurchaseWhereUniqueInput
    data: XOR<TokenPurchaseUpdateWithoutUserInput, TokenPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type TokenPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: TokenPurchaseScalarWhereInput
    data: XOR<TokenPurchaseUpdateManyMutationInput, TokenPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenPurchaseScalarWhereInput = {
    AND?: TokenPurchaseScalarWhereInput | TokenPurchaseScalarWhereInput[]
    OR?: TokenPurchaseScalarWhereInput[]
    NOT?: TokenPurchaseScalarWhereInput | TokenPurchaseScalarWhereInput[]
    id?: StringFilter<"TokenPurchase"> | string
    userId?: StringFilter<"TokenPurchase"> | string
    tokenId?: StringFilter<"TokenPurchase"> | string
    quantity?: IntFilter<"TokenPurchase"> | number
    pricePerToken?: StringFilter<"TokenPurchase"> | string
    totalPrice?: StringFilter<"TokenPurchase"> | string
    purchaseDate?: DateTimeFilter<"TokenPurchase"> | Date | string
    createdAt?: DateTimeFilter<"TokenPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"TokenPurchase"> | Date | string
  }

  export type UserCreateWithoutLaunchedTokensInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: TokenPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLaunchedTokensInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLaunchedTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaunchedTokensInput, UserUncheckedCreateWithoutLaunchedTokensInput>
  }

  export type PoolCreateWithoutBaseTokenInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutBaseTokenInput = {
    id?: string
    address: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutBaseTokenInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutBaseTokenInput, PoolUncheckedCreateWithoutBaseTokenInput>
  }

  export type PoolCreateManyBaseTokenInputEnvelope = {
    data: PoolCreateManyBaseTokenInput | PoolCreateManyBaseTokenInput[]
    skipDuplicates?: boolean
  }

  export type PoolCreateWithoutQuoteTokenInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutQuoteTokenInput = {
    id?: string
    address: string
    baseTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutQuoteTokenInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutQuoteTokenInput, PoolUncheckedCreateWithoutQuoteTokenInput>
  }

  export type PoolCreateManyQuoteTokenInputEnvelope = {
    data: PoolCreateManyQuoteTokenInput | PoolCreateManyQuoteTokenInput[]
    skipDuplicates?: boolean
  }

  export type TokenLaunchCreateWithoutTokenInput = {
    id?: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
    pool: PoolCreateNestedOneWithoutLaunchesInput
  }

  export type TokenLaunchUncheckedCreateWithoutTokenInput = {
    id?: string
    poolId: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
  }

  export type TokenLaunchCreateOrConnectWithoutTokenInput = {
    where: TokenLaunchWhereUniqueInput
    create: XOR<TokenLaunchCreateWithoutTokenInput, TokenLaunchUncheckedCreateWithoutTokenInput>
  }

  export type TokenLaunchCreateManyTokenInputEnvelope = {
    data: TokenLaunchCreateManyTokenInput | TokenLaunchCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TokenHolderCreateWithoutTokenInput = {
    id?: string
    holder: string
    balance: string
    percentage?: number | null
    acquiredAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenHolderUncheckedCreateWithoutTokenInput = {
    id?: string
    holder: string
    balance: string
    percentage?: number | null
    acquiredAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenHolderCreateOrConnectWithoutTokenInput = {
    where: TokenHolderWhereUniqueInput
    create: XOR<TokenHolderCreateWithoutTokenInput, TokenHolderUncheckedCreateWithoutTokenInput>
  }

  export type TokenHolderCreateManyTokenInputEnvelope = {
    data: TokenHolderCreateManyTokenInput | TokenHolderCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutTokenInput = {
    id?: string
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
    pool: PoolCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutTokenInput = {
    id?: string
    poolId: string
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutTokenInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTokenInput, TransactionUncheckedCreateWithoutTokenInput>
  }

  export type TransactionCreateManyTokenInputEnvelope = {
    data: TransactionCreateManyTokenInput | TransactionCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type PriceHistoryCreateWithoutTokenInput = {
    id?: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
    pool: PoolCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateWithoutTokenInput = {
    id?: string
    poolId: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutTokenInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutTokenInput, PriceHistoryUncheckedCreateWithoutTokenInput>
  }

  export type PriceHistoryCreateManyTokenInputEnvelope = {
    data: PriceHistoryCreateManyTokenInput | PriceHistoryCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type TokenPurchaseCreateWithoutTokenInput = {
    id?: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type TokenPurchaseUncheckedCreateWithoutTokenInput = {
    id?: string
    userId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenPurchaseCreateOrConnectWithoutTokenInput = {
    where: TokenPurchaseWhereUniqueInput
    create: XOR<TokenPurchaseCreateWithoutTokenInput, TokenPurchaseUncheckedCreateWithoutTokenInput>
  }

  export type TokenPurchaseCreateManyTokenInputEnvelope = {
    data: TokenPurchaseCreateManyTokenInput | TokenPurchaseCreateManyTokenInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLaunchedTokensInput = {
    update: XOR<UserUpdateWithoutLaunchedTokensInput, UserUncheckedUpdateWithoutLaunchedTokensInput>
    create: XOR<UserCreateWithoutLaunchedTokensInput, UserUncheckedCreateWithoutLaunchedTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaunchedTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaunchedTokensInput, UserUncheckedUpdateWithoutLaunchedTokensInput>
  }

  export type UserUpdateWithoutLaunchedTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TokenPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLaunchedTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PoolUpsertWithWhereUniqueWithoutBaseTokenInput = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutBaseTokenInput, PoolUncheckedUpdateWithoutBaseTokenInput>
    create: XOR<PoolCreateWithoutBaseTokenInput, PoolUncheckedCreateWithoutBaseTokenInput>
  }

  export type PoolUpdateWithWhereUniqueWithoutBaseTokenInput = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutBaseTokenInput, PoolUncheckedUpdateWithoutBaseTokenInput>
  }

  export type PoolUpdateManyWithWhereWithoutBaseTokenInput = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutBaseTokenInput>
  }

  export type PoolScalarWhereInput = {
    AND?: PoolScalarWhereInput | PoolScalarWhereInput[]
    OR?: PoolScalarWhereInput[]
    NOT?: PoolScalarWhereInput | PoolScalarWhereInput[]
    id?: StringFilter<"Pool"> | string
    address?: StringFilter<"Pool"> | string
    baseTokenId?: StringFilter<"Pool"> | string
    quoteTokenId?: StringFilter<"Pool"> | string
    configId?: StringFilter<"Pool"> | string
    creator?: StringFilter<"Pool"> | string
    isActive?: BoolFilter<"Pool"> | boolean
    totalVolume?: StringFilter<"Pool"> | string
    totalTrades?: IntFilter<"Pool"> | number
    createdAt?: DateTimeFilter<"Pool"> | Date | string
    updatedAt?: DateTimeFilter<"Pool"> | Date | string
  }

  export type PoolUpsertWithWhereUniqueWithoutQuoteTokenInput = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutQuoteTokenInput, PoolUncheckedUpdateWithoutQuoteTokenInput>
    create: XOR<PoolCreateWithoutQuoteTokenInput, PoolUncheckedCreateWithoutQuoteTokenInput>
  }

  export type PoolUpdateWithWhereUniqueWithoutQuoteTokenInput = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutQuoteTokenInput, PoolUncheckedUpdateWithoutQuoteTokenInput>
  }

  export type PoolUpdateManyWithWhereWithoutQuoteTokenInput = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutQuoteTokenInput>
  }

  export type TokenLaunchUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenLaunchWhereUniqueInput
    update: XOR<TokenLaunchUpdateWithoutTokenInput, TokenLaunchUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenLaunchCreateWithoutTokenInput, TokenLaunchUncheckedCreateWithoutTokenInput>
  }

  export type TokenLaunchUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenLaunchWhereUniqueInput
    data: XOR<TokenLaunchUpdateWithoutTokenInput, TokenLaunchUncheckedUpdateWithoutTokenInput>
  }

  export type TokenLaunchUpdateManyWithWhereWithoutTokenInput = {
    where: TokenLaunchScalarWhereInput
    data: XOR<TokenLaunchUpdateManyMutationInput, TokenLaunchUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenLaunchScalarWhereInput = {
    AND?: TokenLaunchScalarWhereInput | TokenLaunchScalarWhereInput[]
    OR?: TokenLaunchScalarWhereInput[]
    NOT?: TokenLaunchScalarWhereInput | TokenLaunchScalarWhereInput[]
    id?: StringFilter<"TokenLaunch"> | string
    tokenId?: StringFilter<"TokenLaunch"> | string
    poolId?: StringFilter<"TokenLaunch"> | string
    launchPrice?: StringFilter<"TokenLaunch"> | string
    initialSupply?: StringFilter<"TokenLaunch"> | string
    launchTxHash?: StringNullableFilter<"TokenLaunch"> | string | null
    launchedAt?: DateTimeFilter<"TokenLaunch"> | Date | string
  }

  export type TokenHolderUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenHolderWhereUniqueInput
    update: XOR<TokenHolderUpdateWithoutTokenInput, TokenHolderUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenHolderCreateWithoutTokenInput, TokenHolderUncheckedCreateWithoutTokenInput>
  }

  export type TokenHolderUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenHolderWhereUniqueInput
    data: XOR<TokenHolderUpdateWithoutTokenInput, TokenHolderUncheckedUpdateWithoutTokenInput>
  }

  export type TokenHolderUpdateManyWithWhereWithoutTokenInput = {
    where: TokenHolderScalarWhereInput
    data: XOR<TokenHolderUpdateManyMutationInput, TokenHolderUncheckedUpdateManyWithoutTokenInput>
  }

  export type TokenHolderScalarWhereInput = {
    AND?: TokenHolderScalarWhereInput | TokenHolderScalarWhereInput[]
    OR?: TokenHolderScalarWhereInput[]
    NOT?: TokenHolderScalarWhereInput | TokenHolderScalarWhereInput[]
    id?: StringFilter<"TokenHolder"> | string
    tokenId?: StringFilter<"TokenHolder"> | string
    holder?: StringFilter<"TokenHolder"> | string
    balance?: StringFilter<"TokenHolder"> | string
    percentage?: FloatNullableFilter<"TokenHolder"> | number | null
    acquiredAt?: DateTimeFilter<"TokenHolder"> | Date | string
    updatedAt?: DateTimeFilter<"TokenHolder"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutTokenInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTokenInput, TransactionUncheckedUpdateWithoutTokenInput>
    create: XOR<TransactionCreateWithoutTokenInput, TransactionUncheckedCreateWithoutTokenInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTokenInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTokenInput, TransactionUncheckedUpdateWithoutTokenInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTokenInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTokenInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    poolId?: StringFilter<"Transaction"> | string
    tokenId?: StringNullableFilter<"Transaction"> | string | null
    txHash?: StringFilter<"Transaction"> | string
    txType?: EnumTxTypeFilter<"Transaction"> | $Enums.TxType
    wallet?: StringFilter<"Transaction"> | string
    amountIn?: StringFilter<"Transaction"> | string
    amountOut?: StringFilter<"Transaction"> | string
    fee?: StringFilter<"Transaction"> | string
    price?: StringFilter<"Transaction"> | string
    timestamp?: BigIntFilter<"Transaction"> | bigint | number
    blockNumber?: BigIntFilter<"Transaction"> | bigint | number
    gasUsed?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutTokenInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutTokenInput, PriceHistoryUncheckedUpdateWithoutTokenInput>
    create: XOR<PriceHistoryCreateWithoutTokenInput, PriceHistoryUncheckedCreateWithoutTokenInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutTokenInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutTokenInput, PriceHistoryUncheckedUpdateWithoutTokenInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutTokenInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutTokenInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    id?: StringFilter<"PriceHistory"> | string
    poolId?: StringFilter<"PriceHistory"> | string
    tokenId?: StringFilter<"PriceHistory"> | string
    price?: StringFilter<"PriceHistory"> | string
    volume?: StringFilter<"PriceHistory"> | string
    timestamp?: BigIntFilter<"PriceHistory"> | bigint | number
    interval?: StringFilter<"PriceHistory"> | string
    openPrice?: StringNullableFilter<"PriceHistory"> | string | null
    highPrice?: StringNullableFilter<"PriceHistory"> | string | null
    lowPrice?: StringNullableFilter<"PriceHistory"> | string | null
    closePrice?: StringNullableFilter<"PriceHistory"> | string | null
    createdAt?: DateTimeFilter<"PriceHistory"> | Date | string
  }

  export type TokenPurchaseUpsertWithWhereUniqueWithoutTokenInput = {
    where: TokenPurchaseWhereUniqueInput
    update: XOR<TokenPurchaseUpdateWithoutTokenInput, TokenPurchaseUncheckedUpdateWithoutTokenInput>
    create: XOR<TokenPurchaseCreateWithoutTokenInput, TokenPurchaseUncheckedCreateWithoutTokenInput>
  }

  export type TokenPurchaseUpdateWithWhereUniqueWithoutTokenInput = {
    where: TokenPurchaseWhereUniqueInput
    data: XOR<TokenPurchaseUpdateWithoutTokenInput, TokenPurchaseUncheckedUpdateWithoutTokenInput>
  }

  export type TokenPurchaseUpdateManyWithWhereWithoutTokenInput = {
    where: TokenPurchaseScalarWhereInput
    data: XOR<TokenPurchaseUpdateManyMutationInput, TokenPurchaseUncheckedUpdateManyWithoutTokenInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    launchedTokens?: TokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    name?: string | null
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    launchedTokens?: TokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type TokenCreateWithoutPurchasesInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutPurchasesInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutPurchasesInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutPurchasesInput, TokenUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    launchedTokens?: TokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    launchedTokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TokenUpsertWithoutPurchasesInput = {
    update: XOR<TokenUpdateWithoutPurchasesInput, TokenUncheckedUpdateWithoutPurchasesInput>
    create: XOR<TokenCreateWithoutPurchasesInput, TokenUncheckedCreateWithoutPurchasesInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutPurchasesInput, TokenUncheckedUpdateWithoutPurchasesInput>
  }

  export type TokenUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type PoolCreateWithoutConfigInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutConfigInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutConfigInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutConfigInput, PoolUncheckedCreateWithoutConfigInput>
  }

  export type PoolCreateManyConfigInputEnvelope = {
    data: PoolCreateManyConfigInput | PoolCreateManyConfigInput[]
    skipDuplicates?: boolean
  }

  export type PoolUpsertWithWhereUniqueWithoutConfigInput = {
    where: PoolWhereUniqueInput
    update: XOR<PoolUpdateWithoutConfigInput, PoolUncheckedUpdateWithoutConfigInput>
    create: XOR<PoolCreateWithoutConfigInput, PoolUncheckedCreateWithoutConfigInput>
  }

  export type PoolUpdateWithWhereUniqueWithoutConfigInput = {
    where: PoolWhereUniqueInput
    data: XOR<PoolUpdateWithoutConfigInput, PoolUncheckedUpdateWithoutConfigInput>
  }

  export type PoolUpdateManyWithWhereWithoutConfigInput = {
    where: PoolScalarWhereInput
    data: XOR<PoolUpdateManyMutationInput, PoolUncheckedUpdateManyWithoutConfigInput>
  }

  export type TokenCreateWithoutBasePoolsInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutBasePoolsInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutBasePoolsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutBasePoolsInput, TokenUncheckedCreateWithoutBasePoolsInput>
  }

  export type TokenCreateWithoutQuotePoolsInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutQuotePoolsInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutQuotePoolsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutQuotePoolsInput, TokenUncheckedCreateWithoutQuotePoolsInput>
  }

  export type PoolConfigCreateWithoutPoolsInput = {
    id?: string
    address: string
    tradeFee: string
    protocolFee: string
    referralFee: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolConfigUncheckedCreateWithoutPoolsInput = {
    id?: string
    address: string
    tradeFee: string
    protocolFee: string
    referralFee: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolConfigCreateOrConnectWithoutPoolsInput = {
    where: PoolConfigWhereUniqueInput
    create: XOR<PoolConfigCreateWithoutPoolsInput, PoolConfigUncheckedCreateWithoutPoolsInput>
  }

  export type PoolStateCreateWithoutPoolInput = {
    id?: string
    lastUpdateTimestamp: bigint | number
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve?: string
    quoteReserve?: string
    currentPrice?: string | null
    rawData?: string | null
    createdAt?: Date | string
  }

  export type PoolStateUncheckedCreateWithoutPoolInput = {
    id?: string
    lastUpdateTimestamp: bigint | number
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve?: string
    quoteReserve?: string
    currentPrice?: string | null
    rawData?: string | null
    createdAt?: Date | string
  }

  export type PoolStateCreateOrConnectWithoutPoolInput = {
    where: PoolStateWhereUniqueInput
    create: XOR<PoolStateCreateWithoutPoolInput, PoolStateUncheckedCreateWithoutPoolInput>
  }

  export type PoolStateCreateManyPoolInputEnvelope = {
    data: PoolStateCreateManyPoolInput | PoolStateCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutPoolInput = {
    id?: string
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
    token?: TokenCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutPoolInput = {
    id?: string
    tokenId?: string | null
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutPoolInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPoolInput, TransactionUncheckedCreateWithoutPoolInput>
  }

  export type TransactionCreateManyPoolInputEnvelope = {
    data: TransactionCreateManyPoolInput | TransactionCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type TokenLaunchCreateWithoutPoolInput = {
    id?: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
    token: TokenCreateNestedOneWithoutLaunchesInput
  }

  export type TokenLaunchUncheckedCreateWithoutPoolInput = {
    id?: string
    tokenId: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
  }

  export type TokenLaunchCreateOrConnectWithoutPoolInput = {
    where: TokenLaunchWhereUniqueInput
    create: XOR<TokenLaunchCreateWithoutPoolInput, TokenLaunchUncheckedCreateWithoutPoolInput>
  }

  export type TokenLaunchCreateManyPoolInputEnvelope = {
    data: TokenLaunchCreateManyPoolInput | TokenLaunchCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type PriceHistoryCreateWithoutPoolInput = {
    id?: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
    token: TokenCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceHistoryUncheckedCreateWithoutPoolInput = {
    id?: string
    tokenId: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
  }

  export type PriceHistoryCreateOrConnectWithoutPoolInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutPoolInput, PriceHistoryUncheckedCreateWithoutPoolInput>
  }

  export type PriceHistoryCreateManyPoolInputEnvelope = {
    data: PriceHistoryCreateManyPoolInput | PriceHistoryCreateManyPoolInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithoutBasePoolsInput = {
    update: XOR<TokenUpdateWithoutBasePoolsInput, TokenUncheckedUpdateWithoutBasePoolsInput>
    create: XOR<TokenCreateWithoutBasePoolsInput, TokenUncheckedCreateWithoutBasePoolsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutBasePoolsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutBasePoolsInput, TokenUncheckedUpdateWithoutBasePoolsInput>
  }

  export type TokenUpdateWithoutBasePoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutBasePoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenUpsertWithoutQuotePoolsInput = {
    update: XOR<TokenUpdateWithoutQuotePoolsInput, TokenUncheckedUpdateWithoutQuotePoolsInput>
    create: XOR<TokenCreateWithoutQuotePoolsInput, TokenUncheckedCreateWithoutQuotePoolsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutQuotePoolsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutQuotePoolsInput, TokenUncheckedUpdateWithoutQuotePoolsInput>
  }

  export type TokenUpdateWithoutQuotePoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutQuotePoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type PoolConfigUpsertWithoutPoolsInput = {
    update: XOR<PoolConfigUpdateWithoutPoolsInput, PoolConfigUncheckedUpdateWithoutPoolsInput>
    create: XOR<PoolConfigCreateWithoutPoolsInput, PoolConfigUncheckedCreateWithoutPoolsInput>
    where?: PoolConfigWhereInput
  }

  export type PoolConfigUpdateToOneWithWhereWithoutPoolsInput = {
    where?: PoolConfigWhereInput
    data: XOR<PoolConfigUpdateWithoutPoolsInput, PoolConfigUncheckedUpdateWithoutPoolsInput>
  }

  export type PoolConfigUpdateWithoutPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tradeFee?: StringFieldUpdateOperationsInput | string
    protocolFee?: StringFieldUpdateOperationsInput | string
    referralFee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolConfigUncheckedUpdateWithoutPoolsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    tradeFee?: StringFieldUpdateOperationsInput | string
    protocolFee?: StringFieldUpdateOperationsInput | string
    referralFee?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateUpsertWithWhereUniqueWithoutPoolInput = {
    where: PoolStateWhereUniqueInput
    update: XOR<PoolStateUpdateWithoutPoolInput, PoolStateUncheckedUpdateWithoutPoolInput>
    create: XOR<PoolStateCreateWithoutPoolInput, PoolStateUncheckedCreateWithoutPoolInput>
  }

  export type PoolStateUpdateWithWhereUniqueWithoutPoolInput = {
    where: PoolStateWhereUniqueInput
    data: XOR<PoolStateUpdateWithoutPoolInput, PoolStateUncheckedUpdateWithoutPoolInput>
  }

  export type PoolStateUpdateManyWithWhereWithoutPoolInput = {
    where: PoolStateScalarWhereInput
    data: XOR<PoolStateUpdateManyMutationInput, PoolStateUncheckedUpdateManyWithoutPoolInput>
  }

  export type PoolStateScalarWhereInput = {
    AND?: PoolStateScalarWhereInput | PoolStateScalarWhereInput[]
    OR?: PoolStateScalarWhereInput[]
    NOT?: PoolStateScalarWhereInput | PoolStateScalarWhereInput[]
    id?: StringFilter<"PoolState"> | string
    poolId?: StringFilter<"PoolState"> | string
    lastUpdateTimestamp?: BigIntFilter<"PoolState"> | bigint | number
    sqrtPriceReference?: StringFilter<"PoolState"> | string
    volatilityAccumulator?: StringFilter<"PoolState"> | string
    volatilityReference?: StringFilter<"PoolState"> | string
    baseReserve?: StringFilter<"PoolState"> | string
    quoteReserve?: StringFilter<"PoolState"> | string
    currentPrice?: StringNullableFilter<"PoolState"> | string | null
    rawData?: StringNullableFilter<"PoolState"> | string | null
    createdAt?: DateTimeFilter<"PoolState"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutPoolInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPoolInput, TransactionUncheckedUpdateWithoutPoolInput>
    create: XOR<TransactionCreateWithoutPoolInput, TransactionUncheckedCreateWithoutPoolInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPoolInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPoolInput, TransactionUncheckedUpdateWithoutPoolInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPoolInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPoolInput>
  }

  export type TokenLaunchUpsertWithWhereUniqueWithoutPoolInput = {
    where: TokenLaunchWhereUniqueInput
    update: XOR<TokenLaunchUpdateWithoutPoolInput, TokenLaunchUncheckedUpdateWithoutPoolInput>
    create: XOR<TokenLaunchCreateWithoutPoolInput, TokenLaunchUncheckedCreateWithoutPoolInput>
  }

  export type TokenLaunchUpdateWithWhereUniqueWithoutPoolInput = {
    where: TokenLaunchWhereUniqueInput
    data: XOR<TokenLaunchUpdateWithoutPoolInput, TokenLaunchUncheckedUpdateWithoutPoolInput>
  }

  export type TokenLaunchUpdateManyWithWhereWithoutPoolInput = {
    where: TokenLaunchScalarWhereInput
    data: XOR<TokenLaunchUpdateManyMutationInput, TokenLaunchUncheckedUpdateManyWithoutPoolInput>
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutPoolInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutPoolInput, PriceHistoryUncheckedUpdateWithoutPoolInput>
    create: XOR<PriceHistoryCreateWithoutPoolInput, PriceHistoryUncheckedCreateWithoutPoolInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutPoolInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutPoolInput, PriceHistoryUncheckedUpdateWithoutPoolInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutPoolInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutPoolInput>
  }

  export type PoolCreateWithoutStatesInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutStatesInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutStatesInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutStatesInput, PoolUncheckedCreateWithoutStatesInput>
  }

  export type PoolUpsertWithoutStatesInput = {
    update: XOR<PoolUpdateWithoutStatesInput, PoolUncheckedUpdateWithoutStatesInput>
    create: XOR<PoolCreateWithoutStatesInput, PoolUncheckedCreateWithoutStatesInput>
    where?: PoolWhereInput
  }

  export type PoolUpdateToOneWithWhereWithoutStatesInput = {
    where?: PoolWhereInput
    data: XOR<PoolUpdateWithoutStatesInput, PoolUncheckedUpdateWithoutStatesInput>
  }

  export type PoolUpdateWithoutStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type TokenCreateWithoutLaunchesInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutLaunchesInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutLaunchesInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutLaunchesInput, TokenUncheckedCreateWithoutLaunchesInput>
  }

  export type PoolCreateWithoutLaunchesInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutLaunchesInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutLaunchesInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutLaunchesInput, PoolUncheckedCreateWithoutLaunchesInput>
  }

  export type TokenUpsertWithoutLaunchesInput = {
    update: XOR<TokenUpdateWithoutLaunchesInput, TokenUncheckedUpdateWithoutLaunchesInput>
    create: XOR<TokenCreateWithoutLaunchesInput, TokenUncheckedCreateWithoutLaunchesInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutLaunchesInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutLaunchesInput, TokenUncheckedUpdateWithoutLaunchesInput>
  }

  export type TokenUpdateWithoutLaunchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutLaunchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type PoolUpsertWithoutLaunchesInput = {
    update: XOR<PoolUpdateWithoutLaunchesInput, PoolUncheckedUpdateWithoutLaunchesInput>
    create: XOR<PoolCreateWithoutLaunchesInput, PoolUncheckedCreateWithoutLaunchesInput>
    where?: PoolWhereInput
  }

  export type PoolUpdateToOneWithWhereWithoutLaunchesInput = {
    where?: PoolWhereInput
    data: XOR<PoolUpdateWithoutLaunchesInput, PoolUncheckedUpdateWithoutLaunchesInput>
  }

  export type PoolUpdateWithoutLaunchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutLaunchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type TokenCreateWithoutTokenHoldersInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutTokenHoldersInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutTokenHoldersInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTokenHoldersInput, TokenUncheckedCreateWithoutTokenHoldersInput>
  }

  export type TokenUpsertWithoutTokenHoldersInput = {
    update: XOR<TokenUpdateWithoutTokenHoldersInput, TokenUncheckedUpdateWithoutTokenHoldersInput>
    create: XOR<TokenCreateWithoutTokenHoldersInput, TokenUncheckedCreateWithoutTokenHoldersInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutTokenHoldersInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutTokenHoldersInput, TokenUncheckedUpdateWithoutTokenHoldersInput>
  }

  export type TokenUpdateWithoutTokenHoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutTokenHoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type PoolCreateWithoutTransactionsInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutTransactionsInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutTransactionsInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutTransactionsInput, PoolUncheckedCreateWithoutTransactionsInput>
  }

  export type TokenCreateWithoutTransactionsInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutTransactionsInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    priceHistory?: PriceHistoryUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutTransactionsInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
  }

  export type PoolUpsertWithoutTransactionsInput = {
    update: XOR<PoolUpdateWithoutTransactionsInput, PoolUncheckedUpdateWithoutTransactionsInput>
    create: XOR<PoolCreateWithoutTransactionsInput, PoolUncheckedCreateWithoutTransactionsInput>
    where?: PoolWhereInput
  }

  export type PoolUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: PoolWhereInput
    data: XOR<PoolUpdateWithoutTransactionsInput, PoolUncheckedUpdateWithoutTransactionsInput>
  }

  export type PoolUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type TokenUpsertWithoutTransactionsInput = {
    update: XOR<TokenUpdateWithoutTransactionsInput, TokenUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TokenCreateWithoutTransactionsInput, TokenUncheckedCreateWithoutTransactionsInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutTransactionsInput, TokenUncheckedUpdateWithoutTransactionsInput>
  }

  export type TokenUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type PoolCreateWithoutPriceHistoryInput = {
    id?: string
    address: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseToken: TokenCreateNestedOneWithoutBasePoolsInput
    quoteToken: TokenCreateNestedOneWithoutQuotePoolsInput
    config: PoolConfigCreateNestedOneWithoutPoolsInput
    states?: PoolStateCreateNestedManyWithoutPoolInput
    transactions?: TransactionCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchCreateNestedManyWithoutPoolInput
  }

  export type PoolUncheckedCreateWithoutPriceHistoryInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: PoolStateUncheckedCreateNestedManyWithoutPoolInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutPoolInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutPoolInput
  }

  export type PoolCreateOrConnectWithoutPriceHistoryInput = {
    where: PoolWhereUniqueInput
    create: XOR<PoolCreateWithoutPriceHistoryInput, PoolUncheckedCreateWithoutPriceHistoryInput>
  }

  export type TokenCreateWithoutPriceHistoryInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLaunchedTokensInput
    basePools?: PoolCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderCreateNestedManyWithoutTokenInput
    transactions?: TransactionCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseCreateNestedManyWithoutTokenInput
  }

  export type TokenUncheckedCreateWithoutPriceHistoryInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    userId: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    basePools?: PoolUncheckedCreateNestedManyWithoutBaseTokenInput
    quotePools?: PoolUncheckedCreateNestedManyWithoutQuoteTokenInput
    launches?: TokenLaunchUncheckedCreateNestedManyWithoutTokenInput
    tokenHolders?: TokenHolderUncheckedCreateNestedManyWithoutTokenInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTokenInput
    purchases?: TokenPurchaseUncheckedCreateNestedManyWithoutTokenInput
  }

  export type TokenCreateOrConnectWithoutPriceHistoryInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutPriceHistoryInput, TokenUncheckedCreateWithoutPriceHistoryInput>
  }

  export type PoolUpsertWithoutPriceHistoryInput = {
    update: XOR<PoolUpdateWithoutPriceHistoryInput, PoolUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<PoolCreateWithoutPriceHistoryInput, PoolUncheckedCreateWithoutPriceHistoryInput>
    where?: PoolWhereInput
  }

  export type PoolUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: PoolWhereInput
    data: XOR<PoolUpdateWithoutPriceHistoryInput, PoolUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type PoolUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type TokenUpsertWithoutPriceHistoryInput = {
    update: XOR<TokenUpdateWithoutPriceHistoryInput, TokenUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<TokenCreateWithoutPriceHistoryInput, TokenUncheckedCreateWithoutPriceHistoryInput>
    where?: TokenWhereInput
  }

  export type TokenUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: TokenWhereInput
    data: XOR<TokenUpdateWithoutPriceHistoryInput, TokenUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type TokenUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLaunchedTokensNestedInput
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutPriceHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenCreateManyUserInput = {
    id?: string
    address?: string | null
    name: string
    symbol: string
    url: string
    mintAddress: string
    website?: string | null
    twitter?: string | null
    supply?: string | null
    decimals?: number
    bondingCurveSlope?: number | null
    metadataUrl?: string | null
    imageUrl?: string | null
    description?: string | null
    contractAddress?: string | null
    marketCap?: string | null
    totalRaised?: string
    launchDate?: Date | string | null
    telegram?: string | null
    discord?: string | null
    holders?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenPurchaseCreateManyUserInput = {
    id?: string
    tokenId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    basePools?: PoolUncheckedUpdateManyWithoutBaseTokenNestedInput
    quotePools?: PoolUncheckedUpdateManyWithoutQuoteTokenNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutTokenNestedInput
    tokenHolders?: TokenHolderUncheckedUpdateManyWithoutTokenNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTokenNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutTokenNestedInput
    purchases?: TokenPurchaseUncheckedUpdateManyWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mintAddress?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    supply?: NullableStringFieldUpdateOperationsInput | string | null
    decimals?: IntFieldUpdateOperationsInput | number
    bondingCurveSlope?: NullableFloatFieldUpdateOperationsInput | number | null
    metadataUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    contractAddress?: NullableStringFieldUpdateOperationsInput | string | null
    marketCap?: NullableStringFieldUpdateOperationsInput | string | null
    totalRaised?: StringFieldUpdateOperationsInput | string
    launchDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegram?: NullableStringFieldUpdateOperationsInput | string | null
    discord?: NullableStringFieldUpdateOperationsInput | string | null
    holders?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TokenPurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolCreateManyBaseTokenInput = {
    id?: string
    address: string
    quoteTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolCreateManyQuoteTokenInput = {
    id?: string
    address: string
    baseTokenId: string
    configId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenLaunchCreateManyTokenInput = {
    id?: string
    poolId: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
  }

  export type TokenHolderCreateManyTokenInput = {
    id?: string
    holder: string
    balance: string
    percentage?: number | null
    acquiredAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyTokenInput = {
    id?: string
    poolId: string
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
  }

  export type PriceHistoryCreateManyTokenInput = {
    id?: string
    poolId: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
  }

  export type TokenPurchaseCreateManyTokenInput = {
    id?: string
    userId: string
    quantity: number
    pricePerToken: string
    totalPrice: string
    purchaseDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolUpdateWithoutBaseTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutBaseTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateManyWithoutBaseTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolUpdateWithoutQuoteTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    config?: PoolConfigUpdateOneRequiredWithoutPoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutQuoteTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateManyWithoutQuoteTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    configId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: PoolUpdateOneRequiredWithoutLaunchesNestedInput
  }

  export type TokenLaunchUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenHolderUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenHolderUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenHolderUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    holder?: StringFieldUpdateOperationsInput | string
    balance?: StringFieldUpdateOperationsInput | string
    percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    acquiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: PoolUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pool?: PoolUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    poolId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TokenPurchaseUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenPurchaseUncheckedUpdateManyWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    pricePerToken?: StringFieldUpdateOperationsInput | string
    totalPrice?: StringFieldUpdateOperationsInput | string
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolCreateManyConfigInput = {
    id?: string
    address: string
    baseTokenId: string
    quoteTokenId: string
    creator: string
    isActive?: boolean
    totalVolume?: string
    totalTrades?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PoolUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseToken?: TokenUpdateOneRequiredWithoutBasePoolsNestedInput
    quoteToken?: TokenUpdateOneRequiredWithoutQuotePoolsNestedInput
    states?: PoolStateUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: PoolStateUncheckedUpdateManyWithoutPoolNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutPoolNestedInput
    launches?: TokenLaunchUncheckedUpdateManyWithoutPoolNestedInput
    priceHistory?: PriceHistoryUncheckedUpdateManyWithoutPoolNestedInput
  }

  export type PoolUncheckedUpdateManyWithoutConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    baseTokenId?: StringFieldUpdateOperationsInput | string
    quoteTokenId?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    totalVolume?: StringFieldUpdateOperationsInput | string
    totalTrades?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateCreateManyPoolInput = {
    id?: string
    lastUpdateTimestamp: bigint | number
    sqrtPriceReference: string
    volatilityAccumulator: string
    volatilityReference: string
    baseReserve?: string
    quoteReserve?: string
    currentPrice?: string | null
    rawData?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateManyPoolInput = {
    id?: string
    tokenId?: string | null
    txHash: string
    txType: $Enums.TxType
    wallet: string
    amountIn: string
    amountOut: string
    fee: string
    price: string
    timestamp: bigint | number
    blockNumber: bigint | number
    gasUsed?: string | null
    createdAt?: Date | string
  }

  export type TokenLaunchCreateManyPoolInput = {
    id?: string
    tokenId: string
    launchPrice: string
    initialSupply: string
    launchTxHash?: string | null
    launchedAt?: Date | string
  }

  export type PriceHistoryCreateManyPoolInput = {
    id?: string
    tokenId: string
    price: string
    volume?: string
    timestamp: bigint | number
    interval: string
    openPrice?: string | null
    highPrice?: string | null
    lowPrice?: string | null
    closePrice?: string | null
    createdAt?: Date | string
  }

  export type PoolStateUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PoolStateUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastUpdateTimestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    sqrtPriceReference?: StringFieldUpdateOperationsInput | string
    volatilityAccumulator?: StringFieldUpdateOperationsInput | string
    volatilityReference?: StringFieldUpdateOperationsInput | string
    baseReserve?: StringFieldUpdateOperationsInput | string
    quoteReserve?: StringFieldUpdateOperationsInput | string
    currentPrice?: NullableStringFieldUpdateOperationsInput | string | null
    rawData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    txHash?: StringFieldUpdateOperationsInput | string
    txType?: EnumTxTypeFieldUpdateOperationsInput | $Enums.TxType
    wallet?: StringFieldUpdateOperationsInput | string
    amountIn?: StringFieldUpdateOperationsInput | string
    amountOut?: StringFieldUpdateOperationsInput | string
    fee?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    blockNumber?: BigIntFieldUpdateOperationsInput | bigint | number
    gasUsed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutLaunchesNestedInput
  }

  export type TokenLaunchUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenLaunchUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    launchPrice?: StringFieldUpdateOperationsInput | string
    initialSupply?: StringFieldUpdateOperationsInput | string
    launchTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    launchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: TokenUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceHistoryUncheckedUpdateWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUncheckedUpdateManyWithoutPoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    timestamp?: BigIntFieldUpdateOperationsInput | bigint | number
    interval?: StringFieldUpdateOperationsInput | string
    openPrice?: NullableStringFieldUpdateOperationsInput | string | null
    highPrice?: NullableStringFieldUpdateOperationsInput | string | null
    lowPrice?: NullableStringFieldUpdateOperationsInput | string | null
    closePrice?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}