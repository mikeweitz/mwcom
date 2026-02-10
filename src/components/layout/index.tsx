import React, { useEffect, useLayoutEffect, useState } from 'react';

import { useInterval } from '@mw/hooks/useInterval';
import { initGA, logPageView } from '@mw/util/analytics';
import Header from '@mw/components/header';
import Footer from '@mw/components/footer';
import SvgBackground from '@mw/components/layout/svg-background';

import styles from './styles.module.scss';

const Layout = ({ children }) => {
    const useIsomorphicEffect =
        typeof window !== 'undefined' ? useLayoutEffect : useEffect;

    const delay = 8000;
    const filterRange = 180;
    const [hueRotation, setHueRotation] = useState(
        Math.round(Math.random() * filterRange) - filterRange / 2
    );
    const [hasFocus, setHasFocus] = useState(true);

    const onFocusChange = () => {
        setHasFocus(document.hasFocus());
    };

    const changeHueRotation = () => {
        const hue = Math.round(Math.random() * filterRange) - filterRange / 2;
        setHueRotation(hue);
    };

    useInterval(changeHueRotation, hasFocus ? delay : null);

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
                {/* <hr className={styles.divider} /> */}
                <Footer />
            </div>
            <div
                className={styles.bg}
                style={{
                    // width: '100%',
                    // height: '100%',
                    transition: `filter ${delay}ms linear`,
                    filter: `hue-rotate(${hueRotation}deg) brightness(${
                        100 +
                        (Math.round(
                            ((hueRotation + filterRange / 2) / filterRange) *
                                100
                        ) -
                            100) *
                            -1
                    }%)`,
                }}
            >
                <SvgBackground hasFocus={hasFocus} />
            </div>
        </main>
    );
};
export default Layout;
