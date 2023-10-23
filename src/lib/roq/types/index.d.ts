/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model applicant
 *
 */
export type applicant = $Result.DefaultSelection<Prisma.$applicantPayload>;
/**
 * Model benefit
 *
 */
export type benefit = $Result.DefaultSelection<Prisma.$benefitPayload>;
/**
 * Model department
 *
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model job_posting
 *
 */
export type job_posting = $Result.DefaultSelection<Prisma.$job_postingPayload>;
/**
 * Model performance_review
 *
 */
export type performance_review = $Result.DefaultSelection<Prisma.$performance_reviewPayload>;
/**
 * Model position
 *
 */
export type position = $Result.DefaultSelection<Prisma.$positionPayload>;
/**
 * Model schedule
 *
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model training
 *
 */
export type training = $Result.DefaultSelection<Prisma.$trainingPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applicants
 * const applicants = await prisma.applicant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.applicant`: Exposes CRUD operations for the **applicant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   */
  get applicant(): Prisma.applicantDelegate<ExtArgs>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **benefit** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Benefits
   * const benefits = await prisma.benefit.findMany()
   * ```
   */
  get benefit(): Prisma.benefitDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
   * ```
   */
  get department(): Prisma.departmentDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.job_posting`: Exposes CRUD operations for the **job_posting** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Job_postings
   * const job_postings = await prisma.job_posting.findMany()
   * ```
   */
  get job_posting(): Prisma.job_postingDelegate<ExtArgs>;

  /**
   * `prisma.performance_review`: Exposes CRUD operations for the **performance_review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Performance_reviews
   * const performance_reviews = await prisma.performance_review.findMany()
   * ```
   */
  get performance_review(): Prisma.performance_reviewDelegate<ExtArgs>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **position** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Positions
   * const positions = await prisma.position.findMany()
   * ```
   */
  get position(): Prisma.positionDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schedules
   * const schedules = await prisma.schedule.findMany()
   * ```
   */
  get schedule(): Prisma.scheduleDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.training`: Exposes CRUD operations for the **training** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Trainings
   * const trainings = await prisma.training.findMany()
   * ```
   */
  get training(): Prisma.trainingDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    applicant: 'applicant';
    benefit: 'benefit';
    department: 'department';
    employee: 'employee';
    job_posting: 'job_posting';
    performance_review: 'performance_review';
    position: 'position';
    schedule: 'schedule';
    team: 'team';
    training: 'training';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'applicant'
        | 'benefit'
        | 'department'
        | 'employee'
        | 'job_posting'
        | 'performance_review'
        | 'position'
        | 'schedule'
        | 'team'
        | 'training'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      applicant: {
        payload: Prisma.$applicantPayload<ExtArgs>;
        fields: Prisma.applicantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.applicantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.applicantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          findFirst: {
            args: Prisma.applicantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.applicantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          findMany: {
            args: Prisma.applicantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>[];
          };
          create: {
            args: Prisma.applicantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          createMany: {
            args: Prisma.applicantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.applicantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          update: {
            args: Prisma.applicantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          deleteMany: {
            args: Prisma.applicantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.applicantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.applicantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplicant>;
          };
          groupBy: {
            args: Prisma.applicantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantGroupByOutputType>[];
          };
          count: {
            args: Prisma.applicantCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number;
          };
        };
      };
      benefit: {
        payload: Prisma.$benefitPayload<ExtArgs>;
        fields: Prisma.benefitFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.benefitFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.benefitFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>;
          };
          findFirst: {
            args: Prisma.benefitFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.benefitFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>;
          };
          findMany: {
            args: Prisma.benefitFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>[];
          };
          create: {
            args: Prisma.benefitCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>;
          };
          createMany: {
            args: Prisma.benefitCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.benefitDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>;
          };
          update: {
            args: Prisma.benefitUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>;
          };
          deleteMany: {
            args: Prisma.benefitDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.benefitUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.benefitUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$benefitPayload>;
          };
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBenefit>;
          };
          groupBy: {
            args: Prisma.benefitGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BenefitGroupByOutputType>[];
          };
          count: {
            args: Prisma.benefitCountArgs<ExtArgs>;
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number;
          };
        };
      };
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>;
        fields: Prisma.departmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[];
          };
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>;
          };
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDepartment>;
          };
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DepartmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>;
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      job_posting: {
        payload: Prisma.$job_postingPayload<ExtArgs>;
        fields: Prisma.job_postingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.job_postingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.job_postingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          findFirst: {
            args: Prisma.job_postingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.job_postingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          findMany: {
            args: Prisma.job_postingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>[];
          };
          create: {
            args: Prisma.job_postingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          createMany: {
            args: Prisma.job_postingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.job_postingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          update: {
            args: Prisma.job_postingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          deleteMany: {
            args: Prisma.job_postingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.job_postingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.job_postingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$job_postingPayload>;
          };
          aggregate: {
            args: Prisma.Job_postingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateJob_posting>;
          };
          groupBy: {
            args: Prisma.job_postingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Job_postingGroupByOutputType>[];
          };
          count: {
            args: Prisma.job_postingCountArgs<ExtArgs>;
            result: $Utils.Optional<Job_postingCountAggregateOutputType> | number;
          };
        };
      };
      performance_review: {
        payload: Prisma.$performance_reviewPayload<ExtArgs>;
        fields: Prisma.performance_reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.performance_reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.performance_reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findFirst: {
            args: Prisma.performance_reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.performance_reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          findMany: {
            args: Prisma.performance_reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>[];
          };
          create: {
            args: Prisma.performance_reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          createMany: {
            args: Prisma.performance_reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.performance_reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          update: {
            args: Prisma.performance_reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          deleteMany: {
            args: Prisma.performance_reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.performance_reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.performance_reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$performance_reviewPayload>;
          };
          aggregate: {
            args: Prisma.Performance_reviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePerformance_review>;
          };
          groupBy: {
            args: Prisma.performance_reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.performance_reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<Performance_reviewCountAggregateOutputType> | number;
          };
        };
      };
      position: {
        payload: Prisma.$positionPayload<ExtArgs>;
        fields: Prisma.positionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.positionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.positionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>;
          };
          findFirst: {
            args: Prisma.positionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.positionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>;
          };
          findMany: {
            args: Prisma.positionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>[];
          };
          create: {
            args: Prisma.positionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>;
          };
          createMany: {
            args: Prisma.positionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.positionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>;
          };
          update: {
            args: Prisma.positionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>;
          };
          deleteMany: {
            args: Prisma.positionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.positionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.positionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$positionPayload>;
          };
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePosition>;
          };
          groupBy: {
            args: Prisma.positionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PositionGroupByOutputType>[];
          };
          count: {
            args: Prisma.positionCountArgs<ExtArgs>;
            result: $Utils.Optional<PositionCountAggregateOutputType> | number;
          };
        };
      };
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>;
        fields: Prisma.scheduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[];
          };
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchedule>;
          };
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      training: {
        payload: Prisma.$trainingPayload<ExtArgs>;
        fields: Prisma.trainingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.trainingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.trainingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>;
          };
          findFirst: {
            args: Prisma.trainingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.trainingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>;
          };
          findMany: {
            args: Prisma.trainingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>[];
          };
          create: {
            args: Prisma.trainingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>;
          };
          createMany: {
            args: Prisma.trainingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.trainingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>;
          };
          update: {
            args: Prisma.trainingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>;
          };
          deleteMany: {
            args: Prisma.trainingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.trainingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.trainingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trainingPayload>;
          };
          aggregate: {
            args: Prisma.TrainingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTraining>;
          };
          groupBy: {
            args: Prisma.trainingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TrainingGroupByOutputType>[];
          };
          count: {
            args: Prisma.trainingCountArgs<ExtArgs>;
            result: $Utils.Optional<TrainingCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Job_postingCountOutputType
   */

  export type Job_postingCountOutputType = {
    applicant: number;
  };

  export type Job_postingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | Job_postingCountOutputTypeCountApplicantArgs;
  };

  // Custom InputTypes

  /**
   * Job_postingCountOutputType without action
   */
  export type Job_postingCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Job_postingCountOutputType
     */
    select?: Job_postingCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Job_postingCountOutputType without action
   */
  export type Job_postingCountOutputTypeCountApplicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicantWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applicant: number;
    employee: number;
    job_posting: number;
    team: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserCountOutputTypeCountApplicantArgs;
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
    job_posting?: boolean | UserCountOutputTypeCountJob_postingArgs;
    team?: boolean | UserCountOutputTypeCountTeamArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApplicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicantWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJob_postingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: job_postingWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  export type ApplicantMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_posting_id: string | null;
    resume: string | null;
    cover_letter: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicantMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_posting_id: string | null;
    resume: string | null;
    cover_letter: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicantCountAggregateOutputType = {
    id: number;
    user_id: number;
    job_posting_id: number;
    resume: number;
    cover_letter: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ApplicantMinAggregateInputType = {
    id?: true;
    user_id?: true;
    job_posting_id?: true;
    resume?: true;
    cover_letter?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicantMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    job_posting_id?: true;
    resume?: true;
    cover_letter?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicantCountAggregateInputType = {
    id?: true;
    user_id?: true;
    job_posting_id?: true;
    resume?: true;
    cover_letter?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicant to aggregate.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned applicants
     **/
    _count?: true | ApplicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicantMaxAggregateInputType;
  };

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>;
  };

  export type applicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithAggregationInput | applicantOrderByWithAggregationInput[];
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum;
    having?: applicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicantCountAggregateInputType | true;
    _min?: ApplicantMinAggregateInputType;
    _max?: ApplicantMaxAggregateInputType;
  };

  export type ApplicantGroupByOutputType = {
    id: string;
    user_id: string;
    job_posting_id: string;
    resume: string;
    cover_letter: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  type GetApplicantGroupByPayload<T extends applicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ApplicantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
          : GetScalarType<T[P], ApplicantGroupByOutputType[P]>;
      }
    >
  >;

  export type applicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        job_posting_id?: boolean;
        resume?: boolean;
        cover_letter?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        job_posting?: boolean | job_postingDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['applicant']
    >;

  export type applicantSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    job_posting_id?: boolean;
    resume?: boolean;
    cover_letter?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type applicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    job_posting?: boolean | job_postingDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $applicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'applicant';
    objects: {
      job_posting: Prisma.$job_postingPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        job_posting_id: string;
        resume: string;
        cover_letter: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['applicant']
    >;
    composites: {};
  };

  type applicantGetPayload<S extends boolean | null | undefined | applicantDefaultArgs> = $Result.GetResult<
    Prisma.$applicantPayload,
    S
  >;

  type applicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    applicantFindManyArgs,
    'select' | 'include'
  > & {
    select?: ApplicantCountAggregateInputType | true;
  };

  export interface applicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applicant']; meta: { name: 'applicant' } };
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {applicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends applicantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, applicantFindUniqueArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Applicant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {applicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends applicantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends applicantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindFirstArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends applicantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     *
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends applicantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Applicant.
     * @param {applicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     *
     **/
    create<T extends applicantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, applicantCreateArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Applicants.
     *     @param {applicantCreateManyArgs} args - Arguments to create many Applicants.
     *     @example
     *     // Create many Applicants
     *     const applicant = await prisma.applicant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends applicantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Applicant.
     * @param {applicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     *
     **/
    delete<T extends applicantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, applicantDeleteArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Applicant.
     * @param {applicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends applicantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpdateArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Applicants.
     * @param {applicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends applicantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends applicantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Applicant.
     * @param {applicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     **/
    upsert<T extends applicantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpsertArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
     **/
    count<T extends applicantCountArgs>(
      args?: Subset<T, applicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicantAggregateArgs>(
      args: Subset<T, ApplicantAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicantAggregateType<T>>;

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantGroupByArgs} args - Group by arguments.
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
      T extends applicantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicantGroupByArgs['orderBy'] }
        : { orderBy?: applicantGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, applicantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the applicant model
     */
    readonly fields: applicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    job_posting<T extends job_postingDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, job_postingDefaultArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the applicant model
   */
  interface applicantFieldRefs {
    readonly id: FieldRef<'applicant', 'String'>;
    readonly user_id: FieldRef<'applicant', 'String'>;
    readonly job_posting_id: FieldRef<'applicant', 'String'>;
    readonly resume: FieldRef<'applicant', 'String'>;
    readonly cover_letter: FieldRef<'applicant', 'String'>;
    readonly status: FieldRef<'applicant', 'String'>;
    readonly created_at: FieldRef<'applicant', 'DateTime'>;
    readonly updated_at: FieldRef<'applicant', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * applicant findUnique
   */
  export type applicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant findUniqueOrThrow
   */
  export type applicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant findFirst
   */
  export type applicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant findFirstOrThrow
   */
  export type applicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant findMany
   */
  export type applicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant create
   */
  export type applicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a applicant.
     */
    data: XOR<applicantCreateInput, applicantUncheckedCreateInput>;
  };

  /**
   * applicant createMany
   */
  export type applicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applicants.
     */
    data: applicantCreateManyInput | applicantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * applicant update
   */
  export type applicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a applicant.
     */
    data: XOR<applicantUpdateInput, applicantUncheckedUpdateInput>;
    /**
     * Choose, which applicant to update.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant updateMany
   */
  export type applicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyInput>;
    /**
     * Filter which applicants to update
     */
    where?: applicantWhereInput;
  };

  /**
   * applicant upsert
   */
  export type applicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the applicant to update in case it exists.
     */
    where: applicantWhereUniqueInput;
    /**
     * In case the applicant found by the `where` argument doesn't exist, create a new applicant with this data.
     */
    create: XOR<applicantCreateInput, applicantUncheckedCreateInput>;
    /**
     * In case the applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicantUpdateInput, applicantUncheckedUpdateInput>;
  };

  /**
   * applicant delete
   */
  export type applicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter which applicant to delete.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant deleteMany
   */
  export type applicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to delete
     */
    where?: applicantWhereInput;
  };

  /**
   * applicant without action
   */
  export type applicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
  };

  /**
   * Model benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null;
    _min: BenefitMinAggregateOutputType | null;
    _max: BenefitMaxAggregateOutputType | null;
  };

  export type BenefitMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BenefitMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BenefitCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BenefitMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BenefitMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BenefitCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which benefit to aggregate.
     */
    where?: benefitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of benefits to fetch.
     */
    orderBy?: benefitOrderByWithRelationInput | benefitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: benefitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` benefits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` benefits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned benefits
     **/
    _count?: true | BenefitCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BenefitMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BenefitMaxAggregateInputType;
  };

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
    [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>;
  };

  export type benefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: benefitWhereInput;
    orderBy?: benefitOrderByWithAggregationInput | benefitOrderByWithAggregationInput[];
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum;
    having?: benefitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BenefitCountAggregateInputType | true;
    _min?: BenefitMinAggregateInputType;
    _max?: BenefitMaxAggregateInputType;
  };

  export type BenefitGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: BenefitCountAggregateOutputType | null;
    _min: BenefitMinAggregateOutputType | null;
    _max: BenefitMaxAggregateOutputType | null;
  };

  type GetBenefitGroupByPayload<T extends benefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BenefitGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
          : GetScalarType<T[P], BenefitGroupByOutputType[P]>;
      }
    >
  >;

  export type benefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['benefit']
  >;

  export type benefitSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $benefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'benefit';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['benefit']
    >;
    composites: {};
  };

  type benefitGetPayload<S extends boolean | null | undefined | benefitDefaultArgs> = $Result.GetResult<
    Prisma.$benefitPayload,
    S
  >;

  type benefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    benefitFindManyArgs,
    'select' | 'include'
  > & {
    select?: BenefitCountAggregateInputType | true;
  };

  export interface benefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['benefit']; meta: { name: 'benefit' } };
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {benefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends benefitFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, benefitFindUniqueArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Benefit that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {benefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends benefitFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, benefitFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__benefitClient<
      $Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends benefitFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, benefitFindFirstArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends benefitFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, benefitFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benefitFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     *
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends benefitFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, benefitFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Benefit.
     * @param {benefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     *
     **/
    create<T extends benefitCreateArgs<ExtArgs>>(
      args: SelectSubset<T, benefitCreateArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Benefits.
     *     @param {benefitCreateManyArgs} args - Arguments to create many Benefits.
     *     @example
     *     // Create many Benefits
     *     const benefit = await prisma.benefit.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends benefitCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, benefitCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Benefit.
     * @param {benefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     *
     **/
    delete<T extends benefitDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, benefitDeleteArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Benefit.
     * @param {benefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends benefitUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, benefitUpdateArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Benefits.
     * @param {benefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends benefitDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, benefitDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends benefitUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, benefitUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Benefit.
     * @param {benefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     **/
    upsert<T extends benefitUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, benefitUpsertArgs<ExtArgs>>,
    ): Prisma__benefitClient<$Result.GetResult<Prisma.$benefitPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
     **/
    count<T extends benefitCountArgs>(
      args?: Subset<T, benefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenefitAggregateArgs>(
      args: Subset<T, BenefitAggregateArgs>,
    ): Prisma.PrismaPromise<GetBenefitAggregateType<T>>;

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {benefitGroupByArgs} args - Group by arguments.
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
      T extends benefitGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: benefitGroupByArgs['orderBy'] }
        : { orderBy?: benefitGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, benefitGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the benefit model
     */
    readonly fields: benefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__benefitClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the benefit model
   */
  interface benefitFieldRefs {
    readonly id: FieldRef<'benefit', 'String'>;
    readonly created_at: FieldRef<'benefit', 'DateTime'>;
    readonly updated_at: FieldRef<'benefit', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * benefit findUnique
   */
  export type benefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * Filter, which benefit to fetch.
     */
    where: benefitWhereUniqueInput;
  };

  /**
   * benefit findUniqueOrThrow
   */
  export type benefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * Filter, which benefit to fetch.
     */
    where: benefitWhereUniqueInput;
  };

  /**
   * benefit findFirst
   */
  export type benefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * Filter, which benefit to fetch.
     */
    where?: benefitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of benefits to fetch.
     */
    orderBy?: benefitOrderByWithRelationInput | benefitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for benefits.
     */
    cursor?: benefitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` benefits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` benefits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[];
  };

  /**
   * benefit findFirstOrThrow
   */
  export type benefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * Filter, which benefit to fetch.
     */
    where?: benefitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of benefits to fetch.
     */
    orderBy?: benefitOrderByWithRelationInput | benefitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for benefits.
     */
    cursor?: benefitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` benefits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` benefits.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[];
  };

  /**
   * benefit findMany
   */
  export type benefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * Filter, which benefits to fetch.
     */
    where?: benefitWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of benefits to fetch.
     */
    orderBy?: benefitOrderByWithRelationInput | benefitOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing benefits.
     */
    cursor?: benefitWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` benefits from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` benefits.
     */
    skip?: number;
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[];
  };

  /**
   * benefit create
   */
  export type benefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * The data needed to create a benefit.
     */
    data?: XOR<benefitCreateInput, benefitUncheckedCreateInput>;
  };

  /**
   * benefit createMany
   */
  export type benefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many benefits.
     */
    data: benefitCreateManyInput | benefitCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * benefit update
   */
  export type benefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * The data needed to update a benefit.
     */
    data: XOR<benefitUpdateInput, benefitUncheckedUpdateInput>;
    /**
     * Choose, which benefit to update.
     */
    where: benefitWhereUniqueInput;
  };

  /**
   * benefit updateMany
   */
  export type benefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update benefits.
     */
    data: XOR<benefitUpdateManyMutationInput, benefitUncheckedUpdateManyInput>;
    /**
     * Filter which benefits to update
     */
    where?: benefitWhereInput;
  };

  /**
   * benefit upsert
   */
  export type benefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * The filter to search for the benefit to update in case it exists.
     */
    where: benefitWhereUniqueInput;
    /**
     * In case the benefit found by the `where` argument doesn't exist, create a new benefit with this data.
     */
    create: XOR<benefitCreateInput, benefitUncheckedCreateInput>;
    /**
     * In case the benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<benefitUpdateInput, benefitUncheckedUpdateInput>;
  };

  /**
   * benefit delete
   */
  export type benefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
    /**
     * Filter which benefit to delete.
     */
    where: benefitWhereUniqueInput;
  };

  /**
   * benefit deleteMany
   */
  export type benefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which benefits to delete
     */
    where?: benefitWhereInput;
  };

  /**
   * benefit without action
   */
  export type benefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the benefit
     */
    select?: benefitSelect<ExtArgs> | null;
  };

  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
  };

  export type DepartmentMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DepartmentMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DepartmentCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DepartmentMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DepartmentMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DepartmentCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned departments
     **/
    _count?: true | DepartmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DepartmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DepartmentMaxAggregateInputType;
  };

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
    [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>;
  };

  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput;
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[];
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum;
    having?: departmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DepartmentCountAggregateInputType | true;
    _min?: DepartmentMinAggregateInputType;
    _max?: DepartmentMaxAggregateInputType;
  };

  export type DepartmentGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: DepartmentCountAggregateOutputType | null;
    _min: DepartmentMinAggregateOutputType | null;
    _max: DepartmentMaxAggregateOutputType | null;
  };

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DepartmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
          : GetScalarType<T[P], DepartmentGroupByOutputType[P]>;
      }
    >
  >;

  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['department']
    >;

  export type departmentSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'department';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['department']
    >;
    composites: {};
  };

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<
    Prisma.$departmentPayload,
    S
  >;

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    departmentFindManyArgs,
    'select' | 'include'
  > & {
    select?: DepartmentCountAggregateInputType | true;
  };

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department']; meta: { name: 'department' } };
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends departmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Department that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends departmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__departmentClient<
      $Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     *
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends departmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     *
     **/
    create<T extends departmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, departmentCreateArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Departments.
     *     @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     *     @example
     *     // Create many Departments
     *     const department = await prisma.department.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends departmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     *
     **/
    delete<T extends departmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends departmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends departmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends departmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     **/
    upsert<T extends departmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>,
    ): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
     **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(
      args: Subset<T, DepartmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>;

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
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
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the department model
     */
    readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly id: FieldRef<'department', 'String'>;
    readonly created_at: FieldRef<'department', 'DateTime'>;
    readonly updated_at: FieldRef<'department', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` departments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` departments.
     */
    skip?: number;
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[];
  };

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * The data needed to create a department.
     */
    data?: XOR<departmentCreateInput, departmentUncheckedCreateInput>;
  };

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>;
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>;
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput;
  };

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput;
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>;
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>;
  };

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput;
  };

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput;
  };

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_title: string | null;
    start_date: Date | null;
    end_date: Date | null;
    salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    job_title: string | null;
    start_date: Date | null;
    end_date: Date | null;
    salary: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    user_id: number;
    job_title: number;
    start_date: number;
    end_date: number;
    salary: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    user_id?: true;
    job_title?: true;
    start_date?: true;
    end_date?: true;
    salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    job_title?: true;
    start_date?: true;
    end_date?: true;
    salary?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    user_id?: true;
    job_title?: true;
    start_date?: true;
    end_date?: true;
    salary?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    user_id: string;
    job_title: string;
    start_date: Date;
    end_date: Date | null;
    salary: number;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        job_title?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        salary?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    job_title?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    salary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        job_title: string;
        start_date: Date;
        end_date: Date | null;
        salary: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly job_title: FieldRef<'employee', 'String'>;
    readonly start_date: FieldRef<'employee', 'DateTime'>;
    readonly end_date: FieldRef<'employee', 'DateTime'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model job_posting
   */

  export type AggregateJob_posting = {
    _count: Job_postingCountAggregateOutputType | null;
    _min: Job_postingMinAggregateOutputType | null;
    _max: Job_postingMaxAggregateOutputType | null;
  };

  export type Job_postingMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    requirements: string | null;
    hr_manager_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_postingMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    requirements: string | null;
    hr_manager_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Job_postingCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    requirements: number;
    hr_manager_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Job_postingMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    hr_manager_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_postingMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    hr_manager_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Job_postingCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    requirements?: true;
    hr_manager_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Job_postingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_posting to aggregate.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned job_postings
     **/
    _count?: true | Job_postingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Job_postingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Job_postingMaxAggregateInputType;
  };

  export type GetJob_postingAggregateType<T extends Job_postingAggregateArgs> = {
    [P in keyof T & keyof AggregateJob_posting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_posting[P]>
      : GetScalarType<T[P], AggregateJob_posting[P]>;
  };

  export type job_postingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: job_postingWhereInput;
    orderBy?: job_postingOrderByWithAggregationInput | job_postingOrderByWithAggregationInput[];
    by: Job_postingScalarFieldEnum[] | Job_postingScalarFieldEnum;
    having?: job_postingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Job_postingCountAggregateInputType | true;
    _min?: Job_postingMinAggregateInputType;
    _max?: Job_postingMaxAggregateInputType;
  };

  export type Job_postingGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    requirements: string;
    hr_manager_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Job_postingCountAggregateOutputType | null;
    _min: Job_postingMinAggregateOutputType | null;
    _max: Job_postingMaxAggregateOutputType | null;
  };

  type GetJob_postingGroupByPayload<T extends job_postingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_postingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Job_postingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Job_postingGroupByOutputType[P]>
          : GetScalarType<T[P], Job_postingGroupByOutputType[P]>;
      }
    >
  >;

  export type job_postingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        description?: boolean;
        requirements?: boolean;
        hr_manager_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        applicant?: boolean | job_posting$applicantArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Job_postingCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['job_posting']
    >;

  export type job_postingSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    requirements?: boolean;
    hr_manager_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type job_postingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | job_posting$applicantArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Job_postingCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $job_postingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'job_posting';
    objects: {
      applicant: Prisma.$applicantPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string;
        requirements: string;
        hr_manager_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['job_posting']
    >;
    composites: {};
  };

  type job_postingGetPayload<S extends boolean | null | undefined | job_postingDefaultArgs> = $Result.GetResult<
    Prisma.$job_postingPayload,
    S
  >;

  type job_postingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    job_postingFindManyArgs,
    'select' | 'include'
  > & {
    select?: Job_postingCountAggregateInputType | true;
  };

  export interface job_postingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['job_posting']; meta: { name: 'job_posting' } };
    /**
     * Find zero or one Job_posting that matches the filter.
     * @param {job_postingFindUniqueArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends job_postingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingFindUniqueArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Job_posting that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {job_postingFindUniqueOrThrowArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends job_postingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Job_posting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingFindFirstArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends job_postingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindFirstArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Job_posting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingFindFirstOrThrowArgs} args - Arguments to find a Job_posting
     * @example
     * // Get one Job_posting
     * const job_posting = await prisma.job_posting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends job_postingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__job_postingClient<
      $Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Job_postings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_postings
     * const job_postings = await prisma.job_posting.findMany()
     *
     * // Get first 10 Job_postings
     * const job_postings = await prisma.job_posting.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const job_postingWithIdOnly = await prisma.job_posting.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends job_postingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Job_posting.
     * @param {job_postingCreateArgs} args - Arguments to create a Job_posting.
     * @example
     * // Create one Job_posting
     * const Job_posting = await prisma.job_posting.create({
     *   data: {
     *     // ... data to create a Job_posting
     *   }
     * })
     *
     **/
    create<T extends job_postingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingCreateArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Job_postings.
     *     @param {job_postingCreateManyArgs} args - Arguments to create many Job_postings.
     *     @example
     *     // Create many Job_postings
     *     const job_posting = await prisma.job_posting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends job_postingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Job_posting.
     * @param {job_postingDeleteArgs} args - Arguments to delete one Job_posting.
     * @example
     * // Delete one Job_posting
     * const Job_posting = await prisma.job_posting.delete({
     *   where: {
     *     // ... filter to delete one Job_posting
     *   }
     * })
     *
     **/
    delete<T extends job_postingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingDeleteArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Job_posting.
     * @param {job_postingUpdateArgs} args - Arguments to update one Job_posting.
     * @example
     * // Update one Job_posting
     * const job_posting = await prisma.job_posting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends job_postingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingUpdateArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Job_postings.
     * @param {job_postingDeleteManyArgs} args - Arguments to filter Job_postings to delete.
     * @example
     * // Delete a few Job_postings
     * const { count } = await prisma.job_posting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends job_postingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, job_postingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Job_postings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_postings
     * const job_posting = await prisma.job_posting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends job_postingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Job_posting.
     * @param {job_postingUpsertArgs} args - Arguments to update or create a Job_posting.
     * @example
     * // Update or create a Job_posting
     * const job_posting = await prisma.job_posting.upsert({
     *   create: {
     *     // ... data to create a Job_posting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_posting we want to update
     *   }
     * })
     **/
    upsert<T extends job_postingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, job_postingUpsertArgs<ExtArgs>>,
    ): Prisma__job_postingClient<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Job_postings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingCountArgs} args - Arguments to filter Job_postings to count.
     * @example
     * // Count the number of Job_postings
     * const count = await prisma.job_posting.count({
     *   where: {
     *     // ... the filter for the Job_postings we want to count
     *   }
     * })
     **/
    count<T extends job_postingCountArgs>(
      args?: Subset<T, job_postingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_postingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Job_posting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_postingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Job_postingAggregateArgs>(
      args: Subset<T, Job_postingAggregateArgs>,
    ): Prisma.PrismaPromise<GetJob_postingAggregateType<T>>;

    /**
     * Group by Job_posting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {job_postingGroupByArgs} args - Group by arguments.
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
      T extends job_postingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: job_postingGroupByArgs['orderBy'] }
        : { orderBy?: job_postingGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, job_postingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetJob_postingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the job_posting model
     */
    readonly fields: job_postingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for job_posting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__job_postingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicant<T extends job_posting$applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, job_posting$applicantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the job_posting model
   */
  interface job_postingFieldRefs {
    readonly id: FieldRef<'job_posting', 'String'>;
    readonly title: FieldRef<'job_posting', 'String'>;
    readonly description: FieldRef<'job_posting', 'String'>;
    readonly requirements: FieldRef<'job_posting', 'String'>;
    readonly hr_manager_id: FieldRef<'job_posting', 'String'>;
    readonly created_at: FieldRef<'job_posting', 'DateTime'>;
    readonly updated_at: FieldRef<'job_posting', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * job_posting findUnique
   */
  export type job_postingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting findUniqueOrThrow
   */
  export type job_postingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting findFirst
   */
  export type job_postingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_postings.
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_postings.
     */
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * job_posting findFirstOrThrow
   */
  export type job_postingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_posting to fetch.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for job_postings.
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of job_postings.
     */
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * job_posting findMany
   */
  export type job_postingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter, which job_postings to fetch.
     */
    where?: job_postingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of job_postings to fetch.
     */
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing job_postings.
     */
    cursor?: job_postingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` job_postings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` job_postings.
     */
    skip?: number;
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * job_posting create
   */
  export type job_postingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * The data needed to create a job_posting.
     */
    data: XOR<job_postingCreateInput, job_postingUncheckedCreateInput>;
  };

  /**
   * job_posting createMany
   */
  export type job_postingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many job_postings.
     */
    data: job_postingCreateManyInput | job_postingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * job_posting update
   */
  export type job_postingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * The data needed to update a job_posting.
     */
    data: XOR<job_postingUpdateInput, job_postingUncheckedUpdateInput>;
    /**
     * Choose, which job_posting to update.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting updateMany
   */
  export type job_postingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update job_postings.
     */
    data: XOR<job_postingUpdateManyMutationInput, job_postingUncheckedUpdateManyInput>;
    /**
     * Filter which job_postings to update
     */
    where?: job_postingWhereInput;
  };

  /**
   * job_posting upsert
   */
  export type job_postingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * The filter to search for the job_posting to update in case it exists.
     */
    where: job_postingWhereUniqueInput;
    /**
     * In case the job_posting found by the `where` argument doesn't exist, create a new job_posting with this data.
     */
    create: XOR<job_postingCreateInput, job_postingUncheckedCreateInput>;
    /**
     * In case the job_posting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<job_postingUpdateInput, job_postingUncheckedUpdateInput>;
  };

  /**
   * job_posting delete
   */
  export type job_postingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    /**
     * Filter which job_posting to delete.
     */
    where: job_postingWhereUniqueInput;
  };

  /**
   * job_posting deleteMany
   */
  export type job_postingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which job_postings to delete
     */
    where?: job_postingWhereInput;
  };

  /**
   * job_posting.applicant
   */
  export type job_posting$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    cursor?: applicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * job_posting without action
   */
  export type job_postingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
  };

  /**
   * Model performance_review
   */

  export type AggregatePerformance_review = {
    _count: Performance_reviewCountAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  export type Performance_reviewMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Performance_reviewCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Performance_reviewMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Performance_reviewCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Performance_reviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_review to aggregate.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned performance_reviews
     **/
    _count?: true | Performance_reviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Performance_reviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type GetPerformance_reviewAggregateType<T extends Performance_reviewAggregateArgs> = {
    [P in keyof T & keyof AggregatePerformance_review]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformance_review[P]>
      : GetScalarType<T[P], AggregatePerformance_review[P]>;
  };

  export type performance_reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: performance_reviewWhereInput;
    orderBy?: performance_reviewOrderByWithAggregationInput | performance_reviewOrderByWithAggregationInput[];
    by: Performance_reviewScalarFieldEnum[] | Performance_reviewScalarFieldEnum;
    having?: performance_reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Performance_reviewCountAggregateInputType | true;
    _min?: Performance_reviewMinAggregateInputType;
    _max?: Performance_reviewMaxAggregateInputType;
  };

  export type Performance_reviewGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Performance_reviewCountAggregateOutputType | null;
    _min: Performance_reviewMinAggregateOutputType | null;
    _max: Performance_reviewMaxAggregateOutputType | null;
  };

  type GetPerformance_reviewGroupByPayload<T extends performance_reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Performance_reviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Performance_reviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>
          : GetScalarType<T[P], Performance_reviewGroupByOutputType[P]>;
      }
    >
  >;

  export type performance_reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['performance_review']
    >;

  export type performance_reviewSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $performance_reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'performance_review';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['performance_review']
    >;
    composites: {};
  };

  type performance_reviewGetPayload<S extends boolean | null | undefined | performance_reviewDefaultArgs> =
    $Result.GetResult<Prisma.$performance_reviewPayload, S>;

  type performance_reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    performance_reviewFindManyArgs,
    'select' | 'include'
  > & {
    select?: Performance_reviewCountAggregateInputType | true;
  };

  export interface performance_reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['performance_review'];
      meta: { name: 'performance_review' };
    };
    /**
     * Find zero or one Performance_review that matches the filter.
     * @param {performance_reviewFindUniqueArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends performance_reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Performance_review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {performance_reviewFindUniqueOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends performance_reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends performance_reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Performance_review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindFirstOrThrowArgs} args - Arguments to find a Performance_review
     * @example
     * // Get one Performance_review
     * const performance_review = await prisma.performance_review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends performance_reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Performance_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany()
     *
     * // Get first 10 Performance_reviews
     * const performance_reviews = await prisma.performance_review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const performance_reviewWithIdOnly = await prisma.performance_review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends performance_reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Performance_review.
     * @param {performance_reviewCreateArgs} args - Arguments to create a Performance_review.
     * @example
     * // Create one Performance_review
     * const Performance_review = await prisma.performance_review.create({
     *   data: {
     *     // ... data to create a Performance_review
     *   }
     * })
     *
     **/
    create<T extends performance_reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewCreateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Performance_reviews.
     *     @param {performance_reviewCreateManyArgs} args - Arguments to create many Performance_reviews.
     *     @example
     *     // Create many Performance_reviews
     *     const performance_review = await prisma.performance_review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends performance_reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Performance_review.
     * @param {performance_reviewDeleteArgs} args - Arguments to delete one Performance_review.
     * @example
     * // Delete one Performance_review
     * const Performance_review = await prisma.performance_review.delete({
     *   where: {
     *     // ... filter to delete one Performance_review
     *   }
     * })
     *
     **/
    delete<T extends performance_reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewDeleteArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Performance_review.
     * @param {performance_reviewUpdateArgs} args - Arguments to update one Performance_review.
     * @example
     * // Update one Performance_review
     * const performance_review = await prisma.performance_review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends performance_reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Performance_reviews.
     * @param {performance_reviewDeleteManyArgs} args - Arguments to filter Performance_reviews to delete.
     * @example
     * // Delete a few Performance_reviews
     * const { count } = await prisma.performance_review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends performance_reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, performance_reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Performance_reviews
     * const performance_review = await prisma.performance_review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends performance_reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Performance_review.
     * @param {performance_reviewUpsertArgs} args - Arguments to update or create a Performance_review.
     * @example
     * // Update or create a Performance_review
     * const performance_review = await prisma.performance_review.upsert({
     *   create: {
     *     // ... data to create a Performance_review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Performance_review we want to update
     *   }
     * })
     **/
    upsert<T extends performance_reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, performance_reviewUpsertArgs<ExtArgs>>,
    ): Prisma__performance_reviewClient<
      $Result.GetResult<Prisma.$performance_reviewPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Performance_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewCountArgs} args - Arguments to filter Performance_reviews to count.
     * @example
     * // Count the number of Performance_reviews
     * const count = await prisma.performance_review.count({
     *   where: {
     *     // ... the filter for the Performance_reviews we want to count
     *   }
     * })
     **/
    count<T extends performance_reviewCountArgs>(
      args?: Subset<T, performance_reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Performance_reviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Performance_reviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Performance_reviewAggregateArgs>(
      args: Subset<T, Performance_reviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetPerformance_reviewAggregateType<T>>;

    /**
     * Group by Performance_review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {performance_reviewGroupByArgs} args - Group by arguments.
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
      T extends performance_reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: performance_reviewGroupByArgs['orderBy'] }
        : { orderBy?: performance_reviewGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, performance_reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPerformance_reviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the performance_review model
     */
    readonly fields: performance_reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for performance_review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__performance_reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the performance_review model
   */
  interface performance_reviewFieldRefs {
    readonly id: FieldRef<'performance_review', 'String'>;
    readonly created_at: FieldRef<'performance_review', 'DateTime'>;
    readonly updated_at: FieldRef<'performance_review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * performance_review findUnique
   */
  export type performance_reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findUniqueOrThrow
   */
  export type performance_reviewFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review findFirst
   */
  export type performance_reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findFirstOrThrow
   */
  export type performance_reviewFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_review to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of performance_reviews.
     */
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review findMany
   */
  export type performance_reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter, which performance_reviews to fetch.
     */
    where?: performance_reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of performance_reviews to fetch.
     */
    orderBy?: performance_reviewOrderByWithRelationInput | performance_reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing performance_reviews.
     */
    cursor?: performance_reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` performance_reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` performance_reviews.
     */
    skip?: number;
    distinct?: Performance_reviewScalarFieldEnum | Performance_reviewScalarFieldEnum[];
  };

  /**
   * performance_review create
   */
  export type performance_reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * The data needed to create a performance_review.
     */
    data?: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
  };

  /**
   * performance_review createMany
   */
  export type performance_reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many performance_reviews.
     */
    data: performance_reviewCreateManyInput | performance_reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * performance_review update
   */
  export type performance_reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * The data needed to update a performance_review.
     */
    data: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
    /**
     * Choose, which performance_review to update.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review updateMany
   */
  export type performance_reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update performance_reviews.
     */
    data: XOR<performance_reviewUpdateManyMutationInput, performance_reviewUncheckedUpdateManyInput>;
    /**
     * Filter which performance_reviews to update
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review upsert
   */
  export type performance_reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * The filter to search for the performance_review to update in case it exists.
     */
    where: performance_reviewWhereUniqueInput;
    /**
     * In case the performance_review found by the `where` argument doesn't exist, create a new performance_review with this data.
     */
    create: XOR<performance_reviewCreateInput, performance_reviewUncheckedCreateInput>;
    /**
     * In case the performance_review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<performance_reviewUpdateInput, performance_reviewUncheckedUpdateInput>;
  };

  /**
   * performance_review delete
   */
  export type performance_reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
    /**
     * Filter which performance_review to delete.
     */
    where: performance_reviewWhereUniqueInput;
  };

  /**
   * performance_review deleteMany
   */
  export type performance_reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which performance_reviews to delete
     */
    where?: performance_reviewWhereInput;
  };

  /**
   * performance_review without action
   */
  export type performance_reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the performance_review
     */
    select?: performance_reviewSelect<ExtArgs> | null;
  };

  /**
   * Model position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null;
    _min: PositionMinAggregateOutputType | null;
    _max: PositionMaxAggregateOutputType | null;
  };

  export type PositionMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PositionMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type PositionCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type PositionMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PositionMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type PositionCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which position to aggregate.
     */
    where?: positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned positions
     **/
    _count?: true | PositionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PositionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PositionMaxAggregateInputType;
  };

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
    [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>;
  };

  export type positionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: positionWhereInput;
    orderBy?: positionOrderByWithAggregationInput | positionOrderByWithAggregationInput[];
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum;
    having?: positionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PositionCountAggregateInputType | true;
    _min?: PositionMinAggregateInputType;
    _max?: PositionMaxAggregateInputType;
  };

  export type PositionGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: PositionCountAggregateOutputType | null;
    _min: PositionMinAggregateOutputType | null;
    _max: PositionMaxAggregateOutputType | null;
  };

  type GetPositionGroupByPayload<T extends positionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PositionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
          : GetScalarType<T[P], PositionGroupByOutputType[P]>;
      }
    >
  >;

  export type positionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['position']
    >;

  export type positionSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $positionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'position';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['position']
    >;
    composites: {};
  };

  type positionGetPayload<S extends boolean | null | undefined | positionDefaultArgs> = $Result.GetResult<
    Prisma.$positionPayload,
    S
  >;

  type positionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    positionFindManyArgs,
    'select' | 'include'
  > & {
    select?: PositionCountAggregateInputType | true;
  };

  export interface positionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['position']; meta: { name: 'position' } };
    /**
     * Find zero or one Position that matches the filter.
     * @param {positionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends positionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, positionFindUniqueArgs<ExtArgs>>,
    ): Prisma__positionClient<
      $Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Position that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {positionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends positionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, positionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__positionClient<
      $Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends positionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, positionFindFirstArgs<ExtArgs>>,
    ): Prisma__positionClient<
      $Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends positionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, positionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__positionClient<
      $Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     *
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends positionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, positionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Position.
     * @param {positionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     *
     **/
    create<T extends positionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, positionCreateArgs<ExtArgs>>,
    ): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Positions.
     *     @param {positionCreateManyArgs} args - Arguments to create many Positions.
     *     @example
     *     // Create many Positions
     *     const position = await prisma.position.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends positionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, positionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Position.
     * @param {positionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     *
     **/
    delete<T extends positionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, positionDeleteArgs<ExtArgs>>,
    ): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Position.
     * @param {positionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends positionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, positionUpdateArgs<ExtArgs>>,
    ): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Positions.
     * @param {positionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends positionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, positionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends positionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, positionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Position.
     * @param {positionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     **/
    upsert<T extends positionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, positionUpsertArgs<ExtArgs>>,
    ): Prisma__positionClient<$Result.GetResult<Prisma.$positionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
     **/
    count<T extends positionCountArgs>(
      args?: Subset<T, positionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PositionAggregateArgs>(
      args: Subset<T, PositionAggregateArgs>,
    ): Prisma.PrismaPromise<GetPositionAggregateType<T>>;

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {positionGroupByArgs} args - Group by arguments.
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
      T extends positionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: positionGroupByArgs['orderBy'] }
        : { orderBy?: positionGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, positionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the position model
     */
    readonly fields: positionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__positionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the position model
   */
  interface positionFieldRefs {
    readonly id: FieldRef<'position', 'String'>;
    readonly created_at: FieldRef<'position', 'DateTime'>;
    readonly updated_at: FieldRef<'position', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * position findUnique
   */
  export type positionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * Filter, which position to fetch.
     */
    where: positionWhereUniqueInput;
  };

  /**
   * position findUniqueOrThrow
   */
  export type positionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * Filter, which position to fetch.
     */
    where: positionWhereUniqueInput;
  };

  /**
   * position findFirst
   */
  export type positionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * Filter, which position to fetch.
     */
    where?: positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for positions.
     */
    cursor?: positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[];
  };

  /**
   * position findFirstOrThrow
   */
  export type positionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * Filter, which position to fetch.
     */
    where?: positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for positions.
     */
    cursor?: positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[];
  };

  /**
   * position findMany
   */
  export type positionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * Filter, which positions to fetch.
     */
    where?: positionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of positions to fetch.
     */
    orderBy?: positionOrderByWithRelationInput | positionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing positions.
     */
    cursor?: positionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` positions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` positions.
     */
    skip?: number;
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[];
  };

  /**
   * position create
   */
  export type positionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * The data needed to create a position.
     */
    data?: XOR<positionCreateInput, positionUncheckedCreateInput>;
  };

  /**
   * position createMany
   */
  export type positionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many positions.
     */
    data: positionCreateManyInput | positionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * position update
   */
  export type positionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * The data needed to update a position.
     */
    data: XOR<positionUpdateInput, positionUncheckedUpdateInput>;
    /**
     * Choose, which position to update.
     */
    where: positionWhereUniqueInput;
  };

  /**
   * position updateMany
   */
  export type positionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update positions.
     */
    data: XOR<positionUpdateManyMutationInput, positionUncheckedUpdateManyInput>;
    /**
     * Filter which positions to update
     */
    where?: positionWhereInput;
  };

  /**
   * position upsert
   */
  export type positionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * The filter to search for the position to update in case it exists.
     */
    where: positionWhereUniqueInput;
    /**
     * In case the position found by the `where` argument doesn't exist, create a new position with this data.
     */
    create: XOR<positionCreateInput, positionUncheckedCreateInput>;
    /**
     * In case the position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<positionUpdateInput, positionUncheckedUpdateInput>;
  };

  /**
   * position delete
   */
  export type positionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
    /**
     * Filter which position to delete.
     */
    where: positionWhereUniqueInput;
  };

  /**
   * position deleteMany
   */
  export type positionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which positions to delete
     */
    where?: positionWhereInput;
  };

  /**
   * position without action
   */
  export type positionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the position
     */
    select?: positionSelect<ExtArgs> | null;
  };

  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  export type ScheduleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ScheduleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schedules
     **/
    _count?: true | ScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScheduleMaxAggregateInputType;
  };

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>;
  };

  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[];
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum;
    having?: scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
  };

  export type ScheduleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScheduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
          : GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
      }
    >
  >;

  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['schedule']
    >;

  export type scheduleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'schedule';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['schedule']
    >;
    composites: {};
  };

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<
    Prisma.$schedulePayload,
    S
  >;

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    scheduleFindManyArgs,
    'select' | 'include'
  > & {
    select?: ScheduleCountAggregateInputType | true;
  };

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule']; meta: { name: 'schedule' } };
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     *
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     *
     **/
    create<T extends scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schedules.
     *     @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     *
     **/
    delete<T extends scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     **/
    upsert<T extends scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
     **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(
      args: Subset<T, ScheduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
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
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the schedule model
     */
    readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly id: FieldRef<'schedule', 'String'>;
    readonly created_at: FieldRef<'schedule', 'DateTime'>;
    readonly updated_at: FieldRef<'schedule', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to create a schedule.
     */
    data?: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
  };

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>;
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput;
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
  };

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
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
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
    readonly user_id: FieldRef<'team', 'String'>;
    readonly tenant_id: FieldRef<'team', 'String'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model training
   */

  export type AggregateTraining = {
    _count: TrainingCountAggregateOutputType | null;
    _min: TrainingMinAggregateOutputType | null;
    _max: TrainingMaxAggregateOutputType | null;
  };

  export type TrainingMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TrainingMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TrainingCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TrainingMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TrainingMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TrainingCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TrainingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which training to aggregate.
     */
    where?: trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: trainingOrderByWithRelationInput | trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trainings
     **/
    _count?: true | TrainingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrainingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrainingMaxAggregateInputType;
  };

  export type GetTrainingAggregateType<T extends TrainingAggregateArgs> = {
    [P in keyof T & keyof AggregateTraining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraining[P]>
      : GetScalarType<T[P], AggregateTraining[P]>;
  };

  export type trainingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trainingWhereInput;
    orderBy?: trainingOrderByWithAggregationInput | trainingOrderByWithAggregationInput[];
    by: TrainingScalarFieldEnum[] | TrainingScalarFieldEnum;
    having?: trainingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingCountAggregateInputType | true;
    _min?: TrainingMinAggregateInputType;
    _max?: TrainingMaxAggregateInputType;
  };

  export type TrainingGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: TrainingCountAggregateOutputType | null;
    _min: TrainingMinAggregateOutputType | null;
    _max: TrainingMaxAggregateOutputType | null;
  };

  type GetTrainingGroupByPayload<T extends trainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TrainingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TrainingGroupByOutputType[P]>
          : GetScalarType<T[P], TrainingGroupByOutputType[P]>;
      }
    >
  >;

  export type trainingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['training']
    >;

  export type trainingSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $trainingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'training';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['training']
    >;
    composites: {};
  };

  type trainingGetPayload<S extends boolean | null | undefined | trainingDefaultArgs> = $Result.GetResult<
    Prisma.$trainingPayload,
    S
  >;

  type trainingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    trainingFindManyArgs,
    'select' | 'include'
  > & {
    select?: TrainingCountAggregateInputType | true;
  };

  export interface trainingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['training']; meta: { name: 'training' } };
    /**
     * Find zero or one Training that matches the filter.
     * @param {trainingFindUniqueArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends trainingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trainingFindUniqueArgs<ExtArgs>>,
    ): Prisma__trainingClient<
      $Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Training that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {trainingFindUniqueOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends trainingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trainingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__trainingClient<
      $Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Training that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingFindFirstArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends trainingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trainingFindFirstArgs<ExtArgs>>,
    ): Prisma__trainingClient<
      $Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Training that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingFindFirstOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends trainingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trainingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__trainingClient<
      $Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Trainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainings
     * const trainings = await prisma.training.findMany()
     *
     * // Get first 10 Trainings
     * const trainings = await prisma.training.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trainingWithIdOnly = await prisma.training.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends trainingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trainingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Training.
     * @param {trainingCreateArgs} args - Arguments to create a Training.
     * @example
     * // Create one Training
     * const Training = await prisma.training.create({
     *   data: {
     *     // ... data to create a Training
     *   }
     * })
     *
     **/
    create<T extends trainingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trainingCreateArgs<ExtArgs>>,
    ): Prisma__trainingClient<$Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Trainings.
     *     @param {trainingCreateManyArgs} args - Arguments to create many Trainings.
     *     @example
     *     // Create many Trainings
     *     const training = await prisma.training.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends trainingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trainingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Training.
     * @param {trainingDeleteArgs} args - Arguments to delete one Training.
     * @example
     * // Delete one Training
     * const Training = await prisma.training.delete({
     *   where: {
     *     // ... filter to delete one Training
     *   }
     * })
     *
     **/
    delete<T extends trainingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trainingDeleteArgs<ExtArgs>>,
    ): Prisma__trainingClient<$Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Training.
     * @param {trainingUpdateArgs} args - Arguments to update one Training.
     * @example
     * // Update one Training
     * const training = await prisma.training.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends trainingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trainingUpdateArgs<ExtArgs>>,
    ): Prisma__trainingClient<$Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Trainings.
     * @param {trainingDeleteManyArgs} args - Arguments to filter Trainings to delete.
     * @example
     * // Delete a few Trainings
     * const { count } = await prisma.training.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends trainingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trainingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainings
     * const training = await prisma.training.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends trainingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trainingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Training.
     * @param {trainingUpsertArgs} args - Arguments to update or create a Training.
     * @example
     * // Update or create a Training
     * const training = await prisma.training.upsert({
     *   create: {
     *     // ... data to create a Training
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Training we want to update
     *   }
     * })
     **/
    upsert<T extends trainingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trainingUpsertArgs<ExtArgs>>,
    ): Prisma__trainingClient<$Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingCountArgs} args - Arguments to filter Trainings to count.
     * @example
     * // Count the number of Trainings
     * const count = await prisma.training.count({
     *   where: {
     *     // ... the filter for the Trainings we want to count
     *   }
     * })
     **/
    count<T extends trainingCountArgs>(
      args?: Subset<T, trainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingAggregateArgs>(
      args: Subset<T, TrainingAggregateArgs>,
    ): Prisma.PrismaPromise<GetTrainingAggregateType<T>>;

    /**
     * Group by Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingGroupByArgs} args - Group by arguments.
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
      T extends trainingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trainingGroupByArgs['orderBy'] }
        : { orderBy?: trainingGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, trainingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the training model
     */
    readonly fields: trainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for training.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trainingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the training model
   */
  interface trainingFieldRefs {
    readonly id: FieldRef<'training', 'String'>;
    readonly created_at: FieldRef<'training', 'DateTime'>;
    readonly updated_at: FieldRef<'training', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * training findUnique
   */
  export type trainingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * Filter, which training to fetch.
     */
    where: trainingWhereUniqueInput;
  };

  /**
   * training findUniqueOrThrow
   */
  export type trainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * Filter, which training to fetch.
     */
    where: trainingWhereUniqueInput;
  };

  /**
   * training findFirst
   */
  export type trainingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * Filter, which training to fetch.
     */
    where?: trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: trainingOrderByWithRelationInput | trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trainings.
     */
    cursor?: trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainings.
     */
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[];
  };

  /**
   * training findFirstOrThrow
   */
  export type trainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * Filter, which training to fetch.
     */
    where?: trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: trainingOrderByWithRelationInput | trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trainings.
     */
    cursor?: trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainings.
     */
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[];
  };

  /**
   * training findMany
   */
  export type trainingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * Filter, which trainings to fetch.
     */
    where?: trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: trainingOrderByWithRelationInput | trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trainings.
     */
    cursor?: trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    distinct?: TrainingScalarFieldEnum | TrainingScalarFieldEnum[];
  };

  /**
   * training create
   */
  export type trainingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * The data needed to create a training.
     */
    data?: XOR<trainingCreateInput, trainingUncheckedCreateInput>;
  };

  /**
   * training createMany
   */
  export type trainingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trainings.
     */
    data: trainingCreateManyInput | trainingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * training update
   */
  export type trainingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * The data needed to update a training.
     */
    data: XOR<trainingUpdateInput, trainingUncheckedUpdateInput>;
    /**
     * Choose, which training to update.
     */
    where: trainingWhereUniqueInput;
  };

  /**
   * training updateMany
   */
  export type trainingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trainings.
     */
    data: XOR<trainingUpdateManyMutationInput, trainingUncheckedUpdateManyInput>;
    /**
     * Filter which trainings to update
     */
    where?: trainingWhereInput;
  };

  /**
   * training upsert
   */
  export type trainingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * The filter to search for the training to update in case it exists.
     */
    where: trainingWhereUniqueInput;
    /**
     * In case the training found by the `where` argument doesn't exist, create a new training with this data.
     */
    create: XOR<trainingCreateInput, trainingUncheckedCreateInput>;
    /**
     * In case the training was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trainingUpdateInput, trainingUncheckedUpdateInput>;
  };

  /**
   * training delete
   */
  export type trainingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
    /**
     * Filter which training to delete.
     */
    where: trainingWhereUniqueInput;
  };

  /**
   * training deleteMany
   */
  export type trainingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trainings to delete
     */
    where?: trainingWhereInput;
  };

  /**
   * training without action
   */
  export type trainingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: trainingSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      applicant?: boolean | user$applicantArgs<ExtArgs>;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      job_posting?: boolean | user$job_postingArgs<ExtArgs>;
      team?: boolean | user$teamArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | user$applicantArgs<ExtArgs>;
    employee?: boolean | user$employeeArgs<ExtArgs>;
    job_posting?: boolean | user$job_postingArgs<ExtArgs>;
    team?: boolean | user$teamArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      applicant: Prisma.$applicantPayload<ExtArgs>[];
      employee: Prisma.$employeePayload<ExtArgs>[];
      job_posting: Prisma.$job_postingPayload<ExtArgs>[];
      team: Prisma.$teamPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicant<T extends user$applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, user$applicantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'> | Null>;

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    job_posting<T extends user$job_postingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$job_postingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$job_postingPayload<ExtArgs>, T, 'findMany'> | Null>;

    team<T extends user$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teamArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.applicant
   */
  export type user$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    cursor?: applicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user.job_posting
   */
  export type user$job_postingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the job_posting
     */
    select?: job_postingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: job_postingInclude<ExtArgs> | null;
    where?: job_postingWhereInput;
    orderBy?: job_postingOrderByWithRelationInput | job_postingOrderByWithRelationInput[];
    cursor?: job_postingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Job_postingScalarFieldEnum | Job_postingScalarFieldEnum[];
  };

  /**
   * user.team
   */
  export type user$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    where?: teamWhereInput;
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    cursor?: teamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const ApplicantScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    job_posting_id: 'job_posting_id';
    resume: 'resume';
    cover_letter: 'cover_letter';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum];

  export const BenefitScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum];

  export const DepartmentScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    job_title: 'job_title';
    start_date: 'start_date';
    end_date: 'end_date';
    salary: 'salary';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const Job_postingScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    requirements: 'requirements';
    hr_manager_id: 'hr_manager_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Job_postingScalarFieldEnum = (typeof Job_postingScalarFieldEnum)[keyof typeof Job_postingScalarFieldEnum];

  export const Performance_reviewScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Performance_reviewScalarFieldEnum =
    (typeof Performance_reviewScalarFieldEnum)[keyof typeof Performance_reviewScalarFieldEnum];

  export const PositionScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum];

  export const ScheduleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const TrainingScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TrainingScalarFieldEnum = (typeof TrainingScalarFieldEnum)[keyof typeof TrainingScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type applicantWhereInput = {
    AND?: applicantWhereInput | applicantWhereInput[];
    OR?: applicantWhereInput[];
    NOT?: applicantWhereInput | applicantWhereInput[];
    id?: UuidFilter<'applicant'> | string;
    user_id?: UuidFilter<'applicant'> | string;
    job_posting_id?: UuidFilter<'applicant'> | string;
    resume?: StringFilter<'applicant'> | string;
    cover_letter?: StringNullableFilter<'applicant'> | string | null;
    status?: StringFilter<'applicant'> | string;
    created_at?: DateTimeFilter<'applicant'> | Date | string;
    updated_at?: DateTimeFilter<'applicant'> | Date | string;
    job_posting?: XOR<Job_postingRelationFilter, job_postingWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type applicantOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_posting_id?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    job_posting?: job_postingOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type applicantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: applicantWhereInput | applicantWhereInput[];
      OR?: applicantWhereInput[];
      NOT?: applicantWhereInput | applicantWhereInput[];
      user_id?: UuidFilter<'applicant'> | string;
      job_posting_id?: UuidFilter<'applicant'> | string;
      resume?: StringFilter<'applicant'> | string;
      cover_letter?: StringNullableFilter<'applicant'> | string | null;
      status?: StringFilter<'applicant'> | string;
      created_at?: DateTimeFilter<'applicant'> | Date | string;
      updated_at?: DateTimeFilter<'applicant'> | Date | string;
      job_posting?: XOR<Job_postingRelationFilter, job_postingWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type applicantOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_posting_id?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrderInput | SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: applicantCountOrderByAggregateInput;
    _max?: applicantMaxOrderByAggregateInput;
    _min?: applicantMinOrderByAggregateInput;
  };

  export type applicantScalarWhereWithAggregatesInput = {
    AND?: applicantScalarWhereWithAggregatesInput | applicantScalarWhereWithAggregatesInput[];
    OR?: applicantScalarWhereWithAggregatesInput[];
    NOT?: applicantScalarWhereWithAggregatesInput | applicantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'applicant'> | string;
    user_id?: UuidWithAggregatesFilter<'applicant'> | string;
    job_posting_id?: UuidWithAggregatesFilter<'applicant'> | string;
    resume?: StringWithAggregatesFilter<'applicant'> | string;
    cover_letter?: StringNullableWithAggregatesFilter<'applicant'> | string | null;
    status?: StringWithAggregatesFilter<'applicant'> | string;
    created_at?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
  };

  export type benefitWhereInput = {
    AND?: benefitWhereInput | benefitWhereInput[];
    OR?: benefitWhereInput[];
    NOT?: benefitWhereInput | benefitWhereInput[];
    id?: UuidFilter<'benefit'> | string;
    created_at?: DateTimeFilter<'benefit'> | Date | string;
    updated_at?: DateTimeFilter<'benefit'> | Date | string;
  };

  export type benefitOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type benefitWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: benefitWhereInput | benefitWhereInput[];
      OR?: benefitWhereInput[];
      NOT?: benefitWhereInput | benefitWhereInput[];
      created_at?: DateTimeFilter<'benefit'> | Date | string;
      updated_at?: DateTimeFilter<'benefit'> | Date | string;
    },
    'id'
  >;

  export type benefitOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: benefitCountOrderByAggregateInput;
    _max?: benefitMaxOrderByAggregateInput;
    _min?: benefitMinOrderByAggregateInput;
  };

  export type benefitScalarWhereWithAggregatesInput = {
    AND?: benefitScalarWhereWithAggregatesInput | benefitScalarWhereWithAggregatesInput[];
    OR?: benefitScalarWhereWithAggregatesInput[];
    NOT?: benefitScalarWhereWithAggregatesInput | benefitScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'benefit'> | string;
    created_at?: DateTimeWithAggregatesFilter<'benefit'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'benefit'> | Date | string;
  };

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[];
    OR?: departmentWhereInput[];
    NOT?: departmentWhereInput | departmentWhereInput[];
    id?: UuidFilter<'department'> | string;
    created_at?: DateTimeFilter<'department'> | Date | string;
    updated_at?: DateTimeFilter<'department'> | Date | string;
  };

  export type departmentOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: departmentWhereInput | departmentWhereInput[];
      OR?: departmentWhereInput[];
      NOT?: departmentWhereInput | departmentWhereInput[];
      created_at?: DateTimeFilter<'department'> | Date | string;
      updated_at?: DateTimeFilter<'department'> | Date | string;
    },
    'id'
  >;

  export type departmentOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: departmentCountOrderByAggregateInput;
    _max?: departmentMaxOrderByAggregateInput;
    _min?: departmentMinOrderByAggregateInput;
  };

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[];
    OR?: departmentScalarWhereWithAggregatesInput[];
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'department'> | string;
    created_at?: DateTimeWithAggregatesFilter<'department'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'department'> | Date | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    job_title?: StringFilter<'employee'> | string;
    start_date?: DateTimeFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    salary?: IntFilter<'employee'> | number;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      user_id?: UuidFilter<'employee'> | string;
      job_title?: StringFilter<'employee'> | string;
      start_date?: DateTimeFilter<'employee'> | Date | string;
      end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
      salary?: IntFilter<'employee'> | number;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    job_title?: StringWithAggregatesFilter<'employee'> | string;
    start_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableWithAggregatesFilter<'employee'> | Date | string | null;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type job_postingWhereInput = {
    AND?: job_postingWhereInput | job_postingWhereInput[];
    OR?: job_postingWhereInput[];
    NOT?: job_postingWhereInput | job_postingWhereInput[];
    id?: UuidFilter<'job_posting'> | string;
    title?: StringFilter<'job_posting'> | string;
    description?: StringFilter<'job_posting'> | string;
    requirements?: StringFilter<'job_posting'> | string;
    hr_manager_id?: UuidFilter<'job_posting'> | string;
    created_at?: DateTimeFilter<'job_posting'> | Date | string;
    updated_at?: DateTimeFilter<'job_posting'> | Date | string;
    applicant?: ApplicantListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type job_postingOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    hr_manager_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    applicant?: applicantOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type job_postingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: job_postingWhereInput | job_postingWhereInput[];
      OR?: job_postingWhereInput[];
      NOT?: job_postingWhereInput | job_postingWhereInput[];
      title?: StringFilter<'job_posting'> | string;
      description?: StringFilter<'job_posting'> | string;
      requirements?: StringFilter<'job_posting'> | string;
      hr_manager_id?: UuidFilter<'job_posting'> | string;
      created_at?: DateTimeFilter<'job_posting'> | Date | string;
      updated_at?: DateTimeFilter<'job_posting'> | Date | string;
      applicant?: ApplicantListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type job_postingOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    hr_manager_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: job_postingCountOrderByAggregateInput;
    _max?: job_postingMaxOrderByAggregateInput;
    _min?: job_postingMinOrderByAggregateInput;
  };

  export type job_postingScalarWhereWithAggregatesInput = {
    AND?: job_postingScalarWhereWithAggregatesInput | job_postingScalarWhereWithAggregatesInput[];
    OR?: job_postingScalarWhereWithAggregatesInput[];
    NOT?: job_postingScalarWhereWithAggregatesInput | job_postingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'job_posting'> | string;
    title?: StringWithAggregatesFilter<'job_posting'> | string;
    description?: StringWithAggregatesFilter<'job_posting'> | string;
    requirements?: StringWithAggregatesFilter<'job_posting'> | string;
    hr_manager_id?: UuidWithAggregatesFilter<'job_posting'> | string;
    created_at?: DateTimeWithAggregatesFilter<'job_posting'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'job_posting'> | Date | string;
  };

  export type performance_reviewWhereInput = {
    AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
    OR?: performance_reviewWhereInput[];
    NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
    id?: UuidFilter<'performance_review'> | string;
    created_at?: DateTimeFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeFilter<'performance_review'> | Date | string;
  };

  export type performance_reviewOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: performance_reviewWhereInput | performance_reviewWhereInput[];
      OR?: performance_reviewWhereInput[];
      NOT?: performance_reviewWhereInput | performance_reviewWhereInput[];
      created_at?: DateTimeFilter<'performance_review'> | Date | string;
      updated_at?: DateTimeFilter<'performance_review'> | Date | string;
    },
    'id'
  >;

  export type performance_reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: performance_reviewCountOrderByAggregateInput;
    _max?: performance_reviewMaxOrderByAggregateInput;
    _min?: performance_reviewMinOrderByAggregateInput;
  };

  export type performance_reviewScalarWhereWithAggregatesInput = {
    AND?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    OR?: performance_reviewScalarWhereWithAggregatesInput[];
    NOT?: performance_reviewScalarWhereWithAggregatesInput | performance_reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'performance_review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'performance_review'> | Date | string;
  };

  export type positionWhereInput = {
    AND?: positionWhereInput | positionWhereInput[];
    OR?: positionWhereInput[];
    NOT?: positionWhereInput | positionWhereInput[];
    id?: UuidFilter<'position'> | string;
    created_at?: DateTimeFilter<'position'> | Date | string;
    updated_at?: DateTimeFilter<'position'> | Date | string;
  };

  export type positionOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type positionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: positionWhereInput | positionWhereInput[];
      OR?: positionWhereInput[];
      NOT?: positionWhereInput | positionWhereInput[];
      created_at?: DateTimeFilter<'position'> | Date | string;
      updated_at?: DateTimeFilter<'position'> | Date | string;
    },
    'id'
  >;

  export type positionOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: positionCountOrderByAggregateInput;
    _max?: positionMaxOrderByAggregateInput;
    _min?: positionMinOrderByAggregateInput;
  };

  export type positionScalarWhereWithAggregatesInput = {
    AND?: positionScalarWhereWithAggregatesInput | positionScalarWhereWithAggregatesInput[];
    OR?: positionScalarWhereWithAggregatesInput[];
    NOT?: positionScalarWhereWithAggregatesInput | positionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'position'> | string;
    created_at?: DateTimeWithAggregatesFilter<'position'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'position'> | Date | string;
  };

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[];
    OR?: scheduleWhereInput[];
    NOT?: scheduleWhereInput | scheduleWhereInput[];
    id?: UuidFilter<'schedule'> | string;
    created_at?: DateTimeFilter<'schedule'> | Date | string;
    updated_at?: DateTimeFilter<'schedule'> | Date | string;
  };

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: scheduleWhereInput | scheduleWhereInput[];
      OR?: scheduleWhereInput[];
      NOT?: scheduleWhereInput | scheduleWhereInput[];
      created_at?: DateTimeFilter<'schedule'> | Date | string;
      updated_at?: DateTimeFilter<'schedule'> | Date | string;
    },
    'id'
  >;

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: scheduleCountOrderByAggregateInput;
    _max?: scheduleMaxOrderByAggregateInput;
    _min?: scheduleMinOrderByAggregateInput;
  };

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    OR?: scheduleScalarWhereWithAggregatesInput[];
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'schedule'> | string;
    created_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user_id?: UuidFilter<'team'> | string;
    tenant_id?: StringFilter<'team'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      description?: StringNullableFilter<'team'> | string | null;
      name?: StringFilter<'team'> | string;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      user_id?: UuidFilter<'team'> | string;
      tenant_id?: StringFilter<'team'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    name?: StringWithAggregatesFilter<'team'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'team'> | string;
    tenant_id?: StringWithAggregatesFilter<'team'> | string;
  };

  export type trainingWhereInput = {
    AND?: trainingWhereInput | trainingWhereInput[];
    OR?: trainingWhereInput[];
    NOT?: trainingWhereInput | trainingWhereInput[];
    id?: UuidFilter<'training'> | string;
    created_at?: DateTimeFilter<'training'> | Date | string;
    updated_at?: DateTimeFilter<'training'> | Date | string;
  };

  export type trainingOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trainingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: trainingWhereInput | trainingWhereInput[];
      OR?: trainingWhereInput[];
      NOT?: trainingWhereInput | trainingWhereInput[];
      created_at?: DateTimeFilter<'training'> | Date | string;
      updated_at?: DateTimeFilter<'training'> | Date | string;
    },
    'id'
  >;

  export type trainingOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: trainingCountOrderByAggregateInput;
    _max?: trainingMaxOrderByAggregateInput;
    _min?: trainingMinOrderByAggregateInput;
  };

  export type trainingScalarWhereWithAggregatesInput = {
    AND?: trainingScalarWhereWithAggregatesInput | trainingScalarWhereWithAggregatesInput[];
    OR?: trainingScalarWhereWithAggregatesInput[];
    NOT?: trainingScalarWhereWithAggregatesInput | trainingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'training'> | string;
    created_at?: DateTimeWithAggregatesFilter<'training'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'training'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    applicant?: ApplicantListRelationFilter;
    employee?: EmployeeListRelationFilter;
    job_posting?: Job_postingListRelationFilter;
    team?: TeamListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    applicant?: applicantOrderByRelationAggregateInput;
    employee?: employeeOrderByRelationAggregateInput;
    job_posting?: job_postingOrderByRelationAggregateInput;
    team?: teamOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      applicant?: ApplicantListRelationFilter;
      employee?: EmployeeListRelationFilter;
      job_posting?: Job_postingListRelationFilter;
      team?: TeamListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type applicantCreateInput = {
    id?: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting: job_postingCreateNestedOneWithoutApplicantInput;
    user: userCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateInput = {
    id?: string;
    user_id: string;
    job_posting_id: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUpdateOneRequiredWithoutApplicantNestedInput;
    user?: userUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantCreateManyInput = {
    id?: string;
    user_id: string;
    job_posting_id: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type benefitCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type benefitUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type benefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type benefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type benefitCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type benefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type benefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type departmentUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type departmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type departmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type departmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    job_title: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    user_id: string;
    job_title: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyInput = {
    id?: string;
    user_id: string;
    job_title: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_postingCreateInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutJob_postingInput;
    user: userCreateNestedOneWithoutJob_postingInput;
  };

  export type job_postingUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    hr_manager_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutJob_postingInput;
  };

  export type job_postingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutJob_postingNestedInput;
    user?: userUpdateOneRequiredWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    hr_manager_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutJob_postingNestedInput;
  };

  export type job_postingCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    hr_manager_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_postingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_postingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    hr_manager_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type performance_reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type performance_reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type positionCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type positionUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type positionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type positionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type positionCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type positionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type positionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teamCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type trainingCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trainingUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trainingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trainingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trainingCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trainingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trainingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    job_posting?: job_postingCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutUserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUpdateManyWithoutUserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUncheckedUpdateManyWithoutUserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type Job_postingRelationFilter = {
    is?: job_postingWhereInput;
    isNot?: job_postingWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type applicantCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_posting_id?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicantMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_posting_id?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicantMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_posting_id?: SortOrder;
    resume?: SortOrder;
    cover_letter?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type benefitCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type benefitMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type benefitMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type departmentMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    job_title?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    salary?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type ApplicantListRelationFilter = {
    every?: applicantWhereInput;
    some?: applicantWhereInput;
    none?: applicantWhereInput;
  };

  export type applicantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type job_postingCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    hr_manager_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_postingMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    hr_manager_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_postingMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    requirements?: SortOrder;
    hr_manager_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type performance_reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type positionCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type positionMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type positionMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type trainingCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trainingMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trainingMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type Job_postingListRelationFilter = {
    every?: job_postingWhereInput;
    some?: job_postingWhereInput;
    none?: job_postingWhereInput;
  };

  export type TeamListRelationFilter = {
    every?: teamWhereInput;
    some?: teamWhereInput;
    none?: teamWhereInput;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type job_postingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type job_postingCreateNestedOneWithoutApplicantInput = {
    create?: XOR<job_postingCreateWithoutApplicantInput, job_postingUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: job_postingCreateOrConnectWithoutApplicantInput;
    connect?: job_postingWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutApplicantInput = {
    create?: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicantInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type job_postingUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<job_postingCreateWithoutApplicantInput, job_postingUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: job_postingCreateOrConnectWithoutApplicantInput;
    upsert?: job_postingUpsertWithoutApplicantInput;
    connect?: job_postingWhereUniqueInput;
    update?: XOR<
      XOR<job_postingUpdateToOneWithWhereWithoutApplicantInput, job_postingUpdateWithoutApplicantInput>,
      job_postingUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type userUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicantInput;
    upsert?: userUpsertWithoutApplicantInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutApplicantInput, userUpdateWithoutApplicantInput>,
      userUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type applicantCreateNestedManyWithoutJob_postingInput = {
    create?:
      | XOR<applicantCreateWithoutJob_postingInput, applicantUncheckedCreateWithoutJob_postingInput>
      | applicantCreateWithoutJob_postingInput[]
      | applicantUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | applicantCreateOrConnectWithoutJob_postingInput
      | applicantCreateOrConnectWithoutJob_postingInput[];
    createMany?: applicantCreateManyJob_postingInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutJob_postingInput = {
    create?: XOR<userCreateWithoutJob_postingInput, userUncheckedCreateWithoutJob_postingInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_postingInput;
    connect?: userWhereUniqueInput;
  };

  export type applicantUncheckedCreateNestedManyWithoutJob_postingInput = {
    create?:
      | XOR<applicantCreateWithoutJob_postingInput, applicantUncheckedCreateWithoutJob_postingInput>
      | applicantCreateWithoutJob_postingInput[]
      | applicantUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | applicantCreateOrConnectWithoutJob_postingInput
      | applicantCreateOrConnectWithoutJob_postingInput[];
    createMany?: applicantCreateManyJob_postingInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type applicantUpdateManyWithoutJob_postingNestedInput = {
    create?:
      | XOR<applicantCreateWithoutJob_postingInput, applicantUncheckedCreateWithoutJob_postingInput>
      | applicantCreateWithoutJob_postingInput[]
      | applicantUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | applicantCreateOrConnectWithoutJob_postingInput
      | applicantCreateOrConnectWithoutJob_postingInput[];
    upsert?:
      | applicantUpsertWithWhereUniqueWithoutJob_postingInput
      | applicantUpsertWithWhereUniqueWithoutJob_postingInput[];
    createMany?: applicantCreateManyJob_postingInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?:
      | applicantUpdateWithWhereUniqueWithoutJob_postingInput
      | applicantUpdateWithWhereUniqueWithoutJob_postingInput[];
    updateMany?:
      | applicantUpdateManyWithWhereWithoutJob_postingInput
      | applicantUpdateManyWithWhereWithoutJob_postingInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutJob_postingNestedInput = {
    create?: XOR<userCreateWithoutJob_postingInput, userUncheckedCreateWithoutJob_postingInput>;
    connectOrCreate?: userCreateOrConnectWithoutJob_postingInput;
    upsert?: userUpsertWithoutJob_postingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutJob_postingInput, userUpdateWithoutJob_postingInput>,
      userUncheckedUpdateWithoutJob_postingInput
    >;
  };

  export type applicantUncheckedUpdateManyWithoutJob_postingNestedInput = {
    create?:
      | XOR<applicantCreateWithoutJob_postingInput, applicantUncheckedCreateWithoutJob_postingInput>
      | applicantCreateWithoutJob_postingInput[]
      | applicantUncheckedCreateWithoutJob_postingInput[];
    connectOrCreate?:
      | applicantCreateOrConnectWithoutJob_postingInput
      | applicantCreateOrConnectWithoutJob_postingInput[];
    upsert?:
      | applicantUpsertWithWhereUniqueWithoutJob_postingInput
      | applicantUpsertWithWhereUniqueWithoutJob_postingInput[];
    createMany?: applicantCreateManyJob_postingInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?:
      | applicantUpdateWithWhereUniqueWithoutJob_postingInput
      | applicantUpdateWithWhereUniqueWithoutJob_postingInput[];
    updateMany?:
      | applicantUpdateManyWithWhereWithoutJob_postingInput
      | applicantUpdateManyWithWhereWithoutJob_postingInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutTeamInput = {
    create?: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeamInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeamInput;
    upsert?: userUpsertWithoutTeamInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeamInput, userUpdateWithoutTeamInput>,
      userUncheckedUpdateWithoutTeamInput
    >;
  };

  export type applicantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type job_postingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_postingCreateWithoutUserInput, job_postingUncheckedCreateWithoutUserInput>
      | job_postingCreateWithoutUserInput[]
      | job_postingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutUserInput | job_postingCreateOrConnectWithoutUserInput[];
    createMany?: job_postingCreateManyUserInputEnvelope;
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
  };

  export type teamCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
  };

  export type applicantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type job_postingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<job_postingCreateWithoutUserInput, job_postingUncheckedCreateWithoutUserInput>
      | job_postingCreateWithoutUserInput[]
      | job_postingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutUserInput | job_postingCreateOrConnectWithoutUserInput[];
    createMany?: job_postingCreateManyUserInputEnvelope;
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
  };

  export type teamUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
  };

  export type applicantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutUserInput | applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutUserInput | applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutUserInput | applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type job_postingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_postingCreateWithoutUserInput, job_postingUncheckedCreateWithoutUserInput>
      | job_postingCreateWithoutUserInput[]
      | job_postingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutUserInput | job_postingCreateOrConnectWithoutUserInput[];
    upsert?: job_postingUpsertWithWhereUniqueWithoutUserInput | job_postingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_postingCreateManyUserInputEnvelope;
    set?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    disconnect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    delete?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    update?: job_postingUpdateWithWhereUniqueWithoutUserInput | job_postingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: job_postingUpdateManyWithWhereWithoutUserInput | job_postingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
  };

  export type teamUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    upsert?: teamUpsertWithWhereUniqueWithoutUserInput | teamUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    set?: teamWhereUniqueInput | teamWhereUniqueInput[];
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[];
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    update?: teamUpdateWithWhereUniqueWithoutUserInput | teamUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teamUpdateManyWithWhereWithoutUserInput | teamUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[];
  };

  export type applicantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutUserInput | applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutUserInput | applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutUserInput | applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type job_postingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<job_postingCreateWithoutUserInput, job_postingUncheckedCreateWithoutUserInput>
      | job_postingCreateWithoutUserInput[]
      | job_postingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: job_postingCreateOrConnectWithoutUserInput | job_postingCreateOrConnectWithoutUserInput[];
    upsert?: job_postingUpsertWithWhereUniqueWithoutUserInput | job_postingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: job_postingCreateManyUserInputEnvelope;
    set?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    disconnect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    delete?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    connect?: job_postingWhereUniqueInput | job_postingWhereUniqueInput[];
    update?: job_postingUpdateWithWhereUniqueWithoutUserInput | job_postingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: job_postingUpdateManyWithWhereWithoutUserInput | job_postingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
  };

  export type teamUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>
      | teamCreateWithoutUserInput[]
      | teamUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teamCreateOrConnectWithoutUserInput | teamCreateOrConnectWithoutUserInput[];
    upsert?: teamUpsertWithWhereUniqueWithoutUserInput | teamUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teamCreateManyUserInputEnvelope;
    set?: teamWhereUniqueInput | teamWhereUniqueInput[];
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[];
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    update?: teamUpdateWithWhereUniqueWithoutUserInput | teamUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teamUpdateManyWithWhereWithoutUserInput | teamUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type job_postingCreateWithoutApplicantInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutJob_postingInput;
  };

  export type job_postingUncheckedCreateWithoutApplicantInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    hr_manager_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_postingCreateOrConnectWithoutApplicantInput = {
    where: job_postingWhereUniqueInput;
    create: XOR<job_postingCreateWithoutApplicantInput, job_postingUncheckedCreateWithoutApplicantInput>;
  };

  export type userCreateWithoutApplicantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeCreateNestedManyWithoutUserInput;
    job_posting?: job_postingCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutApplicantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutUserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutApplicantInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
  };

  export type job_postingUpsertWithoutApplicantInput = {
    update: XOR<job_postingUpdateWithoutApplicantInput, job_postingUncheckedUpdateWithoutApplicantInput>;
    create: XOR<job_postingCreateWithoutApplicantInput, job_postingUncheckedCreateWithoutApplicantInput>;
    where?: job_postingWhereInput;
  };

  export type job_postingUpdateToOneWithWhereWithoutApplicantInput = {
    where?: job_postingWhereInput;
    data: XOR<job_postingUpdateWithoutApplicantInput, job_postingUncheckedUpdateWithoutApplicantInput>;
  };

  export type job_postingUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    hr_manager_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutApplicantInput = {
    update: XOR<userUpdateWithoutApplicantInput, userUncheckedUpdateWithoutApplicantInput>;
    create: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutApplicantInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutApplicantInput, userUncheckedUpdateWithoutApplicantInput>;
  };

  export type userUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUpdateManyWithoutUserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUncheckedUpdateManyWithoutUserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    job_posting?: job_postingCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutUserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUpdateManyWithoutUserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUncheckedUpdateManyWithoutUserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicantCreateWithoutJob_postingInput = {
    id?: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateWithoutJob_postingInput = {
    id?: string;
    user_id: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantCreateOrConnectWithoutJob_postingInput = {
    where: applicantWhereUniqueInput;
    create: XOR<applicantCreateWithoutJob_postingInput, applicantUncheckedCreateWithoutJob_postingInput>;
  };

  export type applicantCreateManyJob_postingInputEnvelope = {
    data: applicantCreateManyJob_postingInput | applicantCreateManyJob_postingInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutJob_postingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutJob_postingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    team?: teamUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutJob_postingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutJob_postingInput, userUncheckedCreateWithoutJob_postingInput>;
  };

  export type applicantUpsertWithWhereUniqueWithoutJob_postingInput = {
    where: applicantWhereUniqueInput;
    update: XOR<applicantUpdateWithoutJob_postingInput, applicantUncheckedUpdateWithoutJob_postingInput>;
    create: XOR<applicantCreateWithoutJob_postingInput, applicantUncheckedCreateWithoutJob_postingInput>;
  };

  export type applicantUpdateWithWhereUniqueWithoutJob_postingInput = {
    where: applicantWhereUniqueInput;
    data: XOR<applicantUpdateWithoutJob_postingInput, applicantUncheckedUpdateWithoutJob_postingInput>;
  };

  export type applicantUpdateManyWithWhereWithoutJob_postingInput = {
    where: applicantScalarWhereInput;
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyWithoutJob_postingInput>;
  };

  export type applicantScalarWhereInput = {
    AND?: applicantScalarWhereInput | applicantScalarWhereInput[];
    OR?: applicantScalarWhereInput[];
    NOT?: applicantScalarWhereInput | applicantScalarWhereInput[];
    id?: UuidFilter<'applicant'> | string;
    user_id?: UuidFilter<'applicant'> | string;
    job_posting_id?: UuidFilter<'applicant'> | string;
    resume?: StringFilter<'applicant'> | string;
    cover_letter?: StringNullableFilter<'applicant'> | string | null;
    status?: StringFilter<'applicant'> | string;
    created_at?: DateTimeFilter<'applicant'> | Date | string;
    updated_at?: DateTimeFilter<'applicant'> | Date | string;
  };

  export type userUpsertWithoutJob_postingInput = {
    update: XOR<userUpdateWithoutJob_postingInput, userUncheckedUpdateWithoutJob_postingInput>;
    create: XOR<userCreateWithoutJob_postingInput, userUncheckedCreateWithoutJob_postingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutJob_postingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutJob_postingInput, userUncheckedUpdateWithoutJob_postingInput>;
  };

  export type userUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    team?: teamUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    team?: teamUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutTeamInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    job_posting?: job_postingCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeamInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    job_posting?: job_postingUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeamInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userUpsertWithoutTeamInput = {
    update: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeamInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
  };

  export type userUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    job_posting?: job_postingUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicantCreateWithoutUserInput = {
    id?: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    job_posting: job_postingCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateWithoutUserInput = {
    id?: string;
    job_posting_id: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantCreateOrConnectWithoutUserInput = {
    where: applicantWhereUniqueInput;
    create: XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>;
  };

  export type applicantCreateManyUserInputEnvelope = {
    data: applicantCreateManyUserInput | applicantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    job_title: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    job_title: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type job_postingCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutJob_postingInput;
  };

  export type job_postingUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutJob_postingInput;
  };

  export type job_postingCreateOrConnectWithoutUserInput = {
    where: job_postingWhereUniqueInput;
    create: XOR<job_postingCreateWithoutUserInput, job_postingUncheckedCreateWithoutUserInput>;
  };

  export type job_postingCreateManyUserInputEnvelope = {
    data: job_postingCreateManyUserInput | job_postingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type teamCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type teamUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type teamCreateOrConnectWithoutUserInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type teamCreateManyUserInputEnvelope = {
    data: teamCreateManyUserInput | teamCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type applicantUpsertWithWhereUniqueWithoutUserInput = {
    where: applicantWhereUniqueInput;
    update: XOR<applicantUpdateWithoutUserInput, applicantUncheckedUpdateWithoutUserInput>;
    create: XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>;
  };

  export type applicantUpdateWithWhereUniqueWithoutUserInput = {
    where: applicantWhereUniqueInput;
    data: XOR<applicantUpdateWithoutUserInput, applicantUncheckedUpdateWithoutUserInput>;
  };

  export type applicantUpdateManyWithWhereWithoutUserInput = {
    where: applicantScalarWhereInput;
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    user_id?: UuidFilter<'employee'> | string;
    job_title?: StringFilter<'employee'> | string;
    start_date?: DateTimeFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    salary?: IntFilter<'employee'> | number;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type job_postingUpsertWithWhereUniqueWithoutUserInput = {
    where: job_postingWhereUniqueInput;
    update: XOR<job_postingUpdateWithoutUserInput, job_postingUncheckedUpdateWithoutUserInput>;
    create: XOR<job_postingCreateWithoutUserInput, job_postingUncheckedCreateWithoutUserInput>;
  };

  export type job_postingUpdateWithWhereUniqueWithoutUserInput = {
    where: job_postingWhereUniqueInput;
    data: XOR<job_postingUpdateWithoutUserInput, job_postingUncheckedUpdateWithoutUserInput>;
  };

  export type job_postingUpdateManyWithWhereWithoutUserInput = {
    where: job_postingScalarWhereInput;
    data: XOR<job_postingUpdateManyMutationInput, job_postingUncheckedUpdateManyWithoutUserInput>;
  };

  export type job_postingScalarWhereInput = {
    AND?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
    OR?: job_postingScalarWhereInput[];
    NOT?: job_postingScalarWhereInput | job_postingScalarWhereInput[];
    id?: UuidFilter<'job_posting'> | string;
    title?: StringFilter<'job_posting'> | string;
    description?: StringFilter<'job_posting'> | string;
    requirements?: StringFilter<'job_posting'> | string;
    hr_manager_id?: UuidFilter<'job_posting'> | string;
    created_at?: DateTimeFilter<'job_posting'> | Date | string;
    updated_at?: DateTimeFilter<'job_posting'> | Date | string;
  };

  export type teamUpsertWithWhereUniqueWithoutUserInput = {
    where: teamWhereUniqueInput;
    update: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type teamUpdateWithWhereUniqueWithoutUserInput = {
    where: teamWhereUniqueInput;
    data: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
  };

  export type teamUpdateManyWithWhereWithoutUserInput = {
    where: teamScalarWhereInput;
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyWithoutUserInput>;
  };

  export type teamScalarWhereInput = {
    AND?: teamScalarWhereInput | teamScalarWhereInput[];
    OR?: teamScalarWhereInput[];
    NOT?: teamScalarWhereInput | teamScalarWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user_id?: UuidFilter<'team'> | string;
    tenant_id?: StringFilter<'team'> | string;
  };

  export type applicantCreateManyJob_postingInput = {
    id?: string;
    user_id: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyWithoutJob_postingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantCreateManyUserInput = {
    id?: string;
    job_posting_id: string;
    resume: string;
    cover_letter?: string | null;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    job_title: string;
    start_date: Date | string;
    end_date?: Date | string | null;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type job_postingCreateManyUserInput = {
    id?: string;
    title: string;
    description: string;
    requirements: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type applicantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    job_posting?: job_postingUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_posting_id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    cover_letter?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    job_title?: StringFieldUpdateOperationsInput | string;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type job_postingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutJob_postingNestedInput;
  };

  export type job_postingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    requirements?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type teamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Job_postingCountOutputTypeDefaultArgs instead
   */
  export type Job_postingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Job_postingCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use applicantDefaultArgs instead
   */
  export type applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    applicantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use benefitDefaultArgs instead
   */
  export type benefitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    benefitDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use departmentDefaultArgs instead
   */
  export type departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    departmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use job_postingDefaultArgs instead
   */
  export type job_postingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    job_postingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use performance_reviewDefaultArgs instead
   */
  export type performance_reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    performance_reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use positionDefaultArgs instead
   */
  export type positionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    positionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use scheduleDefaultArgs instead
   */
  export type scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    scheduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use trainingDefaultArgs instead
   */
  export type trainingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    trainingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
