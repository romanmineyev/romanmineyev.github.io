const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    target: "web",
    devtool: "source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./assets/[name][ext]"
    },    
    devServer: {
        contentBase: path.join(__dirname, 'src'), // Serve static files from the 'src' directory
        publicPath: '/',
        port: 3000,
        open: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "fullscreen.html",
            template: "./src/fullscreen.html"
        }),
        new HtmlWebpackPlugin({
            filename: "ball_tracking.html",
            template: "./src/ball_tracking.html"
        }),
    ],
});