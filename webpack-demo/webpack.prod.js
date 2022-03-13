const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const setMPA = () => {

}

const { entry, htmlWebpackPlugins } = setMPA();

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    // 文件监听 默认是false
    // watch: true,
    // watchOptions: {
    //     // 默认为空，不监听的文件或者文件夹，支持正则匹配
    //     ignored: /node_modules/,
    //     // 监听到变化发生后会等 300ms 再去执行，默认 300ms
    //     aggregateTimeout: 300,
    //     // 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问 1000 次
    //     poll: 1000
    // },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/, //以css结尾的文件
                use: [
                    // loader的执行是链式调用的
                    // 先解析css loader 再传递给style loader
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: 'file-loader'
            },
            {
                test: /.(woff|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: '[name]_[contenthash:8].css'
        // }),
        // new OptimizeCSSAssetsPlugin
    ]

}