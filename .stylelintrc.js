module.exports = {
  extends: ['stylelint-config-standard-scss', './stylelint-config-airbnb-fixed'],
  ignoreFiles: ['**/node_modules/**/*', '**/vendor/**/*', '**/public/**/*'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['blockless-after-same-name-blockless', 'first-nested'] },
    ],
    'max-empty-lines': 2,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'value-keyword-case': [
      'lower',
      { 'ignoreProperties': ['/^.*font-family$/'] },
    ],
  },
};