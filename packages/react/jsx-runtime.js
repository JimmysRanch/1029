export const Fragment = Symbol.for('react.fragment');
export function jsx(type, props, key) {
  return { type, props: { ...props, key } };
}
export const jsxs = jsx;
export function jsxDEV(type, props) {
  return { type, props };
}
