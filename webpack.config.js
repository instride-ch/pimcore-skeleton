const Encore = require('@symfony/webpack-encore');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { resolve } = require('path');
const { version } = require('uikit/package.json');

const paths = {
  output: resolve(__dirname, './public/build/'),
  pattern: /\.(jpe?g|png|gif|svg|webp)$/i,
  public: 'build',
  source: resolve(__dirname, './assets'),
  vendor: resolve(__dirname, './node_modules'),
};

Encore
  // Set output and public paths
  .setOutputPath(`${paths.output}/`)
  .setPublicPath(`/${paths.public}`)

  // Clean output before build
  .cleanupOutputBeforeBuild()

  // Entries
  .addEntry('js/app', `${paths.source}/js/app.js`)
  .addStyleEntry('css/email', `${paths.source}/scss/email.scss`)
  .addStyleEntry('css/editmode', `${paths.source}/scss/editmode.scss`)

  // JavaScript
  .enableSingleRuntimeChunk()
  .enableEslintPlugin()
  .splitEntryChunks()
  .configureBabel(() => {}, {
    includeNodeModules: [
      'uikit',
    ],
    useBuiltIns: 'usage',
    corejs: 3,
  })
  .configureDefinePlugin((options) => {
    options.VERSION = JSON.stringify(version);
  })
  .addAliases({ 'uikit-util': `${paths.vendor}/uikit/src/js/util` })

  // CSS
  .enableSassLoader((options) => {
    options.sassOptions.quietDeps = true;
  }, { resolveUrlLoader: false })
  .enablePostCssLoader()
  .addPlugin(new StyleLintPlugin())

  // Copy and optimize images
  .copyFiles({
    from: `${paths.source}/images`,
    to: '[path][name].[hash:8].[ext]',
    pattern: paths.pattern,
    context: paths.source,
  })

  // Source maps and cache buster
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  // Advanced config options
  .configureDevServerOptions((options) => {
    options.allowedHosts = 'all';
    options.http2 = true;
    options.https = {
      cert: '/etc/ssl/dev.local+4.pem',
      key: '/etc/ssl/dev.local+4-key.pem',
    };
  })
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
    loader: 'raw-loader',
    test: /\.svg$/,
    include: [
      `${paths.vendor}/uikit`,
      `${paths.source}/custom/icons`,
    ],
  });

module.exports = Encore.getWebpackConfig();
