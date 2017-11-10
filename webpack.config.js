const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/purecomponent/app.js',
    bail: false,
    cache: true,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2017', 'react', 'stage-2']
                },
                exclude: /node_modules/

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, '../src'),
            'node_modules'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9010
    }
};
