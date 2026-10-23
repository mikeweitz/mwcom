import { COFFEE_CATEGORY_ID } from '../blog';
import Coffee, { CURRENT_TAG_ID } from './';

export const getServerSideProps = async (context) => {
    const isArchive = true;
    const tags = 'tags_exclude';
    const endpoint = `/posts?categories=${COFFEE_CATEGORY_ID}&${tags}=${CURRENT_TAG_ID}&_embed&orderby=date&order=desc`;
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + endpoint)
    );
    const found = parseInt(response.headers.get('X-WP-Total'), 10);

    if (response.ok) {
        const posts = await response.json();
        return {
            props: { posts, found, isArchive },
        };
    }

    return {
        props: {
            props: {
                notFound: true,
            },
        },
    };
};

export { Coffee as default };
