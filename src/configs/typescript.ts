/*
  TypeScript ESLint config - extends the base config and enables @typescript-eslint
  Docs:
  - @typescript-eslint: https://typescript-eslint.io/
  - Configuring parser: https://typescript-eslint.io/convert-to-using-typescript-eslint
*/

const typescript = {
  extends: ["./base", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: null,
  },
  rules: {
    // TODO: Add TypeScript-specific rules. Example:
    // '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
  },
};

export = typescript;
