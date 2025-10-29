export type SupabaseClient = ReturnType<typeof createClient>;

export declare function createClient(
  supabaseUrl: string,
  supabaseKey: string
): {
  auth: {
    getSession: () => Promise<{ data: null; error: null }>;
  };
  from: (table: string) => {
    select: <T = unknown>() => Promise<{ data: T[]; error: null }>;
    insert: <T = unknown>(values: T) => Promise<{ data: T; error: null }>;
    update: <T = unknown>(values: Partial<T>) => Promise<{ data: T; error: null }>;
    delete: () => Promise<{ data: unknown[]; error: null }>;
  };
};
