module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "standard-with-typescript",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: { react: { version: "detect" } },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
        "react/react-in-jsx-scope": 0,
    },
};
