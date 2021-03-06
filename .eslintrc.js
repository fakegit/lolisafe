module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 9 // 2018
  },
  "env": {
    "node": true
  },
  "extends": [
    "standard"
  ],
  "rules": {
    "curly": [
      "error",
      "multi",
      "consistent"
    ],
    "no-throw-literal": 0,
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "object-shorthand": [
      "error",
      "always"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "standard/no-callback-literal": 0
  }
}
