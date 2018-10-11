/**
 * See: https://eslint.org/docs/rules/#variables
 *
 * List all rules
 * Comment out rules that are included in "eslint:recommended" and we do not want to override
 */

module.exports = {
    rules: {
        // 'init-declarations': 'off',
        // 'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        // 'no-undef': 'error',
        'no-undef-init': 'error',
        // 'no-undefined': 'off',
        // 'no-unused-vars': 'error',
        'no-use-before-define': 'error'
    }
};
