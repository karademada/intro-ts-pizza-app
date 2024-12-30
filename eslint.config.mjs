import path from "node:path";
import {fileURLToPath} from "node:url";

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import noLoops from "eslint-plugin-no-loops";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";
import shopifyEslintPlugin from '@shopify/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [{
  ignores: ["**/dist/", "**/node_modules"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
), {
  plugins: {
    "@typescript-eslint": typescriptEslint,
    "no-loops": noLoops,
  },

  languageOptions: {
    parser: tsParser,
  },
  rules: {
    "no-console": 1,
    "no-loops/no-loops": 2,
  },
},
  ...shopifyEslintPlugin.configs.esnext,
];
