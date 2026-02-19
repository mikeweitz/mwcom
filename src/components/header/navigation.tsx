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
}

const Navigation = ({
    blog,
    github,
    linkedin,
    playlists,
    showMenu = false,
}: NavigationProps) => {
    const size = 18;
    const stroke = 1;
    return (
        <address
            className={cx(styles['nav-wrap'], {
                [styles['show-menu']]: showMenu,
            })}
        >
            <a className={styles.link} href={blog.url}>
                <BookOpen size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{blog.text}</span>
            </a>
            <a className={styles.link} href={playlists.url}>
                <ListMusic size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{playlists.text}</span>
            </a>
            <a className={styles.link} href={github.url}>
                <GitPullRequestArrow size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{github.text}</span>
            </a>
            <a className={styles.link} href={linkedin.url}>
                <Handshake size={size} strokeWidth={stroke} />
                <span className={styles['link-span']}>{linkedin.text}</span>
            </a>
        </address>
    );
};

export default Navigation;
