import Head from 'next/head';
import cx from 'classnames';
import { useRouter } from 'next/router';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';
import AdjacentPosts from './adjacent-posts';
import BlogHeader from './blog-header';

import styles from './styles.module.scss';
import blogStyles from './gutenberg.module.scss';

export const getServerSideProps = async ({ query: { slug } }) => {
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + `/posts/slug:${slug}`)
    );
    if (response.ok) {
        const post = await response.json();
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

const BlogPost = ({ title, content, date, excerpt, slug }) => {
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
                <BlogHeader title={title} date={date}></BlogHeader>
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
                    <AdjacentPosts
                        date={date}
                        className={cx(styles['adjacent-posts'], styles.box)}
                    />
                </div>
            </Layout>
        </ScrollProvider>
    );
};

export default BlogPost;
