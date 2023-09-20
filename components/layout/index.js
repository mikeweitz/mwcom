import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useInterval } from '../../hooks/useInterval';
import { initGA, logPageView } from '../../util/analytics';
import Header from '../header';
import Footer from '../footer';

import styles from './styles.module.scss';

const Layout = ({ children }) => {
  const useIsomorphicEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  const delay = 8000;

  const [hueRotation, setHueRotation] = useState(0);
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
    <main className={styles.main}>
      <div className={styles['content-wrap']}>
        <Header />
        {children}
        <Footer />
      </div>
      <div
        className={styles.bg}
        style={{
          transition: `filter ${delay}ms linear`,
          filter: `hue-rotate(${hueRotation}deg)`,
        }}
      />
    </main>
  );
};
export default Layout;
