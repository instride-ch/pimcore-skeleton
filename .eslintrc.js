module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'airbnb-base'
  ],
  'globals': { 'UIkit': true },
  'parser': 'babel-eslint',
  'rules': {
    'no-extra-semi': 'error',
    'no-template-curly-in-string': 'error',
    'no-caller': 'error',
    'global-require': 'off',
    'no-extra-bind': 'warn',
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    'no-process-exit': 'warn',
  }
};