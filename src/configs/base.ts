/*
  Base ESLint config (TypeScript).
  - Fill `rules` with project preferences.
  Docs:
  - ESLint config: https://eslint.org/docs/latest/user-guide/configuring
  - Shareable configs: https://eslint.org/docs/latest/developer-guide/shareable-configs
*/

const base = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: ["eslint:recommended"],
  plugins: [],
  rules: {
    // TODO: Add base rules. Example:
    // 'no-console': 'warn',
  },
};

export = base;
