import imagesLoaded from 'imagesloaded';

export default function glitchImage() {
  const { addClass, removeClass } = UIkit.util;

  imagesLoaded('.glitch-image', { background: true }, () => {
    removeClass(document.body, 'loading');
    addClass(document.body, 'image-loaded');
  });
}
