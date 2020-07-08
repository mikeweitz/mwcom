import React, { useState } from 'react';
import * as S from './styled-elements';
import { Container } from '../../styles/grid';
import { copy } from '../../data';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import useSWR from 'swr';

import { useScrollContext } from '../scrollContext';


const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const PlaylistDetails = ({ pid, playlist, close }) => {
  const scroll = useScrollContext();

  const { data, error } = useSWR( !pid ? null : () => `/api/spotify/${pid}`, fetcher);

  console.log('Playlist Details', pid, playlist, data );

  const { images, name, tracks, external_urls } = data || {}; 

  return (
    <S.Drawer $scrolled={scroll.isScrolled} $active={pid}>
      <S.Section id="playlist-details" $scrolled={scroll.isScrolled} $active={pid}>
        {error || !data ? null : (
          <S.ScrollContainer>
            <S.Meta>
              <a href={external_urls.spotify} target="_blank">
                <S.PlistName>{name}</S.PlistName>
              </a>
            </S.Meta>

            <S.Cover>
              <S.CoverImg src={images[0].url} />
            </S.Cover>

            <S.Songs>
              <S.TrackList>
                {tracks.items.map(t => (
                  <S.Track key={t.sharing_info.share_id}>
                    {t.track.name}
                    <br />
                    {t.track.artists.map(a => {
                      return <S.Artist key={`${pid}_${a.id}`}>{a.name}</S.Artist>;
                    })}
                  </S.Track>
                ))}
              </S.TrackList>
            </S.Songs>
          </S.ScrollContainer>
        )}
      </S.Section>
      <S.Close onClick={close}>Close</S.Close>
    </S.Drawer>
  );
}

export default PlaylistDetails;
