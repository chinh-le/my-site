module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    // 'semi': [2, 'always'], // KIM - ESLint: Irregular whitespace not allowed (no-irregular-whitespace) - when copied from MS OneNote
    'semi': [2, 'always'],
    'vue/html-indent': [
      'warn', 2, {
        'closeBracket': 1
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
