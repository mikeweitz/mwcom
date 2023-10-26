import { PlaylistData } from '@mw/types/index.d';

export const fetchPlaylist = async (id: string): Promise<PlaylistData> => {
    const response = await fetch(`/api/playlist/${id}`);
    if (response.ok) {
        const list = await response.json();
        const { name, images, name: title, external_urls } = list;
        const url = list.external_urls.spotify;
        const tracks = list.tracks.items.map(
            ({ track }: Record<string, any>) => ({
                title: track.name,
                artist: track.artists.map((_artist) => _artist.name).join(', '),
                url: track.external_urls.spotify,
                coverImage: track.album.images[1],
            })
        );
        return { title, name, external_urls, images, url, tracks };
    }

    return {
        title: '',
        name: '',
        images: [],
        external_urls: {},
        url: '',
        tracks: [],
    };
};
