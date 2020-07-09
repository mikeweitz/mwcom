import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled-elements';
import Link from 'next/link';
import useSWR from 'swr';
import { THEME } from '../../styles/theme';
import { Close } from '../icons';

import { useScrollContext } from '../scrollContext';

const {
  colors
} = THEME;

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
  const scrollRef = useRef(null)
  const { data, error } = useSWR( !pid ? null : () => `/api/spotify/${pid}`, fetcher);
  const [ hoverClose, setHoverClose ] = useState(false);
  useEffect(() => {
    console.warn('plist details effect', scrollRef)
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [pid])
  
  console.log('Playlist Details', pid, playlist, data );

  const { images, name, tracks, external_urls } = data || {}; 

  return (
    <S.Drawer $scrolled={scroll.isScrolled} $active={pid}>
      <S.Section id="playlist-details" $scrolled={scroll.isScrolled} $active={pid}>
        {error || !data ? null : (
          <S.ScrollContainer ref={scrollRef} >
            <S.Meta>
              <a href={external_urls.spotify} target="_blank">
                <S.PlistName>{name}</S.PlistName>
              </a>
            </S.Meta>

            <S.Cover>
              <a href={external_urls.spotify} target="_blank">
                <S.CoverImg src={images[0].url} />
              </a>
            </S.Cover>

            <S.Songs>
              <S.TrackList>
                {tracks.items.map(t => (
                  <S.Track key={t.sharing_info.share_id}>
                    <strong>{t.track.name}</strong>
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
      <S.Close 
        $active={pid}
        onClick={close}
        onMouseEnter={() => setHoverClose(true)}
        onMouseLeave={() => setHoverClose(false)}
      >
        <S.Icon>
          <Close alt='Close' width="50%" height="auto" fill={hoverClose && colors.heliotrope} />
        </S.Icon>
      </S.Close>
    </S.Drawer>
  );
}

export default PlaylistDetails;
