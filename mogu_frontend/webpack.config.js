const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|woff|svg|eot|ttf)\??.*$/,
                use: ['url-loader?limit=500&name=images/[name]-[hash:5].[ext]']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}

module.exports = config;