var path = require('path');

const config = {
    entry: path.resolve(__dirname, 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,	
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')], // resolve imports/requires to the local node_modules directory
        extensions: ['.js', '.jsx'] // resolve file names without file extentions to one of the following file extensions
    },
    devtool: 'eval-source-map'
};

module.exports = config;
