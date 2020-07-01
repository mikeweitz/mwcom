import React, { Component } from 'react';
import * as S from './styled-elements';
import { Container } from '../../styles/grid';
import { copy } from '../../data';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { withScroll } from '../scrollContext';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderLinks() {
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

  render() {
    const {
      header: { title, email, github, linkedin },
    } = copy;

    const scrolled = this.props.scrollY > 50;

    return (
      <S.Heading id="header" $scrolled={scrolled}>
        <Container>
          <S.PageTop $scrolled={scrolled}>
            <S.Group>
              <Link href="/" passHref>
                <S.TitleLink>
                  <S.Title>{title}</S.Title>
                </S.TitleLink>
              </Link>
            </S.Group>

            {this.renderLinks()}
          </S.PageTop>

          <S.PageScrolled $scrolled={scrolled}>
            <Link href="/" passHref>
              <S.TitleLink>
                <S.Title $small>{'MW'}</S.Title>
              </S.TitleLink>
            </Link>

            {this.renderLinks()}
          </S.PageScrolled>
        </Container>
      </S.Heading>
    );
  }
}

export default withScroll ? withScroll(Header) : Header;
