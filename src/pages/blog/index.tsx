import Head from 'next/head';
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

const eyebrow = ['Blog Posts'];
const titles = ['Occasional thoughts about things'];
const excerpts = [
    'Frequent thoughts about non-things',
    'Running a personal blog is the web equivalent of collecting vinyl',
    // 'Occastionl thoguhts about things.',
];

const reandomEle = (arr) => {
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
                        posts.map((post) => (
                            <article
                                key={post.ID}
                                className={cx(
                                    styles['blog-card'],
                                    !Object.keys(post.categories).includes(
                                        'Work'
                                    ) && styles['blog-non-work']
                                )}
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
