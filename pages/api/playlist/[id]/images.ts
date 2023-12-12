import { NextApiRequest, NextApiResponse } from 'next';

import { playlistImages } from '@mw/helpers/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        query: { id },
    } = req;

    try {
        const response = await playlistImages(id as string);
        const data = await response.json();

        res.setHeader(
            'Cache-Control',
            'public, s-maxage=86400, stale-while-revalidate=43200'
        );
        return res.status(200).json(data);
    } catch (e) {
        console.error('error getting playlist image', e);
        return res.status(500).json({});
    }
}
