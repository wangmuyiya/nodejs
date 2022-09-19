const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    entry:"./src/js/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"./js/build.js"
    },
    mode:"development", 
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader",
            }]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 3*1024 ,
                  name:'./imgs/[hash:10].[ext]'
                }
              }
            ]
          },
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader',
            //   options: {
            //     attrs: [':data-src']
            //   }
            }
          }
    ]
        
    },
    plugins: [new HtmlWebpackPlugin({
        template:'./src/index.html'
    })],
    devServer:{
      port:8888,
      host:"127.0.0.1",
      open:true,
      compress:true,
    }
}

