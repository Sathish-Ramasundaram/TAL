const path = require("path");
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
                refresh: true,
              },
            },
          },
        },
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
};
