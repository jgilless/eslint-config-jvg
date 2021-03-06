/**
 * See: https://eslint.org/docs/rules/#possible-errors
 *
 * List all rules
 * Comment out rules that are included in "eslint:recommended" and we do not want to override
 */

module.exports = {
    rules: {
        // 'for-direction': 'error',
        // 'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        // 'no-compare-neg-zero': 'error',
        // 'no-cond-assign': 'error',
        // 'no-console': 'error',
        // 'no-constant-condition': 'error',
        // 'no-control-regex': 'error',
        // 'no-debugger': 'error',
        // 'no-dupe-args': 'error',
        // 'no-dupe-keys': 'error',
        // 'no-duplicate-case': 'error',
        // 'no-empty': 'error',
        // 'no-empty-character-class': 'error',
        // 'no-ex-assign': 'error',
        // 'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'error',
        // 'no-extra-semi': 'error',
        // 'no-func-assign': 'error',
        // 'no-inner-declarations': 'error',
        // 'no-invalid-regexp': 'error',
        // 'no-irregular-whitespace': 'error',
        'no-misleading-character-class': 'off',
        // 'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        // 'no-regex-spaces': 'error',
        // 'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        // 'no-unexpected-multiline': 'error',
        // 'no-unreachable': 'error',
        // 'no-unsafe-finally': 'error',
        // 'no-unsafe-negation': 'error',
        'require-atomic-updates': 'error',
        // 'use-isnan': 'error',
        'valid-jsdoc': ['error', { requireReturn: false }]
        // 'valid-typeof': 'error'
    }
};
