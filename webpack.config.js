const path = require ('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const UglifyWebpackPlugin = require ('uglifyjs-webpack-plugin');
const _ = require ('lodash');
const HappyPack = require ('happypack');
const happyThreadPool = HappyPack.ThreadPool ({
  size: 1,
});
const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV === 'production';
console.log (NODE_ENV);
let htmlWebpackPluginConfig = {
  template: './src/assets/index.html',
  filename: 'index.html',
  inject: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined',
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    removeOptionalTags: true,
  },
  hash: false,
};

let config = {
  entry: ['./src/index.tsx'],
  output: {
    filename: 'build/bundle.[hash].js',
    chunkFilename: 'build/chunk.[chunkhash].js',
    path: path.resolve ('build'),
    publicPath: '',
    crossOriginLoading: 'anonymous',
  },
  mode: isProduction ? 'production' : 'development',
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.css',
      '.scss',
      '.sass',
      '.less',
      '.gql',
      '.graphql',
    ],
    modules: [path.resolve ('./src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'happypack/loader?id=ts',
      },
      {
        test: /.*\.(json|txt|eot|ttf|woff|woff2|otf|handlebars)$/i,
        loader: 'happypack/loader?id=files',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|sc|c)ss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          'happypack/loader?id=styles',
        ],
      },
    ],
  },
  plugins: [
    new HappyPack ({
      id: 'ts',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        {
          loader: 'ts-loader',
          options: {happyPackMode: true},
        },
      ],
    }),
    new HappyPack ({
      id: 'styles',
      threadPool: happyThreadPool,
      loaders: [
        {
          loader: 'css-loader',
          options: {
            camelCase: true,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            indent: 'postcss',
            sourceMap: true,
            plugins: function () {
              return [require ('autoprefixer')];
            },
          },
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          },
        },
      ],
    }),
    new HappyPack ({
      id: 'files',
      threadPool: happyThreadPool,
      loaders: ['file-loader?name=assets/[name].[hash].[ext]'],
    }),
    new HtmlWebpackPlugin (htmlWebpackPluginConfig),
    new webpack.DefinePlugin ({
      __ENVIRONMENT__: {
        production: isProduction,
        development: !isProduction,
      },
    }),
    new webpack.ProvidePlugin ({
      React: 'react',
    }),
  ],
};

module.exports = config;
