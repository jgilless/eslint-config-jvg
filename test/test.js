const eslint = require('eslint');
const assert = require('assert');

const indexConfig = require('../index');
const bestPractices = require('../best-practices');
const nodeCommonConfig = require('../node-common');
const possibleErrorConfig = require('../possible-errors');
const reactConfig = require('../react');
const variablesConfig = require('../variables');

const files = {
    'index.js': indexConfig,
    'best-practices.js': bestPractices,
    'node-common.js': nodeCommonConfig,
    'possible-errors.js': possibleErrorConfig,
    'react.js': reactConfig,
    'variables.js': variablesConfig
};

// Lint the files for errors

const report = new eslint.CLIEngine(indexConfig).executeOnFiles(
    Object.keys(files)
);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);

// Test that all the config options are valid

/**
 * ESLint allowes you to use 0, 1, 2 to mean off, warn, error.
 * We're choosing to use off, warn, error in the config for slight clarity
 */
const allowedValuesForRules = ['off', 'warn', 'error'];

Object.keys(files).forEach(key => {
    const conf = files[key];
    assert.ok('rules' in conf, `${key} must have a rules key`);
    const { rules } = conf;
    Object.keys(rules).forEach(rule => {
        if (typeof rules[rule] === 'string') {
            /**
             * This catches configs like:
             * 'no-console': 'error'
             * and validates that the value is correct
             */
            assert.ok(
                allowedValuesForRules.indexOf(rules[rule]) >= 0,
                `allowed values for rule ${rule} are ${allowedValuesForRules}`
            );
        } else if (Array.isArray(rules[rule])) {
            /**
             * This catches configs like:
             * 'curly': ['error', '<option>']
             * or
             * 'no-mixed-requires': ['error', { grouping: false, allowCall: false }]
             * and validates that the first index is correct.
             * We leave validating the second param to you for now...
             */
            assert.ok(
                allowedValuesForRules.indexOf(rules[rule][0]) >= 0,
                `allowed values for rule ${rule} are ["${allowedValuesForRules}", {...config vals}]`
            );
        }
    });
});
