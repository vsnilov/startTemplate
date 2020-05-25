const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const {
  VueLoaderPlugin
} = require('vue-loader');

const dotenv = require("dotenv");

dotenv.config();

const isProduction = process.env.NODE_ENV !== 'development';

const UglifyConfig = new UglifyJsPlugin({
  cache: true,
  extractComments: true,
  parallel: true,
  exclude: /node_modules/,
  uglifyOptions: {
    compress: {
      drop_console: true,
    },
  },
});

let optimization = {
  splitChunks: {
    chunks: 'all',
    minSize: 0,
    maxSize: 0,
    cacheGroups: {
      vendors: {
        filename: 'vendor.js',
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      }
    }
  },
};

if (isProduction) {
  optimization = {
    ...optimization,
    minimizer: [UglifyConfig],
  };
}

const plugins = [
  new webpack.IgnorePlugin({
    resourceRegExp: /.*\.(scss|css|sass)$/
  }),
  new VueLoaderPlugin(),
];
if (!isProduction) {
  plugins.push(new HardSourceWebpackPlugin());
}

const options = {
  entry: {
    main: `${global.pathsSRC.js}/index.js`
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: '[name]'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  mode: process.env.NODE_ENV,
  devtool: 'inline-source-map',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.pug$/,
        oneOf: [{
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        }, ]
      }
    ],
  },
  watch: !isProduction,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins,
  optimization,
};

module.exports = options;
