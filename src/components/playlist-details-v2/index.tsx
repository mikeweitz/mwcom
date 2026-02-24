import React, { use, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import colors from '@mw/constants/colors';
import { Close, Play } from '@mw/components/icons';
import { useScrollContext } from '@mw/components/scrollContext';
import { fetchPlaylist } from '@mw/helpers/fetch-playlist';
import { PlaylistData } from '@mw/types';

import styles from './styles.module.scss';

type PlaylistDetailsProps = {
    pid: string;
    dataPromise?: Promise<PlaylistData>;
    close: () => void;
};

const PlaylistDetailsV2 = ({
    pid,
    dataPromise,
    close,
}: PlaylistDetailsProps) => {
    const scroll = useScrollContext();
    const scrollRef = useRef(null);
    // const [data, setData] = useState<PlaylistData>();
    const [loading, setLoading] = useState(false);

    const [hoverPlay, setHoverPlay] = useState(false);
    const [hoverClose, setHoverClose] = useState(false);

    const data = use(dataPromise);

    // useEffect(() => {
    //     if (pid) {
    //         setLoading(true);
    //         fetchPlaylist(pid).then(setData);
    //     } else {
    //         setLoading(false);
    //     }

    //     if (scrollRef && scrollRef.current) {
    //         scrollRef.current.scrollTop = 0;
    //     }
    // }, [pid]);

    // useEffect(() => {
    //     if (data && data.id) {
    //         setLoading(false);
    //     }
    // }, [data]);

    const { id, images, title, tracks, external_urls } = data || {};
    const link =
        external_urls?.spotify ||
        (id && `https://open.spotify.com/playlist/${id}`);

    return (
        <div
            className={cx(styles.drawer, {
                [styles.scrolled]: scroll.isScrolled,
                [styles.scrolling]: scroll.scrolling,
                [styles.active]: pid,
            })}
            //     $scrolled={scroll.isScrolled}
            //     $scrolling={scroll.scrolling}
            //     $active={pid}
        >
            <section
                className={cx(styles.section, {
                    [styles.active]: pid,
                    [styles.scrolled]: scroll.isScrolled,
                })}
                id="playlist-details"
                // $scrolled={scroll.isScrolled}
                // $active={pid}
            >
                {!data ? (
                    <h2 className={styles.loading}>Loading...</h2>
                ) : (
                    <div className={styles['scroll-container']} ref={scrollRef}>
                        {!data || loading ? (
                            <h2 className={styles.loading}>Loading...</h2>
                        ) : (
                            <>
                                <div className={styles.meta}>
                                    <a href={link} target="spotify">
                                        <h3 className={styles['p-list-name']}>
                                            {title}
                                        </h3>
                                    </a>
                                </div>

                                <div
                                    className={styles.cover}
                                    onMouseEnter={() => setHoverPlay(true)}
                                    onMouseLeave={() => setHoverPlay(false)}
                                >
                                    <a
                                        className={styles['cover-link']}
                                        href={link}
                                        target="spotify"
                                    >
                                        <span
                                            className={cx(
                                                styles['play-wrapper'],
                                                {
                                                    [styles.hover]: hoverPlay,
                                                }
                                            )}
                                        >
                                            <Play fill={colors.neonGreen} />
                                        </span>
                                        {images && images[0] && (
                                            <img
                                                className={styles['cover-img']}
                                                src={images[0].url}
                                            />
                                        )}
                                    </a>
                                </div>

                                <div className={styles.songs}>
                                    <ol className={styles['track-list']}>
                                        {tracks?.map((t) => {
                                            return (
                                                <li
                                                    className={styles.track}
                                                    key={t.url}
                                                >
                                                    <a
                                                        className={
                                                            styles['track-link']
                                                        }
                                                        href={t.url}
                                                        target="spotify"
                                                    >
                                                        <strong>
                                                            {t.title}
                                                        </strong>
                                                        <br />
                                                        {t.artist && (
                                                            <span
                                                                className={
                                                                    styles.artist
                                                                }
                                                            >
                                                                {t.artist ||
                                                                    'unknown'}
                                                            </span>
                                                        )}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ol>
                                </div>

                                <div className={styles.action}>
                                    <a
                                        className={styles.go}
                                        href={link}
                                        target="spotify"
                                    >
                                        {'Listen on Spotify'}
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </section>
            <button
                className={cx(styles.close, {
                    [styles.active]: pid,
                })}
                onClick={close}
                onMouseEnter={() => setHoverClose(true)}
                onMouseLeave={() => setHoverClose(false)}
            >
                <div className={styles.icon}>
                    <Close
                        alt="Close"
                        width="50%"
                        height="auto"
                        fill={hoverClose && colors.heliotrope}
                    />
                </div>
            </button>
        </div>
    );
};

export default PlaylistDetailsV2;
