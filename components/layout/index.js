import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { initGA, logPageView } from '../../util/analytics';
import Header from '../header';
import Footer from '../footer';
import * as S from './styled-elements';

const Layout = ({ children }) => {
  const useIsomorphicEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const delay = 8000;

  const [hueRotation, setHueRotation] = useState(null);

  const changeHueRotation = () => {
    const hue = Math.round(Math.random() * -180);
    console.log('Change bg hue', hue);
    setHueRotation(hue);
  };

  useInterval(() => {
    changeHueRotation();
  }, delay);

  useIsomorphicEffect(() => {
    if (window && !window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    return () => {
      console.log('unmount');
    };
  }, []);

  return (
    <S.Main $hue={hueRotation} $delay={delay}>
      <S.ContentWrap>
        <Header />
        {children}
        <Footer />
      </S.ContentWrap>
    </S.Main>
  );
};
export default Layout;
