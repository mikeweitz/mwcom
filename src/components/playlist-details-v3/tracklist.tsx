import classNames from 'classnames';

import { PlaylistData } from '@mw/types';

import styles from './styles.module.scss';

interface TrackListProps {
    className?: string;
    tracks: PlaylistData['tracks'];
}

export function TrackList({ tracks, className }: TrackListProps) {
    return (
        <ol className={classNames(styles['track-list'], className)}>
            {tracks?.map((t) => {
                return (
                    <li className={styles.track} key={t.url}>
                        <a
                            className={styles['track-link']}
                            href={t.url}
                            target="spotify"
                        >
                            <strong>{t.title}</strong>
                            <br />
                            {t.artist && (
                                <span className={styles.artist}>
                                    {t.artist || 'unknown'}
                                </span>
                            )}
                        </a>
                    </li>
                );
            })}
        </ol>
    );
}
