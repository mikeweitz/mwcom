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
    id: string;
    title: string;
    name: string;
    url: string;
    tracks: Array<Record<string, any>>;
    images: PlaylistImage[];
    external_urls: Record<string, any>;
    error?: any;
};

export type PlaylistSheetsData = {
    id: string;
    name: string;
    date?: Date;
    image?: string | null;
};

// @dewprecated - use Term instead
export interface TTag {
    ID: string | number;
    description: string;
    meta: Record<string, any>;
    name: string;
    post_count: number;
    slug: string;
}

// @dewprecated - use Post instead
export interface TPost {
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: Record<string, Tag>;
    slug: string;
}

export interface RenderedField {
    rendered: string;
}

export interface Term {
    id: number;
    name: string;
    slug: string;
}

export interface Embedded {
    'wp:term'?: Term[][];
    'wp:featuredmedia'?: FeaturedMedia[];
}

export interface FeaturedMedia {
    id: number;
    source_url: string;
    alt_text: string;
    media_details: {
        width: number;
        height: number;
        sizes: {
            full: { source_url: string; width: number; height: number };
            large?: { source_url: string; width: number; height: number };
            medium?: { source_url: string; width: number; height: number };
            thumbnail?: { source_url: string; width: number; height: number };
        };
    };
}

export interface Post {
    id: number;
    date: string;
    slug: string;
    title: RenderedField;
    excerpt: RenderedField;
    content: RenderedField;
    _embedded?: Embedded;
}
