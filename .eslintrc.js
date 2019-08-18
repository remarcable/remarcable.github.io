module.exports = {
  extends: ["eslint:recommended", "airbnb-base", "prettier"],
  env: {
    browser: true,
    es6: true
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-use-before-define": 0,
    "no-underscore-dangle": ["error", { allow: ["_id"] }]
  }
};
