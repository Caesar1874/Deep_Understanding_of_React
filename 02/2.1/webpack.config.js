
// const webpack = require("webpack");
module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "bundle.js",
        publicPath: ""
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: "babel-loader?presets[]=es2015&presets[]=react"
            }
        ]
    }
};