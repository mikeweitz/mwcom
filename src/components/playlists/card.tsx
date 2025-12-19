import cx from 'classnames';

import styles from './styles.module.scss';

type CoverImage = {
    url: string;
};

type CartProps = {
    // key?: number;
    coverImage?: CoverImage;
    name: string;
    url: string;
    id: string;
    onClick: () => void;
};

const Card = ({ coverImage, name, url, ...rest }: CartProps) => {
    return (
        <div className={cx(styles.card, styles.glitch)} {...rest}>
            <div className={styles.info}>
                {false && coverImage && (
                    <img
                        src={coverImage && coverImage.url}
                        className={styles.image}
                    />
                )}
                <span className={styles.name}>{name}</span>
            </div>
            <div className={styles.background}>
                {coverImage && (
                    <img
                        src={coverImage && coverImage.url}
                        className={styles.image}
                    />
                )}
            </div>
        </div>
    );
};

export default Card;
