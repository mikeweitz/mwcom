import { topTracks } from '@mw/helpers/spotify';

export default async function handler(req, res) {
    try {
        const response = await topTracks();
        console.log('sp response', response);
        const { items } = await response.json();

        const tracks = items.slice(0, 5).map((track: Record<string, any>) => ({
            title: track.name,
            artist: track.artists.map((_artist) => _artist.name).join(', '),
            url: track.external_urls.spotify,
            coverImage: track.album.images[1],
        }));

        res.setHeader(
            'Cache-Control',
            'public, s-maxage=86400, stale-while-revalidate=43200'
        );

        return res.status(200).json(tracks);
    } catch (e) {
        console.error('error getting tracks', e);
        return res.status(500).json({});
    }
}
