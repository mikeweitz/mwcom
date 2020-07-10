import React, { useState, useEffect, useLayoutEffect } from 'react';
import { debounce } from 'lodash';
const isBrowser = typeof window !== `undefined`;

const useIsomorphicEffect = isBrowser ? useLayoutEffect : useEffect;

const getScroll = () => ({
  x: isBrowser ? window.scrollX : 0,
  y: isBrowser ? window.scrollY : 0,
  isScrolled: false,
});

const ScrollContext = React.createContext();

function useScrollContext() {
  const context = React.useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}

const ScrollProvider = ({ children, scrollThreshold = 50 }) => {
  const [scroll, setScroll] = useState({ x: 0, y: 0, isScrolled: false });

  useIsomorphicEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = debounce(
      () => {
        const newScroll = getScroll();
        setScroll({
          ...newScroll,
          isScrolled: Math.abs(newScroll.y) > scrollThreshold,
        });
      },
      500,
      {
        leading: true,
      }
    );

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>
  );
};

export { ScrollProvider, useScrollContext };
