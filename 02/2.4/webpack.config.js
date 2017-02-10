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
                loaders: "babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react"
            }
        ]
    }
};