import { useEffect, useState } from 'react';

import { topTracks, getAccessToken } from '@mw/helpers/spotify';
import { getPlaylistIds } from '@mw/helpers/sheets';

type Track = {
    title: string;
    artist: string;
    url: string;
    coverImage: Record<string, any>;
};

type Tracks = Track[];

const parseTracks = ({ items }: any) => {
    const tracks: Tracks = [];
    for (const { name, artists, external_urls, album } of items) {
        tracks.push({
            title: name,
            artist: artists.map((_artist) => _artist.name).join(', '),
            url: external_urls.spotify,
            coverImage: album.images[1],
        });
    }
    return tracks;
};

const Test = () => {
    const [tracks, setTracks] = useState<Tracks>();
    const [token, setToken] = useState('');
    const [pids, setPids] = useState([]);

    const getTopTracks = async () => {
        try {
            const response = await fetch('/api/spotify/top-tracks');
            const data = await response.json();
            console.log('did i get tracks >', data);
            const tracks = parseTracks(data);
            setTracks(tracks);
        } catch (e) {
            console.error('could not fetch', e);
        }
    };

    const getSheetsData = async () => {
        const response = await fetch('/api/spotify/pids');
        const data = await response.json();
        console.log('get IDs from sheets', data);
        setPids(data);
    };

    const getToken = async () => {
        const response = await fetch('/api/spotify/token');
        const data = await response.json();
        console.log('did i get a token >', data);
        setToken(data.token);
    };

    return (
        <main>
            <h1>My Spotify top tracks</h1>
            <h3>Receent top tracks:</h3>
            <button onClick={getSheetsData}>Get PIDs</button>
            <ul>{pids && pids.map(({ id }, n) => <li key={n}>{id}</li>)}</ul>
            <br />

            <button onClick={getToken}>Get Token</button>
            <h3>{token}</h3>
            <br />

            <button onClick={getTopTracks}>Get Top Tracks</button>
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
            <h3>Long Term top tracks:</h3>
            {tracks?.long?.map((track, n) => {
                return (
                    <div key={n}>
                        <a href={track.url} target="spot">
                            "{track.title}" by {track.artist}
                        </a>
                    </div>
                );
            })}
        </main>
    );
};

export default Test;
