import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';
import Date from '@mw/components/date';
import classNames from 'classnames';
import LinkButton from '@mw/components/button/link';
import BlogHeader from './blog-header';

import styles from './styles.module.scss';

export interface Post extends Record<string, any> {
    title: string;
    date: string;
    excerpt?: string;
    slug: string;
    content: string;
    tags?: Tag[];
}
interface Tag extends Record<string, any> {
    ID: number;
    name: string;
    slug: string;
}

interface BlogProps {
    posts: Post[];
    found: number;
}

export const getServerSideProps = async () => {
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + `/posts`)
    );
    if (response.ok) {
        const { found, posts } = await response.json();

        return {
            props: { posts, found },
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

export default function Blog({ posts, found }: BlogProps) {
    // const [feature, ...roll] = posts || [];
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
                <h1 className={styles['page-title']}>Blog</h1>
                <BlogHeader
                    className={styles['header-index']}
                    excerpt="Sometimes they‘re about non-things."
                    title="Thoughts about things."
                >
                    <em>Waiting for AI comes for my thoughts.</em>
                </BlogHeader>

                <div
                    className={classNames(
                        styles.container,
                        styles['blog-index']
                    )}
                >
                    {posts.length &&
                        posts.map((post) => (
                            <article
                                key={post.ID}
                                className={styles['blog-card']}
                            >
                                <span className={styles['card-contents']}>
                                    <Date
                                        className={styles.date}
                                        format="short"
                                    >
                                        {post.date}
                                    </Date>
                                    <h2 className={styles.title}>
                                        {post.title}
                                    </h2>
                                    <LinkButton
                                        className={styles.button}
                                        href={`/blog/${post.slug}`}
                                    >
                                        Read More
                                    </LinkButton>
                                    {post.tags && (
                                        <p className={styles.tags}>
                                            {Object.values(post.tags).map(
                                                ({ name, ID }, i) => (
                                                    <span
                                                        className={styles.tag}
                                                        key={ID + '_' + i}
                                                    >
                                                        {name}
                                                    </span>
                                                )
                                            )}
                                        </p>
                                    )}
                                </span>
                            </article>
                        ))}
                    {found > posts.length && (
                        <div>More Posts - Pagination TBD</div>
                    )}
                </div>
            </Layout>
        </ScrollProvider>
    );
}
