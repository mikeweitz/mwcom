import { NextApiRequest, NextApiResponse } from 'next';

const fields = 'ID,title,slug,date';

export const dynamic = 'force-dynamic';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('API:get-adjacent-posts', req.body);
    const { date } = JSON.parse(req.body);

    if (!date) {
        console.log('ERROR no date sent!', req.body);
        return res.status(500).json({
            invalid: 'Invalid input',
        });
    }

    try {
        const [after, before] = await Promise.all([
            fetch(
                new URL(
                    process.env.WORDPRESS_API_HOST +
                        `/posts?after=${date}&number=1&fields=${fields}&order=ASC`
                ),
                {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            ),
            fetch(
                new URL(
                    process.env.WORDPRESS_API_HOST +
                        `/posts?before=${date}&number=1&fields=${fields}`
                ),
                {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            ),
        ]);

        const next = await after.json();
        const prev = await before.json();

        console.log('results:', { next, prev });

        return res.status(200).json({
            next: next.posts[0] || null,
            prev: prev.posts[0] || null,
        });
    } catch (e) {
        console.error('error fetching posts', e);
        return res.status(500).json({
            error: 'Failed to fetch posts',
        });
    }
}
