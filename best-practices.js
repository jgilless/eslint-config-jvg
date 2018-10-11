/**
 * See: https://eslint.org/docs/rules/#best-practices
 *
 * List all rules
 * Comment out rules that are included in "eslint:recommended" and we do not want to override
 */

module.exports = {
    rules: {
        // 'accessor-pairs': 'off',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        // 'class-methods-use-this': 'off',
        complexity: 'off',
        'consistent-return': 'error',
        curly: ['error', 'all'],
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'max-classes-per-file': 'off', // not in google
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        // 'no-case-declarations': 'error',
        'no-div-regex': 'error',
        // 'no-else-return': 'off',
        // 'no-empty-function': 'off',
        // 'no-empty-pattern': 'error',
        // 'no-eq-null': 'off',
        // 'no-eval': 'off',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        // 'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        // 'no-global-assign': 'error',
        // 'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off', //location, localStorage, etc
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        // 'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        // 'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        // 'no-redeclare': 'error',
        // 'no-restricted-properties': 'off',
        'no-return-assign': 'error',
        'no-return-await': 'error', // not in google
        'no-script-url': 'error',
        // 'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        // 'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        // 'no-unused-expressions': 'off',
        // 'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        // 'no-useless-escape': 'error',
        'no-void': 'error',
        // 'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        radix: ['error', 'as-needed'],
        'require-await': 'error',
        // 'require-unicode-regexp': 'off', //not in google
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        yoda: 'error'
    }
};
