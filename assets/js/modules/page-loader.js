const {
  $,
  once,
  remove,
  transition,
} = UIkit.util;

export default function pageLoader() {
  window.onload = () => {
    const loader = $('#page-loader');

    transition(loader, { opacity: 0 });
    once(loader, 'transitionend', () => remove(loader));
  };
}
