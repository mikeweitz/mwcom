import { NextApiRequest, NextApiResponse } from 'next';

const fields = 'ID,title,slug,date,excerpt,tags';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch(
        new URL(
            process.env.WORDPRESS_API_HOST +
                `/posts?sticky=include&number=1&fields=${fields}`
        )
    );

    if (response.ok) {
        const { posts } = await response.json();
        const post = posts[0];
        return res.status(200).json({ post });
    }

    return res.status(500).json({
        error: 'Failed to fetch posts',
    });
}
