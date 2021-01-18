import path from 'path'
import webpack, { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import createStyledComponentsTransformer from 'typescript-plugin-styled-components'
import { getWebpackAliasPaths } from './paths.config'

const styledComponentsTransformer = createStyledComponentsTransformer()

const webpackConfig = (env): Configuration => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      ...getWebpackAliasPaths(),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
            }
          }
        ],
        exclude: /dist/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:base64:5].[ext]',
          outputPath: 'images',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version),
    }),
  ],
})

export default webpackConfig
