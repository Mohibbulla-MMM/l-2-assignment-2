import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "prefer-const": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-unused-expressions": "error",
    },
    ignores: [".config/*", "dist/**/*", "**/node_modules/", ".env"],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
