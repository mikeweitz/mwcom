import { topTracks } from '@mw/helpers/spotify';

export const getServerSideProps = async () => {
    const response = await topTracks();
    console.log('retrieve top tracks', response);
    if (response.ok) {
        const { items } = await response.json();

        const tracks = items.map((track: Record<string, any>) => ({
            title: track.name,
            artist: track.artists.map((_artist) => _artist.name).join(', '),
            url: track.external_urls.spotify,
            coverImage: track.album.images[1],
        }));

        return { props: { tracks } };
    }
    return { props: { tracks: [] } };
};

const Spotify = ({ tracks }) => {
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

export default Spotify;
