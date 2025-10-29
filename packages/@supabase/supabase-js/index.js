export function createClient() {
  return {
    auth: {
      getSession: async () => ({ data: null, error: null })
    },
    from: () => ({
      select: async () => ({ data: [], error: null }),
      insert: async () => ({ data: [], error: null }),
      update: async () => ({ data: [], error: null }),
      delete: async () => ({ data: [], error: null })
    })
  };
}
