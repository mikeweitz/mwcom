import { playlists } from './data';

export default (req, res) => {
  // script data down to just IDs
  const pids = playlists.map((list) => ({ pid: list.id, date: list.date }));
  // PL with id exists
  if (pids.length > 0) {
    console.log('playlists', pids);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(pids);
  } else {
    res.status(404).json({ message: `data not found` });
  }
};
