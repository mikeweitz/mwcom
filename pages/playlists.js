import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import useSWR from 'swr';
import Link from 'next/link';
import PlaylistDetails from '../components/playlist-details';
import Summary from '../components/summary';
import Playlist from '../components/playlist';
import { ScrollProvider } from '../components/scrollContext';
import { Close } from '../components/icons';

import { GridPlaylist, GridLinks, Container } from '../styles/grid';

import { THEME } from '../styles/theme';
const { colors } = THEME;

import * as S from '../styles/pages';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Playlists = () => {
  const [active, setActive] = useState(null);
  const { data, error } = useSWR(() => `/api/spotify`, fetcher);

  const [yearFilter, setYearFilter] = useState([]);

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

  const activeYears = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];

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
        <PlaylistDetails close={() => setActive(null)} pid={active || null} />
        <Container>
          <S.FilterLabel>Filter by year</S.FilterLabel>

          <S.PlaylistFilters>
            {yearFilter.length < 1 ? null : (
              <S.ClearButton
                // // $active={pid}
                onClick={() => setYearFilter([])}
                // // onMouseEnter={() => setHoverClose(true)}
                // // onMouseLeave={() => setHoverClose(false)}
              >
                <S.SvgWrap>
                  <Close
                    alt="Close"
                    width="100%"
                    height="100%"
                    fill={colors.steelBlue}
                  />
                </S.SvgWrap>
              </S.ClearButton>
            )}
            {activeYears.map((y) => (
              <S.FilterOption
                $active={yearFilter.includes(y)}
                key={`plist_filter_${y}`}
                onClick={() => filterYear(y)}
              >
                {y}
              </S.FilterOption>
            ))}
          </S.PlaylistFilters>

          <GridPlaylist>
            {!filterData ? (
              'loading...'
            ) : error ? (
              'Uh oh...'
            ) : filterData.length < 1 ? (
              <h3>No matching lists for this filter.</h3>
            ) : (
              filterData.map((p, i) => {
                return (
                  <S.PlaylistWrap $active={active === p.pid} key={p.pid}>
                    <Playlist
                      handler={handleChange}
                      active={p.pid === active}
                      key={i}
                      pid={p.pid}
                    />
                  </S.PlaylistWrap>
                );
              })
            )}
          </GridPlaylist>
        </Container>
      </Layout>
    </ScrollProvider>
  );
};

export default Playlists;
