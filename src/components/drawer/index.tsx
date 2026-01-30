import cx from 'classnames';
import { SetStateAction, useEffect, useRef } from 'react';

import { useScrollContext } from '@mw/components/scrollContext';
import { Close } from '@mw/components/icons';

import styles from './styles.module.scss';

interface DrawerProps {
    active: boolean;
    handleClose: React.Dispatch<SetStateAction<null | string>>;
    children?: React.ReactNode;
}

export default function Drawer({ active, children, handleClose }: DrawerProps) {
    const scroll = useScrollContext();
    const scrollRef = useRef(null);

    const onClick = () => {
        handleClose(null);
    };

    useEffect(() => {
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollTop = 0;
        }
    }, [active]);

    return (
        <>
            <div
                className={cx(styles.drawer, {
                    [styles.scrolled]: scroll.isScrolled,
                    [styles.scrolling]: scroll.scrolling,
                    [styles.active]: active,
                })}
            >
                <section
                    className={cx(styles.section, {
                        [styles.active]: active,
                        [styles.scrolled]: scroll.isScrolled,
                    })}
                >
                    <div className={styles['scroll-container']} ref={scrollRef}>
                        <article>{children}</article>
                    </div>
                </section>
                <button
                    className={cx(styles.close, {
                        [styles.active]: active,
                    })}
                    onClick={onClick}
                    // onMouseEnter={() => setHoverClose(true)}
                    // onMouseLeave={() => setHoverClose(false)}
                >
                    <div className={styles.icon}>
                        <Close
                            alt="Close"
                            width="50%"
                            height="auto"
                            fill={'#ffffff'}
                        />
                    </div>
                </button>
            </div>
            {active && <div className={styles.screen}></div>}
        </>
    );
}
