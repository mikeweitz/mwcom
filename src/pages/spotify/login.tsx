import { useEffect, useState } from 'react';

import { topTracks } from '@mw/helpers/spotify';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI; // 'http://127.0.0.1:8888/callback';

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

const Login = () => {
    // convert this to a server side function that returns the url to redirect to spotify login
    //   var state = generateRandomString(16);
    //   var scope = 'user-read-private user-read-email';

    //   res.redirect('https://accounts.spotify.com/authorize?' +
    //     querystring.stringify({
    //       response_type: 'code',
    //       client_id: client_id,
    //       scope: scope,
    //       redirect_uri: redirect_uri,
    //       state: state
    //     }));
    //
    const spotifyLoginUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=user-read-private%20user-read-email&redirect_uri=${redirect_uri}`;

    const [tracks, setTracks] = useState<Tracks>();

    useEffect(() => {
        // setTimeout(() => {
        //     window.location.href = spotifyLoginUrl;
        // }, 500);
        // fetcher()
        //     .then(({ props }) => setTracks(props.tracks))
        //     .catch((e) => console.error('could not fetch', e));
    }, []);

    return (
        <main>
            <h1>Login redirect</h1>
            <a href={spotifyLoginUrl}>Login with Spotify</a>
        </main>
    );
};

export default Login;
