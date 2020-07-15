import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import useSWR from 'swr';
import Link from 'next/link';
import PlaylistDetails from '../components/playlist-details';
import Summary from '../components/summary';
import Playlist from '../components/playlist';
import { ScrollProvider } from '../components/scrollContext';
import { positions, skills, projects } from '../data';

import { GridPlaylist, GridLinks, Container } from '../styles/grid';

import * as S from '../styles/pages';
import { filter } from 'lodash';

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

  const handleChange = (pid) => {
    setActive(active === pid ? null : pid);
  };
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
          <GridPlaylist>
            {!data
              ? 'loading...'
              : error
              ? 'Uh oh...'
              : data.map((pid, i) => (
                  <S.PlaylistWrap $active={active === pid} key={pid}>
                    <Playlist
                      handler={handleChange}
                      active={pid === active}
                      key={i}
                      pid={pid}
                    />
                  </S.PlaylistWrap>
                ))}
          </GridPlaylist>
        </Container>
      </Layout>
    </ScrollProvider>
  );
};

export default Playlists;
