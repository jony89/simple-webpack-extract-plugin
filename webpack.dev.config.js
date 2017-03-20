const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var SRC_SCRIPTS = __dirname + "./src";
var OUTPUT_DIR = path.join(__dirname, '/www');

module.exports = {
    context: __dirname,
    entry: {
        index: './src/index.js',
    },
    output: {
        path: OUTPUT_DIR,
        sourceMapFilename: '[file].map',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract({
                   fallback: 'style-loader',
                   use: [ 
                     { 
                       loader: 'css-loader'
                     }
                   ]
                 })
            }            
        ],
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]
};