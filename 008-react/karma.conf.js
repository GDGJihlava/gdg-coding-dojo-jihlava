const path = require('path');

const karmaConf = {
  browsers: ['PhantomJS'],
  files: ['src/**/*.spec.*'],
  frameworks: ['mocha', 'chai', 'sinon-chai'],
  preprocessors: {
    'src/**/*.spec.*': ['webpack'],
  },
  reporters: ['mocha'],
  singleRun: true,
  webpack: {
    devtool: 'inline-source-map',
    externals: {
      cheerio: 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': 'window',
      'text-encoding': 'window',
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel?cacheDirectory',
        }, {
          test: /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
          loader: 'imports?define=>false,require=>false',
        },
      ],
      noParse: [/\/sinon\.js/],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: path.join(__dirname, 'src'),
    },
  },
  webpackMiddleware: {
    noInfo: true,
  },
};

module.exports = function(config) {
  config.set(karmaConf);
};
