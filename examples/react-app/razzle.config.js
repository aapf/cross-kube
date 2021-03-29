'use strict';

const fs = require('fs')
const resolveRequest = require('razzle-dev-utils/resolveRequest');

module.exports = {
  plugins: [{
    name: 'typescript',
    options: {
      forkTsChecker: {
        eslint: undefined
      }
    }
  }],

  modifyWebpackOptions: ({ options: { webpackOptions } }) => {
    // This is required to import cross-kube as ES module
    // https://github.com/jaredpalmer/razzle/issues/842
    webpackOptions.notNodeExternalResMatch = (request, context) => {
      const result = request.match(/cross-kube[/\\]lib[/\\]/)
      return result != null
    }
    return webpackOptions
  },

  modifyWebpackConfig: ({ webpackConfig, options: { webpackOptions } }) => {
    // This is required to import cross-kube as ES module
    // https://github.com/jaredpalmer/razzle/issues/842
    const allowedPackages = ['cross-kube'];
    const allowedPackagePaths = allowedPackages.map(packageName =>
      fs.realpathSync('./node_modules/' + packageName)
    );
    const tsRuleIndex = webpackConfig.module.rules.findIndex(
      rule => rule.use && rule.use[0].loader && rule.use[0].loader.includes('ts-loader')
    );
    if (tsRuleIndex === -1) {
      throw Error(
        'This component assumes that you are using ts-loader. If you are not using it, then you might need to check and test code for how would it work with other loaders'
      );
    }
    webpackConfig.module.rules[tsRuleIndex] = {
      ...webpackConfig.module.rules[tsRuleIndex],
      include: [...webpackConfig.module.rules[tsRuleIndex].include, ...allowedPackagePaths]
    };

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
