import React, { useState } from 'react';
import cx from 'classnames';

import { copy } from '../../data';
import Link from 'next/link';
import Title from './title';
import Navigation from './navigation';
import { useScrollContext } from '../scrollContext';

import styles from './styles.module.scss';

const Header = () => {
    const scroll = useScrollContext();

    const [showMenu, setShowMenu] = useState(false);

    const timer = null;
    const toggleMenu = () => {};
    const handleMenu = () => {
        if (['animateIn', 'animateOut'].includes(showMenu)) {
            return false;
        }

        const newState = showMenu === 'in' ? 'animateOut' : 'animateIn';
        const finalState = showMenu === 'in' ? 'out' : 'in';
        setShowMenu(newState);
        setTimeout(() => setShowMenu(finalState), 2000);
    };

    const {
        header: { title, email, github, linkedin, playlists },
    } = copy;

    return (
        <header
            className={cx(styles.header, {
                [styles.scrolled]: scroll.isScrolled,
            })}
            id="header"
        >
            <div
                className={cx(styles.overflow, {
                    [styles.scrolled]: scroll.isScrolled,
                })}
            >
                <button
                    className={styles['menu-button']}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <span
                        className={cx(
                            styles['menu-dot'],
                            styles['menu-dot-one'],
                            {
                                [styles.active]: showMenu,
                            }
                        )}
                        key={'menu-dot-one'}
                    />
                    <span
                        className={cx(
                            styles['menu-dot'],
                            styles['menu-dot-two'],
                            {
                                [styles.active]: showMenu,
                            }
                        )}
                        key={'menu-dot-two'}
                    />
                    <span
                        className={cx(
                            styles['menu-dot'],
                            styles['menu-dot-three'],
                            {
                                [styles.active]: showMenu,
                            }
                        )}
                        key={'menu-dot-three'}
                    />
                </button>

                <div
                    className={cx(styles['page-top'], {
                        [styles.scrolled]: scroll.isScrolled,
                    })}
                >
                    <Title name={title} />
                    <Navigation
                        {...{ email, github, linkedin, playlists, showMenu }}
                    />
                </div>

                <div
                    className={cx(styles['page-scrolled'], {
                        [styles.scrolled]: scroll.isScrolled,
                    })}
                >
                    <Title name={title} small={true} />
                    <Navigation
                        {...{ email, github, linkedin, playlists, showMenu }}
                    />
                </div>

                <Link href="/" passHref>
                    <div
                        className={cx(styles.logo, {
                            [styles.scrolled]: scroll.isScrolled,
                        })}
                    >
                        <img className={styles.img} src="/logo.png" />
                    </div>
                </Link>
            </div>
        </header>
    );
};
export default Header;
