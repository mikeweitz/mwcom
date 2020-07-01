import { playlists } from './data';

export default (req, res) => {
  const pids = playlists.map((list) => list.id)
  // PL with id exists
  if (pids.length > 0) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json(pids)
  } else {
    res.status(404).json({ message: `data not found` })
  }
};