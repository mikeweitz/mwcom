import cx from 'classnames';

import styles from './styles.module.scss';

const Navigation = ({
  email,
  github,
  linkedin,
  playlists,
  showMenu = false,
}) => {
  return (
    <address
      className={cx(styles['nav-wrap'], {
        [styles['show-menu']]: showMenu,
      })}
    >
      <a className={styles.link} href="#">
        <span className={styles['link-span']}>
          {email.address + email.domain}
        </span>
      </a>
      <a className={styles.link} href={github.url}>
        <span className={styles['link-span']}>{github.text}</span>
      </a>
      <a className={styles.link} href={linkedin.url}>
        <span className={styles['link-span']}>{linkedin.text}</span>
      </a>
      <a className={styles.link} href={playlists.url}>
        <span className={styles['link-span']}>{playlists.text}</span>
      </a>
    </address>
  );
};

export default Navigation;
