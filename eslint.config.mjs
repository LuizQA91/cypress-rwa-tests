import js from "@eslint/js";
import pluginCypress from "eslint-plugin-cypress";
import globals from "globals";

export default [
  js.configs.recommended,
  pluginCypress.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "cypress/no-unnecessary-waiting": "error",
      "cypress/no-async-tests": "error",
      "no-unused-vars": "warn",
    },
  },
];