import babelParser from '@babel/eslint-parser';
import js from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import globals from 'globals';

export default [
  js.configs.recommended,
  airbnbBase,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parser: babelParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        Class: true,
        pimcore: true,
        Ext: true,
        Routing: true,
        t: true,
        VERSION: true,
      }
    },
    ignores: ['**/public/**/*'],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },
];
