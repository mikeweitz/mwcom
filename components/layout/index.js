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
  const [hasFocus, setHasFocus] = useState(true);

  const onFocusChange = () => {
    setHasFocus(document.hasFocus());
  };

  const changeHueRotation = () => {
    const hue = Math.round(Math.random() * -180);
    setHueRotation(hue);
  };

  useInterval(
    () => {
      changeHueRotation();
    },
    hasFocus ? delay : null
  );

  useIsomorphicEffect(() => {
    window.addEventListener('focus', onFocusChange);
    window.addEventListener('blur', onFocusChange);
    if (window && !window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    return () => {
      window.removeEventListener('focus', onFocusChange);
      window.removeEventListener('blur', onFocusChange);
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
