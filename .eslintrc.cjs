module.exports = {
  root: true, // Indicates that this is the root configuration
  env: { browser: true, es2020: true }, // Specifies the environment
  extends: [
    'eslint:recommended', // Use recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // Use recommended TypeScript rules
    'plugin:react-hooks/recommended', // Use recommended React hooks rules
    'plugin:prettier/recommended', // Ensures Prettier rules take precedence
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Files and directories to ignore
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    'react-refresh', // Plugin for React Fast Refresh
    'prettier', // Plugin for Prettier
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }, // Allow constant export
    ],
    'linebreak-style': ['error', 'unix'], // Enforce Unix linebreaks
    'prettier/prettier': ['error'], // Enforces Prettier formatting as ESLint errors
  },
};
