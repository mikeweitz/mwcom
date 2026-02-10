import { CoinsIcon } from 'lucide-react';
import { NextApiRequest, NextApiResponse } from 'next';

const fields = 'ID,title,slug,date';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { date } = JSON.parse(req.body);

    if (!date) {
        return res.status(500).json({
            error: 'Invalid input',
        });
    }
    console.log('API fetch posts around date', date);

    try {
        const [after, before] = await Promise.all([
            fetch(
                new URL(
                    process.env.WORDPRESS_API_HOST +
                        `/posts?after=${date}&number=1&fields=${fields}`
                )
            ),
            fetch(
                new URL(
                    process.env.WORDPRESS_API_HOST +
                        `/posts?before=${date}&number=1&fields=${fields}`
                )
            ),
        ]);

        const next = await after.json();
        const prev = await before.json();

        console.log('wp api resp:', { next, prev });
        return res.status(200).json({
            next: next.posts[0] || null,
            prev: prev.posts[0] || null,
        });
    } catch (e) {
        return res.status(500).json({
            error: 'Failed to fetch posts',
        });
    }
}
