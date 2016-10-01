'use strict';
let webpack = require('webpack');

module.exports = {
    entry: {
        'app': './app/main.ts'
    },

    output: {
        path: __dirname,
        filename: "./dist/[name].bundle.js",
        chunkFilename: './dist/[id].chunk.js'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    "angular2-load-children-loader", // This loader replaces loadChildren value to function to call require.
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'raw' // html
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" // css
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"] // scss
            }
        ],
        exprContextCritical: false
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    ],

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    devtool: false

};