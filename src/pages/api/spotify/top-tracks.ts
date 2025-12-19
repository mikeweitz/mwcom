import { NextApiRequest, NextApiResponse } from 'next';

import { topTracks } from '@mw/helpers/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const response = await topTracks();
        console.log('top tracks api');
        return res.status(200).json(await response.json());
    } catch (e) {
        console.error('error getting playlist', e);
        return res.status(500).json({});
    }
}
