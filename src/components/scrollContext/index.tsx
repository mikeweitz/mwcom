import React, { useState, useEffect, useLayoutEffect } from 'react';
import { throttle } from 'lodash';
const isBrowser = typeof window !== `undefined`;

const useIsomorphicEffect = isBrowser ? useLayoutEffect : useEffect;

const getScroll = () => ({
    x: isBrowser ? window.scrollX : 0,
    y: isBrowser ? window.scrollY : 0,
    isScrolled: false,
});

type ScrollProviderProps = React.PropsWithChildren<{
    scrollThreshold?: number;
}>;

interface TScrollContext {
    x: number;
    y: number;
    isScrolled: boolean;
    scrolling: boolean;
}
const ScrollContext = React.createContext<TScrollContext>(null);

function useScrollContext() {
    const context = React.useContext(ScrollContext);
    if (context === undefined) {
        throw new Error(
            'useScrollContext must be used within a ScrollProvider'
        );
    }
    return context;
}

const ScrollProvider = ({
    children,
    scrollThreshold = 50,
}: ScrollProviderProps) => {
    const [scroll, setScroll] = useState({
        x: 0,
        y: 0,
        isScrolled: false,
        scrolling: false,
    });

    useIsomorphicEffect(() => {
        if (!isBrowser) {
            return;
        }
        let timer = null;
        const delay = 250;
        const handleScroll = throttle(
            () => {
                clearTimeout(timer);
                const coords = getScroll();
                const newScroll = {
                    ...coords,
                    isScrolled: Math.abs(coords.y) > scrollThreshold,
                    scrolling: true,
                };
                setScroll({
                    ...newScroll,
                });
                timer = setTimeout(() => {
                    setScroll({ ...newScroll, scrolling: false });
                }, delay + 10);
            },
            delay,
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
        <ScrollContext.Provider value={scroll}>
            {children}
        </ScrollContext.Provider>
    );
};

export { ScrollProvider, useScrollContext };
