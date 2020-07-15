import React, { useEffect, useLayoutEffect, useState } from 'react';
import { initGA, logPageView } from '../../util/analytics';
import Header from '../header';
import Footer from '../footer';
import * as S from './styled-elements';

const Layout = ({ children }) => {
  const useIsomorphicEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicEffect(() => {
    if (window && !window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <S.Main>
      <S.ContentWrap>
        <Header />
        {children}
        <Footer />
      </S.ContentWrap>
    </S.Main>
  );
};
export default Layout;
