const webpack = require("webpack");

module.exports = () => {
  return {
    entry: {
      vendor: ["@sentry/browser"]
    },
    output: {
      library: "dll"
    },
    mode: "production",
    plugins: [
      new webpack.DllPlugin({
        path: "[name]-manifest.json",
        name: "dll"
      })
    ]
  };
};
