module.exports = {
  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals['styletron-server'] = 'styletron-server';
    return config;
  },
  distDir: 'html',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },
};
