const withTM = require("next-transpile-modules");
const { resolve } = require("path");

module.exports = withTM({
  target: "serverless",
  transpileModules: [resolve(__dirname, "..", "..")]
});
