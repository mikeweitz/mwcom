import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import useSWR from 'swr';
import Link from 'next/link'
import PlaylistDetails from '../components/playlist-details';
import Summary from '../components/summary';
import Playlist from '../components/playlist';
import { ScrollProvider } from '../components/scrollContext';
import { positions, skills, projects } from '../data';

import { GridPlaylist, GridLinks, Container } from '../styles/grid';

import * as S from './styled-elements';
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
  const [ active, setActive ] = useState(null);
  const { data, error } = useSWR(() => `/api/spotify`, fetcher);

  return (
    <ScrollProvider>
      <Head>
        <title>Michael Weitzman</title>
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
                  <S.PlaylistWrap $active={active===pid} onClick={() => setActive(active === pid ? null : pid) }>
                    <Playlist active={ pid === active } key={i} pid={pid} />
                  </S.PlaylistWrap>
                ))}
          </GridPlaylist>
        </Container>
      </Layout>
    </ScrollProvider>
  );
};

export default Playlists;
