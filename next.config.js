const path = require('path');

module.exports = {
    output: 'standalone',
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
    },
    experimental: {
        // for AWS Amplify include base folder for output tracing
        // outputFileTracingRoot: path.join(__dirname, './'),
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mosaic.scdn.co',
            },
            {
                protocol: 'https',
                hostname: 'i.scdn.co',
            },
        ],
    },
};
