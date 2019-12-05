module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    // 'eslint:recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': [2, 'always'],
    /* 'vue/html-indent': [
      'warn', 2, {
        'closeBracket': 1
      }
    ] */
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
