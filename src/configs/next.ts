/*
  Next.js ESLint config - extends `eslint-config-next` and base/React
  Docs:
  - eslint-config-next: https://nextjs.org/docs/basic-features/eslint
*/

const next = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    // TODO: Add Next.js specific overrides/rules
  },
};

export = next;
