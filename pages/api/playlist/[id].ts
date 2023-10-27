import { NextApiRequest, NextApiResponse } from 'next';

import { playlist } from '@mw/helpers/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        // cookies: { ['id_token']: idToken },
        query: { id },
    } = req;

    try {
        const response = await playlist(id as string);
        const data = await response.json();

        res.setHeader(
            'Cache-Control',
            'public, s-maxage=86400, stale-while-revalidate=43200'
        );
        console.log('Retrieved playlist for id', id);
        return res.status(200).json(data);
    } catch (e) {
        console.error('error getting playlist', e);
        return res.status(500).json({});
    }
}
