'use client';

import React, { use, useState } from 'react';

import { PlaylistData } from '@mw/types';

import { TrackList } from './tracklist';
import { CoverImage } from './cover-image';

import styles from './styles.module.scss';

type PlaylistDetailsProps = {
    pid: string;
    dataPromise?: Promise<PlaylistData>;
};

const PlaylistDetails = ({ pid, dataPromise }: PlaylistDetailsProps) => {
    // const scroll = useScrollContext();
    // const scrollRef = useRef(null);
    // const [data, setData] = useState<PlaylistData>();
    const data = use(dataPromise);
    // const [loading, setLoading] = useState(data && data.id ? false : true);

    const [hoverPlay, setHoverPlay] = useState(false);

    const { id, images, title, tracks, external_urls } = data || {};
    const link: string =
        external_urls?.spotify ||
        (id && `https://open.spotify.com/playlist/${id}`);

    return (
        <div key={pid} className={styles.section}>
            {!data ? (
                <h2 className={styles.loading}>Loading...</h2>
            ) : (
                <>
                    <div className={styles.meta}>
                        <a href={link} target="spotify">
                            <h3 className={styles['p-list-name']}>{title}</h3>
                        </a>
                    </div>

                    <CoverImage
                        onMouseEnter={() => setHoverPlay(true)}
                        onMouseLeave={() => setHoverPlay(false)}
                        link={link}
                        hoverPlay={hoverPlay}
                        images={images}
                    />

                    <div className={styles.songs}>
                        <TrackList tracks={tracks} />
                    </div>

                    <div className={styles.action}>
                        <a className={styles.go} href={link} target="spotify">
                            {'Listen on Spotify'}
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default PlaylistDetails;
