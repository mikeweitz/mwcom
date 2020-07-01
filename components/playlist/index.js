// @flow
import React from 'react';
import * as S from './styled-elements';
import useSWR from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Playlist({ pid }) {
  if (!pid) {
    return null;
  }
  const { data, error } = useSWR(() => `/api/spotify/${pid}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const { images, name, tracks, external_urls } = data;
  return !pid || pid === '' ? null : (
    <S.PList>
      <h3>{name}</h3>
      <a href={external_urls.spotify} target="_blank">
        <img src={images[0].url} width={'120' || images[0].width} />
      </a>
    </S.PList>
  );
}
