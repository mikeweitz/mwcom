import React, { useEffect, useLayoutEffect, useContext, useState } from 'react';
import * as S from './styled-elements';
import { Container } from '../../styles/grid';
import { copy } from '../../data';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import Head from 'next/head';

import { useScrollContext } from '../scrollContext';

const Title = ({ name, small }) => {
  const parts = name.split(' ');
  return (
    <Link href="/" passHref>
      <S.Title $small={small}>
        <S.TitleLink>
          {parts.map((str, n) => {
            const name = str.split('');
            return (
              <React.Fragment key={`header_title_${small}${n}`}>
                <S.Initial>{name.shift()}</S.Initial>
                {!small && name.join('')}
                {!small && n < str.length + 1 && ' '}
              </React.Fragment>
            );
          })}
        </S.TitleLink>
      </S.Title>
    </Link>
  );
};

const Header = () => {
  const scroll = useScrollContext();

  const [showMenu, setShowMenu] = useState(false);

  const timer = null;
  const toggleMenu = () => {};
  const handleMenu = () => {
    if (['animateIn', 'animateOut'].includes(showMenu)) {
      return false;
    }

    const newState = showMenu === 'in' ? 'animateOut' : 'animateIn';
    const finalState = showMenu === 'in' ? 'out' : 'in';
    setShowMenu(newState);
    setTimeout(() => setShowMenu(finalState), 2000);
  };

  const renderLinks = () => {
    const {
      header: { title, email, github, linkedin, playlists },
    } = copy;
    return (
      <S.NavWrap $showMenu={showMenu}>
        <S.StyledLink href="#">
          <S.LinkSpan>{email.address + email.domain}</S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href={github.url}>
          <S.LinkSpan>{github.text}</S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href={linkedin.url}>
          <S.LinkSpan>{linkedin.text}</S.LinkSpan>
        </S.StyledLink>
        <Link href={playlists.url}>
          <S.StyledLink>
            <S.LinkSpan>{playlists.text}</S.LinkSpan>
          </S.StyledLink>
        </Link>
      </S.NavWrap>
    );
  };

  const {
    header: { title },
  } = copy;

  return (
    <S.Heading id="header" $scrolled={scroll.isScrolled}>
      <S.Overflow $scrolled={scroll.isScrolled}>
        <S.MenuButton onClick={() => setShowMenu(!showMenu)}>
          <S.MenuDotOne key={'menu-dot-one'} $active={showMenu} />
          <S.MenuDotTwo key={'menu-dot-two'} $active={showMenu} />
          <S.MenuDotThree key={'menu-dot-three'} $active={showMenu} />
        </S.MenuButton>

        <S.PageTop $scrolled={scroll.isScrolled}>
          <Title name={title} />
          {renderLinks()}
        </S.PageTop>

        <S.PageScrolled $scrolled={scroll.isScrolled}>
          <Title small name={title} />
          {renderLinks()}
        </S.PageScrolled>

        <Link href="/" passHref>
          <S.Logo $scrolled={scroll.isScrolled}>
            <S.Img src="/static/logo.png" />
          </S.Logo>
        </Link>
      </S.Overflow>
    </S.Heading>
  );
};
export default Header;
