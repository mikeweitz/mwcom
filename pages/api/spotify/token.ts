import { NextApiRequest, NextApiResponse } from 'next';

import { playlist, getAccessToken } from '@mw/helpers/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { access_token } = await getAccessToken();
        console.log('Access token', access_token);
        return res.status(200).json({ token: access_token });
    } catch (e) {
        console.error('error getting playlist', e);
        return res.status(500).json({});
    }
}
