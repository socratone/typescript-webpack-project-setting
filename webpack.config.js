const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  plugins: [new MiniCssExtractPlugin({
    filename: 'bundle.css'
  })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        // 먼저 'sass-laoder'가 SASS를 CSS로 바꾼다.
        // 다음으로 'css-loader'가 css를 commonJS로 바꾼다.
        // 다음으로 MiniCssExtractPlugin이 javascript 중에 css만 따로 뽑아낸다.
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
  }
};