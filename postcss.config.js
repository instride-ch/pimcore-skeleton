import autoprefixer from "autoprefixer";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    autoprefixer,
    purgeCSSPlugin({
      content: ["./templates/**/*.html.twig"],
      // Add other selectors to "safelist", which need to be included in the final CSS file.
      // More info see: https://purgecss.com/safelisting.html
      safelist: {
        standard: [/^uk-sticky/, "uk-open", "uk-active"],
        deep: [/^(.+)([\\@]+)(.+)$/, /^uk-offcanvas/, /^uk-icon/],
      },
    }),
  ],
};
