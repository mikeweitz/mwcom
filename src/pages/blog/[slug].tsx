import Head from 'next/head';
import dynamic from 'next/dynamic';
import cx from 'classnames';
import { useRouter } from 'next/router';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';

import BlogHeader from './blog-header';
import { TPost } from '@mw/types';

import styles from './styles.module.scss';
import blogStyles from './gutenberg.module.scss';

const LazyAdjacent = dynamic(() => import('@mw/pages/blog/adjacent-posts'), {
    loading: () => (
        <p className={cx(styles.box, styles['adjacent-posts'])}>
            Loading more...
        </p>
    ),
});

export const getServerSideProps = async ({ query: { slug } }) => {
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + `/posts/slug:${slug}`)
    );
    if (response.ok) {
        const post: TPost = await response.json();
        return {
            props: { ...post },
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

const BlogPost = ({ title, content, date, excerpt, tags, slug }: TPost) => {
    const router = useRouter();

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
