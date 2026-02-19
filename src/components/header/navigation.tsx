import cx from 'classnames';
import {
    Handshake,
    GitPullRequestArrow,
    ListMusic,
    Mail,
    BookOpen,
} from 'lucide-react';

import styles from './styles.module.scss';

interface NavItem {
    text: string;
    url: string;
    icon?: string;
}

interface NavigationProps {
    blog?: NavItem;
    github: NavItem;
    linkedin: NavItem;
    playlists?: NavItem;
    showMenu: boolean;
    allowFocus?: boolean;
}

const Navigation = ({
    blog,
    github,
    linkedin,
    playlists,
    allowFocus = true,
    showMenu = false,
}: NavigationProps) => {
    const size = 18;
    const stroke = 1;
    return (
        <nav
            className={cx(styles['nav-wrap'], {
                [styles['show-menu']]: showMenu,
            })}
        >
            <a
                className={styles.link}
                href={linkedin.url}
                tabIndex={allowFocus ? 0 : -1}
            >
                <Handshake size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{linkedin.text}</span>
            </a>
            <a
                className={styles.link}
                href={github.url}
                tabIndex={allowFocus ? 0 : -1}
            >
                <GitPullRequestArrow size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{github.text}</span>
            </a>
            <a
                className={styles.link}
                href={playlists.url}
                tabIndex={allowFocus ? 0 : -1}
            >
                <ListMusic size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{playlists.text}</span>
            </a>
            <a
                className={styles.link}
                href={blog.url}
                tabIndex={allowFocus ? 0 : -1}
            >
                <BookOpen size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{blog.text}</span>
            </a>
        </nav>
    );
};

export default Navigation;
