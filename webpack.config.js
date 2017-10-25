const webpack = require('webpack')

module.exports = {
    entry : './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            }
            
            
        ]
    },
    devServer: {
        port: 9090,
        contentBase: './src'
    },
    plugins: [
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
        })
    ],
    stats: { 
        normal: true 
    } 
}