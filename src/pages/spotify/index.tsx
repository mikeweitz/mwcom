import { useEffect, useState } from 'react';

import { topTracks } from '@mw/helpers/spotify';

type Track = {
    title: string;
    artist: string;
    url: string;
    coverImage: Record<string, any>;
};

type Tracks = Track[];

// export const getServerSideProps = async () => {
//     const response = await topTracks();
//     const tracks: Tracks = [];
//     console.log('retrieve top tracks', response);
//     if (response.ok) {
//         const { items } = await response.json();
//         for (const { name, artists, external_urls, album } of items) {
//             tracks.push({
//                 title: name,
//                 artist: artists.map((_artist) => _artist.name).join(', '),
//                 url: external_urls.spotify,
//                 coverImage: album.images[1],
//             });
//         }
//     }
//     return { props: { tracks } };
// };

const fetcher = async () => {
    const response = await topTracks();
    const tracks: Tracks = [];
    console.log('retrieve top tracks', response);
    if (response.ok) {
        const { items } = await response.json();
        for (const { name, artists, external_urls, album } of items) {
            tracks.push({
                title: name,
                artist: artists.map((_artist) => _artist.name).join(', '),
                url: external_urls.spotify,
                coverImage: album.images[1],
            });
        }
    }
    return { props: { tracks } };
};

const Spotify = () => {
    const [tracks, setTracks] = useState<Tracks>();
    useEffect(() => {
        fetcher()
            .then(({ props }) => setTracks(props.tracks))
            .catch((e) => console.error('could not fetch', e));
    }, []);

    return (
        <main>
            <h1>My Spotify top tracks</h1>
            <h3>Receent top tracks:</h3>
            {tracks?.map((track, n) => {
                return (
                    <div key={n}>
                        <a href={track.url} target="spot">
                            "{track.title}"<br />
                            <small>by {track.artist}</small>
                        </a>
                    </div>
                );
            })}
            {/* <h3>Long Term top tracks:</h3>
            {tracks?.long?.map((track, n) => {
                return (
                    <div key={n}>
                        <a href={track.url} target="spot">
                            "{track.title}" by {track.artist}
                        </a>
                    </div>
                );
            })} */}
        </main>
    );
};

export default Spotify;
