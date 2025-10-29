export const Fragment = Symbol.for('react.fragment');

export function createElement(type, props, ...children) {
  return { type, props: { ...props, children } };
}

export function useState(initialValue) {
  let value = typeof initialValue === 'function' ? initialValue() : initialValue;
  const setValue = (next) => {
    value = typeof next === 'function' ? next(value) : next;
    return value;
  };
  return [value, setValue];
}

export function useEffect() {}
export function useMemo(factory) {
  return factory();
}
export function useCallback(fn) {
  return fn;
}
export function useRef(value = null) {
  return { current: value };
}

export default {
  Fragment,
  createElement,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef
};
