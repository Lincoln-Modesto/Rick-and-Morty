module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: false,
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-v-model-argument": "off",
    "vue/valid-v-model": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
