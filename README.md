# @sektek/eslint-plugin

## Installation

```sh
npm install --save-dev eslint @sektek/eslint-plugin
```

## Setup

Extend the configs you want in your `.eslintrc.js`:

```js
import { defineConfig } from 'eslint/config';
import sektek from '@sektek/eslint-plugin';

export default defineConfig([
  sektek.configs.recommended,
]);
```

## Rules

The plugin is composed of the following configurations:

- `@sektek/recommended`: recommended rules for all JavaScript projects
- `@sektek/typescript`: An extension of `@sektek/recommended` including TypeScript-specific rules
