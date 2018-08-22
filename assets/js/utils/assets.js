import WebFont from 'webfontloader';

export function loadFonts() {
  WebFont.load({
    google: {
      families: ['Roboto:400,700'],
    },
  });
}

export function loadImages() {
  const imagesContext = require.context('../../images', true, /\.(png|jpg|jpeg|gif|ico|svg|webp)$/);
  imagesContext.keys().forEach(imagesContext);
}
