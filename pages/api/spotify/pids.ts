import { NextApiRequest, NextApiResponse } from 'next';

import { getPlaylistIds } from '@mw/helpers/sheets';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const data = await getPlaylistIds();
        console.log('./spotify/monthly getStaticProps', data);

        return res.status(200).json(data);
    } catch (e) {
        console.error('error getting playlist', e);
        return res.status(500).json({});
    }
}
