
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model events
 * 
 */
export type events = $Result.DefaultSelection<Prisma.$eventsPayload>
/**
 * Model services
 * 
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model eventServices
 * 
 */
export type eventServices = $Result.DefaultSelection<Prisma.$eventServicesPayload>
/**
 * Model payments
 * 
 */
export type payments = $Result.DefaultSelection<Prisma.$paymentsPayload>
/**
 * Model support_requests
 * 
 */
export type support_requests = $Result.DefaultSelection<Prisma.$support_requestsPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model faqs
 * 
 */
export type faqs = $Result.DefaultSelection<Prisma.$faqsPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.eventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventServices`: Exposes CRUD operations for the **eventServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventServices
    * const eventServices = await prisma.eventServices.findMany()
    * ```
    */
  get eventServices(): Prisma.eventServicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payments`: Exposes CRUD operations for the **payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payments.findMany()
    * ```
    */
  get payments(): Prisma.paymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.support_requests`: Exposes CRUD operations for the **support_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Support_requests
    * const support_requests = await prisma.support_requests.findMany()
    * ```
    */
  get support_requests(): Prisma.support_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faqs`: Exposes CRUD operations for the **faqs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faqs.findMany()
    * ```
    */
  get faqs(): Prisma.faqsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    users: 'users',
    Address: 'Address',
    events: 'events',
    services: 'services',
    eventServices: 'eventServices',
    payments: 'payments',
    support_requests: 'support_requests',
    notifications: 'notifications',
    faqs: 'faqs',
    logs: 'logs'
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
      modelProps: "users" | "address" | "events" | "services" | "eventServices" | "payments" | "support_requests" | "notifications" | "faqs" | "logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      events: {
        payload: Prisma.$eventsPayload<ExtArgs>
        fields: Prisma.eventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findFirst: {
            args: Prisma.eventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          findMany: {
            args: Prisma.eventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          create: {
            args: Prisma.eventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          createMany: {
            args: Prisma.eventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          delete: {
            args: Prisma.eventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          update: {
            args: Prisma.eventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          deleteMany: {
            args: Prisma.eventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>[]
          }
          upsert: {
            args: Prisma.eventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.eventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      eventServices: {
        payload: Prisma.$eventServicesPayload<ExtArgs>
        fields: Prisma.eventServicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventServicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventServicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>
          }
          findFirst: {
            args: Prisma.eventServicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventServicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>
          }
          findMany: {
            args: Prisma.eventServicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>[]
          }
          create: {
            args: Prisma.eventServicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>
          }
          createMany: {
            args: Prisma.eventServicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventServicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>[]
          }
          delete: {
            args: Prisma.eventServicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>
          }
          update: {
            args: Prisma.eventServicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>
          }
          deleteMany: {
            args: Prisma.eventServicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventServicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventServicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>[]
          }
          upsert: {
            args: Prisma.eventServicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventServicesPayload>
          }
          aggregate: {
            args: Prisma.EventServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventServices>
          }
          groupBy: {
            args: Prisma.eventServicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventServicesCountArgs<ExtArgs>
            result: $Utils.Optional<EventServicesCountAggregateOutputType> | number
          }
        }
      }
      payments: {
        payload: Prisma.$paymentsPayload<ExtArgs>
        fields: Prisma.paymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findFirst: {
            args: Prisma.paymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          findMany: {
            args: Prisma.paymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          create: {
            args: Prisma.paymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          createMany: {
            args: Prisma.paymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          delete: {
            args: Prisma.paymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          update: {
            args: Prisma.paymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          deleteMany: {
            args: Prisma.paymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>[]
          }
          upsert: {
            args: Prisma.paymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayments>
          }
          groupBy: {
            args: Prisma.paymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsCountAggregateOutputType> | number
          }
        }
      }
      support_requests: {
        payload: Prisma.$support_requestsPayload<ExtArgs>
        fields: Prisma.support_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.support_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.support_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>
          }
          findFirst: {
            args: Prisma.support_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.support_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>
          }
          findMany: {
            args: Prisma.support_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>[]
          }
          create: {
            args: Prisma.support_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>
          }
          createMany: {
            args: Prisma.support_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.support_requestsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>[]
          }
          delete: {
            args: Prisma.support_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>
          }
          update: {
            args: Prisma.support_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>
          }
          deleteMany: {
            args: Prisma.support_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.support_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.support_requestsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>[]
          }
          upsert: {
            args: Prisma.support_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_requestsPayload>
          }
          aggregate: {
            args: Prisma.Support_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupport_requests>
          }
          groupBy: {
            args: Prisma.support_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Support_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.support_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Support_requestsCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      faqs: {
        payload: Prisma.$faqsPayload<ExtArgs>
        fields: Prisma.faqsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.faqsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.faqsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>
          }
          findFirst: {
            args: Prisma.faqsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.faqsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>
          }
          findMany: {
            args: Prisma.faqsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>[]
          }
          create: {
            args: Prisma.faqsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>
          }
          createMany: {
            args: Prisma.faqsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.faqsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>[]
          }
          delete: {
            args: Prisma.faqsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>
          }
          update: {
            args: Prisma.faqsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>
          }
          deleteMany: {
            args: Prisma.faqsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.faqsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.faqsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>[]
          }
          upsert: {
            args: Prisma.faqsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$faqsPayload>
          }
          aggregate: {
            args: Prisma.FaqsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaqs>
          }
          groupBy: {
            args: Prisma.faqsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqsGroupByOutputType>[]
          }
          count: {
            args: Prisma.faqsCountArgs<ExtArgs>
            result: $Utils.Optional<FaqsCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    users?: usersOmit
    address?: AddressOmit
    events?: eventsOmit
    services?: servicesOmit
    eventServices?: eventServicesOmit
    payments?: paymentsOmit
    support_requests?: support_requestsOmit
    notifications?: notificationsOmit
    faqs?: faqsOmit
    logs?: logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    events: number
    addresses: number
    logs: number
    notifications: number
    support_requests: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UsersCountOutputTypeCountEventsArgs
    addresses?: boolean | UsersCountOutputTypeCountAddressesArgs
    logs?: boolean | UsersCountOutputTypeCountLogsArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    support_requests?: boolean | UsersCountOutputTypeCountSupport_requestsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSupport_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: support_requestsWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    eventServices: number
    payments: number
    support_requests: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventServices?: boolean | EventsCountOutputTypeCountEventServicesArgs
    payments?: boolean | EventsCountOutputTypeCountPaymentsArgs
    support_requests?: boolean | EventsCountOutputTypeCountSupport_requestsArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountEventServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventServicesWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountSupport_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: support_requestsWhereInput
  }


  /**
   * Count Type ServicesCountOutputType
   */

  export type ServicesCountOutputType = {
    eventServices: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventServices?: boolean | ServicesCountOutputTypeCountEventServicesArgs
  }

  // Custom InputTypes
  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesCountOutputType
     */
    select?: ServicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountEventServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventServicesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    user_name: string | null
    phone: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    user_name: string | null
    phone: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    user_name: number
    phone: number
    role: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    user_name?: true
    phone?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    user_name?: true
    phone?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    user_name?: true
    phone?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    email: string
    password: string
    user_name: string | null
    phone: string | null
    role: string
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    user_name?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
    events?: boolean | users$eventsArgs<ExtArgs>
    addresses?: boolean | users$addressesArgs<ExtArgs>
    logs?: boolean | users$logsArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    support_requests?: boolean | users$support_requestsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    user_name?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    user_name?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    user_name?: boolean
    phone?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password" | "user_name" | "phone" | "role" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | users$eventsArgs<ExtArgs>
    addresses?: boolean | users$addressesArgs<ExtArgs>
    logs?: boolean | users$logsArgs<ExtArgs>
    notifications?: boolean | users$notificationsArgs<ExtArgs>
    support_requests?: boolean | users$support_requestsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      events: Prisma.$eventsPayload<ExtArgs>[]
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      logs: Prisma.$logsPayload<ExtArgs>[]
      notifications: Prisma.$notificationsPayload<ExtArgs>[]
      support_requests: Prisma.$support_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
      user_name: string | null
      phone: string | null
      role: string
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends users$eventsArgs<ExtArgs> = {}>(args?: Subset<T, users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends users$addressesArgs<ExtArgs> = {}>(args?: Subset<T, users$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logs<T extends users$logsArgs<ExtArgs> = {}>(args?: Subset<T, users$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    support_requests<T extends users$support_requestsArgs<ExtArgs> = {}>(args?: Subset<T, users$support_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly user_name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.events
   */
  export type users$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    cursor?: eventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * users.addresses
   */
  export type users$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * users.logs
   */
  export type users$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    where?: logsWhereInput
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    cursor?: logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * users.notifications
   */
  export type users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.support_requests
   */
  export type users$support_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    where?: support_requestsWhereInput
    orderBy?: support_requestsOrderByWithRelationInput | support_requestsOrderByWithRelationInput[]
    cursor?: support_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Support_requestsScalarFieldEnum | Support_requestsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    Address_id: number | null
    user_id: number | null
    event_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressSumAggregateOutputType = {
    Address_id: number | null
    user_id: number | null
    event_id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type AddressMinAggregateOutputType = {
    Address_id: number | null
    user_id: number | null
    event_id: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postal_code: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    Address_id: number | null
    user_id: number | null
    event_id: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postal_code: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date | null
  }

  export type AddressCountAggregateOutputType = {
    Address_id: number
    user_id: number
    event_id: number
    street: number
    city: number
    state: number
    country: number
    postal_code: number
    latitude: number
    longitude: number
    created_at: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    Address_id?: true
    user_id?: true
    event_id?: true
    latitude?: true
    longitude?: true
  }

  export type AddressSumAggregateInputType = {
    Address_id?: true
    user_id?: true
    event_id?: true
    latitude?: true
    longitude?: true
  }

  export type AddressMinAggregateInputType = {
    Address_id?: true
    user_id?: true
    event_id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postal_code?: true
    latitude?: true
    longitude?: true
    created_at?: true
  }

  export type AddressMaxAggregateInputType = {
    Address_id?: true
    user_id?: true
    event_id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postal_code?: true
    latitude?: true
    longitude?: true
    created_at?: true
  }

  export type AddressCountAggregateInputType = {
    Address_id?: true
    user_id?: true
    event_id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postal_code?: true
    latitude?: true
    longitude?: true
    created_at?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    Address_id: number
    user_id: number | null
    event_id: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postal_code: string | null
    latitude: number | null
    longitude: number | null
    created_at: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Address_id?: boolean
    user_id?: boolean
    event_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Address_id?: boolean
    user_id?: boolean
    event_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Address_id?: boolean
    user_id?: boolean
    event_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    Address_id?: boolean
    user_id?: boolean
    event_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    latitude?: boolean
    longitude?: boolean
    created_at?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Address_id" | "user_id" | "event_id" | "street" | "city" | "state" | "country" | "postal_code" | "latitude" | "longitude" | "created_at", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
    event?: boolean | Address$eventArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      event: Prisma.$eventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      Address_id: number
      user_id: number | null
      event_id: number | null
      street: string | null
      city: string | null
      state: string | null
      country: string | null
      postal_code: string | null
      latitude: number | null
      longitude: number | null
      created_at: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `Address_id`
     * const addressWithAddress_idOnly = await prisma.address.findMany({ select: { Address_id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `Address_id`
     * const addressWithAddress_idOnly = await prisma.address.createManyAndReturn({
     *   select: { Address_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `Address_id`
     * const addressWithAddress_idOnly = await prisma.address.updateManyAndReturn({
     *   select: { Address_id: true },
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Address$userArgs<ExtArgs> = {}>(args?: Subset<T, Address$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends Address$eventArgs<ExtArgs> = {}>(args?: Subset<T, Address$eventArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly Address_id: FieldRef<"Address", 'Int'>
    readonly user_id: FieldRef<"Address", 'Int'>
    readonly event_id: FieldRef<"Address", 'Int'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly postal_code: FieldRef<"Address", 'String'>
    readonly latitude: FieldRef<"Address", 'Float'>
    readonly longitude: FieldRef<"Address", 'Float'>
    readonly created_at: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data?: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.user
   */
  export type Address$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * Address.event
   */
  export type Address$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    address_id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    address_id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    address_id: number | null
    title: string | null
    type: string | null
    date: Date | null
    status: string | null
    created_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    address_id: number | null
    title: string | null
    type: string | null
    date: Date | null
    status: string | null
    created_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    user_id: number
    address_id: number
    title: number
    type: number
    date: number
    status: number
    created_at: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
    user_id?: true
    address_id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
    user_id?: true
    address_id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    user_id?: true
    address_id?: true
    title?: true
    type?: true
    date?: true
    status?: true
    created_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    user_id?: true
    address_id?: true
    title?: true
    type?: true
    date?: true
    status?: true
    created_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    user_id?: true
    address_id?: true
    title?: true
    type?: true
    date?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to aggregate.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type eventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventsWhereInput
    orderBy?: eventsOrderByWithAggregationInput | eventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: eventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    user_id: number | null
    address_id: number | null
    title: string
    type: string | null
    date: Date
    status: string
    created_at: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type eventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address_id?: boolean
    title?: boolean
    type?: boolean
    date?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | events$userArgs<ExtArgs>
    address?: boolean | events$addressArgs<ExtArgs>
    eventServices?: boolean | events$eventServicesArgs<ExtArgs>
    payments?: boolean | events$paymentsArgs<ExtArgs>
    support_requests?: boolean | events$support_requestsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address_id?: boolean
    title?: boolean
    type?: boolean
    date?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | events$userArgs<ExtArgs>
    address?: boolean | events$addressArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    address_id?: boolean
    title?: boolean
    type?: boolean
    date?: boolean
    status?: boolean
    created_at?: boolean
    user?: boolean | events$userArgs<ExtArgs>
    address?: boolean | events$addressArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type eventsSelectScalar = {
    id?: boolean
    user_id?: boolean
    address_id?: boolean
    title?: boolean
    type?: boolean
    date?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type eventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "address_id" | "title" | "type" | "date" | "status" | "created_at", ExtArgs["result"]["events"]>
  export type eventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | events$userArgs<ExtArgs>
    address?: boolean | events$addressArgs<ExtArgs>
    eventServices?: boolean | events$eventServicesArgs<ExtArgs>
    payments?: boolean | events$paymentsArgs<ExtArgs>
    support_requests?: boolean | events$support_requestsArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | events$userArgs<ExtArgs>
    address?: boolean | events$addressArgs<ExtArgs>
  }
  export type eventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | events$userArgs<ExtArgs>
    address?: boolean | events$addressArgs<ExtArgs>
  }

  export type $eventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "events"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      address: Prisma.$AddressPayload<ExtArgs> | null
      eventServices: Prisma.$eventServicesPayload<ExtArgs>[]
      payments: Prisma.$paymentsPayload<ExtArgs>[]
      support_requests: Prisma.$support_requestsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      address_id: number | null
      title: string
      type: string | null
      date: Date
      status: string
      created_at: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = $Result.GetResult<Prisma.$eventsPayload, S>

  type eventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface eventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['events'], meta: { name: 'events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {eventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventsFindUniqueArgs>(args: SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventsFindFirstArgs>(args?: SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends eventsFindManyArgs>(args?: SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {eventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends eventsCreateArgs>(args: SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {eventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventsCreateManyArgs>(args?: SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {eventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {eventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends eventsDeleteArgs>(args: SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {eventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventsUpdateArgs>(args: SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {eventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventsDeleteManyArgs>(args?: SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventsUpdateManyArgs>(args: SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {eventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
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
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {eventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends eventsUpsertArgs>(args: SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends eventsCountArgs>(
      args?: Subset<T, eventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventsGroupByArgs} args - Group by arguments.
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
      T extends eventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventsGroupByArgs['orderBy'] }
        : { orderBy?: eventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the events model
   */
  readonly fields: eventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends events$userArgs<ExtArgs> = {}>(args?: Subset<T, events$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    address<T extends events$addressArgs<ExtArgs> = {}>(args?: Subset<T, events$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    eventServices<T extends events$eventServicesArgs<ExtArgs> = {}>(args?: Subset<T, events$eventServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends events$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, events$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    support_requests<T extends events$support_requestsArgs<ExtArgs> = {}>(args?: Subset<T, events$support_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the events model
   */
  interface eventsFieldRefs {
    readonly id: FieldRef<"events", 'Int'>
    readonly user_id: FieldRef<"events", 'Int'>
    readonly address_id: FieldRef<"events", 'Int'>
    readonly title: FieldRef<"events", 'String'>
    readonly type: FieldRef<"events", 'String'>
    readonly date: FieldRef<"events", 'DateTime'>
    readonly status: FieldRef<"events", 'String'>
    readonly created_at: FieldRef<"events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * events findUnique
   */
  export type eventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findUniqueOrThrow
   */
  export type eventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events findFirst
   */
  export type eventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findFirstOrThrow
   */
  export type eventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events findMany
   */
  export type eventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter, which events to fetch.
     */
    where?: eventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of events to fetch.
     */
    orderBy?: eventsOrderByWithRelationInput | eventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing events.
     */
    cursor?: eventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * events create
   */
  export type eventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to create a events.
     */
    data: XOR<eventsCreateInput, eventsUncheckedCreateInput>
  }

  /**
   * events createMany
   */
  export type eventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * events createManyAndReturn
   */
  export type eventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to create many events.
     */
    data: eventsCreateManyInput | eventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * events update
   */
  export type eventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The data needed to update a events.
     */
    data: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
    /**
     * Choose, which events to update.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events updateMany
   */
  export type eventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
  }

  /**
   * events updateManyAndReturn
   */
  export type eventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * The data used to update events.
     */
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyInput>
    /**
     * Filter which events to update
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * events upsert
   */
  export type eventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * The filter to search for the events to update in case it exists.
     */
    where: eventsWhereUniqueInput
    /**
     * In case the events found by the `where` argument doesn't exist, create a new events with this data.
     */
    create: XOR<eventsCreateInput, eventsUncheckedCreateInput>
    /**
     * In case the events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventsUpdateInput, eventsUncheckedUpdateInput>
  }

  /**
   * events delete
   */
  export type eventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    /**
     * Filter which events to delete.
     */
    where: eventsWhereUniqueInput
  }

  /**
   * events deleteMany
   */
  export type eventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which events to delete
     */
    where?: eventsWhereInput
    /**
     * Limit how many events to delete.
     */
    limit?: number
  }

  /**
   * events.user
   */
  export type events$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * events.address
   */
  export type events$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * events.eventServices
   */
  export type events$eventServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    where?: eventServicesWhereInput
    orderBy?: eventServicesOrderByWithRelationInput | eventServicesOrderByWithRelationInput[]
    cursor?: eventServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventServicesScalarFieldEnum | EventServicesScalarFieldEnum[]
  }

  /**
   * events.payments
   */
  export type events$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    cursor?: paymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * events.support_requests
   */
  export type events$support_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    where?: support_requestsWhereInput
    orderBy?: support_requestsOrderByWithRelationInput | support_requestsOrderByWithRelationInput[]
    cursor?: support_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Support_requestsScalarFieldEnum | Support_requestsScalarFieldEnum[]
  }

  /**
   * events without action
   */
  export type eventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
  }


  /**
   * Model services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    category: string | null
    created_at: Date | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    category: string | null
    created_at: Date | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    category: number
    created_at: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    created_at?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    created_at?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    created_at?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: Decimal
    category: string | null
    created_at: Date
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    created_at?: boolean
    eventServices?: boolean | services$eventServicesArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    created_at?: boolean
  }

  export type servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "category" | "created_at", ExtArgs["result"]["services"]>
  export type servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventServices?: boolean | services$eventServicesArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type servicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type servicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "services"
    objects: {
      eventServices: Prisma.$eventServicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: Prisma.Decimal
      category: string | null
      created_at: Date
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends servicesFindManyArgs>(args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends servicesCreateArgs>(args: SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicesCreateManyArgs>(args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends servicesDeleteArgs>(args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicesUpdateArgs>(args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicesUpdateManyArgs>(args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
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
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
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
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the services model
   */
  readonly fields: servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventServices<T extends services$eventServicesArgs<ExtArgs> = {}>(args?: Subset<T, services$eventServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the services model
   */
  interface servicesFieldRefs {
    readonly id: FieldRef<"services", 'Int'>
    readonly name: FieldRef<"services", 'String'>
    readonly description: FieldRef<"services", 'String'>
    readonly price: FieldRef<"services", 'Decimal'>
    readonly category: FieldRef<"services", 'String'>
    readonly created_at: FieldRef<"services", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * services findUnique
   */
  export type servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findFirst
   */
  export type servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findMany
   */
  export type servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services create
   */
  export type servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }

  /**
   * services createMany
   */
  export type servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services createManyAndReturn
   */
  export type servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services update
   */
  export type servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services updateManyAndReturn
   */
  export type servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services upsert
   */
  export type servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }

  /**
   * services delete
   */
  export type servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * services.eventServices
   */
  export type services$eventServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    where?: eventServicesWhereInput
    orderBy?: eventServicesOrderByWithRelationInput | eventServicesOrderByWithRelationInput[]
    cursor?: eventServicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventServicesScalarFieldEnum | EventServicesScalarFieldEnum[]
  }

  /**
   * services without action
   */
  export type servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
  }


  /**
   * Model eventServices
   */

  export type AggregateEventServices = {
    _count: EventServicesCountAggregateOutputType | null
    _avg: EventServicesAvgAggregateOutputType | null
    _sum: EventServicesSumAggregateOutputType | null
    _min: EventServicesMinAggregateOutputType | null
    _max: EventServicesMaxAggregateOutputType | null
  }

  export type EventServicesAvgAggregateOutputType = {
    event_id: number | null
    service_id: number | null
    quantity: number | null
  }

  export type EventServicesSumAggregateOutputType = {
    event_id: number | null
    service_id: number | null
    quantity: number | null
  }

  export type EventServicesMinAggregateOutputType = {
    event_id: number | null
    service_id: number | null
    quantity: number | null
  }

  export type EventServicesMaxAggregateOutputType = {
    event_id: number | null
    service_id: number | null
    quantity: number | null
  }

  export type EventServicesCountAggregateOutputType = {
    event_id: number
    service_id: number
    quantity: number
    _all: number
  }


  export type EventServicesAvgAggregateInputType = {
    event_id?: true
    service_id?: true
    quantity?: true
  }

  export type EventServicesSumAggregateInputType = {
    event_id?: true
    service_id?: true
    quantity?: true
  }

  export type EventServicesMinAggregateInputType = {
    event_id?: true
    service_id?: true
    quantity?: true
  }

  export type EventServicesMaxAggregateInputType = {
    event_id?: true
    service_id?: true
    quantity?: true
  }

  export type EventServicesCountAggregateInputType = {
    event_id?: true
    service_id?: true
    quantity?: true
    _all?: true
  }

  export type EventServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventServices to aggregate.
     */
    where?: eventServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventServices to fetch.
     */
    orderBy?: eventServicesOrderByWithRelationInput | eventServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventServices
    **/
    _count?: true | EventServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventServicesMaxAggregateInputType
  }

  export type GetEventServicesAggregateType<T extends EventServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateEventServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventServices[P]>
      : GetScalarType<T[P], AggregateEventServices[P]>
  }




  export type eventServicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventServicesWhereInput
    orderBy?: eventServicesOrderByWithAggregationInput | eventServicesOrderByWithAggregationInput[]
    by: EventServicesScalarFieldEnum[] | EventServicesScalarFieldEnum
    having?: eventServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventServicesCountAggregateInputType | true
    _avg?: EventServicesAvgAggregateInputType
    _sum?: EventServicesSumAggregateInputType
    _min?: EventServicesMinAggregateInputType
    _max?: EventServicesMaxAggregateInputType
  }

  export type EventServicesGroupByOutputType = {
    event_id: number
    service_id: number
    quantity: number | null
    _count: EventServicesCountAggregateOutputType | null
    _avg: EventServicesAvgAggregateOutputType | null
    _sum: EventServicesSumAggregateOutputType | null
    _min: EventServicesMinAggregateOutputType | null
    _max: EventServicesMaxAggregateOutputType | null
  }

  type GetEventServicesGroupByPayload<T extends eventServicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventServicesGroupByOutputType[P]>
            : GetScalarType<T[P], EventServicesGroupByOutputType[P]>
        }
      >
    >


  export type eventServicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    service_id?: boolean
    quantity?: boolean
    event?: boolean | eventsDefaultArgs<ExtArgs>
    service?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventServices"]>

  export type eventServicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    service_id?: boolean
    quantity?: boolean
    event?: boolean | eventsDefaultArgs<ExtArgs>
    service?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventServices"]>

  export type eventServicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    service_id?: boolean
    quantity?: boolean
    event?: boolean | eventsDefaultArgs<ExtArgs>
    service?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventServices"]>

  export type eventServicesSelectScalar = {
    event_id?: boolean
    service_id?: boolean
    quantity?: boolean
  }

  export type eventServicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"event_id" | "service_id" | "quantity", ExtArgs["result"]["eventServices"]>
  export type eventServicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventsDefaultArgs<ExtArgs>
    service?: boolean | servicesDefaultArgs<ExtArgs>
  }
  export type eventServicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventsDefaultArgs<ExtArgs>
    service?: boolean | servicesDefaultArgs<ExtArgs>
  }
  export type eventServicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | eventsDefaultArgs<ExtArgs>
    service?: boolean | servicesDefaultArgs<ExtArgs>
  }

  export type $eventServicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "eventServices"
    objects: {
      event: Prisma.$eventsPayload<ExtArgs>
      service: Prisma.$servicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      event_id: number
      service_id: number
      quantity: number | null
    }, ExtArgs["result"]["eventServices"]>
    composites: {}
  }

  type eventServicesGetPayload<S extends boolean | null | undefined | eventServicesDefaultArgs> = $Result.GetResult<Prisma.$eventServicesPayload, S>

  type eventServicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventServicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventServicesCountAggregateInputType | true
    }

  export interface eventServicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['eventServices'], meta: { name: 'eventServices' } }
    /**
     * Find zero or one EventServices that matches the filter.
     * @param {eventServicesFindUniqueArgs} args - Arguments to find a EventServices
     * @example
     * // Get one EventServices
     * const eventServices = await prisma.eventServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventServicesFindUniqueArgs>(args: SelectSubset<T, eventServicesFindUniqueArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventServices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventServicesFindUniqueOrThrowArgs} args - Arguments to find a EventServices
     * @example
     * // Get one EventServices
     * const eventServices = await prisma.eventServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventServicesFindUniqueOrThrowArgs>(args: SelectSubset<T, eventServicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventServicesFindFirstArgs} args - Arguments to find a EventServices
     * @example
     * // Get one EventServices
     * const eventServices = await prisma.eventServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventServicesFindFirstArgs>(args?: SelectSubset<T, eventServicesFindFirstArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventServices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventServicesFindFirstOrThrowArgs} args - Arguments to find a EventServices
     * @example
     * // Get one EventServices
     * const eventServices = await prisma.eventServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventServicesFindFirstOrThrowArgs>(args?: SelectSubset<T, eventServicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventServicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventServices
     * const eventServices = await prisma.eventServices.findMany()
     * 
     * // Get first 10 EventServices
     * const eventServices = await prisma.eventServices.findMany({ take: 10 })
     * 
     * // Only select the `event_id`
     * const eventServicesWithEvent_idOnly = await prisma.eventServices.findMany({ select: { event_id: true } })
     * 
     */
    findMany<T extends eventServicesFindManyArgs>(args?: SelectSubset<T, eventServicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventServices.
     * @param {eventServicesCreateArgs} args - Arguments to create a EventServices.
     * @example
     * // Create one EventServices
     * const EventServices = await prisma.eventServices.create({
     *   data: {
     *     // ... data to create a EventServices
     *   }
     * })
     * 
     */
    create<T extends eventServicesCreateArgs>(args: SelectSubset<T, eventServicesCreateArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventServices.
     * @param {eventServicesCreateManyArgs} args - Arguments to create many EventServices.
     * @example
     * // Create many EventServices
     * const eventServices = await prisma.eventServices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventServicesCreateManyArgs>(args?: SelectSubset<T, eventServicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventServices and returns the data saved in the database.
     * @param {eventServicesCreateManyAndReturnArgs} args - Arguments to create many EventServices.
     * @example
     * // Create many EventServices
     * const eventServices = await prisma.eventServices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventServices and only return the `event_id`
     * const eventServicesWithEvent_idOnly = await prisma.eventServices.createManyAndReturn({
     *   select: { event_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventServicesCreateManyAndReturnArgs>(args?: SelectSubset<T, eventServicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventServices.
     * @param {eventServicesDeleteArgs} args - Arguments to delete one EventServices.
     * @example
     * // Delete one EventServices
     * const EventServices = await prisma.eventServices.delete({
     *   where: {
     *     // ... filter to delete one EventServices
     *   }
     * })
     * 
     */
    delete<T extends eventServicesDeleteArgs>(args: SelectSubset<T, eventServicesDeleteArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventServices.
     * @param {eventServicesUpdateArgs} args - Arguments to update one EventServices.
     * @example
     * // Update one EventServices
     * const eventServices = await prisma.eventServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventServicesUpdateArgs>(args: SelectSubset<T, eventServicesUpdateArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventServices.
     * @param {eventServicesDeleteManyArgs} args - Arguments to filter EventServices to delete.
     * @example
     * // Delete a few EventServices
     * const { count } = await prisma.eventServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventServicesDeleteManyArgs>(args?: SelectSubset<T, eventServicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventServices
     * const eventServices = await prisma.eventServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventServicesUpdateManyArgs>(args: SelectSubset<T, eventServicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventServices and returns the data updated in the database.
     * @param {eventServicesUpdateManyAndReturnArgs} args - Arguments to update many EventServices.
     * @example
     * // Update many EventServices
     * const eventServices = await prisma.eventServices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventServices and only return the `event_id`
     * const eventServicesWithEvent_idOnly = await prisma.eventServices.updateManyAndReturn({
     *   select: { event_id: true },
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
    updateManyAndReturn<T extends eventServicesUpdateManyAndReturnArgs>(args: SelectSubset<T, eventServicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventServices.
     * @param {eventServicesUpsertArgs} args - Arguments to update or create a EventServices.
     * @example
     * // Update or create a EventServices
     * const eventServices = await prisma.eventServices.upsert({
     *   create: {
     *     // ... data to create a EventServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventServices we want to update
     *   }
     * })
     */
    upsert<T extends eventServicesUpsertArgs>(args: SelectSubset<T, eventServicesUpsertArgs<ExtArgs>>): Prisma__eventServicesClient<$Result.GetResult<Prisma.$eventServicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventServicesCountArgs} args - Arguments to filter EventServices to count.
     * @example
     * // Count the number of EventServices
     * const count = await prisma.eventServices.count({
     *   where: {
     *     // ... the filter for the EventServices we want to count
     *   }
     * })
    **/
    count<T extends eventServicesCountArgs>(
      args?: Subset<T, eventServicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventServicesAggregateArgs>(args: Subset<T, EventServicesAggregateArgs>): Prisma.PrismaPromise<GetEventServicesAggregateType<T>>

    /**
     * Group by EventServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventServicesGroupByArgs} args - Group by arguments.
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
      T extends eventServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventServicesGroupByArgs['orderBy'] }
        : { orderBy?: eventServicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, eventServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the eventServices model
   */
  readonly fields: eventServicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for eventServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventServicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends eventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventsDefaultArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicesDefaultArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the eventServices model
   */
  interface eventServicesFieldRefs {
    readonly event_id: FieldRef<"eventServices", 'Int'>
    readonly service_id: FieldRef<"eventServices", 'Int'>
    readonly quantity: FieldRef<"eventServices", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * eventServices findUnique
   */
  export type eventServicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * Filter, which eventServices to fetch.
     */
    where: eventServicesWhereUniqueInput
  }

  /**
   * eventServices findUniqueOrThrow
   */
  export type eventServicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * Filter, which eventServices to fetch.
     */
    where: eventServicesWhereUniqueInput
  }

  /**
   * eventServices findFirst
   */
  export type eventServicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * Filter, which eventServices to fetch.
     */
    where?: eventServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventServices to fetch.
     */
    orderBy?: eventServicesOrderByWithRelationInput | eventServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventServices.
     */
    cursor?: eventServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventServices.
     */
    distinct?: EventServicesScalarFieldEnum | EventServicesScalarFieldEnum[]
  }

  /**
   * eventServices findFirstOrThrow
   */
  export type eventServicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * Filter, which eventServices to fetch.
     */
    where?: eventServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventServices to fetch.
     */
    orderBy?: eventServicesOrderByWithRelationInput | eventServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventServices.
     */
    cursor?: eventServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventServices.
     */
    distinct?: EventServicesScalarFieldEnum | EventServicesScalarFieldEnum[]
  }

  /**
   * eventServices findMany
   */
  export type eventServicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * Filter, which eventServices to fetch.
     */
    where?: eventServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventServices to fetch.
     */
    orderBy?: eventServicesOrderByWithRelationInput | eventServicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventServices.
     */
    cursor?: eventServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventServices.
     */
    skip?: number
    distinct?: EventServicesScalarFieldEnum | EventServicesScalarFieldEnum[]
  }

  /**
   * eventServices create
   */
  export type eventServicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * The data needed to create a eventServices.
     */
    data: XOR<eventServicesCreateInput, eventServicesUncheckedCreateInput>
  }

  /**
   * eventServices createMany
   */
  export type eventServicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventServices.
     */
    data: eventServicesCreateManyInput | eventServicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * eventServices createManyAndReturn
   */
  export type eventServicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * The data used to create many eventServices.
     */
    data: eventServicesCreateManyInput | eventServicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventServices update
   */
  export type eventServicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * The data needed to update a eventServices.
     */
    data: XOR<eventServicesUpdateInput, eventServicesUncheckedUpdateInput>
    /**
     * Choose, which eventServices to update.
     */
    where: eventServicesWhereUniqueInput
  }

  /**
   * eventServices updateMany
   */
  export type eventServicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventServices.
     */
    data: XOR<eventServicesUpdateManyMutationInput, eventServicesUncheckedUpdateManyInput>
    /**
     * Filter which eventServices to update
     */
    where?: eventServicesWhereInput
    /**
     * Limit how many eventServices to update.
     */
    limit?: number
  }

  /**
   * eventServices updateManyAndReturn
   */
  export type eventServicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * The data used to update eventServices.
     */
    data: XOR<eventServicesUpdateManyMutationInput, eventServicesUncheckedUpdateManyInput>
    /**
     * Filter which eventServices to update
     */
    where?: eventServicesWhereInput
    /**
     * Limit how many eventServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * eventServices upsert
   */
  export type eventServicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * The filter to search for the eventServices to update in case it exists.
     */
    where: eventServicesWhereUniqueInput
    /**
     * In case the eventServices found by the `where` argument doesn't exist, create a new eventServices with this data.
     */
    create: XOR<eventServicesCreateInput, eventServicesUncheckedCreateInput>
    /**
     * In case the eventServices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventServicesUpdateInput, eventServicesUncheckedUpdateInput>
  }

  /**
   * eventServices delete
   */
  export type eventServicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
    /**
     * Filter which eventServices to delete.
     */
    where: eventServicesWhereUniqueInput
  }

  /**
   * eventServices deleteMany
   */
  export type eventServicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventServices to delete
     */
    where?: eventServicesWhereInput
    /**
     * Limit how many eventServices to delete.
     */
    limit?: number
  }

  /**
   * eventServices without action
   */
  export type eventServicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the eventServices
     */
    select?: eventServicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the eventServices
     */
    omit?: eventServicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventServicesInclude<ExtArgs> | null
  }


  /**
   * Model payments
   */

  export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  export type PaymentsAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    amount: Decimal | null
  }

  export type PaymentsSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    amount: Decimal | null
  }

  export type PaymentsMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    amount: Decimal | null
    status: string | null
    payment_method: string | null
    created_at: Date | null
  }

  export type PaymentsMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    amount: Decimal | null
    status: string | null
    payment_method: string | null
    created_at: Date | null
  }

  export type PaymentsCountAggregateOutputType = {
    id: number
    event_id: number
    amount: number
    status: number
    payment_method: number
    created_at: number
    _all: number
  }


  export type PaymentsAvgAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
  }

  export type PaymentsSumAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
  }

  export type PaymentsMinAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
    status?: true
    payment_method?: true
    created_at?: true
  }

  export type PaymentsMaxAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
    status?: true
    payment_method?: true
    created_at?: true
  }

  export type PaymentsCountAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
    status?: true
    payment_method?: true
    created_at?: true
    _all?: true
  }

  export type PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to aggregate.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsMaxAggregateInputType
  }

  export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayments[P]>
      : GetScalarType<T[P], AggregatePayments[P]>
  }




  export type paymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentsWhereInput
    orderBy?: paymentsOrderByWithAggregationInput | paymentsOrderByWithAggregationInput[]
    by: PaymentsScalarFieldEnum[] | PaymentsScalarFieldEnum
    having?: paymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsCountAggregateInputType | true
    _avg?: PaymentsAvgAggregateInputType
    _sum?: PaymentsSumAggregateInputType
    _min?: PaymentsMinAggregateInputType
    _max?: PaymentsMaxAggregateInputType
  }

  export type PaymentsGroupByOutputType = {
    id: number
    event_id: number | null
    amount: Decimal
    status: string
    payment_method: string | null
    created_at: Date
    _count: PaymentsCountAggregateOutputType | null
    _avg: PaymentsAvgAggregateOutputType | null
    _sum: PaymentsSumAggregateOutputType | null
    _min: PaymentsMinAggregateOutputType | null
    _max: PaymentsMaxAggregateOutputType | null
  }

  type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type paymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    amount?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    event?: boolean | payments$eventArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    amount?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    event?: boolean | payments$eventArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    amount?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
    event?: boolean | payments$eventArgs<ExtArgs>
  }, ExtArgs["result"]["payments"]>

  export type paymentsSelectScalar = {
    id?: boolean
    event_id?: boolean
    amount?: boolean
    status?: boolean
    payment_method?: boolean
    created_at?: boolean
  }

  export type paymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "amount" | "status" | "payment_method" | "created_at", ExtArgs["result"]["payments"]>
  export type paymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | payments$eventArgs<ExtArgs>
  }
  export type paymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | payments$eventArgs<ExtArgs>
  }
  export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | payments$eventArgs<ExtArgs>
  }

  export type $paymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payments"
    objects: {
      event: Prisma.$eventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      amount: Prisma.Decimal
      status: string
      payment_method: string | null
      created_at: Date
    }, ExtArgs["result"]["payments"]>
    composites: {}
  }

  type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = $Result.GetResult<Prisma.$paymentsPayload, S>

  type paymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsCountAggregateInputType | true
    }

  export interface paymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payments'], meta: { name: 'payments' } }
    /**
     * Find zero or one Payments that matches the filter.
     * @param {paymentsFindUniqueArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentsFindUniqueArgs>(args: SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentsFindUniqueOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentsFindFirstArgs>(args?: SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindFirstOrThrowArgs} args - Arguments to find a Payments
     * @example
     * // Get one Payments
     * const payments = await prisma.payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payments.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsWithIdOnly = await prisma.payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentsFindManyArgs>(args?: SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payments.
     * @param {paymentsCreateArgs} args - Arguments to create a Payments.
     * @example
     * // Create one Payments
     * const Payments = await prisma.payments.create({
     *   data: {
     *     // ... data to create a Payments
     *   }
     * })
     * 
     */
    create<T extends paymentsCreateArgs>(args: SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentsCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentsCreateManyArgs>(args?: SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentsCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payments = await prisma.payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payments.
     * @param {paymentsDeleteArgs} args - Arguments to delete one Payments.
     * @example
     * // Delete one Payments
     * const Payments = await prisma.payments.delete({
     *   where: {
     *     // ... filter to delete one Payments
     *   }
     * })
     * 
     */
    delete<T extends paymentsDeleteArgs>(args: SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payments.
     * @param {paymentsUpdateArgs} args - Arguments to update one Payments.
     * @example
     * // Update one Payments
     * const payments = await prisma.payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentsUpdateArgs>(args: SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentsDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentsDeleteManyArgs>(args?: SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentsUpdateManyArgs>(args: SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentsUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payments = await prisma.payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentsWithIdOnly = await prisma.payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payments.
     * @param {paymentsUpsertArgs} args - Arguments to update or create a Payments.
     * @example
     * // Update or create a Payments
     * const payments = await prisma.payments.upsert({
     *   create: {
     *     // ... data to create a Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payments we want to update
     *   }
     * })
     */
    upsert<T extends paymentsUpsertArgs>(args: SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma__paymentsClient<$Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payments.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentsCountArgs>(
      args?: Subset<T, paymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentsAggregateArgs>(args: Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>

    /**
     * Group by Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentsGroupByArgs} args - Group by arguments.
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
      T extends paymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentsGroupByArgs['orderBy'] }
        : { orderBy?: paymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payments model
   */
  readonly fields: paymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends payments$eventArgs<ExtArgs> = {}>(args?: Subset<T, payments$eventArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payments model
   */
  interface paymentsFieldRefs {
    readonly id: FieldRef<"payments", 'Int'>
    readonly event_id: FieldRef<"payments", 'Int'>
    readonly amount: FieldRef<"payments", 'Decimal'>
    readonly status: FieldRef<"payments", 'String'>
    readonly payment_method: FieldRef<"payments", 'String'>
    readonly created_at: FieldRef<"payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payments findUnique
   */
  export type paymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findUniqueOrThrow
   */
  export type paymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments findFirst
   */
  export type paymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findFirstOrThrow
   */
  export type paymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments findMany
   */
  export type paymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentsOrderByWithRelationInput | paymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentsScalarFieldEnum | PaymentsScalarFieldEnum[]
  }

  /**
   * payments create
   */
  export type paymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a payments.
     */
    data: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
  }

  /**
   * payments createMany
   */
  export type paymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payments createManyAndReturn
   */
  export type paymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentsCreateManyInput | paymentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments update
   */
  export type paymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a payments.
     */
    data: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
    /**
     * Choose, which payments to update.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments updateMany
   */
  export type paymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payments updateManyAndReturn
   */
  export type paymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payments upsert
   */
  export type paymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the payments to update in case it exists.
     */
    where: paymentsWhereUniqueInput
    /**
     * In case the payments found by the `where` argument doesn't exist, create a new payments with this data.
     */
    create: XOR<paymentsCreateInput, paymentsUncheckedCreateInput>
    /**
     * In case the payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentsUpdateInput, paymentsUncheckedUpdateInput>
  }

  /**
   * payments delete
   */
  export type paymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
    /**
     * Filter which payments to delete.
     */
    where: paymentsWhereUniqueInput
  }

  /**
   * payments deleteMany
   */
  export type paymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentsWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payments.event
   */
  export type payments$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * payments without action
   */
  export type paymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payments
     */
    select?: paymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payments
     */
    omit?: paymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentsInclude<ExtArgs> | null
  }


  /**
   * Model support_requests
   */

  export type AggregateSupport_requests = {
    _count: Support_requestsCountAggregateOutputType | null
    _avg: Support_requestsAvgAggregateOutputType | null
    _sum: Support_requestsSumAggregateOutputType | null
    _min: Support_requestsMinAggregateOutputType | null
    _max: Support_requestsMaxAggregateOutputType | null
  }

  export type Support_requestsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type Support_requestsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
  }

  export type Support_requestsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    subject: string | null
    description: string | null
    status: string | null
    created_at: Date | null
    resolved_at: Date | null
  }

  export type Support_requestsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    event_id: number | null
    subject: string | null
    description: string | null
    status: string | null
    created_at: Date | null
    resolved_at: Date | null
  }

  export type Support_requestsCountAggregateOutputType = {
    id: number
    user_id: number
    event_id: number
    subject: number
    description: number
    status: number
    created_at: number
    resolved_at: number
    _all: number
  }


  export type Support_requestsAvgAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type Support_requestsSumAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
  }

  export type Support_requestsMinAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    subject?: true
    description?: true
    status?: true
    created_at?: true
    resolved_at?: true
  }

  export type Support_requestsMaxAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    subject?: true
    description?: true
    status?: true
    created_at?: true
    resolved_at?: true
  }

  export type Support_requestsCountAggregateInputType = {
    id?: true
    user_id?: true
    event_id?: true
    subject?: true
    description?: true
    status?: true
    created_at?: true
    resolved_at?: true
    _all?: true
  }

  export type Support_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which support_requests to aggregate.
     */
    where?: support_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_requests to fetch.
     */
    orderBy?: support_requestsOrderByWithRelationInput | support_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: support_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned support_requests
    **/
    _count?: true | Support_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Support_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Support_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Support_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Support_requestsMaxAggregateInputType
  }

  export type GetSupport_requestsAggregateType<T extends Support_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateSupport_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupport_requests[P]>
      : GetScalarType<T[P], AggregateSupport_requests[P]>
  }




  export type support_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: support_requestsWhereInput
    orderBy?: support_requestsOrderByWithAggregationInput | support_requestsOrderByWithAggregationInput[]
    by: Support_requestsScalarFieldEnum[] | Support_requestsScalarFieldEnum
    having?: support_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Support_requestsCountAggregateInputType | true
    _avg?: Support_requestsAvgAggregateInputType
    _sum?: Support_requestsSumAggregateInputType
    _min?: Support_requestsMinAggregateInputType
    _max?: Support_requestsMaxAggregateInputType
  }

  export type Support_requestsGroupByOutputType = {
    id: number
    user_id: number | null
    event_id: number | null
    subject: string
    description: string
    status: string
    created_at: Date
    resolved_at: Date | null
    _count: Support_requestsCountAggregateOutputType | null
    _avg: Support_requestsAvgAggregateOutputType | null
    _sum: Support_requestsSumAggregateOutputType | null
    _min: Support_requestsMinAggregateOutputType | null
    _max: Support_requestsMaxAggregateOutputType | null
  }

  type GetSupport_requestsGroupByPayload<T extends support_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Support_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Support_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Support_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Support_requestsGroupByOutputType[P]>
        }
      >
    >


  export type support_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    resolved_at?: boolean
    user?: boolean | support_requests$userArgs<ExtArgs>
    event?: boolean | support_requests$eventArgs<ExtArgs>
  }, ExtArgs["result"]["support_requests"]>

  export type support_requestsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    resolved_at?: boolean
    user?: boolean | support_requests$userArgs<ExtArgs>
    event?: boolean | support_requests$eventArgs<ExtArgs>
  }, ExtArgs["result"]["support_requests"]>

  export type support_requestsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    resolved_at?: boolean
    user?: boolean | support_requests$userArgs<ExtArgs>
    event?: boolean | support_requests$eventArgs<ExtArgs>
  }, ExtArgs["result"]["support_requests"]>

  export type support_requestsSelectScalar = {
    id?: boolean
    user_id?: boolean
    event_id?: boolean
    subject?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    resolved_at?: boolean
  }

  export type support_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "event_id" | "subject" | "description" | "status" | "created_at" | "resolved_at", ExtArgs["result"]["support_requests"]>
  export type support_requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | support_requests$userArgs<ExtArgs>
    event?: boolean | support_requests$eventArgs<ExtArgs>
  }
  export type support_requestsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | support_requests$userArgs<ExtArgs>
    event?: boolean | support_requests$eventArgs<ExtArgs>
  }
  export type support_requestsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | support_requests$userArgs<ExtArgs>
    event?: boolean | support_requests$eventArgs<ExtArgs>
  }

  export type $support_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "support_requests"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      event: Prisma.$eventsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      event_id: number | null
      subject: string
      description: string
      status: string
      created_at: Date
      resolved_at: Date | null
    }, ExtArgs["result"]["support_requests"]>
    composites: {}
  }

  type support_requestsGetPayload<S extends boolean | null | undefined | support_requestsDefaultArgs> = $Result.GetResult<Prisma.$support_requestsPayload, S>

  type support_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<support_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Support_requestsCountAggregateInputType | true
    }

  export interface support_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['support_requests'], meta: { name: 'support_requests' } }
    /**
     * Find zero or one Support_requests that matches the filter.
     * @param {support_requestsFindUniqueArgs} args - Arguments to find a Support_requests
     * @example
     * // Get one Support_requests
     * const support_requests = await prisma.support_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends support_requestsFindUniqueArgs>(args: SelectSubset<T, support_requestsFindUniqueArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Support_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {support_requestsFindUniqueOrThrowArgs} args - Arguments to find a Support_requests
     * @example
     * // Get one Support_requests
     * const support_requests = await prisma.support_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends support_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, support_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_requestsFindFirstArgs} args - Arguments to find a Support_requests
     * @example
     * // Get one Support_requests
     * const support_requests = await prisma.support_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends support_requestsFindFirstArgs>(args?: SelectSubset<T, support_requestsFindFirstArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_requestsFindFirstOrThrowArgs} args - Arguments to find a Support_requests
     * @example
     * // Get one Support_requests
     * const support_requests = await prisma.support_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends support_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, support_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Support_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Support_requests
     * const support_requests = await prisma.support_requests.findMany()
     * 
     * // Get first 10 Support_requests
     * const support_requests = await prisma.support_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const support_requestsWithIdOnly = await prisma.support_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends support_requestsFindManyArgs>(args?: SelectSubset<T, support_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Support_requests.
     * @param {support_requestsCreateArgs} args - Arguments to create a Support_requests.
     * @example
     * // Create one Support_requests
     * const Support_requests = await prisma.support_requests.create({
     *   data: {
     *     // ... data to create a Support_requests
     *   }
     * })
     * 
     */
    create<T extends support_requestsCreateArgs>(args: SelectSubset<T, support_requestsCreateArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Support_requests.
     * @param {support_requestsCreateManyArgs} args - Arguments to create many Support_requests.
     * @example
     * // Create many Support_requests
     * const support_requests = await prisma.support_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends support_requestsCreateManyArgs>(args?: SelectSubset<T, support_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Support_requests and returns the data saved in the database.
     * @param {support_requestsCreateManyAndReturnArgs} args - Arguments to create many Support_requests.
     * @example
     * // Create many Support_requests
     * const support_requests = await prisma.support_requests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Support_requests and only return the `id`
     * const support_requestsWithIdOnly = await prisma.support_requests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends support_requestsCreateManyAndReturnArgs>(args?: SelectSubset<T, support_requestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Support_requests.
     * @param {support_requestsDeleteArgs} args - Arguments to delete one Support_requests.
     * @example
     * // Delete one Support_requests
     * const Support_requests = await prisma.support_requests.delete({
     *   where: {
     *     // ... filter to delete one Support_requests
     *   }
     * })
     * 
     */
    delete<T extends support_requestsDeleteArgs>(args: SelectSubset<T, support_requestsDeleteArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Support_requests.
     * @param {support_requestsUpdateArgs} args - Arguments to update one Support_requests.
     * @example
     * // Update one Support_requests
     * const support_requests = await prisma.support_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends support_requestsUpdateArgs>(args: SelectSubset<T, support_requestsUpdateArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Support_requests.
     * @param {support_requestsDeleteManyArgs} args - Arguments to filter Support_requests to delete.
     * @example
     * // Delete a few Support_requests
     * const { count } = await prisma.support_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends support_requestsDeleteManyArgs>(args?: SelectSubset<T, support_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Support_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Support_requests
     * const support_requests = await prisma.support_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends support_requestsUpdateManyArgs>(args: SelectSubset<T, support_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Support_requests and returns the data updated in the database.
     * @param {support_requestsUpdateManyAndReturnArgs} args - Arguments to update many Support_requests.
     * @example
     * // Update many Support_requests
     * const support_requests = await prisma.support_requests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Support_requests and only return the `id`
     * const support_requestsWithIdOnly = await prisma.support_requests.updateManyAndReturn({
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
    updateManyAndReturn<T extends support_requestsUpdateManyAndReturnArgs>(args: SelectSubset<T, support_requestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Support_requests.
     * @param {support_requestsUpsertArgs} args - Arguments to update or create a Support_requests.
     * @example
     * // Update or create a Support_requests
     * const support_requests = await prisma.support_requests.upsert({
     *   create: {
     *     // ... data to create a Support_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Support_requests we want to update
     *   }
     * })
     */
    upsert<T extends support_requestsUpsertArgs>(args: SelectSubset<T, support_requestsUpsertArgs<ExtArgs>>): Prisma__support_requestsClient<$Result.GetResult<Prisma.$support_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Support_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_requestsCountArgs} args - Arguments to filter Support_requests to count.
     * @example
     * // Count the number of Support_requests
     * const count = await prisma.support_requests.count({
     *   where: {
     *     // ... the filter for the Support_requests we want to count
     *   }
     * })
    **/
    count<T extends support_requestsCountArgs>(
      args?: Subset<T, support_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Support_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Support_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Support_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Support_requestsAggregateArgs>(args: Subset<T, Support_requestsAggregateArgs>): Prisma.PrismaPromise<GetSupport_requestsAggregateType<T>>

    /**
     * Group by Support_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_requestsGroupByArgs} args - Group by arguments.
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
      T extends support_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: support_requestsGroupByArgs['orderBy'] }
        : { orderBy?: support_requestsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, support_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupport_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the support_requests model
   */
  readonly fields: support_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for support_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__support_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends support_requests$userArgs<ExtArgs> = {}>(args?: Subset<T, support_requests$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends support_requests$eventArgs<ExtArgs> = {}>(args?: Subset<T, support_requests$eventArgs<ExtArgs>>): Prisma__eventsClient<$Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the support_requests model
   */
  interface support_requestsFieldRefs {
    readonly id: FieldRef<"support_requests", 'Int'>
    readonly user_id: FieldRef<"support_requests", 'Int'>
    readonly event_id: FieldRef<"support_requests", 'Int'>
    readonly subject: FieldRef<"support_requests", 'String'>
    readonly description: FieldRef<"support_requests", 'String'>
    readonly status: FieldRef<"support_requests", 'String'>
    readonly created_at: FieldRef<"support_requests", 'DateTime'>
    readonly resolved_at: FieldRef<"support_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * support_requests findUnique
   */
  export type support_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * Filter, which support_requests to fetch.
     */
    where: support_requestsWhereUniqueInput
  }

  /**
   * support_requests findUniqueOrThrow
   */
  export type support_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * Filter, which support_requests to fetch.
     */
    where: support_requestsWhereUniqueInput
  }

  /**
   * support_requests findFirst
   */
  export type support_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * Filter, which support_requests to fetch.
     */
    where?: support_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_requests to fetch.
     */
    orderBy?: support_requestsOrderByWithRelationInput | support_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for support_requests.
     */
    cursor?: support_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of support_requests.
     */
    distinct?: Support_requestsScalarFieldEnum | Support_requestsScalarFieldEnum[]
  }

  /**
   * support_requests findFirstOrThrow
   */
  export type support_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * Filter, which support_requests to fetch.
     */
    where?: support_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_requests to fetch.
     */
    orderBy?: support_requestsOrderByWithRelationInput | support_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for support_requests.
     */
    cursor?: support_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of support_requests.
     */
    distinct?: Support_requestsScalarFieldEnum | Support_requestsScalarFieldEnum[]
  }

  /**
   * support_requests findMany
   */
  export type support_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * Filter, which support_requests to fetch.
     */
    where?: support_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_requests to fetch.
     */
    orderBy?: support_requestsOrderByWithRelationInput | support_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing support_requests.
     */
    cursor?: support_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_requests.
     */
    skip?: number
    distinct?: Support_requestsScalarFieldEnum | Support_requestsScalarFieldEnum[]
  }

  /**
   * support_requests create
   */
  export type support_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a support_requests.
     */
    data: XOR<support_requestsCreateInput, support_requestsUncheckedCreateInput>
  }

  /**
   * support_requests createMany
   */
  export type support_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many support_requests.
     */
    data: support_requestsCreateManyInput | support_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * support_requests createManyAndReturn
   */
  export type support_requestsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * The data used to create many support_requests.
     */
    data: support_requestsCreateManyInput | support_requestsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * support_requests update
   */
  export type support_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a support_requests.
     */
    data: XOR<support_requestsUpdateInput, support_requestsUncheckedUpdateInput>
    /**
     * Choose, which support_requests to update.
     */
    where: support_requestsWhereUniqueInput
  }

  /**
   * support_requests updateMany
   */
  export type support_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update support_requests.
     */
    data: XOR<support_requestsUpdateManyMutationInput, support_requestsUncheckedUpdateManyInput>
    /**
     * Filter which support_requests to update
     */
    where?: support_requestsWhereInput
    /**
     * Limit how many support_requests to update.
     */
    limit?: number
  }

  /**
   * support_requests updateManyAndReturn
   */
  export type support_requestsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * The data used to update support_requests.
     */
    data: XOR<support_requestsUpdateManyMutationInput, support_requestsUncheckedUpdateManyInput>
    /**
     * Filter which support_requests to update
     */
    where?: support_requestsWhereInput
    /**
     * Limit how many support_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * support_requests upsert
   */
  export type support_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the support_requests to update in case it exists.
     */
    where: support_requestsWhereUniqueInput
    /**
     * In case the support_requests found by the `where` argument doesn't exist, create a new support_requests with this data.
     */
    create: XOR<support_requestsCreateInput, support_requestsUncheckedCreateInput>
    /**
     * In case the support_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<support_requestsUpdateInput, support_requestsUncheckedUpdateInput>
  }

  /**
   * support_requests delete
   */
  export type support_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
    /**
     * Filter which support_requests to delete.
     */
    where: support_requestsWhereUniqueInput
  }

  /**
   * support_requests deleteMany
   */
  export type support_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which support_requests to delete
     */
    where?: support_requestsWhereInput
    /**
     * Limit how many support_requests to delete.
     */
    limit?: number
  }

  /**
   * support_requests.user
   */
  export type support_requests$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * support_requests.event
   */
  export type support_requests$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the events
     */
    select?: eventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the events
     */
    omit?: eventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventsInclude<ExtArgs> | null
    where?: eventsWhereInput
  }

  /**
   * support_requests without action
   */
  export type support_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_requests
     */
    select?: support_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_requests
     */
    omit?: support_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_requestsInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    type: string | null
    is_read: boolean | null
    email_sent: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    type: string | null
    is_read: boolean | null
    email_sent: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    message: number
    type: number
    is_read: number
    email_sent: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    email_sent?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    email_sent?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    message?: true
    type?: true
    is_read?: true
    email_sent?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number | null
    title: string
    message: string
    type: string | null
    is_read: boolean
    email_sent: boolean
    created_at: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    email_sent?: boolean
    created_at?: boolean
    user?: boolean | notifications$userArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    email_sent?: boolean
    created_at?: boolean
    user?: boolean | notifications$userArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    email_sent?: boolean
    created_at?: boolean
    user?: boolean | notifications$userArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    is_read?: boolean
    email_sent?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "message" | "type" | "is_read" | "email_sent" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | notifications$userArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | notifications$userArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | notifications$userArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      title: string
      message: string
      type: string | null
      is_read: boolean
      email_sent: boolean
      created_at: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
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
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
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
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends notifications$userArgs<ExtArgs> = {}>(args?: Subset<T, notifications$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly user_id: FieldRef<"notifications", 'Int'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly type: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly email_sent: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications.user
   */
  export type notifications$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model faqs
   */

  export type AggregateFaqs = {
    _count: FaqsCountAggregateOutputType | null
    _avg: FaqsAvgAggregateOutputType | null
    _sum: FaqsSumAggregateOutputType | null
    _min: FaqsMinAggregateOutputType | null
    _max: FaqsMaxAggregateOutputType | null
  }

  export type FaqsAvgAggregateOutputType = {
    id: number | null
  }

  export type FaqsSumAggregateOutputType = {
    id: number | null
  }

  export type FaqsMinAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    created_at: Date | null
  }

  export type FaqsMaxAggregateOutputType = {
    id: number | null
    question: string | null
    answer: string | null
    created_at: Date | null
  }

  export type FaqsCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    created_at: number
    _all: number
  }


  export type FaqsAvgAggregateInputType = {
    id?: true
  }

  export type FaqsSumAggregateInputType = {
    id?: true
  }

  export type FaqsMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    created_at?: true
  }

  export type FaqsMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    created_at?: true
  }

  export type FaqsCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    created_at?: true
    _all?: true
  }

  export type FaqsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faqs to aggregate.
     */
    where?: faqsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faqs to fetch.
     */
    orderBy?: faqsOrderByWithRelationInput | faqsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: faqsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned faqs
    **/
    _count?: true | FaqsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqsMaxAggregateInputType
  }

  export type GetFaqsAggregateType<T extends FaqsAggregateArgs> = {
        [P in keyof T & keyof AggregateFaqs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaqs[P]>
      : GetScalarType<T[P], AggregateFaqs[P]>
  }




  export type faqsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: faqsWhereInput
    orderBy?: faqsOrderByWithAggregationInput | faqsOrderByWithAggregationInput[]
    by: FaqsScalarFieldEnum[] | FaqsScalarFieldEnum
    having?: faqsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqsCountAggregateInputType | true
    _avg?: FaqsAvgAggregateInputType
    _sum?: FaqsSumAggregateInputType
    _min?: FaqsMinAggregateInputType
    _max?: FaqsMaxAggregateInputType
  }

  export type FaqsGroupByOutputType = {
    id: number
    question: string
    answer: string
    created_at: Date
    _count: FaqsCountAggregateOutputType | null
    _avg: FaqsAvgAggregateOutputType | null
    _sum: FaqsSumAggregateOutputType | null
    _min: FaqsMinAggregateOutputType | null
    _max: FaqsMaxAggregateOutputType | null
  }

  type GetFaqsGroupByPayload<T extends faqsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqsGroupByOutputType[P]>
            : GetScalarType<T[P], FaqsGroupByOutputType[P]>
        }
      >
    >


  export type faqsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["faqs"]>

  export type faqsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["faqs"]>

  export type faqsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["faqs"]>

  export type faqsSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    created_at?: boolean
  }

  export type faqsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "created_at", ExtArgs["result"]["faqs"]>

  export type $faqsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "faqs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question: string
      answer: string
      created_at: Date
    }, ExtArgs["result"]["faqs"]>
    composites: {}
  }

  type faqsGetPayload<S extends boolean | null | undefined | faqsDefaultArgs> = $Result.GetResult<Prisma.$faqsPayload, S>

  type faqsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<faqsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqsCountAggregateInputType | true
    }

  export interface faqsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['faqs'], meta: { name: 'faqs' } }
    /**
     * Find zero or one Faqs that matches the filter.
     * @param {faqsFindUniqueArgs} args - Arguments to find a Faqs
     * @example
     * // Get one Faqs
     * const faqs = await prisma.faqs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends faqsFindUniqueArgs>(args: SelectSubset<T, faqsFindUniqueArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faqs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {faqsFindUniqueOrThrowArgs} args - Arguments to find a Faqs
     * @example
     * // Get one Faqs
     * const faqs = await prisma.faqs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends faqsFindUniqueOrThrowArgs>(args: SelectSubset<T, faqsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faqsFindFirstArgs} args - Arguments to find a Faqs
     * @example
     * // Get one Faqs
     * const faqs = await prisma.faqs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends faqsFindFirstArgs>(args?: SelectSubset<T, faqsFindFirstArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faqs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faqsFindFirstOrThrowArgs} args - Arguments to find a Faqs
     * @example
     * // Get one Faqs
     * const faqs = await prisma.faqs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends faqsFindFirstOrThrowArgs>(args?: SelectSubset<T, faqsFindFirstOrThrowArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faqsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faqs.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faqs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqsWithIdOnly = await prisma.faqs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends faqsFindManyArgs>(args?: SelectSubset<T, faqsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faqs.
     * @param {faqsCreateArgs} args - Arguments to create a Faqs.
     * @example
     * // Create one Faqs
     * const Faqs = await prisma.faqs.create({
     *   data: {
     *     // ... data to create a Faqs
     *   }
     * })
     * 
     */
    create<T extends faqsCreateArgs>(args: SelectSubset<T, faqsCreateArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {faqsCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faqs = await prisma.faqs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends faqsCreateManyArgs>(args?: SelectSubset<T, faqsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faqs and returns the data saved in the database.
     * @param {faqsCreateManyAndReturnArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faqs = await prisma.faqs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faqs and only return the `id`
     * const faqsWithIdOnly = await prisma.faqs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends faqsCreateManyAndReturnArgs>(args?: SelectSubset<T, faqsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faqs.
     * @param {faqsDeleteArgs} args - Arguments to delete one Faqs.
     * @example
     * // Delete one Faqs
     * const Faqs = await prisma.faqs.delete({
     *   where: {
     *     // ... filter to delete one Faqs
     *   }
     * })
     * 
     */
    delete<T extends faqsDeleteArgs>(args: SelectSubset<T, faqsDeleteArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faqs.
     * @param {faqsUpdateArgs} args - Arguments to update one Faqs.
     * @example
     * // Update one Faqs
     * const faqs = await prisma.faqs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends faqsUpdateArgs>(args: SelectSubset<T, faqsUpdateArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {faqsDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faqs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends faqsDeleteManyArgs>(args?: SelectSubset<T, faqsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faqsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faqs = await prisma.faqs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends faqsUpdateManyArgs>(args: SelectSubset<T, faqsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs and returns the data updated in the database.
     * @param {faqsUpdateManyAndReturnArgs} args - Arguments to update many Faqs.
     * @example
     * // Update many Faqs
     * const faqs = await prisma.faqs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faqs and only return the `id`
     * const faqsWithIdOnly = await prisma.faqs.updateManyAndReturn({
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
    updateManyAndReturn<T extends faqsUpdateManyAndReturnArgs>(args: SelectSubset<T, faqsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faqs.
     * @param {faqsUpsertArgs} args - Arguments to update or create a Faqs.
     * @example
     * // Update or create a Faqs
     * const faqs = await prisma.faqs.upsert({
     *   create: {
     *     // ... data to create a Faqs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faqs we want to update
     *   }
     * })
     */
    upsert<T extends faqsUpsertArgs>(args: SelectSubset<T, faqsUpsertArgs<ExtArgs>>): Prisma__faqsClient<$Result.GetResult<Prisma.$faqsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faqsCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faqs.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends faqsCountArgs>(
      args?: Subset<T, faqsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaqsAggregateArgs>(args: Subset<T, FaqsAggregateArgs>): Prisma.PrismaPromise<GetFaqsAggregateType<T>>

    /**
     * Group by Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {faqsGroupByArgs} args - Group by arguments.
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
      T extends faqsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: faqsGroupByArgs['orderBy'] }
        : { orderBy?: faqsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, faqsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the faqs model
   */
  readonly fields: faqsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for faqs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__faqsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the faqs model
   */
  interface faqsFieldRefs {
    readonly id: FieldRef<"faqs", 'Int'>
    readonly question: FieldRef<"faqs", 'String'>
    readonly answer: FieldRef<"faqs", 'String'>
    readonly created_at: FieldRef<"faqs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * faqs findUnique
   */
  export type faqsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * Filter, which faqs to fetch.
     */
    where: faqsWhereUniqueInput
  }

  /**
   * faqs findUniqueOrThrow
   */
  export type faqsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * Filter, which faqs to fetch.
     */
    where: faqsWhereUniqueInput
  }

  /**
   * faqs findFirst
   */
  export type faqsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * Filter, which faqs to fetch.
     */
    where?: faqsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faqs to fetch.
     */
    orderBy?: faqsOrderByWithRelationInput | faqsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faqs.
     */
    cursor?: faqsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faqs.
     */
    distinct?: FaqsScalarFieldEnum | FaqsScalarFieldEnum[]
  }

  /**
   * faqs findFirstOrThrow
   */
  export type faqsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * Filter, which faqs to fetch.
     */
    where?: faqsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faqs to fetch.
     */
    orderBy?: faqsOrderByWithRelationInput | faqsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faqs.
     */
    cursor?: faqsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faqs.
     */
    distinct?: FaqsScalarFieldEnum | FaqsScalarFieldEnum[]
  }

  /**
   * faqs findMany
   */
  export type faqsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * Filter, which faqs to fetch.
     */
    where?: faqsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faqs to fetch.
     */
    orderBy?: faqsOrderByWithRelationInput | faqsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing faqs.
     */
    cursor?: faqsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faqs.
     */
    skip?: number
    distinct?: FaqsScalarFieldEnum | FaqsScalarFieldEnum[]
  }

  /**
   * faqs create
   */
  export type faqsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * The data needed to create a faqs.
     */
    data: XOR<faqsCreateInput, faqsUncheckedCreateInput>
  }

  /**
   * faqs createMany
   */
  export type faqsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many faqs.
     */
    data: faqsCreateManyInput | faqsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faqs createManyAndReturn
   */
  export type faqsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * The data used to create many faqs.
     */
    data: faqsCreateManyInput | faqsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faqs update
   */
  export type faqsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * The data needed to update a faqs.
     */
    data: XOR<faqsUpdateInput, faqsUncheckedUpdateInput>
    /**
     * Choose, which faqs to update.
     */
    where: faqsWhereUniqueInput
  }

  /**
   * faqs updateMany
   */
  export type faqsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update faqs.
     */
    data: XOR<faqsUpdateManyMutationInput, faqsUncheckedUpdateManyInput>
    /**
     * Filter which faqs to update
     */
    where?: faqsWhereInput
    /**
     * Limit how many faqs to update.
     */
    limit?: number
  }

  /**
   * faqs updateManyAndReturn
   */
  export type faqsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * The data used to update faqs.
     */
    data: XOR<faqsUpdateManyMutationInput, faqsUncheckedUpdateManyInput>
    /**
     * Filter which faqs to update
     */
    where?: faqsWhereInput
    /**
     * Limit how many faqs to update.
     */
    limit?: number
  }

  /**
   * faqs upsert
   */
  export type faqsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * The filter to search for the faqs to update in case it exists.
     */
    where: faqsWhereUniqueInput
    /**
     * In case the faqs found by the `where` argument doesn't exist, create a new faqs with this data.
     */
    create: XOR<faqsCreateInput, faqsUncheckedCreateInput>
    /**
     * In case the faqs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<faqsUpdateInput, faqsUncheckedUpdateInput>
  }

  /**
   * faqs delete
   */
  export type faqsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
    /**
     * Filter which faqs to delete.
     */
    where: faqsWhereUniqueInput
  }

  /**
   * faqs deleteMany
   */
  export type faqsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faqs to delete
     */
    where?: faqsWhereInput
    /**
     * Limit how many faqs to delete.
     */
    limit?: number
  }

  /**
   * faqs without action
   */
  export type faqsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faqs
     */
    select?: faqsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the faqs
     */
    omit?: faqsOmit<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LogsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LogsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    action: string | null
    created_at: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    action: string | null
    created_at: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    details: number
    created_at: number
    _all: number
  }


  export type LogsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LogsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LogsMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    created_at?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    created_at?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    details?: true
    created_at?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _avg?: LogsAvgAggregateInputType
    _sum?: LogsSumAggregateInputType
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: number
    user_id: number | null
    action: string | null
    details: JsonValue | null
    created_at: Date
    _count: LogsCountAggregateOutputType | null
    _avg: LogsAvgAggregateOutputType | null
    _sum: LogsSumAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    user?: boolean | logs$userArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    user?: boolean | logs$userArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
    user?: boolean | logs$userArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>

  export type logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    details?: boolean
    created_at?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "details" | "created_at", ExtArgs["result"]["logs"]>
  export type logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | logs$userArgs<ExtArgs>
  }
  export type logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | logs$userArgs<ExtArgs>
  }
  export type logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | logs$userArgs<ExtArgs>
  }

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      action: string | null
      details: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {logsCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logsCreateManyAndReturnArgs>(args?: SelectSubset<T, logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {logsUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logsWithIdOnly = await prisma.logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends logsUpdateManyAndReturnArgs>(args: SelectSubset<T, logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
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
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends logs$userArgs<ExtArgs> = {}>(args?: Subset<T, logs$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id: FieldRef<"logs", 'Int'>
    readonly user_id: FieldRef<"logs", 'Int'>
    readonly action: FieldRef<"logs", 'String'>
    readonly details: FieldRef<"logs", 'Json'>
    readonly created_at: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data?: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs createManyAndReturn
   */
  export type logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs updateManyAndReturn
   */
  export type logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs.user
   */
  export type logs$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    user_name: 'user_name',
    phone: 'phone',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    Address_id: 'Address_id',
    user_id: 'user_id',
    event_id: 'event_id',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    postal_code: 'postal_code',
    latitude: 'latitude',
    longitude: 'longitude',
    created_at: 'created_at'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    address_id: 'address_id',
    title: 'title',
    type: 'type',
    date: 'date',
    status: 'status',
    created_at: 'created_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    created_at: 'created_at'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const EventServicesScalarFieldEnum: {
    event_id: 'event_id',
    service_id: 'service_id',
    quantity: 'quantity'
  };

  export type EventServicesScalarFieldEnum = (typeof EventServicesScalarFieldEnum)[keyof typeof EventServicesScalarFieldEnum]


  export const PaymentsScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    amount: 'amount',
    status: 'status',
    payment_method: 'payment_method',
    created_at: 'created_at'
  };

  export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum]


  export const Support_requestsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    subject: 'subject',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    resolved_at: 'resolved_at'
  };

  export type Support_requestsScalarFieldEnum = (typeof Support_requestsScalarFieldEnum)[keyof typeof Support_requestsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    message: 'message',
    type: 'type',
    is_read: 'is_read',
    email_sent: 'email_sent',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const FaqsScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    created_at: 'created_at'
  };

  export type FaqsScalarFieldEnum = (typeof FaqsScalarFieldEnum)[keyof typeof FaqsScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    details: 'details',
    created_at: 'created_at'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    user_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    events?: EventsListRelationFilter
    addresses?: AddressListRelationFilter
    logs?: LogsListRelationFilter
    notifications?: NotificationsListRelationFilter
    support_requests?: Support_requestsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    events?: eventsOrderByRelationAggregateInput
    addresses?: AddressOrderByRelationAggregateInput
    logs?: logsOrderByRelationAggregateInput
    notifications?: notificationsOrderByRelationAggregateInput
    support_requests?: support_requestsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    user_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    events?: EventsListRelationFilter
    addresses?: AddressListRelationFilter
    logs?: LogsListRelationFilter
    notifications?: NotificationsListRelationFilter
    support_requests?: Support_requestsListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    user_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    Address_id?: IntFilter<"Address"> | number
    user_id?: IntNullableFilter<"Address"> | number | null
    event_id?: IntNullableFilter<"Address"> | number | null
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    postal_code?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    created_at?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    event?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    Address_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    event_id?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    event?: eventsOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    Address_id?: number
    event_id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    user_id?: IntNullableFilter<"Address"> | number | null
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    postal_code?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    created_at?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    event?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }, "Address_id" | "event_id">

  export type AddressOrderByWithAggregationInput = {
    Address_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    event_id?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    Address_id?: IntWithAggregatesFilter<"Address"> | number
    user_id?: IntNullableWithAggregatesFilter<"Address"> | number | null
    event_id?: IntNullableWithAggregatesFilter<"Address"> | number | null
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"Address"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Address"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type eventsWhereInput = {
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    id?: IntFilter<"events"> | number
    user_id?: IntNullableFilter<"events"> | number | null
    address_id?: IntNullableFilter<"events"> | number | null
    title?: StringFilter<"events"> | string
    type?: StringNullableFilter<"events"> | string | null
    date?: DateTimeFilter<"events"> | Date | string
    status?: StringFilter<"events"> | string
    created_at?: DateTimeFilter<"events"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    eventServices?: EventServicesListRelationFilter
    payments?: PaymentsListRelationFilter
    support_requests?: Support_requestsListRelationFilter
  }

  export type eventsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    address_id?: SortOrderInput | SortOrder
    title?: SortOrder
    type?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    eventServices?: eventServicesOrderByRelationAggregateInput
    payments?: paymentsOrderByRelationAggregateInput
    support_requests?: support_requestsOrderByRelationAggregateInput
  }

  export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address_id?: number
    AND?: eventsWhereInput | eventsWhereInput[]
    OR?: eventsWhereInput[]
    NOT?: eventsWhereInput | eventsWhereInput[]
    user_id?: IntNullableFilter<"events"> | number | null
    title?: StringFilter<"events"> | string
    type?: StringNullableFilter<"events"> | string | null
    date?: DateTimeFilter<"events"> | Date | string
    status?: StringFilter<"events"> | string
    created_at?: DateTimeFilter<"events"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    eventServices?: EventServicesListRelationFilter
    payments?: PaymentsListRelationFilter
    support_requests?: Support_requestsListRelationFilter
  }, "id" | "address_id">

  export type eventsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    address_id?: SortOrderInput | SortOrder
    title?: SortOrder
    type?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: eventsCountOrderByAggregateInput
    _avg?: eventsAvgOrderByAggregateInput
    _max?: eventsMaxOrderByAggregateInput
    _min?: eventsMinOrderByAggregateInput
    _sum?: eventsSumOrderByAggregateInput
  }

  export type eventsScalarWhereWithAggregatesInput = {
    AND?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    OR?: eventsScalarWhereWithAggregatesInput[]
    NOT?: eventsScalarWhereWithAggregatesInput | eventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"events"> | number
    user_id?: IntNullableWithAggregatesFilter<"events"> | number | null
    address_id?: IntNullableWithAggregatesFilter<"events"> | number | null
    title?: StringWithAggregatesFilter<"events"> | string
    type?: StringNullableWithAggregatesFilter<"events"> | string | null
    date?: DateTimeWithAggregatesFilter<"events"> | Date | string
    status?: StringWithAggregatesFilter<"events"> | string
    created_at?: DateTimeWithAggregatesFilter<"events"> | Date | string
  }

  export type servicesWhereInput = {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    id?: IntFilter<"services"> | number
    name?: StringFilter<"services"> | string
    description?: StringNullableFilter<"services"> | string | null
    price?: DecimalFilter<"services"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableFilter<"services"> | string | null
    created_at?: DateTimeFilter<"services"> | Date | string
    eventServices?: EventServicesListRelationFilter
  }

  export type servicesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    eventServices?: eventServicesOrderByRelationAggregateInput
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    name?: StringFilter<"services"> | string
    description?: StringNullableFilter<"services"> | string | null
    price?: DecimalFilter<"services"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableFilter<"services"> | string | null
    created_at?: DateTimeFilter<"services"> | Date | string
    eventServices?: EventServicesListRelationFilter
  }, "id">

  export type servicesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"services"> | number
    name?: StringWithAggregatesFilter<"services"> | string
    description?: StringNullableWithAggregatesFilter<"services"> | string | null
    price?: DecimalWithAggregatesFilter<"services"> | Decimal | DecimalJsLike | number | string
    category?: StringNullableWithAggregatesFilter<"services"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"services"> | Date | string
  }

  export type eventServicesWhereInput = {
    AND?: eventServicesWhereInput | eventServicesWhereInput[]
    OR?: eventServicesWhereInput[]
    NOT?: eventServicesWhereInput | eventServicesWhereInput[]
    event_id?: IntFilter<"eventServices"> | number
    service_id?: IntFilter<"eventServices"> | number
    quantity?: IntNullableFilter<"eventServices"> | number | null
    event?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    service?: XOR<ServicesScalarRelationFilter, servicesWhereInput>
  }

  export type eventServicesOrderByWithRelationInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrderInput | SortOrder
    event?: eventsOrderByWithRelationInput
    service?: servicesOrderByWithRelationInput
  }

  export type eventServicesWhereUniqueInput = Prisma.AtLeast<{
    event_id_service_id?: eventServicesEvent_idService_idCompoundUniqueInput
    AND?: eventServicesWhereInput | eventServicesWhereInput[]
    OR?: eventServicesWhereInput[]
    NOT?: eventServicesWhereInput | eventServicesWhereInput[]
    event_id?: IntFilter<"eventServices"> | number
    service_id?: IntFilter<"eventServices"> | number
    quantity?: IntNullableFilter<"eventServices"> | number | null
    event?: XOR<EventsScalarRelationFilter, eventsWhereInput>
    service?: XOR<ServicesScalarRelationFilter, servicesWhereInput>
  }, "event_id_service_id">

  export type eventServicesOrderByWithAggregationInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: eventServicesCountOrderByAggregateInput
    _avg?: eventServicesAvgOrderByAggregateInput
    _max?: eventServicesMaxOrderByAggregateInput
    _min?: eventServicesMinOrderByAggregateInput
    _sum?: eventServicesSumOrderByAggregateInput
  }

  export type eventServicesScalarWhereWithAggregatesInput = {
    AND?: eventServicesScalarWhereWithAggregatesInput | eventServicesScalarWhereWithAggregatesInput[]
    OR?: eventServicesScalarWhereWithAggregatesInput[]
    NOT?: eventServicesScalarWhereWithAggregatesInput | eventServicesScalarWhereWithAggregatesInput[]
    event_id?: IntWithAggregatesFilter<"eventServices"> | number
    service_id?: IntWithAggregatesFilter<"eventServices"> | number
    quantity?: IntNullableWithAggregatesFilter<"eventServices"> | number | null
  }

  export type paymentsWhereInput = {
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    id?: IntFilter<"payments"> | number
    event_id?: IntNullableFilter<"payments"> | number | null
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"payments"> | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
    event?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }

  export type paymentsOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    event?: eventsOrderByWithRelationInput
  }

  export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paymentsWhereInput | paymentsWhereInput[]
    OR?: paymentsWhereInput[]
    NOT?: paymentsWhereInput | paymentsWhereInput[]
    event_id?: IntNullableFilter<"payments"> | number | null
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"payments"> | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
    event?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }, "id">

  export type paymentsOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: paymentsCountOrderByAggregateInput
    _avg?: paymentsAvgOrderByAggregateInput
    _max?: paymentsMaxOrderByAggregateInput
    _min?: paymentsMinOrderByAggregateInput
    _sum?: paymentsSumOrderByAggregateInput
  }

  export type paymentsScalarWhereWithAggregatesInput = {
    AND?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    OR?: paymentsScalarWhereWithAggregatesInput[]
    NOT?: paymentsScalarWhereWithAggregatesInput | paymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"payments"> | number
    event_id?: IntNullableWithAggregatesFilter<"payments"> | number | null
    amount?: DecimalWithAggregatesFilter<"payments"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"payments"> | string
    payment_method?: StringNullableWithAggregatesFilter<"payments"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"payments"> | Date | string
  }

  export type support_requestsWhereInput = {
    AND?: support_requestsWhereInput | support_requestsWhereInput[]
    OR?: support_requestsWhereInput[]
    NOT?: support_requestsWhereInput | support_requestsWhereInput[]
    id?: IntFilter<"support_requests"> | number
    user_id?: IntNullableFilter<"support_requests"> | number | null
    event_id?: IntNullableFilter<"support_requests"> | number | null
    subject?: StringFilter<"support_requests"> | string
    description?: StringFilter<"support_requests"> | string
    status?: StringFilter<"support_requests"> | string
    created_at?: DateTimeFilter<"support_requests"> | Date | string
    resolved_at?: DateTimeNullableFilter<"support_requests"> | Date | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    event?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }

  export type support_requestsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    event_id?: SortOrderInput | SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    event?: eventsOrderByWithRelationInput
  }

  export type support_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: support_requestsWhereInput | support_requestsWhereInput[]
    OR?: support_requestsWhereInput[]
    NOT?: support_requestsWhereInput | support_requestsWhereInput[]
    user_id?: IntNullableFilter<"support_requests"> | number | null
    event_id?: IntNullableFilter<"support_requests"> | number | null
    subject?: StringFilter<"support_requests"> | string
    description?: StringFilter<"support_requests"> | string
    status?: StringFilter<"support_requests"> | string
    created_at?: DateTimeFilter<"support_requests"> | Date | string
    resolved_at?: DateTimeNullableFilter<"support_requests"> | Date | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    event?: XOR<EventsNullableScalarRelationFilter, eventsWhereInput> | null
  }, "id">

  export type support_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    event_id?: SortOrderInput | SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrderInput | SortOrder
    _count?: support_requestsCountOrderByAggregateInput
    _avg?: support_requestsAvgOrderByAggregateInput
    _max?: support_requestsMaxOrderByAggregateInput
    _min?: support_requestsMinOrderByAggregateInput
    _sum?: support_requestsSumOrderByAggregateInput
  }

  export type support_requestsScalarWhereWithAggregatesInput = {
    AND?: support_requestsScalarWhereWithAggregatesInput | support_requestsScalarWhereWithAggregatesInput[]
    OR?: support_requestsScalarWhereWithAggregatesInput[]
    NOT?: support_requestsScalarWhereWithAggregatesInput | support_requestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"support_requests"> | number
    user_id?: IntNullableWithAggregatesFilter<"support_requests"> | number | null
    event_id?: IntNullableWithAggregatesFilter<"support_requests"> | number | null
    subject?: StringWithAggregatesFilter<"support_requests"> | string
    description?: StringWithAggregatesFilter<"support_requests"> | string
    status?: StringWithAggregatesFilter<"support_requests"> | string
    created_at?: DateTimeWithAggregatesFilter<"support_requests"> | Date | string
    resolved_at?: DateTimeNullableWithAggregatesFilter<"support_requests"> | Date | string | null
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntNullableFilter<"notifications"> | number | null
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    type?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolFilter<"notifications"> | boolean
    email_sent?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeFilter<"notifications"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrderInput | SortOrder
    is_read?: SortOrder
    email_sent?: SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: IntNullableFilter<"notifications"> | number | null
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    type?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolFilter<"notifications"> | boolean
    email_sent?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeFilter<"notifications"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrderInput | SortOrder
    is_read?: SortOrder
    email_sent?: SortOrder
    created_at?: SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    user_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    title?: StringWithAggregatesFilter<"notifications"> | string
    message?: StringWithAggregatesFilter<"notifications"> | string
    type?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    is_read?: BoolWithAggregatesFilter<"notifications"> | boolean
    email_sent?: BoolWithAggregatesFilter<"notifications"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"notifications"> | Date | string
  }

  export type faqsWhereInput = {
    AND?: faqsWhereInput | faqsWhereInput[]
    OR?: faqsWhereInput[]
    NOT?: faqsWhereInput | faqsWhereInput[]
    id?: IntFilter<"faqs"> | number
    question?: StringFilter<"faqs"> | string
    answer?: StringFilter<"faqs"> | string
    created_at?: DateTimeFilter<"faqs"> | Date | string
  }

  export type faqsOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type faqsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: faqsWhereInput | faqsWhereInput[]
    OR?: faqsWhereInput[]
    NOT?: faqsWhereInput | faqsWhereInput[]
    question?: StringFilter<"faqs"> | string
    answer?: StringFilter<"faqs"> | string
    created_at?: DateTimeFilter<"faqs"> | Date | string
  }, "id">

  export type faqsOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
    _count?: faqsCountOrderByAggregateInput
    _avg?: faqsAvgOrderByAggregateInput
    _max?: faqsMaxOrderByAggregateInput
    _min?: faqsMinOrderByAggregateInput
    _sum?: faqsSumOrderByAggregateInput
  }

  export type faqsScalarWhereWithAggregatesInput = {
    AND?: faqsScalarWhereWithAggregatesInput | faqsScalarWhereWithAggregatesInput[]
    OR?: faqsScalarWhereWithAggregatesInput[]
    NOT?: faqsScalarWhereWithAggregatesInput | faqsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"faqs"> | number
    question?: StringWithAggregatesFilter<"faqs"> | string
    answer?: StringWithAggregatesFilter<"faqs"> | string
    created_at?: DateTimeWithAggregatesFilter<"faqs"> | Date | string
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id?: IntFilter<"logs"> | number
    user_id?: IntNullableFilter<"logs"> | number | null
    action?: StringNullableFilter<"logs"> | string | null
    details?: JsonNullableFilter<"logs">
    created_at?: DateTimeFilter<"logs"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    user_id?: IntNullableFilter<"logs"> | number | null
    action?: StringNullableFilter<"logs"> | string | null
    details?: JsonNullableFilter<"logs">
    created_at?: DateTimeFilter<"logs"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: logsCountOrderByAggregateInput
    _avg?: logsAvgOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
    _sum?: logsSumOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logs"> | number
    user_id?: IntNullableWithAggregatesFilter<"logs"> | number | null
    action?: StringNullableWithAggregatesFilter<"logs"> | string | null
    details?: JsonNullableWithAggregatesFilter<"logs">
    created_at?: DateTimeWithAggregatesFilter<"logs"> | Date | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    logs?: logsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    support_requests?: support_requestsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    logs?: logsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutAddressesInput
    event?: eventsCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    Address_id?: number
    user_id?: number | null
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
    event?: eventsUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutAddressesNestedInput
    event?: eventsUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    Address_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventsUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    Address_id?: number
    user_id?: number | null
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    Address_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateInput = {
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutEventsInput
    address?: AddressCreateNestedOneWithoutEventInput
    eventServices?: eventServicesCreateNestedManyWithoutEventInput
    payments?: paymentsCreateNestedManyWithoutEventInput
    support_requests?: support_requestsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    eventServices?: eventServicesUncheckedCreateNestedManyWithoutEventInput
    payments?: paymentsUncheckedCreateNestedManyWithoutEventInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEventsNestedInput
    address?: AddressUpdateOneWithoutEventNestedInput
    eventServices?: eventServicesUpdateManyWithoutEventNestedInput
    payments?: paymentsUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUncheckedUpdateManyWithoutEventNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventsCreateManyInput = {
    id?: number
    user_id?: number | null
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
  }

  export type eventsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesCreateInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    category?: string | null
    created_at?: Date | string
    eventServices?: eventServicesCreateNestedManyWithoutServiceInput
  }

  export type servicesUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    category?: string | null
    created_at?: Date | string
    eventServices?: eventServicesUncheckedCreateNestedManyWithoutServiceInput
  }

  export type servicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUpdateManyWithoutServiceNestedInput
  }

  export type servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type servicesCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    category?: string | null
    created_at?: Date | string
  }

  export type servicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventServicesCreateInput = {
    quantity?: number | null
    event: eventsCreateNestedOneWithoutEventServicesInput
    service: servicesCreateNestedOneWithoutEventServicesInput
  }

  export type eventServicesUncheckedCreateInput = {
    event_id: number
    service_id: number
    quantity?: number | null
  }

  export type eventServicesUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    event?: eventsUpdateOneRequiredWithoutEventServicesNestedInput
    service?: servicesUpdateOneRequiredWithoutEventServicesNestedInput
  }

  export type eventServicesUncheckedUpdateInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventServicesCreateManyInput = {
    event_id: number
    service_id: number
    quantity?: number | null
  }

  export type eventServicesUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventServicesUncheckedUpdateManyInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    status?: string
    payment_method?: string | null
    created_at?: Date | string
    event?: eventsCreateNestedOneWithoutPaymentsInput
  }

  export type paymentsUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string
    payment_method?: string | null
    created_at?: Date | string
  }

  export type paymentsUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventsUpdateOneWithoutPaymentsNestedInput
  }

  export type paymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsCreateManyInput = {
    id?: number
    event_id?: number | null
    amount: Decimal | DecimalJsLike | number | string
    status?: string
    payment_method?: string | null
    created_at?: Date | string
  }

  export type paymentsUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type support_requestsCreateInput = {
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
    user?: usersCreateNestedOneWithoutSupport_requestsInput
    event?: eventsCreateNestedOneWithoutSupport_requestsInput
  }

  export type support_requestsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    event_id?: number | null
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type support_requestsUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneWithoutSupport_requestsNestedInput
    event?: eventsUpdateOneWithoutSupport_requestsNestedInput
  }

  export type support_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type support_requestsCreateManyInput = {
    id?: number
    user_id?: number | null
    event_id?: number | null
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type support_requestsUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type support_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateInput = {
    title: string
    message: string
    type?: string | null
    is_read?: boolean
    email_sent?: boolean
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutNotificationsInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    title: string
    message: string
    type?: string | null
    is_read?: boolean
    email_sent?: boolean
    created_at?: Date | string
  }

  export type notificationsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutNotificationsNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id?: number | null
    title: string
    message: string
    type?: string | null
    is_read?: boolean
    email_sent?: boolean
    created_at?: Date | string
  }

  export type notificationsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type faqsCreateInput = {
    question: string
    answer: string
    created_at?: Date | string
  }

  export type faqsUncheckedCreateInput = {
    id?: number
    question: string
    answer: string
    created_at?: Date | string
  }

  export type faqsUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type faqsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type faqsCreateManyInput = {
    id?: number
    question: string
    answer: string
    created_at?: Date | string
  }

  export type faqsUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type faqsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateInput = {
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutLogsInput
  }

  export type logsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type logsUpdateInput = {
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutLogsNestedInput
  }

  export type logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateManyInput = {
    id?: number
    user_id?: number | null
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type logsUpdateManyMutationInput = {
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EventsListRelationFilter = {
    every?: eventsWhereInput
    some?: eventsWhereInput
    none?: eventsWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type LogsListRelationFilter = {
    every?: logsWhereInput
    some?: logsWhereInput
    none?: logsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type Support_requestsListRelationFilter = {
    every?: support_requestsWhereInput
    some?: support_requestsWhereInput
    none?: support_requestsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type eventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type support_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type EventsNullableScalarRelationFilter = {
    is?: eventsWhereInput | null
    isNot?: eventsWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    Address_id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    Address_id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    Address_id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    Address_id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    created_at?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    Address_id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type EventServicesListRelationFilter = {
    every?: eventServicesWhereInput
    some?: eventServicesWhereInput
    none?: eventServicesWhereInput
  }

  export type PaymentsListRelationFilter = {
    every?: paymentsWhereInput
    some?: paymentsWhereInput
    none?: paymentsWhereInput
  }

  export type eventServicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type eventsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
  }

  export type eventsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type eventsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type eventsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    address_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type servicesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EventsScalarRelationFilter = {
    is?: eventsWhereInput
    isNot?: eventsWhereInput
  }

  export type ServicesScalarRelationFilter = {
    is?: servicesWhereInput
    isNot?: servicesWhereInput
  }

  export type eventServicesEvent_idService_idCompoundUniqueInput = {
    event_id: number
    service_id: number
  }

  export type eventServicesCountOrderByAggregateInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrder
  }

  export type eventServicesAvgOrderByAggregateInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrder
  }

  export type eventServicesMaxOrderByAggregateInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrder
  }

  export type eventServicesMinOrderByAggregateInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrder
  }

  export type eventServicesSumOrderByAggregateInput = {
    event_id?: SortOrder
    service_id?: SortOrder
    quantity?: SortOrder
  }

  export type paymentsCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
  }

  export type paymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    created_at?: SortOrder
  }

  export type paymentsSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
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

  export type support_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type support_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
  }

  export type support_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type support_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type support_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    event_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    email_sent?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    email_sent?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    is_read?: SortOrder
    email_sent?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type faqsCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type faqsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type faqsMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type faqsMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type faqsSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
  }

  export type logsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    created_at?: SortOrder
  }

  export type logsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type eventsCreateNestedManyWithoutUserInput = {
    create?: XOR<eventsCreateWithoutUserInput, eventsUncheckedCreateWithoutUserInput> | eventsCreateWithoutUserInput[] | eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUserInput | eventsCreateOrConnectWithoutUserInput[]
    createMany?: eventsCreateManyUserInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type logsCreateNestedManyWithoutUserInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type support_requestsCreateNestedManyWithoutUserInput = {
    create?: XOR<support_requestsCreateWithoutUserInput, support_requestsUncheckedCreateWithoutUserInput> | support_requestsCreateWithoutUserInput[] | support_requestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutUserInput | support_requestsCreateOrConnectWithoutUserInput[]
    createMany?: support_requestsCreateManyUserInputEnvelope
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
  }

  export type eventsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<eventsCreateWithoutUserInput, eventsUncheckedCreateWithoutUserInput> | eventsCreateWithoutUserInput[] | eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUserInput | eventsCreateOrConnectWithoutUserInput[]
    createMany?: eventsCreateManyUserInputEnvelope
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type logsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type support_requestsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<support_requestsCreateWithoutUserInput, support_requestsUncheckedCreateWithoutUserInput> | support_requestsCreateWithoutUserInput[] | support_requestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutUserInput | support_requestsCreateOrConnectWithoutUserInput[]
    createMany?: support_requestsCreateManyUserInputEnvelope
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type eventsUpdateManyWithoutUserNestedInput = {
    create?: XOR<eventsCreateWithoutUserInput, eventsUncheckedCreateWithoutUserInput> | eventsCreateWithoutUserInput[] | eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUserInput | eventsCreateOrConnectWithoutUserInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutUserInput | eventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: eventsCreateManyUserInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutUserInput | eventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutUserInput | eventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type logsUpdateManyWithoutUserNestedInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUserInput | logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUserInput | logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUserInput | logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUserInput | notificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUserInput | notificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUserInput | notificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type support_requestsUpdateManyWithoutUserNestedInput = {
    create?: XOR<support_requestsCreateWithoutUserInput, support_requestsUncheckedCreateWithoutUserInput> | support_requestsCreateWithoutUserInput[] | support_requestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutUserInput | support_requestsCreateOrConnectWithoutUserInput[]
    upsert?: support_requestsUpsertWithWhereUniqueWithoutUserInput | support_requestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: support_requestsCreateManyUserInputEnvelope
    set?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    disconnect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    delete?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    update?: support_requestsUpdateWithWhereUniqueWithoutUserInput | support_requestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: support_requestsUpdateManyWithWhereWithoutUserInput | support_requestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: support_requestsScalarWhereInput | support_requestsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type eventsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<eventsCreateWithoutUserInput, eventsUncheckedCreateWithoutUserInput> | eventsCreateWithoutUserInput[] | eventsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: eventsCreateOrConnectWithoutUserInput | eventsCreateOrConnectWithoutUserInput[]
    upsert?: eventsUpsertWithWhereUniqueWithoutUserInput | eventsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: eventsCreateManyUserInputEnvelope
    set?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    disconnect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    delete?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    connect?: eventsWhereUniqueInput | eventsWhereUniqueInput[]
    update?: eventsUpdateWithWhereUniqueWithoutUserInput | eventsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: eventsUpdateManyWithWhereWithoutUserInput | eventsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: eventsScalarWhereInput | eventsScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type logsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUserInput | logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUserInput | logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUserInput | logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput> | notificationsCreateWithoutUserInput[] | notificationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUserInput | notificationsCreateOrConnectWithoutUserInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUserInput | notificationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: notificationsCreateManyUserInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUserInput | notificationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUserInput | notificationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type support_requestsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<support_requestsCreateWithoutUserInput, support_requestsUncheckedCreateWithoutUserInput> | support_requestsCreateWithoutUserInput[] | support_requestsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutUserInput | support_requestsCreateOrConnectWithoutUserInput[]
    upsert?: support_requestsUpsertWithWhereUniqueWithoutUserInput | support_requestsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: support_requestsCreateManyUserInputEnvelope
    set?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    disconnect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    delete?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    update?: support_requestsUpdateWithWhereUniqueWithoutUserInput | support_requestsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: support_requestsUpdateManyWithWhereWithoutUserInput | support_requestsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: support_requestsScalarWhereInput | support_requestsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutAddressInput = {
    create?: XOR<eventsCreateWithoutAddressInput, eventsUncheckedCreateWithoutAddressInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAddressInput
    connect?: eventsWhereUniqueInput
  }

  export type eventsUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<eventsCreateWithoutAddressInput, eventsUncheckedCreateWithoutAddressInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAddressInput
    connect?: eventsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type usersUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    upsert?: usersUpsertWithoutAddressesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressesInput, usersUpdateWithoutAddressesInput>, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type eventsUpdateOneWithoutAddressNestedInput = {
    create?: XOR<eventsCreateWithoutAddressInput, eventsUncheckedCreateWithoutAddressInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAddressInput
    upsert?: eventsUpsertWithoutAddressInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutAddressInput, eventsUpdateWithoutAddressInput>, eventsUncheckedUpdateWithoutAddressInput>
  }

  export type eventsUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<eventsCreateWithoutAddressInput, eventsUncheckedCreateWithoutAddressInput>
    connectOrCreate?: eventsCreateOrConnectWithoutAddressInput
    upsert?: eventsUpsertWithoutAddressInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutAddressInput, eventsUpdateWithoutAddressInput>, eventsUncheckedUpdateWithoutAddressInput>
  }

  export type usersCreateNestedOneWithoutEventsInput = {
    create?: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEventsInput
    connect?: usersWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutEventInput = {
    create?: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEventInput
    connect?: AddressWhereUniqueInput
  }

  export type eventServicesCreateNestedManyWithoutEventInput = {
    create?: XOR<eventServicesCreateWithoutEventInput, eventServicesUncheckedCreateWithoutEventInput> | eventServicesCreateWithoutEventInput[] | eventServicesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutEventInput | eventServicesCreateOrConnectWithoutEventInput[]
    createMany?: eventServicesCreateManyEventInputEnvelope
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
  }

  export type paymentsCreateNestedManyWithoutEventInput = {
    create?: XOR<paymentsCreateWithoutEventInput, paymentsUncheckedCreateWithoutEventInput> | paymentsCreateWithoutEventInput[] | paymentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutEventInput | paymentsCreateOrConnectWithoutEventInput[]
    createMany?: paymentsCreateManyEventInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type support_requestsCreateNestedManyWithoutEventInput = {
    create?: XOR<support_requestsCreateWithoutEventInput, support_requestsUncheckedCreateWithoutEventInput> | support_requestsCreateWithoutEventInput[] | support_requestsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutEventInput | support_requestsCreateOrConnectWithoutEventInput[]
    createMany?: support_requestsCreateManyEventInputEnvelope
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
  }

  export type eventServicesUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<eventServicesCreateWithoutEventInput, eventServicesUncheckedCreateWithoutEventInput> | eventServicesCreateWithoutEventInput[] | eventServicesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutEventInput | eventServicesCreateOrConnectWithoutEventInput[]
    createMany?: eventServicesCreateManyEventInputEnvelope
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
  }

  export type paymentsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<paymentsCreateWithoutEventInput, paymentsUncheckedCreateWithoutEventInput> | paymentsCreateWithoutEventInput[] | paymentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutEventInput | paymentsCreateOrConnectWithoutEventInput[]
    createMany?: paymentsCreateManyEventInputEnvelope
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
  }

  export type support_requestsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<support_requestsCreateWithoutEventInput, support_requestsUncheckedCreateWithoutEventInput> | support_requestsCreateWithoutEventInput[] | support_requestsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutEventInput | support_requestsCreateOrConnectWithoutEventInput[]
    createMany?: support_requestsCreateManyEventInputEnvelope
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
  }

  export type usersUpdateOneWithoutEventsNestedInput = {
    create?: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEventsInput
    upsert?: usersUpsertWithoutEventsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEventsInput, usersUpdateWithoutEventsInput>, usersUncheckedUpdateWithoutEventsInput>
  }

  export type AddressUpdateOneWithoutEventNestedInput = {
    create?: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEventInput
    upsert?: AddressUpsertWithoutEventInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEventInput, AddressUpdateWithoutEventInput>, AddressUncheckedUpdateWithoutEventInput>
  }

  export type eventServicesUpdateManyWithoutEventNestedInput = {
    create?: XOR<eventServicesCreateWithoutEventInput, eventServicesUncheckedCreateWithoutEventInput> | eventServicesCreateWithoutEventInput[] | eventServicesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutEventInput | eventServicesCreateOrConnectWithoutEventInput[]
    upsert?: eventServicesUpsertWithWhereUniqueWithoutEventInput | eventServicesUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: eventServicesCreateManyEventInputEnvelope
    set?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    disconnect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    delete?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    update?: eventServicesUpdateWithWhereUniqueWithoutEventInput | eventServicesUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: eventServicesUpdateManyWithWhereWithoutEventInput | eventServicesUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: eventServicesScalarWhereInput | eventServicesScalarWhereInput[]
  }

  export type paymentsUpdateManyWithoutEventNestedInput = {
    create?: XOR<paymentsCreateWithoutEventInput, paymentsUncheckedCreateWithoutEventInput> | paymentsCreateWithoutEventInput[] | paymentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutEventInput | paymentsCreateOrConnectWithoutEventInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutEventInput | paymentsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: paymentsCreateManyEventInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutEventInput | paymentsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutEventInput | paymentsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type support_requestsUpdateManyWithoutEventNestedInput = {
    create?: XOR<support_requestsCreateWithoutEventInput, support_requestsUncheckedCreateWithoutEventInput> | support_requestsCreateWithoutEventInput[] | support_requestsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutEventInput | support_requestsCreateOrConnectWithoutEventInput[]
    upsert?: support_requestsUpsertWithWhereUniqueWithoutEventInput | support_requestsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: support_requestsCreateManyEventInputEnvelope
    set?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    disconnect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    delete?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    update?: support_requestsUpdateWithWhereUniqueWithoutEventInput | support_requestsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: support_requestsUpdateManyWithWhereWithoutEventInput | support_requestsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: support_requestsScalarWhereInput | support_requestsScalarWhereInput[]
  }

  export type eventServicesUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<eventServicesCreateWithoutEventInput, eventServicesUncheckedCreateWithoutEventInput> | eventServicesCreateWithoutEventInput[] | eventServicesUncheckedCreateWithoutEventInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutEventInput | eventServicesCreateOrConnectWithoutEventInput[]
    upsert?: eventServicesUpsertWithWhereUniqueWithoutEventInput | eventServicesUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: eventServicesCreateManyEventInputEnvelope
    set?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    disconnect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    delete?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    update?: eventServicesUpdateWithWhereUniqueWithoutEventInput | eventServicesUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: eventServicesUpdateManyWithWhereWithoutEventInput | eventServicesUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: eventServicesScalarWhereInput | eventServicesScalarWhereInput[]
  }

  export type paymentsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<paymentsCreateWithoutEventInput, paymentsUncheckedCreateWithoutEventInput> | paymentsCreateWithoutEventInput[] | paymentsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: paymentsCreateOrConnectWithoutEventInput | paymentsCreateOrConnectWithoutEventInput[]
    upsert?: paymentsUpsertWithWhereUniqueWithoutEventInput | paymentsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: paymentsCreateManyEventInputEnvelope
    set?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    disconnect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    delete?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    connect?: paymentsWhereUniqueInput | paymentsWhereUniqueInput[]
    update?: paymentsUpdateWithWhereUniqueWithoutEventInput | paymentsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: paymentsUpdateManyWithWhereWithoutEventInput | paymentsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
  }

  export type support_requestsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<support_requestsCreateWithoutEventInput, support_requestsUncheckedCreateWithoutEventInput> | support_requestsCreateWithoutEventInput[] | support_requestsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: support_requestsCreateOrConnectWithoutEventInput | support_requestsCreateOrConnectWithoutEventInput[]
    upsert?: support_requestsUpsertWithWhereUniqueWithoutEventInput | support_requestsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: support_requestsCreateManyEventInputEnvelope
    set?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    disconnect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    delete?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    connect?: support_requestsWhereUniqueInput | support_requestsWhereUniqueInput[]
    update?: support_requestsUpdateWithWhereUniqueWithoutEventInput | support_requestsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: support_requestsUpdateManyWithWhereWithoutEventInput | support_requestsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: support_requestsScalarWhereInput | support_requestsScalarWhereInput[]
  }

  export type eventServicesCreateNestedManyWithoutServiceInput = {
    create?: XOR<eventServicesCreateWithoutServiceInput, eventServicesUncheckedCreateWithoutServiceInput> | eventServicesCreateWithoutServiceInput[] | eventServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutServiceInput | eventServicesCreateOrConnectWithoutServiceInput[]
    createMany?: eventServicesCreateManyServiceInputEnvelope
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
  }

  export type eventServicesUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<eventServicesCreateWithoutServiceInput, eventServicesUncheckedCreateWithoutServiceInput> | eventServicesCreateWithoutServiceInput[] | eventServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutServiceInput | eventServicesCreateOrConnectWithoutServiceInput[]
    createMany?: eventServicesCreateManyServiceInputEnvelope
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type eventServicesUpdateManyWithoutServiceNestedInput = {
    create?: XOR<eventServicesCreateWithoutServiceInput, eventServicesUncheckedCreateWithoutServiceInput> | eventServicesCreateWithoutServiceInput[] | eventServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutServiceInput | eventServicesCreateOrConnectWithoutServiceInput[]
    upsert?: eventServicesUpsertWithWhereUniqueWithoutServiceInput | eventServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: eventServicesCreateManyServiceInputEnvelope
    set?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    disconnect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    delete?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    update?: eventServicesUpdateWithWhereUniqueWithoutServiceInput | eventServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: eventServicesUpdateManyWithWhereWithoutServiceInput | eventServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: eventServicesScalarWhereInput | eventServicesScalarWhereInput[]
  }

  export type eventServicesUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<eventServicesCreateWithoutServiceInput, eventServicesUncheckedCreateWithoutServiceInput> | eventServicesCreateWithoutServiceInput[] | eventServicesUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: eventServicesCreateOrConnectWithoutServiceInput | eventServicesCreateOrConnectWithoutServiceInput[]
    upsert?: eventServicesUpsertWithWhereUniqueWithoutServiceInput | eventServicesUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: eventServicesCreateManyServiceInputEnvelope
    set?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    disconnect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    delete?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    connect?: eventServicesWhereUniqueInput | eventServicesWhereUniqueInput[]
    update?: eventServicesUpdateWithWhereUniqueWithoutServiceInput | eventServicesUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: eventServicesUpdateManyWithWhereWithoutServiceInput | eventServicesUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: eventServicesScalarWhereInput | eventServicesScalarWhereInput[]
  }

  export type eventsCreateNestedOneWithoutEventServicesInput = {
    create?: XOR<eventsCreateWithoutEventServicesInput, eventsUncheckedCreateWithoutEventServicesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutEventServicesInput
    connect?: eventsWhereUniqueInput
  }

  export type servicesCreateNestedOneWithoutEventServicesInput = {
    create?: XOR<servicesCreateWithoutEventServicesInput, servicesUncheckedCreateWithoutEventServicesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutEventServicesInput
    connect?: servicesWhereUniqueInput
  }

  export type eventsUpdateOneRequiredWithoutEventServicesNestedInput = {
    create?: XOR<eventsCreateWithoutEventServicesInput, eventsUncheckedCreateWithoutEventServicesInput>
    connectOrCreate?: eventsCreateOrConnectWithoutEventServicesInput
    upsert?: eventsUpsertWithoutEventServicesInput
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutEventServicesInput, eventsUpdateWithoutEventServicesInput>, eventsUncheckedUpdateWithoutEventServicesInput>
  }

  export type servicesUpdateOneRequiredWithoutEventServicesNestedInput = {
    create?: XOR<servicesCreateWithoutEventServicesInput, servicesUncheckedCreateWithoutEventServicesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutEventServicesInput
    upsert?: servicesUpsertWithoutEventServicesInput
    connect?: servicesWhereUniqueInput
    update?: XOR<XOR<servicesUpdateToOneWithWhereWithoutEventServicesInput, servicesUpdateWithoutEventServicesInput>, servicesUncheckedUpdateWithoutEventServicesInput>
  }

  export type eventsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<eventsCreateWithoutPaymentsInput, eventsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutPaymentsInput
    connect?: eventsWhereUniqueInput
  }

  export type eventsUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<eventsCreateWithoutPaymentsInput, eventsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutPaymentsInput
    upsert?: eventsUpsertWithoutPaymentsInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutPaymentsInput, eventsUpdateWithoutPaymentsInput>, eventsUncheckedUpdateWithoutPaymentsInput>
  }

  export type usersCreateNestedOneWithoutSupport_requestsInput = {
    create?: XOR<usersCreateWithoutSupport_requestsInput, usersUncheckedCreateWithoutSupport_requestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSupport_requestsInput
    connect?: usersWhereUniqueInput
  }

  export type eventsCreateNestedOneWithoutSupport_requestsInput = {
    create?: XOR<eventsCreateWithoutSupport_requestsInput, eventsUncheckedCreateWithoutSupport_requestsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutSupport_requestsInput
    connect?: eventsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutSupport_requestsNestedInput = {
    create?: XOR<usersCreateWithoutSupport_requestsInput, usersUncheckedCreateWithoutSupport_requestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSupport_requestsInput
    upsert?: usersUpsertWithoutSupport_requestsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSupport_requestsInput, usersUpdateWithoutSupport_requestsInput>, usersUncheckedUpdateWithoutSupport_requestsInput>
  }

  export type eventsUpdateOneWithoutSupport_requestsNestedInput = {
    create?: XOR<eventsCreateWithoutSupport_requestsInput, eventsUncheckedCreateWithoutSupport_requestsInput>
    connectOrCreate?: eventsCreateOrConnectWithoutSupport_requestsInput
    upsert?: eventsUpsertWithoutSupport_requestsInput
    disconnect?: eventsWhereInput | boolean
    delete?: eventsWhereInput | boolean
    connect?: eventsWhereUniqueInput
    update?: XOR<XOR<eventsUpdateToOneWithWhereWithoutSupport_requestsInput, eventsUpdateWithoutSupport_requestsInput>, eventsUncheckedUpdateWithoutSupport_requestsInput>
  }

  export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    connect?: usersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotificationsInput
    upsert?: usersUpsertWithoutNotificationsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotificationsInput, usersUpdateWithoutNotificationsInput>, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersCreateNestedOneWithoutLogsInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutLogsNestedInput = {
    create?: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogsInput
    upsert?: usersUpsertWithoutLogsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLogsInput, usersUpdateWithoutLogsInput>, usersUncheckedUpdateWithoutLogsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type eventsCreateWithoutUserInput = {
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    address?: AddressCreateNestedOneWithoutEventInput
    eventServices?: eventServicesCreateNestedManyWithoutEventInput
    payments?: paymentsCreateNestedManyWithoutEventInput
    support_requests?: support_requestsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutUserInput = {
    id?: number
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    eventServices?: eventServicesUncheckedCreateNestedManyWithoutEventInput
    payments?: paymentsUncheckedCreateNestedManyWithoutEventInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutUserInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutUserInput, eventsUncheckedCreateWithoutUserInput>
  }

  export type eventsCreateManyUserInputEnvelope = {
    data: eventsCreateManyUserInput | eventsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUserInput = {
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
    event?: eventsCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    Address_id?: number
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
    event?: eventsUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type logsCreateWithoutUserInput = {
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type logsUncheckedCreateWithoutUserInput = {
    id?: number
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type logsCreateOrConnectWithoutUserInput = {
    where: logsWhereUniqueInput
    create: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput>
  }

  export type logsCreateManyUserInputEnvelope = {
    data: logsCreateManyUserInput | logsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUserInput = {
    title: string
    message: string
    type?: string | null
    is_read?: boolean
    email_sent?: boolean
    created_at?: Date | string
  }

  export type notificationsUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    type?: string | null
    is_read?: boolean
    email_sent?: boolean
    created_at?: Date | string
  }

  export type notificationsCreateOrConnectWithoutUserInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput>
  }

  export type notificationsCreateManyUserInputEnvelope = {
    data: notificationsCreateManyUserInput | notificationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type support_requestsCreateWithoutUserInput = {
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
    event?: eventsCreateNestedOneWithoutSupport_requestsInput
  }

  export type support_requestsUncheckedCreateWithoutUserInput = {
    id?: number
    event_id?: number | null
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type support_requestsCreateOrConnectWithoutUserInput = {
    where: support_requestsWhereUniqueInput
    create: XOR<support_requestsCreateWithoutUserInput, support_requestsUncheckedCreateWithoutUserInput>
  }

  export type support_requestsCreateManyUserInputEnvelope = {
    data: support_requestsCreateManyUserInput | support_requestsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type eventsUpsertWithWhereUniqueWithoutUserInput = {
    where: eventsWhereUniqueInput
    update: XOR<eventsUpdateWithoutUserInput, eventsUncheckedUpdateWithoutUserInput>
    create: XOR<eventsCreateWithoutUserInput, eventsUncheckedCreateWithoutUserInput>
  }

  export type eventsUpdateWithWhereUniqueWithoutUserInput = {
    where: eventsWhereUniqueInput
    data: XOR<eventsUpdateWithoutUserInput, eventsUncheckedUpdateWithoutUserInput>
  }

  export type eventsUpdateManyWithWhereWithoutUserInput = {
    where: eventsScalarWhereInput
    data: XOR<eventsUpdateManyMutationInput, eventsUncheckedUpdateManyWithoutUserInput>
  }

  export type eventsScalarWhereInput = {
    AND?: eventsScalarWhereInput | eventsScalarWhereInput[]
    OR?: eventsScalarWhereInput[]
    NOT?: eventsScalarWhereInput | eventsScalarWhereInput[]
    id?: IntFilter<"events"> | number
    user_id?: IntNullableFilter<"events"> | number | null
    address_id?: IntNullableFilter<"events"> | number | null
    title?: StringFilter<"events"> | string
    type?: StringNullableFilter<"events"> | string | null
    date?: DateTimeFilter<"events"> | Date | string
    status?: StringFilter<"events"> | string
    created_at?: DateTimeFilter<"events"> | Date | string
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    Address_id?: IntFilter<"Address"> | number
    user_id?: IntNullableFilter<"Address"> | number | null
    event_id?: IntNullableFilter<"Address"> | number | null
    street?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    postal_code?: StringNullableFilter<"Address"> | string | null
    latitude?: FloatNullableFilter<"Address"> | number | null
    longitude?: FloatNullableFilter<"Address"> | number | null
    created_at?: DateTimeFilter<"Address"> | Date | string
  }

  export type logsUpsertWithWhereUniqueWithoutUserInput = {
    where: logsWhereUniqueInput
    update: XOR<logsUpdateWithoutUserInput, logsUncheckedUpdateWithoutUserInput>
    create: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput>
  }

  export type logsUpdateWithWhereUniqueWithoutUserInput = {
    where: logsWhereUniqueInput
    data: XOR<logsUpdateWithoutUserInput, logsUncheckedUpdateWithoutUserInput>
  }

  export type logsUpdateManyWithWhereWithoutUserInput = {
    where: logsScalarWhereInput
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyWithoutUserInput>
  }

  export type logsScalarWhereInput = {
    AND?: logsScalarWhereInput | logsScalarWhereInput[]
    OR?: logsScalarWhereInput[]
    NOT?: logsScalarWhereInput | logsScalarWhereInput[]
    id?: IntFilter<"logs"> | number
    user_id?: IntNullableFilter<"logs"> | number | null
    action?: StringNullableFilter<"logs"> | string | null
    details?: JsonNullableFilter<"logs">
    created_at?: DateTimeFilter<"logs"> | Date | string
  }

  export type notificationsUpsertWithWhereUniqueWithoutUserInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUserInput, notificationsUncheckedUpdateWithoutUserInput>
    create: XOR<notificationsCreateWithoutUserInput, notificationsUncheckedCreateWithoutUserInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUserInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUserInput, notificationsUncheckedUpdateWithoutUserInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUserInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUserInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntNullableFilter<"notifications"> | number | null
    title?: StringFilter<"notifications"> | string
    message?: StringFilter<"notifications"> | string
    type?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolFilter<"notifications"> | boolean
    email_sent?: BoolFilter<"notifications"> | boolean
    created_at?: DateTimeFilter<"notifications"> | Date | string
  }

  export type support_requestsUpsertWithWhereUniqueWithoutUserInput = {
    where: support_requestsWhereUniqueInput
    update: XOR<support_requestsUpdateWithoutUserInput, support_requestsUncheckedUpdateWithoutUserInput>
    create: XOR<support_requestsCreateWithoutUserInput, support_requestsUncheckedCreateWithoutUserInput>
  }

  export type support_requestsUpdateWithWhereUniqueWithoutUserInput = {
    where: support_requestsWhereUniqueInput
    data: XOR<support_requestsUpdateWithoutUserInput, support_requestsUncheckedUpdateWithoutUserInput>
  }

  export type support_requestsUpdateManyWithWhereWithoutUserInput = {
    where: support_requestsScalarWhereInput
    data: XOR<support_requestsUpdateManyMutationInput, support_requestsUncheckedUpdateManyWithoutUserInput>
  }

  export type support_requestsScalarWhereInput = {
    AND?: support_requestsScalarWhereInput | support_requestsScalarWhereInput[]
    OR?: support_requestsScalarWhereInput[]
    NOT?: support_requestsScalarWhereInput | support_requestsScalarWhereInput[]
    id?: IntFilter<"support_requests"> | number
    user_id?: IntNullableFilter<"support_requests"> | number | null
    event_id?: IntNullableFilter<"support_requests"> | number | null
    subject?: StringFilter<"support_requests"> | string
    description?: StringFilter<"support_requests"> | string
    status?: StringFilter<"support_requests"> | string
    created_at?: DateTimeFilter<"support_requests"> | Date | string
    resolved_at?: DateTimeNullableFilter<"support_requests"> | Date | string | null
  }

  export type usersCreateWithoutAddressesInput = {
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsCreateNestedManyWithoutUserInput
    logs?: logsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    support_requests?: support_requestsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutAddressesInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutUserInput
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutAddressesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
  }

  export type eventsCreateWithoutAddressInput = {
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutEventsInput
    eventServices?: eventServicesCreateNestedManyWithoutEventInput
    payments?: paymentsCreateNestedManyWithoutEventInput
    support_requests?: support_requestsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutAddressInput = {
    id?: number
    user_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    eventServices?: eventServicesUncheckedCreateNestedManyWithoutEventInput
    payments?: paymentsUncheckedCreateNestedManyWithoutEventInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutAddressInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutAddressInput, eventsUncheckedCreateWithoutAddressInput>
  }

  export type usersUpsertWithoutAddressesInput = {
    update: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type usersUpdateWithoutAddressesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUpdateManyWithoutUserNestedInput
    logs?: logsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAddressesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutUserNestedInput
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type eventsUpsertWithoutAddressInput = {
    update: XOR<eventsUpdateWithoutAddressInput, eventsUncheckedUpdateWithoutAddressInput>
    create: XOR<eventsCreateWithoutAddressInput, eventsUncheckedCreateWithoutAddressInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutAddressInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutAddressInput, eventsUncheckedUpdateWithoutAddressInput>
  }

  export type eventsUpdateWithoutAddressInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEventsNestedInput
    eventServices?: eventServicesUpdateManyWithoutEventNestedInput
    payments?: paymentsUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUncheckedUpdateManyWithoutEventNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type usersCreateWithoutEventsInput = {
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    logs?: logsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    support_requests?: support_requestsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutEventsInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutEventsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
  }

  export type AddressCreateWithoutEventInput = {
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateWithoutEventInput = {
    Address_id?: number
    user_id?: number | null
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
  }

  export type AddressCreateOrConnectWithoutEventInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
  }

  export type eventServicesCreateWithoutEventInput = {
    quantity?: number | null
    service: servicesCreateNestedOneWithoutEventServicesInput
  }

  export type eventServicesUncheckedCreateWithoutEventInput = {
    service_id: number
    quantity?: number | null
  }

  export type eventServicesCreateOrConnectWithoutEventInput = {
    where: eventServicesWhereUniqueInput
    create: XOR<eventServicesCreateWithoutEventInput, eventServicesUncheckedCreateWithoutEventInput>
  }

  export type eventServicesCreateManyEventInputEnvelope = {
    data: eventServicesCreateManyEventInput | eventServicesCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type paymentsCreateWithoutEventInput = {
    amount: Decimal | DecimalJsLike | number | string
    status?: string
    payment_method?: string | null
    created_at?: Date | string
  }

  export type paymentsUncheckedCreateWithoutEventInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    status?: string
    payment_method?: string | null
    created_at?: Date | string
  }

  export type paymentsCreateOrConnectWithoutEventInput = {
    where: paymentsWhereUniqueInput
    create: XOR<paymentsCreateWithoutEventInput, paymentsUncheckedCreateWithoutEventInput>
  }

  export type paymentsCreateManyEventInputEnvelope = {
    data: paymentsCreateManyEventInput | paymentsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type support_requestsCreateWithoutEventInput = {
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
    user?: usersCreateNestedOneWithoutSupport_requestsInput
  }

  export type support_requestsUncheckedCreateWithoutEventInput = {
    id?: number
    user_id?: number | null
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type support_requestsCreateOrConnectWithoutEventInput = {
    where: support_requestsWhereUniqueInput
    create: XOR<support_requestsCreateWithoutEventInput, support_requestsUncheckedCreateWithoutEventInput>
  }

  export type support_requestsCreateManyEventInputEnvelope = {
    data: support_requestsCreateManyEventInput | support_requestsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutEventsInput = {
    update: XOR<usersUpdateWithoutEventsInput, usersUncheckedUpdateWithoutEventsInput>
    create: XOR<usersCreateWithoutEventsInput, usersUncheckedCreateWithoutEventsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEventsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEventsInput, usersUncheckedUpdateWithoutEventsInput>
  }

  export type usersUpdateWithoutEventsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    logs?: logsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutEventsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressUpsertWithoutEventInput = {
    update: XOR<AddressUpdateWithoutEventInput, AddressUncheckedUpdateWithoutEventInput>
    create: XOR<AddressCreateWithoutEventInput, AddressUncheckedCreateWithoutEventInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutEventInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutEventInput, AddressUncheckedUpdateWithoutEventInput>
  }

  export type AddressUpdateWithoutEventInput = {
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateWithoutEventInput = {
    Address_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventServicesUpsertWithWhereUniqueWithoutEventInput = {
    where: eventServicesWhereUniqueInput
    update: XOR<eventServicesUpdateWithoutEventInput, eventServicesUncheckedUpdateWithoutEventInput>
    create: XOR<eventServicesCreateWithoutEventInput, eventServicesUncheckedCreateWithoutEventInput>
  }

  export type eventServicesUpdateWithWhereUniqueWithoutEventInput = {
    where: eventServicesWhereUniqueInput
    data: XOR<eventServicesUpdateWithoutEventInput, eventServicesUncheckedUpdateWithoutEventInput>
  }

  export type eventServicesUpdateManyWithWhereWithoutEventInput = {
    where: eventServicesScalarWhereInput
    data: XOR<eventServicesUpdateManyMutationInput, eventServicesUncheckedUpdateManyWithoutEventInput>
  }

  export type eventServicesScalarWhereInput = {
    AND?: eventServicesScalarWhereInput | eventServicesScalarWhereInput[]
    OR?: eventServicesScalarWhereInput[]
    NOT?: eventServicesScalarWhereInput | eventServicesScalarWhereInput[]
    event_id?: IntFilter<"eventServices"> | number
    service_id?: IntFilter<"eventServices"> | number
    quantity?: IntNullableFilter<"eventServices"> | number | null
  }

  export type paymentsUpsertWithWhereUniqueWithoutEventInput = {
    where: paymentsWhereUniqueInput
    update: XOR<paymentsUpdateWithoutEventInput, paymentsUncheckedUpdateWithoutEventInput>
    create: XOR<paymentsCreateWithoutEventInput, paymentsUncheckedCreateWithoutEventInput>
  }

  export type paymentsUpdateWithWhereUniqueWithoutEventInput = {
    where: paymentsWhereUniqueInput
    data: XOR<paymentsUpdateWithoutEventInput, paymentsUncheckedUpdateWithoutEventInput>
  }

  export type paymentsUpdateManyWithWhereWithoutEventInput = {
    where: paymentsScalarWhereInput
    data: XOR<paymentsUpdateManyMutationInput, paymentsUncheckedUpdateManyWithoutEventInput>
  }

  export type paymentsScalarWhereInput = {
    AND?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    OR?: paymentsScalarWhereInput[]
    NOT?: paymentsScalarWhereInput | paymentsScalarWhereInput[]
    id?: IntFilter<"payments"> | number
    event_id?: IntNullableFilter<"payments"> | number | null
    amount?: DecimalFilter<"payments"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"payments"> | string
    payment_method?: StringNullableFilter<"payments"> | string | null
    created_at?: DateTimeFilter<"payments"> | Date | string
  }

  export type support_requestsUpsertWithWhereUniqueWithoutEventInput = {
    where: support_requestsWhereUniqueInput
    update: XOR<support_requestsUpdateWithoutEventInput, support_requestsUncheckedUpdateWithoutEventInput>
    create: XOR<support_requestsCreateWithoutEventInput, support_requestsUncheckedCreateWithoutEventInput>
  }

  export type support_requestsUpdateWithWhereUniqueWithoutEventInput = {
    where: support_requestsWhereUniqueInput
    data: XOR<support_requestsUpdateWithoutEventInput, support_requestsUncheckedUpdateWithoutEventInput>
  }

  export type support_requestsUpdateManyWithWhereWithoutEventInput = {
    where: support_requestsScalarWhereInput
    data: XOR<support_requestsUpdateManyMutationInput, support_requestsUncheckedUpdateManyWithoutEventInput>
  }

  export type eventServicesCreateWithoutServiceInput = {
    quantity?: number | null
    event: eventsCreateNestedOneWithoutEventServicesInput
  }

  export type eventServicesUncheckedCreateWithoutServiceInput = {
    event_id: number
    quantity?: number | null
  }

  export type eventServicesCreateOrConnectWithoutServiceInput = {
    where: eventServicesWhereUniqueInput
    create: XOR<eventServicesCreateWithoutServiceInput, eventServicesUncheckedCreateWithoutServiceInput>
  }

  export type eventServicesCreateManyServiceInputEnvelope = {
    data: eventServicesCreateManyServiceInput | eventServicesCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type eventServicesUpsertWithWhereUniqueWithoutServiceInput = {
    where: eventServicesWhereUniqueInput
    update: XOR<eventServicesUpdateWithoutServiceInput, eventServicesUncheckedUpdateWithoutServiceInput>
    create: XOR<eventServicesCreateWithoutServiceInput, eventServicesUncheckedCreateWithoutServiceInput>
  }

  export type eventServicesUpdateWithWhereUniqueWithoutServiceInput = {
    where: eventServicesWhereUniqueInput
    data: XOR<eventServicesUpdateWithoutServiceInput, eventServicesUncheckedUpdateWithoutServiceInput>
  }

  export type eventServicesUpdateManyWithWhereWithoutServiceInput = {
    where: eventServicesScalarWhereInput
    data: XOR<eventServicesUpdateManyMutationInput, eventServicesUncheckedUpdateManyWithoutServiceInput>
  }

  export type eventsCreateWithoutEventServicesInput = {
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutEventsInput
    address?: AddressCreateNestedOneWithoutEventInput
    payments?: paymentsCreateNestedManyWithoutEventInput
    support_requests?: support_requestsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutEventServicesInput = {
    id?: number
    user_id?: number | null
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    payments?: paymentsUncheckedCreateNestedManyWithoutEventInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutEventServicesInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutEventServicesInput, eventsUncheckedCreateWithoutEventServicesInput>
  }

  export type servicesCreateWithoutEventServicesInput = {
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    category?: string | null
    created_at?: Date | string
  }

  export type servicesUncheckedCreateWithoutEventServicesInput = {
    id?: number
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    category?: string | null
    created_at?: Date | string
  }

  export type servicesCreateOrConnectWithoutEventServicesInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutEventServicesInput, servicesUncheckedCreateWithoutEventServicesInput>
  }

  export type eventsUpsertWithoutEventServicesInput = {
    update: XOR<eventsUpdateWithoutEventServicesInput, eventsUncheckedUpdateWithoutEventServicesInput>
    create: XOR<eventsCreateWithoutEventServicesInput, eventsUncheckedCreateWithoutEventServicesInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutEventServicesInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutEventServicesInput, eventsUncheckedUpdateWithoutEventServicesInput>
  }

  export type eventsUpdateWithoutEventServicesInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEventsNestedInput
    address?: AddressUpdateOneWithoutEventNestedInput
    payments?: paymentsUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutEventServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: paymentsUncheckedUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type servicesUpsertWithoutEventServicesInput = {
    update: XOR<servicesUpdateWithoutEventServicesInput, servicesUncheckedUpdateWithoutEventServicesInput>
    create: XOR<servicesCreateWithoutEventServicesInput, servicesUncheckedCreateWithoutEventServicesInput>
    where?: servicesWhereInput
  }

  export type servicesUpdateToOneWithWhereWithoutEventServicesInput = {
    where?: servicesWhereInput
    data: XOR<servicesUpdateWithoutEventServicesInput, servicesUncheckedUpdateWithoutEventServicesInput>
  }

  export type servicesUpdateWithoutEventServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type servicesUncheckedUpdateWithoutEventServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventsCreateWithoutPaymentsInput = {
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutEventsInput
    address?: AddressCreateNestedOneWithoutEventInput
    eventServices?: eventServicesCreateNestedManyWithoutEventInput
    support_requests?: support_requestsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    user_id?: number | null
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    eventServices?: eventServicesUncheckedCreateNestedManyWithoutEventInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutPaymentsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutPaymentsInput, eventsUncheckedCreateWithoutPaymentsInput>
  }

  export type eventsUpsertWithoutPaymentsInput = {
    update: XOR<eventsUpdateWithoutPaymentsInput, eventsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<eventsCreateWithoutPaymentsInput, eventsUncheckedCreateWithoutPaymentsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutPaymentsInput, eventsUncheckedUpdateWithoutPaymentsInput>
  }

  export type eventsUpdateWithoutPaymentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEventsNestedInput
    address?: AddressUpdateOneWithoutEventNestedInput
    eventServices?: eventServicesUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUncheckedUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type usersCreateWithoutSupport_requestsInput = {
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    logs?: logsCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSupport_requestsInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSupport_requestsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSupport_requestsInput, usersUncheckedCreateWithoutSupport_requestsInput>
  }

  export type eventsCreateWithoutSupport_requestsInput = {
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutEventsInput
    address?: AddressCreateNestedOneWithoutEventInput
    eventServices?: eventServicesCreateNestedManyWithoutEventInput
    payments?: paymentsCreateNestedManyWithoutEventInput
  }

  export type eventsUncheckedCreateWithoutSupport_requestsInput = {
    id?: number
    user_id?: number | null
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
    eventServices?: eventServicesUncheckedCreateNestedManyWithoutEventInput
    payments?: paymentsUncheckedCreateNestedManyWithoutEventInput
  }

  export type eventsCreateOrConnectWithoutSupport_requestsInput = {
    where: eventsWhereUniqueInput
    create: XOR<eventsCreateWithoutSupport_requestsInput, eventsUncheckedCreateWithoutSupport_requestsInput>
  }

  export type usersUpsertWithoutSupport_requestsInput = {
    update: XOR<usersUpdateWithoutSupport_requestsInput, usersUncheckedUpdateWithoutSupport_requestsInput>
    create: XOR<usersCreateWithoutSupport_requestsInput, usersUncheckedCreateWithoutSupport_requestsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSupport_requestsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSupport_requestsInput, usersUncheckedUpdateWithoutSupport_requestsInput>
  }

  export type usersUpdateWithoutSupport_requestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    logs?: logsUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSupport_requestsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type eventsUpsertWithoutSupport_requestsInput = {
    update: XOR<eventsUpdateWithoutSupport_requestsInput, eventsUncheckedUpdateWithoutSupport_requestsInput>
    create: XOR<eventsCreateWithoutSupport_requestsInput, eventsUncheckedCreateWithoutSupport_requestsInput>
    where?: eventsWhereInput
  }

  export type eventsUpdateToOneWithWhereWithoutSupport_requestsInput = {
    where?: eventsWhereInput
    data: XOR<eventsUpdateWithoutSupport_requestsInput, eventsUncheckedUpdateWithoutSupport_requestsInput>
  }

  export type eventsUpdateWithoutSupport_requestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutEventsNestedInput
    address?: AddressUpdateOneWithoutEventNestedInput
    eventServices?: eventServicesUpdateManyWithoutEventNestedInput
    payments?: paymentsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutSupport_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUncheckedUpdateManyWithoutEventNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type usersCreateWithoutNotificationsInput = {
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    logs?: logsCreateNestedManyWithoutUserInput
    support_requests?: support_requestsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutNotificationsInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    logs?: logsUncheckedCreateNestedManyWithoutUserInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutNotificationsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
  }

  export type usersUpsertWithoutNotificationsInput = {
    update: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<usersCreateWithoutNotificationsInput, usersUncheckedCreateWithoutNotificationsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotificationsInput, usersUncheckedUpdateWithoutNotificationsInput>
  }

  export type usersUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    logs?: logsUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutNotificationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    logs?: logsUncheckedUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutLogsInput = {
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    notifications?: notificationsCreateNestedManyWithoutUserInput
    support_requests?: support_requestsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutLogsInput = {
    user_id?: number
    email: string
    password: string
    user_name?: string | null
    phone?: string | null
    role?: string
    created_at?: Date | string
    events?: eventsUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    notifications?: notificationsUncheckedCreateNestedManyWithoutUserInput
    support_requests?: support_requestsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutLogsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
  }

  export type usersUpsertWithoutLogsInput = {
    update: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
    create: XOR<usersCreateWithoutLogsInput, usersUncheckedCreateWithoutLogsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLogsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLogsInput, usersUncheckedUpdateWithoutLogsInput>
  }

  export type usersUpdateWithoutLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    notifications?: notificationsUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutLogsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: eventsUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    notifications?: notificationsUncheckedUpdateManyWithoutUserNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type eventsCreateManyUserInput = {
    id?: number
    address_id?: number | null
    title: string
    type?: string | null
    date: Date | string
    status?: string
    created_at?: Date | string
  }

  export type AddressCreateManyUserInput = {
    Address_id?: number
    event_id?: number | null
    street?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    postal_code?: string | null
    latitude?: number | null
    longitude?: number | null
    created_at?: Date | string
  }

  export type logsCreateManyUserInput = {
    id?: number
    action?: string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type notificationsCreateManyUserInput = {
    id?: number
    title: string
    message: string
    type?: string | null
    is_read?: boolean
    email_sent?: boolean
    created_at?: Date | string
  }

  export type support_requestsCreateManyUserInput = {
    id?: number
    event_id?: number | null
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type eventsUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutEventNestedInput
    eventServices?: eventServicesUpdateManyWithoutEventNestedInput
    payments?: paymentsUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    eventServices?: eventServicesUncheckedUpdateManyWithoutEventNestedInput
    payments?: paymentsUncheckedUpdateManyWithoutEventNestedInput
    support_requests?: support_requestsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type eventsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventsUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    Address_id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: eventsUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    Address_id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUpdateWithoutUserInput = {
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificationsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: BoolFieldUpdateOperationsInput | boolean
    email_sent?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type support_requestsUpdateWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: eventsUpdateOneWithoutSupport_requestsNestedInput
  }

  export type support_requestsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type support_requestsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventServicesCreateManyEventInput = {
    service_id: number
    quantity?: number | null
  }

  export type paymentsCreateManyEventInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    status?: string
    payment_method?: string | null
    created_at?: Date | string
  }

  export type support_requestsCreateManyEventInput = {
    id?: number
    user_id?: number | null
    subject: string
    description: string
    status?: string
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type eventServicesUpdateWithoutEventInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    service?: servicesUpdateOneRequiredWithoutEventServicesNestedInput
  }

  export type eventServicesUncheckedUpdateWithoutEventInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventServicesUncheckedUpdateManyWithoutEventInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type paymentsUpdateWithoutEventInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type support_requestsUpdateWithoutEventInput = {
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneWithoutSupport_requestsNestedInput
  }

  export type support_requestsUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type support_requestsUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type eventServicesCreateManyServiceInput = {
    event_id: number
    quantity?: number | null
  }

  export type eventServicesUpdateWithoutServiceInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    event?: eventsUpdateOneRequiredWithoutEventServicesNestedInput
  }

  export type eventServicesUncheckedUpdateWithoutServiceInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type eventServicesUncheckedUpdateManyWithoutServiceInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
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