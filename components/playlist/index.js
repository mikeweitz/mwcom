// @flow
import React, { useState, useEffect, useCallback, useRef } from 'react';
import * as S from './styled-elements';
import useSWR from 'swr';
import Link from 'next/link';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function Playlist({ pid, active, handler }) {
  if (!pid) {
    return null;
  }

  const [hover, setHover] = useState(active);
  const ref = useRef(null);

  const touchStart = (e) => {
    setHover(true);
    e.stopPropagation();
  };
  const touchEnd = (e) => {
    setHover(false);
    e.stopPropagation();
  };
  const touchMove = (e) => {
    e.stopPropagation();
  };
  const onClick = () => {
    handler(pid);
  };

  const { data, error } = useSWR(() => `/api/spotify/${pid}`, fetcher);

  useEffect(() => {
    if (ref && ref.current && typeof ref.current !== null) {
      ref.current.addEventListener('touchstart', touchStart);
      ref.current.addEventListener('touchmove', touchMove);
      ref.current.addEventListener('touchend', touchEnd);
      ref.current.addEventListener('click', onClick);
      return () => {
        ref.current.removeEventListener('touchstart', touchStart);
        ref.current.removeEventListener('touchmove', touchMove);
        ref.current.removeEventListener('touchend', touchEnd);
        ref.current.removeEventListener('click', onClick);
      };
    }
  }, [data, pid, ref.current]);

  if (error) return <div>{error.message}</div>;

  return !pid || pid === '' ? null : (
    <S.PList
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      $active={active || hover}
    >
      {data ? (
        <>
          <S.PlistName $hover={hover || active}>
            <span>{data.name}</span>
          </S.PlistName>
          <S.CoverArt
            $hover={hover || active}
            src={data.images[0].url}
            width={'120' || data.images[0].width}
          />
        </>
      ) : (
        <S.PlistName $hover={hover || active}>
          <span>{'Loading...'}</span>
        </S.PlistName>
      )}
    </S.PList>
  );
}
