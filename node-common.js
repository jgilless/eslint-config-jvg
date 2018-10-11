/**
 * See: https://eslint.org/docs/rules/#nodejs-and-commonjs
 *
 * List all rules
 * Comment out rules that are included in "eslint:recommended" and we do not want to override
 */

module.exports = {
    rules: {
        // 'callback-return': 'off',
        // 'global-require': 'off',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'error', // { grouping: false, allowCall: false }
        'no-new-require': 'error',
        'no-path-concat': 'error',
        // 'no-process-env': 'off',
        'no-process-exit': 'error'
        // 'no-restricted-modules': 'off',
        // 'no-sync': 'off',
    }
};
