import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginMocha from 'eslint-plugin-mocha';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';

export default [
  js.configs.recommended,
  // eslintPluginPrettier.configs.recommended,
  eslintComments.configs.recommended,
  // eslintPluginImport.configs.recommended,
  // eslintPluginMocha.configs.recommended,
  // eslintPluginPromise.configs.recommended,
  // eslintPluginSonarjs.configs.recommended,
  {
    files: ['*.spec.js', '*.spec.ts'],
    rules: {
      'sonarjs/no-identical-functions': 'off',
      'sonarjs/no-duplicate-string': 'off',
      // 'filenames/match-regex': 'off',
    }
  },
  {
    rules: {
      'no-console': 'error',
      'no-eval': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'sort-imports': 'error',
      'yoda': 'error',
      // 'filenames/match-regex': ['error', '^[a-z0-9-]+$'],
      'promise/prefer-await-to-callbacks': 'error',
      'promise/prefer-await-to-then': 'error',
      'mocha/no-exclusive-tests': 'error',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.ts'],
        },
      },
    },
    ignores: ['node_modules/', '/dist/'],
  }
];
