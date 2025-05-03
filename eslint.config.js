import { defineConfig } from 'eslint-define-config';
import recommended from './configs/recommended.js';

export default defineConfig([
  recommended,
  {
    languageOptions : {
      parserOptions: {
        sourceType: 'module',
      }
    },
    rules: {},
  }
]);
