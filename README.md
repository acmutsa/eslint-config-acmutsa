# eslint-config-acmutsa

Shared ESLint configuration for ACM UTSA projects.

This package provides a default `base` config and named configs for TypeScript, React and Next.js.

Installation

Install as a dev dependency in your project and install the required peer dependencies (ESLint and plugins):

```bash
npm install -D eslint-config-acmutsa eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-config-next
```

Usage

In your project's `.eslintrc.cjs`:

```js
module.exports = {
  extends: [
    "acmutsa", // uses the base config
  ],
};
```

Or use named configs:

```js
module.exports = {
  extends: ["acmutsa/typescript"],
};
```

Notes & TODOs

- The package source is in `src/` (TypeScript). Run `npm run build` to compile to `dist/`.
- Config stubs contain TODOs and links to documentation for completing rule sets.

Optional peer dependencies

- Named configs (`acmutsa/react`, `acmutsa/next`, `acmutsa/typescript`) reference plugins/parsers that are purposely not bundled. Consumers should install the corresponding peer dependencies (listed in `package.json`). If you only use the base config (`acmutsa`) you do not need to install React/Next/TypeScript plugins.

.editorconfig

- A basic `.editorconfig` is included to normalize whitespace and encoding across editors.

Relevant docs

- ESLint configuring: https://eslint.org/docs/latest/user-guide/configuring
- Shareable configs: https://eslint.org/docs/latest/developer-guide/shareable-configs
- TypeScript ESLint: https://typescript-eslint.io/
- React ESLint plugin: https://github.com/jsx-eslint/eslint-plugin-react
- Next.js ESLint: https://nextjs.org/docs/basic-features/eslint
