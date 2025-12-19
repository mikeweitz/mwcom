import { playlists } from '@mw/helpers/spotify';

/**
 * Read all playlists for my user accout, the max is 50 in one request:
 */
export const getServerSideProps = async () => {
    const response = await playlists(50, 50);
    const data = [];

    if (response.ok) {
        const { items } = await response.json();

        const lists = items.map((list: Record<string, any>) => {
            return {
                id: list.name,
                url: list.external_urls.spotify,
                name: list.name,
                coverImage: (list.images && list.images[0]) || null,
            };
        });
        return { props: { lists } };
    }
    return { props: { lists: [] } };
};

const Spotify = ({ lists }) => {
    return (
        <main>
            <h1>My playlists</h1>
            {lists?.map((list, n) => {
                return (
                    <div key={n}>
                        <a href={list.url} target="spot">
                            {list.coverImage && (
                                <img
                                    src={list.coverImage && list.coverImage.url}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            )}
                            {list.name}
                        </a>
                    </div>
                );
            })}
        </main>
    );
};

export default Spotify;
