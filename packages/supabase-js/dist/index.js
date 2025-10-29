export function createClient(url, anonKey, options = {}) {
  if (typeof url !== 'string' || typeof anonKey !== 'string') {
    throw new Error('Supabase client requires url and anon key');
  }

  return {
    url,
    anonKey,
    options,
    auth: {
      getSession: async () => ({ data: { session: null }, error: null })
    },
    from: () => ({
      select: async () => ({ data: [], error: null }),
      insert: async () => ({ data: [], error: null })
    })
  };
}
