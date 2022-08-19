module.exports = {
    'env': {
        'node': true,
        'commonjs': true,
        'es2021': true
    },

    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }},
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'no-undef': ['off'],
        'semi': [2, 'always'],
    }
};
