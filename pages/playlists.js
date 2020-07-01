// DOCUMENTATION: http://styletron.org
import React, { Component } from 'react';
import { styled, useStyletron } from 'styletron-react';
import Head from 'next/head';
import Layout from '../components/layout';
import useSWR from 'swr';

import Summary from '../components/summary';
import Playlist from '../components/playlist';
import { ScrollProvider } from '../components/scrollContext';
import { Grid, GridLinks, Container } from '../styles/grid';
import { isLength } from 'lodash';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const Playlists = () => {
  const { data, error } = useSWR(() => `/api/spotify`, fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <ScrollProvider>
      <Head>
        <title>Michael Weitzman</title>
      </Head>
      <Layout>
        <Container>
          <Grid>
            {data.map((pid, i) => (
              <Playlist key={i} pid={pid} />
            ))}
          </Grid>
        </Container>
      </Layout>
    </ScrollProvider>
  );
};

export default Playlists;
