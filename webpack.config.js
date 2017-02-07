let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index: './src/index.js',
        vendor:'./src/vendor.js',
    },
    output: {
        path: __dirname+"/dist",
        libraryTarget: 'umd',
        publicPath:"http://127.0.0.1:8080/",
        filename: '[name].js',
    },
    externals: {
        "react": "react.umd",
        "react-dom": "react-dom.umd",
        //"./node_modules/react/react.js": "react-dom.umd",
       // "./node_modules/react-dom/index.js": "react-dom.umd",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'} ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            js: ["vendor.js", "index.js"],
            template: __dirname + "/src/index.html",//new 一个这个插件的实例，并传入相关的参数
            removeComments: true,    //移除HTML中的注释
            collapseWhitespace: true,   //删除空白符与换行符
            chunksSortMode: function (a, b) {
                let order = ["vendor", "index"];
                return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
            }
        }),
        /*new webpack.LoaderOptionsPlugin({
            babel: {
                presets: ['es2015']
            }
        })*/
    ],
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};