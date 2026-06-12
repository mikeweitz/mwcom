import Head from 'next/head';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';
import Date from '@mw/components/date';
import classNames from 'classnames';
import LinkButton from '@mw/components/button/link';
import BlogHeader from './blog-header';

import styles from './styles.module.scss';

import type { Post } from '@mw/types';

// export interface RenderedField {
//     rendered: string;
// }

// export interface Term {
//     id: number;
//     name: string;
//     slug: string;
// }

// export interface Embedded {
//     'wp:term'?: Term[][];
//     'wp:featuredmedia'?: FeaturedMedia[];
// }

// export interface FeaturedMedia {
//     id: number;
//     source_url: string;
//     alt_text: string;
//     media_details: {
//         width: number;
//         height: number;
//         sizes: {
//             full: { source_url: string; width: number; height: number };
//             large?: { source_url: string; width: number; height: number };
//             medium?: { source_url: string; width: number; height: number };
//             thumbnail?: { source_url: string; width: number; height: number };
//         };
//     };
// }

// export interface Post {
//     id: number;
//     date: string;
//     slug: string;
//     title: RenderedField;
//     excerpt: RenderedField;
//     content: RenderedField;
//     _embedded?: Embedded;
// }

interface BlogProps {
    posts: Post[];
    found: number;
}

export const COFFEE_CATEGORY_ID = 16166;

export const getServerSideProps = async () => {
    const endpoint = `/posts?categories_exclude=${COFFEE_CATEGORY_ID}&_embed`;
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + endpoint)
    );
    const found = parseInt(response.headers.get('X-WP-Total'), 10);

    if (response.ok) {
        const posts = await response.json();
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

const eyebrow = ['Blog Posts'];
const titles = ['Occasional thoughts about things'];
const excerpts = [
    'Frequent thoughts about non-things',
    'Running a personal blog is the web equivalent of collecting vinyl',
    // 'Occastionl thoguhts about things.',
];

export const reandomEle = (arr) => {
    const index = Math.round(Math.random() * (arr.length - 1));
    return arr[index];
};

export default function Blog({ posts, found }: BlogProps) {
    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman | Blog</title>
                <meta
                    name="description"
                    content="Some thoughts, optionons, observations about web development, music, or other things I claim to know something about."
                />
            </Head>
            <Layout data-testid="blog-index">
                <h1 className={styles['page-title']}>Blog</h1>
                <BlogHeader
                    className={styles['header-index']}
                    excerpt={reandomEle(excerpts)}
                    title={reandomEle(titles)}
                >
                    <em>{reandomEle(eyebrow)}</em>
                </BlogHeader>

                <div
                    className={classNames(
                        styles.container,
                        styles['blog-index']
                    )}
                >
                    {posts.length &&
                        posts.map((post) => {
                            const categories =
                                post._embedded?.['wp:term']?.[0] ?? [];
                            const tags = post._embedded?.['wp:term']?.[1] ?? [];
                            const isWork = categories.some(
                                (cat) => cat.name === 'Work'
                            );
                            return (
                                <article
                                    key={post.id}
                                    className={cx(
                                        styles['blog-card'],
                                        !isWork && styles['blog-non-work']
                                    )}
                                >
                                    <span className={styles['card-contents']}>
                                        <Date
                                            className={styles.date}
                                            format="short"
                                        >
                                            {post.date}
                                        </Date>
                                        <h2
                                            className={styles.title}
                                            dangerouslySetInnerHTML={{
                                                __html: post.title.rendered,
                                            }}
                                        />
                                        <LinkButton
                                            className={styles.button}
                                            href={`/blog/${post.slug}`}
                                        >
                                            Read More
                                        </LinkButton>
                                        {tags.length > 0 && (
                                            <p className={styles.tags}>
                                                {tags.map((tag, i) => (
                                                    <span
                                                        className={styles.tag}
                                                        key={tag.id + '_' + i}
                                                    >
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </p>
                                        )}
                                    </span>
                                </article>
                            );
                        })}
                    {found > posts.length && (
                        <div>More Posts - Pagination TBD</div>
                    )}
                </div>
            </Layout>
        </ScrollProvider>
    );
}
