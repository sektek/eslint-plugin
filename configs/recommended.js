module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  ignorePatterns: ['**/node_modules/*', '**/dist/*'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:mocha/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      files: ['.eslintrc.js', '.eslintrc.cjs'],
      rules: {
        'filenames/match-regex': 'off',
      },
    },
    {
      files: ['*.spec.js', '*.spec.ts'],
      rules: {
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'filenames/match-regex': 'off',
      },
    },
  ],
  plugins: [
    'eslint-comments',
    'filenames',
    'import',
    'mocha',
    'prettier',
    'promise',
    'sonarjs',
  ],
  rules: {
    'filenames/match-regex': ['error', '^[a-z0-9-]+$'],
    'import/newline-after-import': 'error',
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
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
