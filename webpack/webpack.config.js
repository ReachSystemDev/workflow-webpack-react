const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer:{
        port: 4000
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath: 'static/img/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                    loader: 'image-webpack-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/img/',
                        useRelativePath: true,
                        mozjpeg: {
                        progressive: true,
                        quality: 65
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                        enabled: false,
                        },
                        pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                        },
                        gifsicle: {
                        interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                        quality: 75
                        }
                    }
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-styles.css'
        })
    ]
}