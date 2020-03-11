/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  "extends": ["airbnb-base",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "react",
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "jest": true,
    "browser": true,
    "es6": true,
    "node": true
  }
};