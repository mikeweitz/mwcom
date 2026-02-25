import type { NextConfig } from 'next';

import path from 'path';

const nextConfig: NextConfig = {
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

export default nextConfig;
