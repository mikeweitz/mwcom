import { playlist } from '@mw/helpers/spotify';

export const getServerSideProps = async (context) => {
    const { date } = context.params;
    console.log('date', { date });

    const response = await playlist('2GLd5oQqmn5AUajrYrEjWr');

    if (response.ok) {
        const list = await response.json();
        console.log('data:', list.external_urls.spotify);
        const title = list.name;
        const url = list.external_urls.spotify;
        const tracks = list.tracks.items.map(
            ({ track }: Record<string, any>) => ({
                title: track.name,
                artist: track.artists.map((_artist) => _artist.name).join(', '),
                url: track.external_urls.spotify,
                coverImage: track.album.images[1],
            })
        );
        return { props: { title, url, tracks } };
    }
    console.log('response not ok', response.headers, response.status);
    return { props: { title: '', url: '', tracks: [] } };
};

const Playlist = ({ title, tracks, url }) => {
    return (
        <main>
            <h1>
                <a href={url} target="spot">
                    {title}
                </a>
            </h1>
            {tracks?.map((track, n) => {
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
