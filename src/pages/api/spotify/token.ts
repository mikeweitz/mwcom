import { NextApiRequest, NextApiResponse } from 'next';

import { getAccessToken } from '@mw/helpers/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { access_token } = await getAccessToken();
        return res.status(200).json({ token: access_token });
    } catch (e) {
        console.error('error getting playlist', e);
        return res.status(500).json({});
    }
}
