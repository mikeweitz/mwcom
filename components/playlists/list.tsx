import { useEffect, useState } from 'react';

import { fetchPlaylist } from '@mw/helpers/fetch-playlist';
import { PlaylistData } from '@mw/types';

type PlaylistProps = {
    id: string;
};

const Playlist = ({ id }: PlaylistProps) => {
    const [data, setData] = useState<PlaylistData>();

    useEffect(() => {
        fetchPlaylist(id).then(setData);
    }, [id]);

    if (!data) {
        return <></>;
    }

    return (
        <main>
            <h1>
                <a href={data.url} target="spot">
                    {data.title}
                </a>
            </h1>
            {data.tracks?.map((track, n) => {
                return (
                    <div key={n} style={{ margin: '1em', color: 'white' }}>
                        <a href={track.url} target="spot">
                            <img
                                src={track.coverImage.url}
                                style={{ width: '50px', height: '50px' }}
                            />
                            "{track.title}"<br />
                            <small>by {track.artist}</small>
                        </a>
                    </div>
                );
            })}
        </main>
    );
};

export default Playlist;
