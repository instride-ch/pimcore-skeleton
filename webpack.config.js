const { resolve } = require('path');
const Encore = require('@symfony/webpack-encore');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const StyleLintPlugin = require('stylelint-webpack-plugin');

const paths = {
  output: resolve(__dirname, './web/build'),
  public: '/build',
  source: resolve(__dirname, './assets'),
  vendor: resolve(__dirname, './node_modules'),
};

Encore
// Set output and public paths
  .setOutputPath(paths.output)
  .setPublicPath(paths.public)

  // Clean output before build
  .cleanupOutputBeforeBuild()

  // JavaScript
  .autoProvideVariables({
    UIkit: 'uikit/dist/js/uikit-core',
    'window.UIkit': 'uikit/dist/js/uikit-core',
  })
  .addEntry('js/app', `${paths.source}/js/main.js`)
  .addLoader({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader',
  })
  .configureBabel((babelConfig) => {
    babelConfig.presets.push(
      ['env', {
        targets: {
          browsers: [
            '>0.25%',
            'not ie <= 10',
            'not op_mini all',
          ]
        },
        useBuiltIns: true,
      }]
    );
  })

  // CSS
  .addStyleEntry('css/global', `${paths.source}/scss/global.scss`)
  .addStyleEntry('css/email', `${paths.source}/scss/email.scss`)
  .addStyleEntry('css/editmode', `${paths.source}/scss/editmode.scss`)
  .enableSassLoader((options) => {
    options.includePaths = [
      `${paths.vendor}/uikit/src/scss`,
      `${paths.vendor}/foundation-emails/scss`,
    ]
  }, { resolveUrlLoader: false })
  .enablePostCssLoader()
  .addPlugin(new StyleLintPlugin())

  // Optimize images
  .addPlugin(new ImageminPlugin({
    disable: !Encore.isProduction(),
    test: /\.(jpe?g|png|gif|svg|webp)$/i,
  }))

  // Source maps and cache buster
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

// Advanced webpack config
const config = Encore.getWebpackConfig();

config.resolve.extensions.push('json');
config.resolve.alias['uikit-util'] = `${paths.vendor}/uikit/src/js/util`;
config.watchOptions = {
  ignored: `${paths.vendor}/`,
  poll: true,
};

for (const rule of config.module.rules) {
  if (rule.use) {
    for (const loader of rule.use) {
      if (loader.loader === 'babel-loader') {
        delete rule.exclude;
      }
    }
  }
}

module.exports = config;