'use strict';

module.exports = {
  plugins: [{
    name: 'typescript',
    options: {
      forkTsChecker: {
        eslint: undefined
      }
    }
  }],

  modifyWebpackConfig: ({ webpackConfig }) => {
    // This is required to import cross-kube as ES module
    // https://github.com/jaredpalmer/razzle/issues/842
    delete webpackConfig.externals;


    // For debugging
    // config.mode = 'development'
    // if (config.optimization) {
    //   webpackConfig.optimization.minimize = false;
    // }

    // configure polyfills for node-fetch in cross-kube (require if Webpack >= 5)
    // https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed
    webpackConfig.resolve.fallback = {
      "stream": "stream-browserify",
      "http": "stream-http",
      "https": "https-browserify",
      "zlib": "browserify-zlib",
      "assert": "assert"
    }

    return webpackConfig;
  }
};
