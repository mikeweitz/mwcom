import { playlists } from '../data';

export default function listHandler({ query: { pid } }, res) {
  const filtered = playlists.filter((list) => list.id === pid)

  // PL with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Playlist with id: ${pid} not found.` })
  }
}