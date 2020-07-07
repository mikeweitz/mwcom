// @flow
import React, { useState } from 'react';
import * as S from './styled-elements';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Playlist({ pid, active }) {
  if (!pid) {
    return null;
  }

  const [hover, setHover] = useState(false);

  const { data, error } = useSWR(() => `/api/spotify/${pid}`, fetcher);

  if (error) return <div>{error.message}</div>;

  if (!data) return <div>Loading...</div>;

  const { images, name, tracks, external_urls } = data;

  return !pid || pid === '' ? null : (
    <S.PList
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      $active={active || hover}
    >
      <S.CoverArt
        $hover={hover || active}
        src={images[0].url}
        width={'120' || images[0].width}
      />
    </S.PList>
  );
}
