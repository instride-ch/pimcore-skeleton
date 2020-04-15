module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parserOptions: { sourceType: 'module' },

  extends: [
    'eslint:recommended',
    'airbnb-base'
  ],

  globals: { 'VERSION': true },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
