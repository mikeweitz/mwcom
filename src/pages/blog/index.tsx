import { useState } from 'react';
import Head from 'next/head';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';
import Link from 'next/link';

import styles from './styles.module.scss';
import Date from '@mw/components/date';
import classNames from 'classnames';
import LinkButton from '@mw/components/button/link';

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

export default function Blog({ posts, found }) {
    const [feature, ...roll] = posts || [];
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
                <header className={styles.feature}>
                    <div className={styles.container}>
                        <Link href={`/blog/${feature.slug}`}>
                            <em>Featured Post</em>
                            <Date className={styles.date}>{feature.date}</Date>
                            <h2>{feature.title}</h2>
                            <article
                                className={styles.blurb}
                                dangerouslySetInnerHTML={{
                                    __html: feature.excerpt,
                                }}
                            />
                        </Link>
                    </div>
                </header>
                <div
                    className={classNames(
                        styles.container,
                        styles['blog-index']
                    )}
                >
                    {roll &&
                        roll.map((post) => (
                            <article
                                key={post.ID}
                                className={styles['blog-card']}
                            >
                                <span className={styles['card-contents']}>
                                    <Date format="short">{post.date}</Date>
                                    <h2 className={styles.title}>
                                        {post.title}
                                    </h2>
                                    <LinkButton
                                        className={styles.button}
                                        href={`/blog/${post.slug}`}
                                    >
                                        Read More
                                    </LinkButton>
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
