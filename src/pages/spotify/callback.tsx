// callback URL for spotify app auth

export async function getServerSideProps({ req, res }) {
    const code = req.query.code;
    // const response = await fetch('https://accounts.spotify.com/api/token', {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `Basic ${Buffer.from(
    //             `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    //         ).toString('base64')}`,
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: new URLSearchParams({
    //         grant_type: 'refresh_token',
    //         refresh_token,
    //     }),
    // });
    // const data = await response.json();
    // console.log('Spotify access token', data);
    // return data;

    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString('base64')}`,
        },
        body: new URLSearchParams({
            code,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
            grant_type: 'authorization_code',
        }),
    });
    const tokenData = await tokenRes.json();

    const { access_token, refresh_token } = tokenData;
    // console.log('Spotify access token', tokenData);
    return {
        props: { access_token, refresh_token },
    };
}

const Callback = ({ access_token, refresh_token }) => {
    return (
        <main>
            <h1 style={{ color: 'white' }}>Spotify callback url</h1>
            {access_token && <p>Access Token: {access_token}</p>}
            {refresh_token && <p>Refresh Token: {refresh_token}</p>}
        </main>
    );
};

export default Callback;
