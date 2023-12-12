import { playlists } from '../data';

export default function listHandler({ query: { pid } }, res) {
    const filtered = playlists.filter((list) => {
        console.log('search list for pid', list.id, pid);
        return 'playlistV2' in list
            ? list.playlistV2.uri.endsWith(pid)
            : list.id === pid;
    });
    console.log(pid, filtered);
    // PL with id exists
    if (filtered.length > 0) {
        res.status(200).json(playlistAdapter(filtered[0]));
    } else {
        res.status(404).json({
            message: `Playlist with id: ${pid} not found.`,
        });
    }
}

const playlistAdapter = (data) => {
    if ('playlistV2' in data) {
        return mapV2toV1(data);
    }
    return data;
};

const mapV2toV1 = ({ playlistV2 }) => {
    const tracks = {
        items: [],
    };

    const meta = {
        name: playlistV2.name,
        images: playlistV2.images.items[0].sources,
        id: playlistV2.uri.split(':').pop(),
        external_urls: {
            spotify: playlistV2.sharingInfo.shareUrl,
        },
    };

    playlistV2.content.items.forEach(({ itemV2 }, n) => {
        const id = itemV2.data.uri?.split(':').pop();
        const track = {
            track: {
                external_urls: {
                    spotify: `https://open.spotify.com/track/${id}`,
                },
                name: itemV2.data.name,
                artists: itemV2.data.artists.items.map((a) => {
                    let aid = a.uri.split(':').pop();
                    return {
                        external_urls: {
                            spotify: `https://open.spotify.com/artist/${aid}`,
                        },
                        name: a.profile.name,
                        id: aid,
                    };
                }),
            },
            sharing_info: {
                share_id: id,
            },
            ms: itemV2.data.trackDuration.totalMilliseconds,
            duration_ms: itemV2.data.trackDuration.totalMilliseconds,
            href: `https://open.spotify.com/track/${id}`,
            id,
        };
        tracks.items.push(track);
    });
    return { ...meta, tracks };
};
