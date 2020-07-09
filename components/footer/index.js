import React, { Component, useState } from 'react';

import * as S from './styled-elements';
import { animateScroll } from 'react-scroll';
import { Container } from '../../styles/grid';
import { Print, Arrow } from '../icons';
import Link from 'next/link';

import { THEME } from '../../styles/theme';
const { colors } = THEME;
const Footer = () => {
  const [hoverPrint, setHoverPrint] = useState(false);
  const [hoverArrow, setHoverArrow] = useState(false);

  const onPrint = (e) => {
    return window.open('/static/pdf/michael-weitzman-resume.pdf', 'download');
  };

  const handleToTop = (e) => {
    animateScroll.scrollToTop();
  };

  const handleMouseEnter = () => {
    setHoverPrint(true);
  };

  const handleMouseLeave = () => {
    setHoverPrint(false);
  };

  return (
    <S.Footer id="footer">
      <S.Row>
        <S.ButtonPrint
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={onPrint}
        >
          <S.PrintIcon $hover={hoverPrint}>
            <Print fill={colors.turquoise} />
          </S.PrintIcon>
          Print this
        </S.ButtonPrint>

        <S.ButtonTop
          onClick={handleToTop}
          onMouseEnter={() => setHoverArrow(true)}
          onMouseLeave={() => setHoverArrow(false)}
        >
          <S.Out $hover={hoverArrow}>
            <Arrow fill={colors.steelBlue} alt="Back to top" />
          </S.Out>
          <S.Over $hover={hoverArrow}>
            <Arrow fill={colors.turquoise} alt="Back to top" />
          </S.Over>
        </S.ButtonTop>
      </S.Row>
    </S.Footer>
  );
};

export default Footer;
