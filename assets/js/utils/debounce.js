export default function debounce(fn, ...args) {
  let timeout;

  return function call() {
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, 300);
  };
}
