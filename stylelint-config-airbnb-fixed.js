/**
 * TODO: Replace this stylelint config with the official Airbnb config "stylelint-config-airbnb",
 * once issue https://github.com/airbnb/css/issues/122 is fixed.
 */
module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    // Base rules
    'selector-max-id': 0,
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'] },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'declaration-block-single-line-max-declarations': 1,
    // This line fixes the usage with Stylelint v14.
    'declaration-property-value-disallowed-list': { '/^border/': ['none'] },
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] },
    ],

    // Sass rules
    'max-nesting-depth': 2,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    'order/order': [
      'declarations',
      { type: 'at-rule' },
      { type: 'at-rule', hasBlock: true },
      'rules',
    ],
  },
};
