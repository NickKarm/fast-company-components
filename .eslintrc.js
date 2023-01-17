module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    indent: ["error", 2], // Отступ количество пробелов 
    semi: [2, "always"], // Точка с запятой в конце строки
    // Ошибка при наличии пробела при обозночении функции, уберём её
    "space-before-function-paren": ["error", {anonymous:"always",named: "never"}], 
    // Использование двойных кавычек
    quotes: ["error", "double", { allowTemplateLiterals: true }]
  }
};
  