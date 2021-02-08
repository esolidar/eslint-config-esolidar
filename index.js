module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  rules: {
    "array-callback-return": 0,
    "arrow-parens": ["error", "as-needed"],
    "class-methods-use-this": 0,
    "consistent-return": 0,
    "func-names": ["error", "never"],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "max-len": [
      "warn",
      {
        code: 100,
        tabWidth: 2,
        comments: 200,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "no-debugger": "error",
    "no-extend-native": 1,
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-shadow": 0,
    "no-loop-func": 0,
    "operator-linebreak": 0,
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/require-default-props": [0, { forbidDefaultForRequired: false }],
    "react/no-array-index-key": 0,
    "react/forbid-prop-types": 0,
    "react/style-prop-object": 0,
    "react/jsx-boolean-value": 0,
    "react/no-danger": 0,
    "react/destructuring-assignment": 0,
    "react/button-has-type": 0,
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "react/static-property-placement": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
