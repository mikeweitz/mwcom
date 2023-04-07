const path = require('path');

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  experimental: {
    // for AWS Amplify include base folder for output tracing
    // outputFileTracingRoot: path.join(__dirname, './'),
  },
};
