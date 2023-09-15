import React, { useEffect, useRef, useState } from 'react';
import * as S from './styled-elements';
import Link from 'next/link';
import useSWR from 'swr';
import { THEME } from '../../styles/theme';
import { Close, Play } from '../icons';

import { useScrollContext } from '../scrollContext';

const { colors } = THEME;

const fetcher = async (url) => {
  console.log('fetcher', { url });
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const PlaylistDetails = ({ pid, playlist, close }) => {
  const scroll = useScrollContext();
  const scrollRef = useRef(null);
  const { data, error } = useSWR(
    !pid ? null : () => `/api/spotify/${pid}`,
    fetcher
  );
  const [hoverPlay, setHoverPlay] = useState(false);
  const [hoverClose, setHoverClose] = useState(false);

  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [pid]);

  const { id, images, name, tracks, external_urls } = data || {};
  const link =
    external_urls?.spotify || (id && `https://open.spotify.com/playlist/${id}`);
  return (
    <S.Drawer
      $scrolled={scroll.isScrolled}
      $scrolling={scroll.scrolling}
      $active={pid}
    >
      <S.Section
        id="playlist-details"
        $scrolled={scroll.isScrolled}
        $active={pid}
      >
        {error || !data ? null : (
          <S.ScrollContainer ref={scrollRef}>
            <S.Meta>
              <a href={link} target="spotify">
                <S.PlistName>{name}</S.PlistName>
              </a>
            </S.Meta>

            <S.Cover
              onMouseEnter={() => setHoverPlay(true)}
              onMouseLeave={() => setHoverPlay(false)}
            >
              <S.CoverLink href={link} target="spotify">
                <S.PlayWrapper $hover={hoverPlay}>
                  <Play fill={colors.neonGreen} />
                </S.PlayWrapper>
                <S.CoverImg src={images[0].url} />
              </S.CoverLink>
            </S.Cover>

            <S.Songs>
              <S.TrackList>
                {tracks.items.map((t) => {
                  console.log(t);
                  return (
                    <S.Track key={t.sharing_info?.share_id || t.ms}>
                      <S.TrackLink
                        href={t.track.external_urls?.spotify}
                        target="spotify"
                      >
                        <strong>{t.track.name}</strong>
                        <br />
                        {t.track.artists?.map((a) => {
                          return (
                            <S.Artist key={`${pid}_${a.id}`}>{a.name}</S.Artist>
                          );
                        })}
                      </S.TrackLink>
                    </S.Track>
                  );
                })}
              </S.TrackList>
            </S.Songs>

            <S.Action>
              <S.Go href={link} target="spotify">
                {'Listen on Spotify'}
              </S.Go>
            </S.Action>
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
          <Close
            alt="Close"
            width="50%"
            height="auto"
            fill={hoverClose && colors.heliotrope}
          />
        </S.Icon>
      </S.Close>
    </S.Drawer>
  );
};

export default PlaylistDetails;
