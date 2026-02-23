import { useEffect, useState, useRef } from 'react';
import cx from 'classnames';
import Image from 'next/image';

import { fetchPlaylist, fetchPlaylistImage } from '@mw/helpers/fetch-playlist';
import { PlaylistData, PlaylistImage } from '@mw/types';

import styles from './styles.module.scss';

type CoverImage = {
    url: string;
};

type CartProps = {
    // key?: number;
    id: string;
    name: string;
    image: string | null;
    onClick: () => void;
    active?: boolean;
};

const CardById = ({ id, name, image, active, ...rest }: CartProps) => {
    // const [playlist, setPlaylist] = useState<PlaylistData>();
    const [hover, setHover] = useState(active);
    const [images, setImages] = useState<PlaylistImage[]>([]);
    const ref = useRef(null);

    useEffect(() => {
        if (!image) {
            fetchPlaylistImage(id).then(setImages);
        }
    }, [id, image]);

    const handleTouchStart = (e) => {
        setHover(true);
        e.stopPropagation();
    };
    const handleTouchEnd = (e) => {
        setHover(false);
        e.stopPropagation();
    };
    const handleTouchMove = (e) => {
        e.stopPropagation();
    };

    // useEffect(() => {
    //     if (images[0]) {
    //         console.log(
    //             'images retrieved, you should write this to the spreadsheet',
    //             { id, image: images[0] }
    //         );
    //     }
    // }, [id, images]);

    return (
        <div
            className={cx(styles['p-list'])}
            ref={ref}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...rest}
        >
            <h3
                className={cx(styles['p-list-name'], {
                    [styles.hover]: hover || active,
                })}
            >
                <span>{name}</span>
            </h3>
            {(image || images[0]) && (
                <Image
                    src={image || images[0].url}
                    alt={name || ''}
                    width={'640'}
                    height={'640'}
                    className={cx(styles['cover-art'], {
                        [styles.hover]: hover || active,
                    })}
                />
            )}
        </div>
    );
};

export default CardById;
