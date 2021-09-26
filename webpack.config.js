let path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js-master-webpack-number.js',
        library: {
            name: "webpackNumbers",
            type: "umd"
        },
        clean: true
    }
}