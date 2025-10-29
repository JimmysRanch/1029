export default function Link({ href, children, ...rest }) {
  return {
    type: 'a',
    props: { href, ...rest, children }
  };
}
