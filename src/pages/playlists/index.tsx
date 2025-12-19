import { useState } from 'react';
import Head from 'next/head';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import PlaylistDetails from '@mw/components/playlist-details-v3';
// import PlaylistDetailsV2 from '@mw/components/playlist-details-v2';
import { CardById } from '@mw/components/playlists';
import { ScrollProvider } from '@mw/components/scrollContext';
import { Close } from '@mw/components/icons';
import { getPlaylistFromApi } from '@mw/helpers/sheets';
import colors from '@mw/constants/colors';
import Drawer from '@mw/components/drawer';

import styles from './styles.module.scss';

export const getStaticProps = async () => {
    const data = await getPlaylistFromApi();
    return {
        props: {
            data,
        },
        revalidate: 1 * 60 * 60 * 24, // value in seconds for 24 hours
    };
};

const Playlists = ({ data }) => {
    const [active, setActive] = useState(null);
    const [yearFilter, setYearFilter] = useState([]);

    const activeYears = [
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
        '2023',
        '2024',
        '2025',
    ];

    const handleChange = (pid) => {
        setActive(active === pid ? null : pid);
    };

    const filterYear = (year) => {
        if (yearFilter.includes(year)) {
            const newFilter = yearFilter.filter((y) => y !== year);
            setYearFilter(newFilter);
        } else {
            setYearFilter([...yearFilter, year]);
        }
    };

    const filterData = data
        ? yearFilter.length > 0
            ? data.filter((d) => {
                  const y = new Date(d.date).getFullYear();
                  return yearFilter.includes(y + '');
              })
            : data
        : null;

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
                <Drawer handleClose={setActive} active={!!active}>
                    {active && <PlaylistDetails pid={active || null} />}
                </Drawer>
                {/* <PlaylistDetailsV2
                    close={() => setActive(null)}
                    pid={active || null}
                /> */}
                <div className={styles.container}>
                    <small className={styles['filter-label']}>
                        Filter by year
                    </small>

                    <div className={styles['playlist-filters']}>
                        {yearFilter.length < 1 ? null : (
                            <button
                                className={styles['clear-button']}
                                // // $active={pid}
                                onClick={() => setYearFilter([])}
                                // // onMouseEnter={() => setHoverClose(true)}
                                // // onMouseLeave={() => setHoverClose(false)}
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
                        {activeYears.reverse().map((y) => (
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
                                    <CardById
                                        active={p.id === active}
                                        key={p.id}
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
