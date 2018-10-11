/**
 * See: https://github.com/yannickcr/eslint-plugin-react
 *
 * List all rules
 * Comment rules that conflict with prettier/react
 */

module.exports = {
    extends: ['prettier/react'],
    settings: {
        react: {
            version: '16.3'
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react'],
    /**
     * Commented rules are part of prettier/react
     */
    rules: {
        'react/boolean-prop-naming': 'off',
        'react/button-has-type': 'off',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': 'off',
        'react/display-name': 'error',
        'react/forbid-component-props': 'off',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-prop-types': 'off',
        'react/forbid-foreign-prop-types': 'error',
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'off',
        'react/no-danger': 'off',
        'react/no-danger-with-children': 'off',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': 'off',
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off', // setState super useful
        'react/no-typos': 'error',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-unescaped-entities': 'warn',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': 'warn',
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'off',
        'react/prefer-stateless-function': 'off',
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'error',
        'react/require-default-props': 'off',
        'react/require-optimization': 'off',
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'error',
        'react/sort-comp': 'off',
        'react/sort-prop-types': 'off',
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',
        // JSX Rules
        'react/jsx-boolean-value': 'off',
        // 'react/jsx-child-element-spacing': 'error',
        // 'react/jsx-closing-bracket-location': 'error',
        // 'react/jsx-closing-tag-location': 'error',
        // 'react/jsx-curly-spacing': 'error',
        // 'react/jsx-equals-spacing': ['error', 'always'],
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
        // 'react/jsx-first-prop-new-line': 'error',
        'react/jsx-handler-names': 'off',
        // 'react/jsx-indent': 'error',
        // 'react/jsx-indent-props': 'error',
        'react/jsx-key': 'error',
        'react/jsx-max-depth': 'off',
        // 'react/jsx-max-props-per-line': 'off',
        'react/jsx-no-bind': 'off',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        // 'react/jsx-one-expression-per-line': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-pascal-case': 'error',
        // 'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-default-props': 'off',
        'react/jsx-sort-props': 'off',
        // 'react/jsx-space-before-closing': 'off',
        // 'react/jsx-tag-spacing': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
        // 'react/jsx-wrap-multilines': 'error'
    }
};
