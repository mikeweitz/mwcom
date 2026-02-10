import { useState } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import { ChevronsLeft } from 'lucide-react';
import { useRouter } from 'next/router';

import Layout from '@mw/components/layout';
// import PlaylistDetails from '@mw/components/playlist-details-v3';
// import PlaylistDetailsV2 from '@mw/components/playlist-details-v2';
// import { CardById } from '@mw/components/playlists';
import { ScrollProvider } from '@mw/components/scrollContext';
// import { Close } from '@mw/components/icons';
// import { getPlaylistFromApi } from '@mw/helpers/sheets';
// import colors from '@mw/constants/colors';
// import Drawer from '@mw/components/drawer';
// import { fetchPlaylist } from '@mw/helpers/fetch-playlist';
// import { emptyList, tracksAdapter } from '@mw/helpers/fetch-playlist';

import Date from '@mw/components/date';
import Button from '@mw/components/button';
import { AdjacentPosts } from './adjacent-posts';
import { BlogHeader } from './blog-header';

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
                <div className={cx(styles.container, blogStyles.blog)}>
                    <article
                        className={blogStyles.box}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <AdjacentPosts
                        date={date}
                        className={cx(
                            blogStyles['adjacent-posts'],
                            blogStyles.box
                        )}
                    />
                </div>
            </Layout>
        </ScrollProvider>
    );
};

export default BlogPost;
