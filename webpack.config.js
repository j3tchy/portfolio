var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },{
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader'
                }]
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: [
                //         'css-loader',
                //         'sass-loader'
                //     ]
                // })
            },{
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 0
                    }
                }]
            },{
                test: /\.(eot|svg|ttf|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },{
                test: require.resolve('bigtext/src/bigtext'),
                use: [{
                    loader: 'expose-loader',
                    options: 'bigtext'
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Jermaine Gyekye | Portfolio',
            template: 'app/index.html'
        }),
        // new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery': 'jquery'
        })
    ]
}
