const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackDashboard = require('webpack-dashboard/plugin');

module.exports = (env, argv) => ({
  devtool: argv.mode === 'development' ? 'inline-source-map' : false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "index.js",
    publicPath: "/dist"
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new WebpackDashboard(),
  ],
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  node: {
    fs: 'empty'
  }
});