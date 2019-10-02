const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'development',
    output: {
		publicPath: 'http://localhost:3001/'
    },
    devServer: {
        port: 3001,
        contentBase: path.resolve(__dirname, 'build'),
        headers: { 'Access-Control-Allow-Origin': '*' }
    }
});

module.exports = config;
