# @esolidar/eslint-config-esolidar

ESLint shareable config for eSolidar projects

## Usage

In order to use this shareable config you have to install the package "eslint-config-esolidar" into your project:

```
yarn add --dev @esolidar/eslint-config-esolidar
```

Then create ESLint config file named ".eslintrc.js" (or edit if it exists). The content is short as below:

_.eslintrc.js_

```
module.exports = {
  extends: ['@esolidar/eslint-config-esolidar'],
};

```

That's all. It will work.

Sometimes [the rules we shared](https://github.com/esolidar/eslint-config-esolidar/blob/main/index.js) may be not enough. Just add more or overwrite them with your own rules by modifying ".eslintrc.js". For example:

_.eslintrc.js_

```
module.exports = {
  extends: ['@esolidar/eslint-config-esolidar'],
  rules: {
    "max-lines": 400,
    "semi": [2, "always"]
  }
};
```

## References:

- [ESLint Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs)

## License

The MIT License (MIT)
