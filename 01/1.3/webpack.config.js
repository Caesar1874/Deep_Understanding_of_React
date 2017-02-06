var path = require("path");
var webpack = require("webpack");
var sassLoader = "style!css!sass!sourceMap=true&sourceContents=true";

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry : [
        "webpack-hot-middleware/client",
        "./js/app.js"
    ],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/static/"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, "css"),
                ],
                loaders: ["style-loader", "css-loader", "sassLoader"]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "stage-0"]
                }
            }
        ]
    },
    resolve: {
        alias: {
            "react": path.join(__dirname, "node_modules", "react"),
        },
        extensions: [".js", ".jsx", ".scss", ".css"],
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};