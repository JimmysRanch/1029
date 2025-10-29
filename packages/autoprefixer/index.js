export default function autoprefixer() {
  return {
    postcssPlugin: 'autoprefixer',
    Once(root) {
      return root;
    }
  };
}

export const postcss = true;
