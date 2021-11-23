module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'quotes': [ 1, 'single' ],
    'quotes': 0,
    // 方法名和刮号之间需要有一格空格, 关闭此规则
    'space-before-function-paren': 0,
    // 要求或禁止尾随逗号, 关闭此规则 , vue 需要【方法】需要在尾部添加逗号，主要是方便阅读代码
    'comma-dangle': 0,
  }
}
