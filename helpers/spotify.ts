const USER_NAME = 'weity';
const USER_ID = '1247970817';

export const getAccessToken = async () => {
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                ).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'refresh_token',
                refresh_token,
            }),
        });
        console.log('retrieved spotify token');
        return await response.json();
    } catch (e) {
        console.error('Spotify access issue', e);
        return {};
    }
};

type Range = 'medium_term' | 'long_term' | 'short_term';

export const topTracks = async (range: Range = 'medium_term') => {
    const { access_token } = await getAccessToken();

    return fetch(
        'https://api.spotify.com/v1/me/top/tracks?time_range=' + range,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
};

export const playlist = async (id: string) => {
    const { access_token } = await getAccessToken();

    return fetch('https://api.spotify.com/v1/playlists/' + id, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const playlists = async (limit: number = 20, offset: number = 0) => {
    // https://api.spotify.com/v1/users/smedjan/playlists
    const { access_token } = await getAccessToken();
    return fetch(
        `https://api.spotify.com/v1/users/${USER_ID}/playlists?limit=${limit}&offset=${offset}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
};
