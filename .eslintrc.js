module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    requireConfigFile: false,
  },

  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],

  globals: {
    Class: true,
    pimcore: true,
    Ext: true,
    Routing: true,
    t: true,
    VERSION: true,
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },

  ignorePatterns: ['assets/js/validation/*'],
};
