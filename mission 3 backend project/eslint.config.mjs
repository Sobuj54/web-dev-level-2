import * as tseslint from '@typescript-eslint/eslint-plugin';
import * as parser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    },
  },
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
];
