module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 7, // 2016
    "sourceType": "script"
  },
  "env": {
    "browser": true
  },
  "extends": [
    "standard",
    "plugin:compat/recommended"
  ],
  "rules": {
    "curly": [
      "error",
      "multi",
      "consistent"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "object-shorthand": [
      "error",
      "always"
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ]
  }
}
