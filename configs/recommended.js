import checkFile from 'eslint-plugin-check-file';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import mocha from 'eslint-plugin-mocha';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import sonarjs from 'eslint-plugin-sonarjs';

export default [
  globalIgnores(['node_modules/**', 'dist/**', 'coverage/**']),
  {
    extends: [
      js.configs.recommended,
      importPlugin.flatConfigs.recommended,
      jsdoc.configs['flat/recommended'],
      mocha.configs.recommended,
      prettierConfig,
      promise.configs['flat/recommended'],
      sonarjs.configs.recommended,
    ],
    plugins: {
      'check-file': checkFile,
      js,
      mocha,
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        { '**/*\\.{js,ts}': 'KEBAB_CASE' },
      ],
      'import/newline-after-import': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            ['external', 'internal'],
            'parent',
            ['sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'jsdoc/tag-lines': ['error', 'any', { startLines: 1, maxBlockLines: 1 }],
      'mocha/no-exclusive-tests': 'error',
      'no-console': 'error',
      'no-eval': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': 'error',
      'sort-imports': ['error', { allowSeparatedGroups: true }],
      yoda: 'error',
    },
  },
  {
    files: ['eslint.config.js', '.*.js'],
    rules: {
      'check-file/filename-naming-convention': 'off',
    },
  },
  {
    files: ['**/*.spec.js', '**/*.spec.ts'],
    rules: {
      'check-file/filename-naming-convention': 'off',
      'jsdoc/require-jsdoc': 'off',
      'sonarjs/no-identical-functions': 'off',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/no-clear-text-protocols': 'off',
    },
  },
];
