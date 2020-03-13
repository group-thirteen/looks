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
  "rules": {
    "no-console": "off"
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