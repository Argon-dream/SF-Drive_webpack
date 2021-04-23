const TerserWebpackPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        filename: 'main.js'
    },
    plugins: [
        new TerserWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
                filename: "index.html"
            }
        ),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'eslint-loader'
            }
        ]
    }
}