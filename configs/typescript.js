import jsdoc from 'eslint-plugin-jsdoc';
import ts from 'typescript-eslint';

import recommended from './recommended.js';

export default [
  ...recommended,
  ...ts.configs.recommended,
  {
    extends: [jsdoc.configs['flat/recommended-typescript']],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ['**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'always' },
      ],
    },
  },
  {
    files: ['globals.d.ts'],
    rules: {
      'check-file/filename-naming-convention': 'off',
    },
  },
  {
    files: ['**/*.spec.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'jsdoc/require-jsdoc': 'off',
    },
  },
];
