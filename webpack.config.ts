import path from 'path';
import { Configuration } from 'webpack';
import 'webpack-dev-server'; // Import this for devServer typing

const config: Configuration = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: './dist',
    open: true,
    hot: true,
    port: 8080,
  },
  mode: 'development',
};

export default config;
