import React, { Component } from 'react';
import { initGA, logPageView } from '../../util/analytics';
import Header from '../header';
import Footer from '../footer';

import * as S from './styled-elements';

class Layout extends Component {
  componentDidMount() {
    if (window && !window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    return (
      <S.Main>
        <Header />
        {this.props.children}
        <Footer />
      </S.Main>
    );
  }
}
export default Layout;
