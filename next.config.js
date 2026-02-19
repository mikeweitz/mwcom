const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
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
