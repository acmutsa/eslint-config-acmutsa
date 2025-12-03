/*
  Entry point for `eslint-config-acmutsa` (TypeScript source).
  The package compiles to CommonJS in `dist/` for Node consumers.
  Guidance: https://eslint.org/docs/latest/developer-guide/shareable-configs
*/

import base from "./configs/base";
import typescript from "./configs/typescript";
import react from "./configs/react";
import next from "./configs/next";

// Attach named configs to the exported object so consumers can use:
// extends: ["acmutsa"] (default/base) or ["acmutsa/typescript"]

const exportObj: any = base as any;
exportObj.configs = {
  base,
  typescript,
  react,
  next,
};

export = exportObj;
