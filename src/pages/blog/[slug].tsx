import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import cx from 'classnames';
import { useRouter } from 'next/router';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';

import { TPost } from '@mw/types';

import BlogHeader from './blog-header';

import styles from './styles.module.scss';
import blogStyles from './gutenberg.module.scss';

const LazyAdjacent = dynamic(() => import('@mw/pages/blog/adjacent-posts'), {
    loading: () => (
        <p className={cx(styles.box, styles['adjacent-posts'])}>
            Loading more...
        </p>
    ),
});

// TODO: migrate to API and iterate for all posts once we're past 100
export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(
        new URL(
            process.env.WORDPRESS_API_HOST + `/posts?number=100&fields=slug`
        )
    );

    if (response.ok) {
        const { posts } = await response.json();
        const paths = posts.map((post: TPost) => ({
            params: { slug: String(post.slug) },
        }));

        return { paths, fallback: 'blocking' };
    }
    return { paths: [], fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<TPost> = async ({
    params,
}: {
    params: { slug: string };
}) => {
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + `/posts/slug:${params.slug}`)
    );
    if (response.ok) {
        const post: TPost = await response.json();
        return {
            props: { ...post },
            revalidate: 60,
        };
    }
    return {
        notFound: true,
    };
};

const BlogPost = ({ title, content, date, excerpt, tags }: TPost) => {
    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman | {title}</title>
                <meta
                    name="description"
                    content={excerpt || 'Full blog post.'}
                />
            </Head>
            <Layout>
                <BlogHeader tags={tags} title={title} date={date}></BlogHeader>
                <div
                    className={cx(
                        styles.container,
                        styles.blog,
                        blogStyles.blog
                    )}
                >
                    <article
                        className={cx(styles.box, styles['blog-content'])}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <LazyAdjacent
                        date={date}
                        className={cx(styles.box, styles['adjacent-posts'])}
                    />
                </div>
            </Layout>
        </ScrollProvider>
    );
};

export default BlogPost;
