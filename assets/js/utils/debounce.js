export default function debounce(fn, time = 300) {
  let interval;

  return (...args) => {
    clearTimeout(interval);

    interval = setTimeout(() => {
      interval = null;
      fn(...args);
    }, time);
  };
}
