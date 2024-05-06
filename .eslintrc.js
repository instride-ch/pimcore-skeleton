module.exports = {
  root: true,

  env: {
    browser: true,
    es2023: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
  },

  extends: ['eslint:recommended'],

  globals: {
    Class: true,
    pimcore: true,
    Ext: true,
    Routing: true,
    t: true,
    VERSION: true,
  },

  ignorePatterns: ['**/public/**/*'],

  overrides: [
    {
      files: '*.js',
      parser: '@babel/eslint-parser',
      extends: [
        'eslint:recommended',
        'airbnb-base',
      ],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      },
    },
  ],
};
