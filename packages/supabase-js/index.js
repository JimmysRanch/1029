export function createClient(url, anonKey, options = {}) {
  return {
    url,
    anonKey,
    options,
    from(table) {
      return {
        select() {
          return Promise.resolve({ data: [], error: null });
        }
      };
    }
  };
}

export default {
  createClient
};
