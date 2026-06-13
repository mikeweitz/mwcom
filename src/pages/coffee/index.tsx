import Image from 'next/image';
import Head from 'next/head';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import { ScrollProvider } from '@mw/components/scrollContext';
import BlogHeader from '@mw/pages/blog/blog-header';

import { COFFEE_CATEGORY_ID, reandomEle } from '../blog';

import { Post, FeaturedMedia } from '@mw/types';

import styles from './styles.module.scss';

interface CoffeeProps {
    posts: Post[];
    found: number;
}

export const CURRENT_TAG_ID = 3893;

export const getServerSideProps = async () => {
    const endpoint = `/posts?categories=${COFFEE_CATEGORY_ID}&tags=${CURRENT_TAG_ID}&_embed&orderby=date&order=desc`;
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

const eyebrow = ['Espresso Recipes'];
const titles = ['Currently Brewing These Beans'];
const excerpts = [
    // 'Frequent thoughts about non-things',
    // 'Running a personal blog is the web equivalent of collecting vinyl',
    // 'Occastionl thoguhts about things.',
];

export default function Coffee({ posts }: CoffeeProps) {
    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman | Coffee</title>
                <meta
                    name="description"
                    content="Some thoughts, optionons, observations about web development, music, or other things I claim to know something about."
                />
            </Head>
            <Layout data-testid="blog-index">
                <h1 className={styles['page-title']}>Coffee</h1>
                <BlogHeader
                    className={styles['header-index']}
                    excerpt={reandomEle(excerpts)}
                    title={reandomEle(titles)}
                >
                    <em>{reandomEle(eyebrow)}</em>
                </BlogHeader>
                <div className={cx(styles.container, styles['coffee-index'])}>
                    {posts.length &&
                        posts.map((post) => {
                            const categories =
                                post._embedded?.['wp:term']?.[0] ?? [];
                            // const tags = post._embedded?.['wp:term']?.[1] ?? [];
                            const isWork = categories.some(
                                (cat) => cat.name === 'Work'
                            );
                            let image:
                                | (FeaturedMedia['media_details']['sizes']['full'] & {
                                      alt_text: FeaturedMedia['alt_text'];
                                  })
                                | null = null;
                            if (
                                post._embedded['wp:featuredmedia']?.[0]
                                    ?.media_details?.sizes?.full
                            ) {
                                image = {
                                    ...(post._embedded['wp:featuredmedia']?.[0]
                                        ?.media_details?.sizes?.medium ||
                                        post._embedded['wp:featuredmedia']?.[0]
                                            ?.media_details?.sizes?.full),
                                    alt_text:
                                        post._embedded['wp:featuredmedia']?.[0]
                                            ?.alt_text,
                                };
                            }

                            return (
                                <article
                                    key={post.id}
                                    className={cx(
                                        styles['card'],
                                        !isWork && styles['non-work']
                                    )}
                                >
                                    <span className={styles['card-contents']}>
                                        {image && (
                                            <figure className={styles.image}>
                                                <Image
                                                    width={image.width}
                                                    height={image.height}
                                                    src={image.source_url}
                                                    alt={image.alt_text || ''}
                                                />
                                            </figure>
                                        )}
                                        <aside className={styles['copy']}>
                                            <h2
                                                className={styles.title}
                                                dangerouslySetInnerHTML={{
                                                    __html: post.title.rendered,
                                                }}
                                            />
                                            <div
                                                className={styles.content}
                                                dangerouslySetInnerHTML={{
                                                    __html: post.content
                                                        .rendered,
                                                }}
                                            />
                                        </aside>
                                    </span>
                                </article>
                            );
                        })}
                </div>
                <div className={cx(styles.container, styles['footnote'])}>
                    <p>
                        Grind sizes for a Eureka Mignon Zero with the Aro dial
                        customization, using an 18g IMS basket.
                    </p>
                </div>
            </Layout>
        </ScrollProvider>
    );
}
