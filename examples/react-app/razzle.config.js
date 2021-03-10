'use strict';

module.exports = {
  plugins: ['typescript'],

  modifyWebpackConfig: ({ webpackConfig }) => {
    // This is required to import cross-kube as ES module
    // https://github.com/jaredpalmer/razzle/issues/842
    delete webpackConfig.externals;


    // For debugging
    // config.mode = 'development'
    // if (config.optimization) {
    //   webpackConfig.optimization.minimize = false;
    // }

    return webpackConfig;
  }
};
