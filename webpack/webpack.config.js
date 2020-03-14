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
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader?name=static/img/[name].[ext]',
                    // 'file-loader',
                    {
                    loader: 'image-webpack-loader',
                    options: {
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
            template: './src/index.html',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-styles.css'
        })
    ]
}