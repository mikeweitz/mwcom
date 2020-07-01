import React, { Component } from 'react';
import { styled, useStyletron } from 'styletron-react';
import Head from 'next/head';
import Layout from '../components/layout';
import useSWR from 'swr';

import Summary from '../components/summary';
import Playlist from '../components/playlist';
import Position from '../components/position';
import SkillGroup from '../components/skillGroup';
import Project from '../components/project';
import { ScrollProvider } from '../components/scrollContext';
import { positions, skills, projects } from '../data';

import { Grid, GridLinks, Container } from '../styles/grid';

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
  return (
    <ScrollProvider>
      <Head>
        <title>Michael Weitzman</title>
      </Head>
      <Layout>
        <Container>
          <Summary />
        </Container>

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
