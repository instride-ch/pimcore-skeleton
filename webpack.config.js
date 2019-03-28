const { resolve } = require('path');
const Encore = require('@symfony/webpack-encore');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { version } = require('uikit/package.json');

const paths = {
  output: resolve(__dirname, './web/build/'),
  pattern: /\.(jpe?g|png|gif|svg|webp)$/i,
  public: 'build',
  source: resolve(__dirname, './assets'),
  vendor: resolve(__dirname, './node_modules'),
};

Encore
  // Set output and public paths
  .setOutputPath(paths.output)
  .setPublicPath(`/${paths.public}`)
  .setManifestKeyPrefix(`${paths.public}/`)

  // Clean output before build
  .cleanupOutputBeforeBuild()

  // JavaScript
  .addEntry('js/app', `${paths.source}/js/main.js`)
  .enableSingleRuntimeChunk()
  .enableEslintLoader()
  .splitEntryChunks()
  .configureBabel(() => {}, { include_node_modules: ['uikit'] })
  .configureDefinePlugin((options) => {
    options.VERSION = JSON.stringify(version);
  })
  .addAliases({ 'uikit-util': `${paths.vendor}/uikit/src/js/util` })
  .addRule({
    test: /\.svg$/,
    use: 'raw-loader'
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

  // Copy and optimize images
  .disableImagesLoader()
  .copyFiles({
    from: `${paths.source}/images`,
    pattern: paths.pattern,
    to: 'images/[path][name].[hash:8].[ext]',
  })
  .addPlugin(new ImageminPlugin({
    disable: !Encore.isProduction(),
    test: paths.pattern,
  }))

  // Source maps and cache buster
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

// Advanced webpack config
const config = Encore.getWebpackConfig();
config.optimization.concatenateModules = true;
config.watchOptions = { poll: true, ignored: `${paths.vendor}/` };

module.exports = config;
