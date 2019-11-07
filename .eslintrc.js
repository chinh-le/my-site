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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'semi': [2, 'always'], // KIM - ESLint: Irregular whitespace not allowed (no-irregular-whitespace) - when copied from MS OneNote
    'semi': [2, 'always'],
    'vue/html-indent': [
      'warn', 2, {
        'closeBracket': 1
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
