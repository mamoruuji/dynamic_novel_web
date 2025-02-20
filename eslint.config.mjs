import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import _import from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
// import tailwindcss from "eslint-plugin-tailwindcss";
import { fixupPluginRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    // ...compat.extends("next/core-web-vitals", "prettier", "plugin:tailwindcss/recommended"),
    ...compat.extends("next/core-web-vitals", "prettier"),
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        plugins: {
            "sort-keys-custom-order": sortKeysCustomOrder,
            "simple-import-sort": simpleImportSort,
            // import: fixupPluginRules(_import),
            "unused-imports": unusedImports,
            // tailwindcss,
        },

        settings: {
            // tailwindcss: {
            //     groupByResponsive: true,
            //     whitelist: [],
            // },
        },

        rules: {
            "sort-keys-custom-order/object-keys": ["error", {
                orderedKeys: ["id", "name", "title"],
            }],

            "sort-keys-custom-order/type-keys": ["error", {
                orderedKeys: ["id", "name", "title"],
            }],

            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "import/first": "error",
            "import/newline-after-import": "error",
            "import/no-duplicates": "error",
            "unused-imports/no-unused-imports": "error",
        },
    },
];
