const path = require('path');

module.exports = {
  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals['styletron-server'] = 'styletron-server';
    return config;
  },
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    // for AWS Amplify include base folder for output tracing
    outputFileTracingRoot: path.join(__dirname, './'),
  },
};
