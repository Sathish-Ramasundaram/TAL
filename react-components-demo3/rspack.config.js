const path = require("path");


module.exports = {
entry: "./src/index.tsx",


output: {
path: path.resolve(__dirname, "dist"),
filename: "bundle.js",
},


resolve: {
extensions: [".ts", ".tsx", ".js"],
},


experiments: {
css: true,
},


module: {
rules: [
{
test: /\.(ts|tsx)$/,
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
},
},
},
},
},
{
test: /\.css$/,
type: "css",
},
],
},


devServer: {
port: 3000,
static: "./public",
},
};