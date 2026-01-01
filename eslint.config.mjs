import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // ✅ Ignore generated & external files (Flat Config way)
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  // ESLint recommended rules
  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Disable ESLint rules that conflict with Prettier
  prettierConfig,
]);
