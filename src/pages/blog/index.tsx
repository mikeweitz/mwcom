import { useState } from 'react';
import Head from 'next/head';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';
import Link from 'next/link';

import styles from './styles.module.scss';

export const getServerSideProps = async () => {
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + `/posts`)
    );
    if (response.ok) {
        const { found, posts } = await response.json();
        console.log('posts from wordpress api', posts);
        return {
            props: { posts },
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

export default function Blog({ posts }) {
    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman | Blog</title>
                <meta
                    name="description"
                    content="Some thoughts, optionons, observations about web development, music, or other things I claim to know something about."
                />
            </Head>
            <Layout>
                <div className={styles.container}>
                    <h1>Blog</h1>
                    <p>Pulling data from WordPress...</p>
                    {posts &&
                        posts.map((post) => (
                            <div key={post.ID}>
                                <h2>{post.title}</h2>
                                <Link href={`/blog/${post.slug}`}>
                                    Read more
                                </Link>
                            </div>
                        ))}
                    <div>TODO: Pagination</div>
                </div>
            </Layout>
        </ScrollProvider>
    );
}
