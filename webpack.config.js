const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './index.js',
    output : {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname , 'dist' ),
        publicPath:'/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions : [ '.js' , '.jsx'],
                }
            },
            {
                test: /\.css$/, 
                use: [ 'style-loader' , 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                      loader : 'file-loader',
                    /*   options : {
                        name: '[name].[ext]',
                        outputPath: 'assets',
                        publicPath: 'assets'
                      } */
                  }
                ],
              },
        ]
    },
    devServer: {
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins : [ 
        new CleanWebpackPlugin() , 
        new HtmlWebpackPlugin({
            template: './public/index.html'
    }) ]
}