const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');



module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "./js/build.js",
    publicPath: "/",

  },
  mode: "production",
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        MiniCssExtractPlugin.loader
        , {
          loader: "css-loader"
        }, 
        {
          loader: 'postcss-loader',
              options: {
                  postcssOptions: {
                      plugins: [
                          [
                              'postcss-preset-env',
                              {
                                  // 其他选项
                              },
                          ],
                      ],
                  },
                  },
              },
        {
          loader: "less-loader",
        }]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 3 * 1024,
            name: 'imgs/[hash:10].[ext]'
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
    },
    {
      test: /\.js$/,
          //排除node_modules不处理
          exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env']
                      }
              }
  }
    ]

  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    minify:{
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true
    }
  }),
  new MiniCssExtractPlugin({
    filename: "./css/[name].css"
  })
  ],
  devServer: {
    port: 8888,
    host: "127.0.0.1",
    open: true,
    compress: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
}