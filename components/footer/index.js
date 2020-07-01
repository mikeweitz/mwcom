import React, { Component } from 'react';

import * as S from './styled-elements';
import { animateScroll } from 'react-scroll';
import { Container } from '../../styles/grid';
import { Print } from '../icons';
import Link from 'next/link'

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
              <Print />
            </S.PrintIcon>
            Print this
          </S.ButtonPrint>

          <S.ButtonTop onClick={this.handleToTop}>Back to top</S.ButtonTop>
        </Container>
        <Container>
          <Link href="/playlists">Monthly Playlists</Link>
        </Container>
      </S.Footer>
    );
  }
}

export default Footer;
