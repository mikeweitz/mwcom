import React, { useState } from 'react';
import * as S from './styled-elements';
import { copy } from '../../data';
import Link from 'next/link';

import { useScrollContext } from '../scrollContext';

const Title = ({ name, small = false }) => {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('');

  return (
    <S.Title $small={small}>
      <S.TitleLink href="/">
        {small ? <S.Initial>{initials}</S.Initial> : name}
      </S.TitleLink>
    </S.Title>
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
      header: { email, github, linkedin, playlists },
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
        <S.StyledLink href={playlists.url}>
          <S.LinkSpan>{playlists.text}</S.LinkSpan>
        </S.StyledLink>
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
          <Title name={title} $small={true} />
          {renderLinks()}
        </S.PageScrolled>

        <Link href="/" passHref>
          <S.Logo $scrolled={scroll.isScrolled}>
            <S.Img src="/logo.png" />
          </S.Logo>
        </Link>
      </S.Overflow>
    </S.Heading>
  );
};
export default Header;
