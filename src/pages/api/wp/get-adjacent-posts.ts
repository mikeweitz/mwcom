import { NextApiRequest, NextApiResponse } from 'next';

const fields = 'ID,title,slug,date';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log('API:get-adjacent-posts', req.body);
    const { date } = JSON.parse(req.body);

    if (!date) {
        console.error('no date sent');
        return res.status(500).json({
            error: 'Invalid input',
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
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            ),
        ]);

        const next = after.headers.get('content-type').includes('json')
            ? await after.json()
            : await after.text();

        const prev = before.headers.get('content-type').includes('json')
            ? await before.json()
            : await before.text();

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
