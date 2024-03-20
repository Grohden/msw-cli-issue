module.exports = {
  plugins: [
    '@typescript-eslint',
    'filenames',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@generated', './generated'],
          ['@public', './public'],
        ],
      },
    },
  },
};
