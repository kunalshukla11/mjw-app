import { defineConfig, globalIgnores } from 'eslint/config';
import testingLibrary from 'eslint-plugin-testing-library';
import jest from 'eslint-plugin-jest';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import mantine from 'eslint-config-mantine';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    'eslint.config.*',
    'node_modules/',
    'dist/',
    '**/*.cjs',
    '**/*.{mjs,cjs,d.ts,d.mts}',
  ]),
  {
    ...mantine,
    extends: compat.extends('plugin:@next/next/recommended', 'plugin:jest/recommended'),

    plugins: {
      'testing-library': testingLibrary,
      jest,
    },
    ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: './tsconfig.json',
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/extensions': 'off',
      'jsx-quotes': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'react/self-closing-comp': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    extends: compat.extends('plugin:testing-library/react'),
  },
]);

