module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "@nuxtjs",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
