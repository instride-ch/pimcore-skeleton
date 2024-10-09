import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  js.configs.recommended,
  prettierRecommended,
  {
    ignores: ["public/**/*", "var/**/*", "vendor/**/*", ".pnp*"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ["@babel/plugin-syntax-import-attributes"],
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        VERSION: false,
      },
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    },
  },
];
