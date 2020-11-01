const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  resolve: { extensions: ['.js', '.jsx', '.json', '.css'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //dont need to translate node_modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['cache-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
  },
};
