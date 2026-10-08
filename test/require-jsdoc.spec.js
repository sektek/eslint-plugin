import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { ESLint } from 'eslint';
import { defineConfig } from 'eslint/config';

import sektek from '../index.js';

const lint = async (config, code, filePath) => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: defineConfig(config),
    cwd: process.cwd(),
  });
  const [result] = await eslint.lintText(code, { filePath });
  return result.messages.filter(m => m.ruleId === 'jsdoc/require-jsdoc');
};

const cases = [
  {
    name: 'recommended',
    config: sektek.configs.recommended,
    file: 'src/sample.js',
  },
  {
    name: 'typescript',
    config: sektek.configs.typescript,
    file: 'src/sample.ts',
  },
];

for (const { name, config, file } of cases) {
  describe(`${name} jsdoc/require-jsdoc`, () => {
    it('allows an unexported function without JSDoc', async () => {
      const messages = await lint(
        config,
        'function helper() {}\nhelper();\n',
        file,
      );
      assert.deepEqual(messages, []);
    });

    it('requires JSDoc on an exported function', async () => {
      const messages = await lint(config, 'export function api() {}\n', file);
      assert.equal(messages.length, 1);
      assert.equal(messages[0].severity, 2);
    });
  });
}
