// @flow
import React, { useState } from 'react';
import * as S from './styled-elements';
import useSWR from 'swr';

const fetcher = async url => {
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
  const [showTrackList, setShowTrackList] = useState(false);

  const { data, error } = useSWR(() => `/api/spotify/${pid}`, fetcher);

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data.tracks.items);
  const { images, name, tracks, external_urls } = data;

  return !pid || pid === '' ? null : (
    <S.PList>
      <h3>{name}</h3>
      <a href={external_urls.spotify} target="_blank">
        <img src={images[0].url} width={'120' || images[0].width} />
      </a>
      <button onClick={() => setShowTrackList(!showTrackList)}>Tracks</button>
      {!!showTrackList && (
        <ol>
          {tracks.items.map(t => (
            <li key={t.sharing_info.share_id}>
              {t.track.name}
              <br />
              {t.track.artists.map(a => (
                <S.Artist>{a.name}</S.Artist>
              ))}
            </li>
          ))}
        </ol>
      )}
    </S.PList>
  );
}
