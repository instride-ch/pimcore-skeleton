const { resolve } = require('path');
const Encore = require('@symfony/webpack-encore');
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
  .setOutputPath(`${paths.output}/`)
  .setPublicPath(`/${paths.public}`)
  .setManifestKeyPrefix(`${paths.public}/`)

  // Clean output before build
  .cleanupOutputBeforeBuild()

  // JavaScript
  .addEntry('js/app', `${paths.source}/js/main.js`)
  .enableSingleRuntimeChunk()
  .enableEslintLoader()
  .splitEntryChunks()
  .configureBabel(() => {}, {
    includeNodeModules: ['uikit'],
    useBuiltIns: 'usage',
    corejs: 3,
  })
  .configureDefinePlugin((options) => {
    options.VERSION = JSON.stringify(version);
  })
  .addAliases({ 'uikit-util': `${paths.vendor}/uikit/src/js/util` })

  // CSS
  .addStyleEntry('css/global', `${paths.source}/scss/global.scss`)
  .addStyleEntry('css/email', `${paths.source}/scss/email.scss`)
  .addStyleEntry('css/editmode', `${paths.source}/scss/editmode.scss`)
  .enableSassLoader(() => {}, { resolveUrlLoader: false })
  .enablePostCssLoader()
  .addPlugin(new StyleLintPlugin())

  // Copy and optimize images
  .copyFiles({
    from: `${paths.source}/images`,
    pattern: paths.pattern,
    to: 'images/[path][name].[hash:8].[ext]',
  })

  // Source maps and cache buster
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  // Advanced config options
  .configureWatchOptions((options) => {
    options.poll = true;
    options.ignored = `${paths.vendor}/`;
  })
  .configureLoaderRule('images', (rule) => {
    rule.exclude = [
      `${paths.vendor}/uikit`,
      `${paths.source}/custom/icons`,
    ];
  })
  .addRule({
    test: /\.svg$/,
    include: [
      `${paths.vendor}/uikit`,
      `${paths.source}/custom/icons`,
    ],
    loader: 'raw-loader'
  })
;

// Advanced webpack config
const config = Encore.getWebpackConfig();
config.optimization.concatenateModules = true;

module.exports = config;
