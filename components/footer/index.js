import React, { Component, useState } from 'react';

import * as S from './styled-elements';
import { animateScroll } from 'react-scroll';
import { Container } from '../../styles/grid';
import { Print, Arrow } from '../icons';
import Link from 'next/link'

import { THEME } from '../../styles/theme';
const {
  colors
} = THEME;
class Footer extends Component {
  constructor() {
    super();
  }

  state = {
    hoverPrint: false,
  };

  onPrint = e => {
    return window.open('/static/pdf/michael-weitzman-resume.pdf', 'download');
  };

  handleToTop = e => {
    animateScroll.scrollToTop();
  };

  handleMouseEnter = () => {
    this.setState({ hoverPrint: true });
  };

  handleMouseLeave = () => {
    this.setState({ hoverPrint: false });
  };

  render() {
    const { hoverPrint } = this.state;
    return (
      <S.Footer id="footer">
        <Container>
          <S.ButtonPrint
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.onPrint}
          >
            <S.PrintIcon $hover={hoverPrint}>
              <Print fill={colors.turquoise}/>
            </S.PrintIcon>
            Print this
          </S.ButtonPrint>

          <S.ButtonTop onClick={this.handleToTop}>
            <Arrow fill={colors.turquoise} alt="Back to top" />
          </S.ButtonTop>
        </Container>
      </S.Footer>
    );
  }
}

export default Footer;
