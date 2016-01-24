var path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: [
        // The enyo library is built separately and copied (see module.loaders
        // below)
        '../enyo/build/enyo.css',
        '../enyo/build/enyo.js',
        // index.html is also copied
        './index.html',
        // index.js is our entry point
        './index.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /enyo\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[path][name]-[local]-[hash:base64:5]',
                ],
            },
            {
                include: [
                    path.resolve('./enyo/build'),
                    path.resolve('./app/index.html'),
                ],
                loader: "file-loader?name=[name].[ext]"
            },
        ]
    },
};
