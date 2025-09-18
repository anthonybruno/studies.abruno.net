import baseConfig from 'abruno-dev-config/eslint';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...baseConfig,
  ...eslintPluginAstro.configs.recommended,
  prettierConfig, // This disables all ESLint rules that conflict with Prettier
  {
    rules: {},
  },
];
