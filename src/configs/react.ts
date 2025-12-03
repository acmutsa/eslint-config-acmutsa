/*
  React ESLint config - enables react plugin and recommended rules
  Docs:
  - eslint-plugin-react: https://github.com/jsx-eslint/eslint-plugin-react
  - React rules: https://eslint.org/docs/latest/rules/
*/

const react = {
  extends: [
    "./base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // TODO: Add React-specific rules. Example:
    // 'react/jsx-uses-react': 'off'
  },
};

export = react;
