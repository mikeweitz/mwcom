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

    const touchStart = (e) => {
        setHover(true);
        e.stopPropagation();
    };
    const touchEnd = (e) => {
        setHover(false);
        e.stopPropagation();
    };
    const touchMove = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (ref && ref.current && typeof ref.current !== null) {
            ref.current.addEventListener('touchstart', touchStart);
            ref.current.addEventListener('touchmove', touchMove);
            ref.current.addEventListener('touchend', touchEnd);
            // ref.current.addEventListener('click', onClick);
            // return () => {
            //   ref.current.removeEventListener('touchstart', touchStart);
            //   ref.current.removeEventListener('touchmove', touchMove);
            //   ref.current.removeEventListener('touchend', touchEnd);
            //   ref.current.removeEventListener('click', onClick);
            // };
        }
        return () => {
            ref.current?.removeEventListener('touchstart', touchStart);
            ref.current?.removeEventListener('touchmove', touchMove);
            ref.current?.removeEventListener('touchend', touchEnd);
            // ref.current?.removeEventListener('click', onClick);
        };
    }, [id, ref.current]);

    useEffect(() => {
        if (images[0]) {
            console.log(
                'images retrieved, you should write this to the spreadsheet',
                { id, image: images[0] }
            );
        }
    }, [id, images]);

    return (
        <div
            className={cx(styles['p-list'])}
            ref={ref}
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
