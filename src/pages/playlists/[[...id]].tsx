import { useEffect, useState, Suspense } from 'react';
import Head from 'next/head';
import cx from 'classnames';
import { useRouter } from 'next/router';

import Layout from '@mw/components/layout';
import PlaylistDetails from '@mw/components/playlist-details-v3';
import { CardById } from '@mw/components/playlists';
import { ScrollProvider } from '@mw/components/scrollContext';
import { Close } from '@mw/components/icons';
import { getPlaylistFromApi } from '@mw/helpers/sheets';
import colors from '@mw/constants/colors';
import Drawer from '@mw/components/drawer';
import { fetchPlaylist } from '@mw/helpers/fetch-playlist';

import styles from './styles.module.scss';

export const getServerSideProps = async () => {
    const { playlists, years } = (await getPlaylistFromApi()) || {
        playlists: null,
        years: null,
    };
    return {
        props: {
            playlists,
            years,
        },
        // revalidate: 1 * 60 * 60 * 24, // value in seconds for 24 hours
    };
};

const Playlists = ({ playlists, years }) => {
    const router = useRouter();
    // sort years descending
    years.sort((a: number, b: number) => b - a);
    const [yearFilter, setYearFilter] = useState([]);

    const [active, setActive] = useState<string | null>(
        router.query.id ? String(router.query.id) : null
    );

    const handleChange = (pid) => {
        if (pid === null || pid === active) {
            setActive(null);
        } else {
            setActive(pid);
        }
        router.push(
            { pathname: router.pathname, query: { id: pid } },
            undefined,
            {
                shallow: true,
            }
        );
    };

    const filterYear = (year) => {
        if (yearFilter.includes(year)) {
            const newFilter = yearFilter.filter((y) => y !== year);
            setYearFilter(newFilter);
        } else {
            setYearFilter([...yearFilter, year]);
        }
    };

    const filterData = playlists
        ? yearFilter.length > 0
            ? playlists.filter((d) => {
                  const y = new Date(d.date).getFullYear();
                  return yearFilter.includes(y);
              })
            : playlists
        : null;

    const activePlaylistProomie = active ? fetchPlaylist(active) : null;

    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman</title>
                <meta
                    name="description"
                    content="A collection of personal playlists on Spotify. Back when I ran band websites for a living and DJ'd local bars, I made monthly playlists of the music I found on Blogs, KXLU, KCRW, Pirate Radio, and more. A lot of that stuff is still sitting in an old iTunes library, but I flipped to streaming and haven't really looked back.  It's the closest thing I have to a journal, so here it is."
                />
            </Head>
            <Layout>
                <Drawer handleClose={handleChange} active={!!active}>
                    {active && activePlaylistProomie && (
                        <Suspense fallback={<div>Loading...</div>} key={active}>
                            <PlaylistDetails
                                dataPromise={activePlaylistProomie}
                                pid={active}
                            />
                        </Suspense>
                    )}
                </Drawer>
                <div className={styles.container}>
                    <small className={styles['filter-label']}>
                        Filter by year
                    </small>

                    <div className={styles['playlist-filters']}>
                        {yearFilter.length < 1 ? null : (
                            <button
                                className={styles['clear-button']}
                                onClick={() => setYearFilter([])}
                            >
                                <div className={styles['svg-wrap']}>
                                    <Close
                                        alt="Close"
                                        width="100%"
                                        height="100%"
                                        fill={colors.steelBlue}
                                    />
                                </div>
                            </button>
                        )}
                        {years.map((y) => (
                            <button
                                className={cx(styles['filter-option'], {
                                    [styles.active]: yearFilter.includes(y),
                                })}
                                key={`plist_filter_${y}`}
                                onClick={() => filterYear(y)}
                            >
                                {y}
                            </button>
                        ))}
                    </div>

                    <div className={styles['grid-playlist']}>
                        {!filterData ? (
                            'loading...'
                        ) : // ) : error ? (
                        //     'Uh oh...'
                        filterData.length < 1 ? (
                            <h3>No matching lists for this filter.</h3>
                        ) : (
                            filterData.map((p, i: number) => (
                                <div
                                    className={styles['playlist-wrap']}
                                    key={p.id}
                                >
                                    {active === p.id && 'active'}
                                    <CardById
                                        active={p.id === active}
                                        id={p.id}
                                        name={p.name}
                                        image={p.image}
                                        onClick={() => handleChange(p.id)}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </Layout>
        </ScrollProvider>
    );
};

export default Playlists;
