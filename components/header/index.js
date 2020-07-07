import React, { useEffect, useLayoutEffect, useContext, useState } from 'react';
import * as S from './styled-elements';
import { Container } from '../../styles/grid';
import { copy } from '../../data';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Head from 'next/head';

import { useScrollContext } from '../scrollContext';


const Header = () => {
  const scroll = useScrollContext();

  const renderLinks = () => {
    const {
      header: { title, email, github, linkedin },
    } = copy;
    return (
      <address>
        <S.StyledLink href="#">
          <S.LinkSpan>
            {email.address}
            {email.domain}
          </S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href={github.url}>
          <S.LinkSpan>{github.text}</S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href={linkedin.url}>
          <S.LinkSpan>{linkedin.text}</S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href="/playlists">
          <S.LinkSpan>{'Playlists'}</S.LinkSpan>
        </S.StyledLink>
      </address>
    );
  }

  const {
    header: { title, email, github, linkedin },
  } = copy;

  return (
    <S.Heading id="header" $scrolled={scroll.isScrolled}>
      <Container>
        <S.PageTop $scrolled={scroll.isScrolled}>
          <S.Group>
            <Link href="/" passHref>
              <S.TitleLink>
                <S.Title>{title}</S.Title>
              </S.TitleLink>
            </Link>
          </S.Group>

          {renderLinks()}
        </S.PageTop>

        <S.PageScrolled $scrolled={scroll.isScrolled}>
          <Link href="/" passHref>
            <S.TitleLink>
              <S.Title $small>{'MW'}</S.Title>
            </S.TitleLink>
          </Link>

          {renderLinks()}
        </S.PageScrolled>

        <S.Logo $scrolled={scroll.isScrolled}>
          <S.Img src="/static/logo.png" />
        </S.Logo>

      </Container>
    </S.Heading>
  );
}
export default Header;