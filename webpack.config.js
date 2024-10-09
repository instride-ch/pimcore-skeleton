import Encore from "@symfony/webpack-encore";
import fs from "fs";
import path from "path";
import uikit from "uikit/package.json" with { type: "json" };

const paths = {
  public: "/build",
  source: path.resolve(import.meta.dirname, "assets"),
  output: path.resolve(import.meta.dirname, "public/build"),
};

Encore
  // Set output and public paths
  .setOutputPath(paths.output)
  .setPublicPath(paths.public)

  // Clean output before build
  .cleanupOutputBeforeBuild()

  // Entries
  .addEntry("js/app", `${paths.source}/js/app.js`)
  .addStyleEntry("css/email", `${paths.source}/styles/email.scss`)
  .addStyleEntry("css/editmode", `${paths.source}/styles/editmode.css`)

  // JavaScript
  .enableSingleRuntimeChunk()
  .splitEntryChunks()
  .configureBabel(() => {}, {
    useBuiltIns: "usage",
    corejs: 3,
  })
  .configureDefinePlugin((options) => {
    options.LOG = false;
    options.VERSION = JSON.stringify(uikit.version);
  })
  .addAliases({
    "uikit-util": "uikit/src/js/util/index.js",
  })

  // CSS
  .enableSassLoader(
    (options) => {
      options.sassOptions.quietDeps = true;
    },
    { resolveUrlLoader: false },
  )
  .enablePostCssLoader()

  // Copy images
  .copyFiles({
    from: `${paths.source}/images`,
    to: "[path][name].[hash:8].[ext]",
    pattern: /\.(jpe?g|png|gif|svg|webp)$/i,
    context: paths.source,
  })

  // Source maps and cache buster
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  // Advanced config options
  .configureDevServerOptions((options) => {
    options.allowedHosts = "all";
    options.server = { type: "https" };
  })
  .configureWatchOptions((options) => {
    options.poll = true;
  })
  .configureImageRule(
    {
      filename: "images/[name].[hash:8][ext]",
    },
    (rule) => {
      rule.exclude = [`${paths.source}/custom/icons`];
    },
  )
  .addRule({
    loader: "raw-loader",
    test: /\.svg$/,
    include: [`${paths.source}/custom/icons`],
  })
  .addPlugin({
    apply: (compiler) => {
      compiler.hooks.afterEmit.tap("AfterEmitPlugin", () => {
        fs.writeFileSync(
          `${paths.output}/environment.json`,
          `{"environment": "${Encore.isProduction() ? "prod" : "dev"}"}`,
        );
      });
    },
  });

export default Encore.getWebpackConfig();
