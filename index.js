module.exports = {
    // Turn off rules that conflict with prettier
    extends: [
        'eslint:recommended',
        './possible-errors.js',
        './best-practices.js',
        './variables.js',
        './node-common.js',
        'prettier'
    ],
    parserOptions: {
        // New language features!
        ecmaVersion: 2018,
        // Other option: script, but I mostly use modules
        sourceType: 'module',
        ecmaFeatures: {
            // Disallow return in the global scope
            globalReturn: false,
            // Enable global strict mode
            impliedStrict: true
        }
    },
    env: {
        browser: true,
        node: true,
        // TODO: Check for Jest dep or make jest eslint folder
        jest: true
    },
    rules: {}
};
