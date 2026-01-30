import { useState } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import { useRouter } from 'next/router';

import Layout from '@mw/components/layout';
import PlaylistDetails from '@mw/components/playlist-details-v3';
// import PlaylistDetailsV2 from '@mw/components/playlist-details-v2';
import { CardById } from '@mw/components/playlists';
import { ScrollProvider } from '@mw/components/scrollContext';
import { Close } from '@mw/components/icons';
import { getPlaylistFromApi } from '@mw/helpers/sheets';
import colors from '@mw/constants/colors';
import Drawer from '@mw/components/drawer';
import { fetchPlaylist } from '@mw/helpers/fetch-playlist';
import { emptyList, tracksAdapter } from '@mw/helpers/fetch-playlist';

// import styles from './styles.module.scss';

export const getServerSideProps = async ({ query: { slug } }) => {
    const response = await fetch(
        new URL(process.env.WORDPRESS_API_HOST + `/posts/slug:${slug}`)
    );
    if (response.ok) {
        const post = await response.json();
        console.log('post from wordpress api', post);
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
const Playlists = ({ title, content, date }) => {
    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman | Playlist</title>
                <meta name="description" content="Playlists Details" />
            </Head>
            <Layout>
                <div>
                    <h1>{title}</h1>
                    <Date>{new Date(date).toLocaleDateString()}</Date>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </Layout>
        </ScrollProvider>
    );
};

export default Playlists;
