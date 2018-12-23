module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },
};
