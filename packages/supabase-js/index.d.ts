export interface SupabaseClientOptions {
  [key: string]: unknown;
}

export interface SupabaseClient {
  url: string;
  anonKey: string;
  options: SupabaseClientOptions;
  auth: {
    getSession: () => Promise<{ data: { session: null }; error: null }>;
  };
  from: (table: string) => {
    select: () => Promise<{ data: unknown[]; error: null }>;
    insert: (values: unknown) => Promise<{ data: unknown[]; error: null }>;
  };
}

export declare function createClient(
  url: string,
  anonKey: string,
  options?: SupabaseClientOptions
): SupabaseClient;
