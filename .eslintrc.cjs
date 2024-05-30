module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Ensures Prettier rules take precedence
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'prettier', // Add this to ensure Prettier plugin is recognized
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }, // Add a comma here
    ],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': ['error'], // Enforces Prettier formatting as ESLint errors
  },
};
