npx create-react-app project-name --template typescript

Note: Project name should not be capital letter

cd project name

code . (To open new window for this existing project in VS)
Additonal (code   to open new visual studio, no folder selected)

rmdir /s /q node_modules
del package-lock.json
npm install

npm install --save-dev ajv@8 ajv-keywords@5



npm start

-------

RSpack file and change in package,json is not required now for studing other concepts. We will see it later
(npm install --save-dev @rspack/core @rspack/cli)
(npm install -D @rspack/core @rspack/cli @rspack/plugin-react-refresh)

create rspack.config.js

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
    port: 3000,
    historyApiFallback: true,
  },
};

in package.json

"scripts": {
  "start": "rspack serve",
  "build": "rspack build"
}

-----


