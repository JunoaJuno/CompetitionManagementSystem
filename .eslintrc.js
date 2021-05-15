// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  'extends': [
    'taro/vue3',
  ],
  'rules': {
    "indent": [
      "error",
      2
    ],
    "comma-spacing": [2, { "before": false, "after": true }],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "semi": ["error","never"],
    "no-console": "off",
    "no-self-assign": "off",
    "valid-jsdoc": "off",
    "require-jsdoc": "off",
    "no-unused-vars": "warn",
  }
}
