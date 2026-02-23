import { PlaylistData, PlaylistImage, PlaylistSheetsData } from '@mw/types';

const months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

const monthDictionary = [
    ['1', '01', 'jan', 'january'],
    ['2', '02', 'feb', 'february'],
    ['3', '03', 'mar', 'march'],
    ['4', '04', 'apr', 'april'],
    ['5', '05', 'may', 'may'],
    ['6', '06', 'jun', 'june'],
    ['7', '07', 'jul', 'july'],
    ['8', '08', 'aug', 'august'],
    ['9', '09', 'sep', 'sept', 'september'],
    ['10', 'oct', 'october'],
    ['11', 'nov', 'november'],
    ['12', 'dec', 'december', 'smash hits'],
];

export const fetchPlaylistImage = async (
    id: string
): Promise<PlaylistImage[]> => {
    const response = await fetch(`/api/playlist/${id}/images`);
    if (response.ok) {
        const images = await response.json();
        return images;
    }
    console.error('Error fetching playlist images', id);

    return [];
};

const tracksAdapter = (list): PlaylistData['tracks'] =>
    list?.tracks?.items.map(({ track }: Record<string, any>) => ({
        title: track.name,
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        url: track.external_urls.spotify,
        coverImage: track.album.images[1],
    }));

const emptyList = {
    title: '',
    id: '',
    name: '',
    images: [],
    external_urls: {},
    url: '',
    tracks: [],
};

export const fetchPlaylist = async (id: string): Promise<PlaylistData> => {
    const response = await fetch(`/api/playlist/${id}`);
    if (response.ok) {
        const list = await response.json();
        if (list.error) {
            console.error(list.error);
            return { ...emptyList, error: list.error };
        }

        const { name, images, name: title, external_urls } = list;
        const url = list.external_urls?.spotify;
        const tracks = tracksAdapter(list);
        return { title, id, name, external_urls, images, url, tracks };
    }
    console.error('Error fetching playlist', id);

    return emptyList;
};

export const playlistSort = (playlists: PlaylistSheetsData[]) => {
    playlists.forEach((list, index) => {
        const date = parseDateFrom(list.name);
        playlists[index].date = new Date(`${date.month} ${date.year} 12:00`);
    });

    playlists.sort((a, b) => b.date.getTime() - a.date.getTime());
};

const parseDateFrom = (name) => {
    const year = name.replace(/\D/g, '').trim();
    const month = name.replace(/[^A-Za-z]/g, '').trim();
    const index = monthDictionary.findIndex((entry) => {
        return entry.includes(month);
    });

    return {
        year,
        month: months[index] || month,
    };
};
