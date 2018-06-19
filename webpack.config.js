const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "scoped-action-generator.min.js",
    path: path.resolve(__dirname, "lib"),
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
            plugins: ["add-module-exports"]
          }
        }
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
