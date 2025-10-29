const jsxSymbol = Symbol.for('react.element');
const fragmentSymbol = Symbol.for('react.fragment');

function createElement(type, props, key) {
  return {
    $$typeof: jsxSymbol,
    type,
    key: key ?? null,
    ref: props && props.ref != null ? props.ref : null,
    props: { ...props }
  };
}

export const Fragment = fragmentSymbol;
export const jsx = createElement;
export const jsxs = createElement;
export const jsxDEV = createElement;
