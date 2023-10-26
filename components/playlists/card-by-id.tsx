import { useEffect, useState } from 'react';
import cx from 'classnames';

import { fetchPlaylist } from '@mw/helpers/fetch-playlist';
import { PlaylistData } from '@mw/types';

import styles from './styles.module.scss';

type CoverImage = {
    url: string;
};

type CartProps = {
    // key?: number;
    id: string;
    onClick: () => void;
};

const CardById = ({ id, ...rest }: CartProps) => {
    const [playlist, setPlaylist] = useState<PlaylistData>();
    useEffect(() => {
        fetchPlaylist(id).then(setPlaylist);
    }, [id]);

    if (!playlist) {
        return <>Loading...</>;
    }

    return (
        <div className={cx(styles.card, styles.glitch)} {...rest}>
            <div className={styles.info}>
                {false && playlist.images[0] && (
                    <img
                        src={playlist.images[0] && playlist.images[0].url}
                        className={styles.image}
                    />
                )}
                <span className={styles.name}>{playlist.name}</span>
            </div>
            <div className={styles.background}>
                {playlist.images[0] && (
                    <img
                        src={playlist.images[0] && playlist.images[0].url}
                        className={styles.image}
                    />
                )}
            </div>
        </div>
    );
};

export default CardById;
