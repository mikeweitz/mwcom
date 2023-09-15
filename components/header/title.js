import Link from 'next/link';
import cx from 'classnames';

import styles from './styles.module.scss';

const Title = ({ name, small = false }) => {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('');

  return (
    <h2
      className={cx(styles.title, {
        [styles['title-small']]: small,
      })}
    >
      <Link className={styles['title-link']} href="/">
        {small ? <span className={styles.initials}>{initials}</span> : name}
      </Link>
    </h2>
  );
};

export default Title;
