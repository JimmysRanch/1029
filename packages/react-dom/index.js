export function render(element, container) {
  if (!container) return;
  container.innerHTML = JSON.stringify(element, null, 2);
}

export default {
  render
};
