declare global {
    interface Window {
        GA_INITIALIZED: boolean;
    }
}

type PlaylistImage = {
    url: string;
    height: number;
    width: number;
};

type Track = {
    album: Record<string, any>;
    artists: Record<string, any>[];
    external_urls: Record<string, any>;
    href: string;
    id: string;
    name: string;
    uri: string;
};

// stub Playlist type
export type PlaylistData = {
    title: string;
    name: string;
    url: string;
    tracks: Array<Record<string, any>>;
    images: PlaylistImage[];
    external_urls: Record<string, any>;
};
