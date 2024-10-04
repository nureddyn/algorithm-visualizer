import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // use the newly defined __dirname
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      'plotly.js-dist': path.resolve(__dirname, 'node_modules/plotly.js-dist'), // Add Plotly alias
    },
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
    static: {
      directory: path.join(__dirname, 'public')
    }, // use the newly defined __dirname
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: '/index.html'
    },
  },
};
