export const Fragment = Symbol.for('react.fragment');

export function createElement(type, props, ...children) {
  return {
    $$typeof: Symbol.for('react.element'),
    type,
    key: props && props.key != null ? props.key : null,
    ref: props && props.ref != null ? props.ref : null,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children
    }
  };
}

export default {
  createElement,
  Fragment
};
