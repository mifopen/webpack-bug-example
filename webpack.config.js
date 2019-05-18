const webpack = require("webpack");

module.exports = () => {
  return {
    entry: {
      index: ["./index.js"]
    },
    mode: "production",
    plugins: [
      new webpack.DllReferencePlugin({
        context: ".",
        manifest: require("./vendor-manifest.json")
      })
    ]
  };
};
