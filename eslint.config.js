import { defineConfig } from 'eslint/config';

import sektek from './index.js';

export default defineConfig([
  sektek.configs.recommended,
  {
    rules: {},
    settings: {
      parserOptions: {
        sourceType: 'module',
      },
      'import/resolver': 'node',
    },
  },
]);
