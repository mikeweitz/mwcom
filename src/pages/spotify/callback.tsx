// callback URL for spotify app auth

export async function getServerSideProps(context) {
    const { query } = context;

    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString('base64')}`,
        },
        body: new URLSearchParams({
            code: query.code,
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
            grant_type: 'authorization_code',
        }),
    });
    const tokenData = await tokenRes.json();
    const { access_token, refresh_token } = tokenData;

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
