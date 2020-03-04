module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "import/no-unresolved": 0,
    "vue/components-name-in-template-casing": 0,
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
}
