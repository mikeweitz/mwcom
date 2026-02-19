import cx from 'classnames';
import React, { useState } from 'react';
import Link from 'next/link';

import { copy } from '@mw/data';
import Title from '@mw/components/header/title';
import Navigation from '@mw/components/header/navigation';
import { useScrollContext } from '@mw/components/scrollContext';
import useMatchMedia from '@mw/hooks/use-match-media';

import styles from './styles.module.scss';

const Header = () => {
    const { isScrolled } = useScrollContext();
    const { isMobile } = useMatchMedia();

    const [showMenu, setShowMenu] = useState(false);

    const {
        header: { title, email, github, linkedin, playlists, blog },
        header,
    } = copy;

    return (
        <menu
            className={cx(styles.header, {
                [styles.scrolled]: isScrolled,
            })}
            id="header"
        >
            <div
                className={cx(styles.overflow, {
                    [styles.scrolled]: isScrolled,
                })}
            >
                <button
                    className={styles['menu-button']}
                    onClick={() => setShowMenu(!showMenu)}
                    tabIndex={isMobile ? 0 : -1}
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
                        [styles.scrolled]: isScrolled,
                    })}
                >
                    <Title
                        name={header.title}
                        allowFocus={!isScrolled && !isMobile}
                    />
                    <Navigation
                        allowFocus={!isScrolled && !isMobile}
                        {...{
                            email,
                            github,
                            linkedin,
                            playlists,
                            blog,
                            showMenu,
                        }}
                    />
                </div>

                <div
                    className={cx(styles['page-scrolled'], {
                        [styles.scrolled]: isScrolled,
                    })}
                >
                    <Title
                        name={title}
                        small={true}
                        allowFocus={isScrolled || isMobile}
                    />
                    <Navigation
                        allowFocus={isScrolled || isMobile}
                        {...{
                            email,
                            github,
                            linkedin,
                            playlists,
                            blog,
                            showMenu,
                        }}
                    />
                </div>

                <Link href="/" passHref tabIndex={-1}>
                    <div
                        className={cx(styles.logo, {
                            [styles.scrolled]: isScrolled,
                        })}
                    >
                        <img className={styles.img} src="/logo.webp" />
                    </div>
                </Link>
            </div>
        </menu>
    );
};
export default Header;
