const path = require("path");
const { HtmlRspackPlugin } = require("@rspack/core");

/** @type {import('@rspack/core').Configuration} */
module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|mjs)$/, // include mjs
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
              dynamicImport: true
            },
            transform: {
              react: {
                runtime: "automatic"
              }
            }
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".mjs"]
  },

  plugins: [
    new HtmlRspackPlugin({
      template: "./public/index.html"
    })
  ],

  devServer: {
    port: 3001,
    hot: true
  }
};
