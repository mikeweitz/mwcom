import cx from 'classnames';

import colors from '@mw/constants/colors';
import { PlaylistData } from '@mw/types';
import { Play } from '../icons';

import styles from './styles.module.scss';

export function CoverImage({
    onMouseEnter,
    onMouseLeave,
    hoverPlay,
    images,
    link,
}: Pick<PlaylistData, 'images'> &
    React.ComponentProps<'div'> & {
        hoverPlay: boolean;
        link: string;
    }) {
    return (
        <div
            className={styles.cover}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <a className={styles['cover-link']} href={link} target="spotify">
                <span
                    className={cx(styles['play-wrapper'], {
                        [styles.hover]: hoverPlay,
                    })}
                >
                    <Play fill={colors.neonGreen} />
                </span>
                {images && images[0] && (
                    <img className={styles['cover-img']} src={images[0].url} />
                )}
            </a>
        </div>
    );
}
