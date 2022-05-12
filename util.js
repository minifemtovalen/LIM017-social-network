export function createElements(...args) {
  const elements = [];
  for (let i = 0; i < args.length; i += 1) {
    elements.push(document.createElement(args[i]));
  }
  return elements;
}
