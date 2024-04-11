module.exports = {
  root: true,
  env: { browser: true, es2024: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  "--ignorePatterns": ["dist", ".eslintsrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react", "react-refresh"],
  rules: {
    "react/prop-types": "off",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
}

