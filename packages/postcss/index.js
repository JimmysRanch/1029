export function process(css, plugins = []) {
  let result = css;
  for (const plugin of plugins) {
    if (typeof plugin === 'function') {
      plugin();
    }
  }
  return Promise.resolve({ css: result });
}
