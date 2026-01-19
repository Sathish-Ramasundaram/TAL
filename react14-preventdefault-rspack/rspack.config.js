const path = require("path");

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },

  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public")
    }
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true
              },
              transform: {
                react: {
                  runtime: "automatic"
                }
              }
            }
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
