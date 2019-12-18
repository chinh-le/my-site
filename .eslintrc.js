module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    // 'plugin:vue/essential',
    'plugin:vue/recommended'
    // '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-indent': ['error', 4, { baseIndent: 1 }],
    /* overrides: [
      {
        files: ['*.vue'],
        rules: {
          indent: 'off'
        }
      }
    ], */
    'keyword-spacing': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'space-before-blocks': [
      'error',
      { functions: 'always', keywords: 'always', classes: 'always' }
    ],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: false }]
    // 'semi': [2, 'always'],
    /* 'vue/html-indent': [
      'warn', 2, {
        'closeBracket': 1
      }
    ] */
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
