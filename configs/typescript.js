import { defineConfig } from 'eslint/config';
import recommended from './recommended.js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  // typescriptEslint.configs.recommended,
  recommended,
  {
    plugins: ['@typescript-eslint'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
]);
