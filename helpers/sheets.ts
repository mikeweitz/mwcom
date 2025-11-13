// import { google } from 'googleapis';

import sortPlaylists from '@mw/helpers/sort-playlists';
import { PlaylistSheetsData } from '@mw/types';

/**
 *
 * @returns PlaylistSheetsData[]
 * { id, name, Date }[]
 */
// export const getPlaylistIds = async (): Promise<PlaylistSheetsData[]> => {
//     try {
//         const target = [
//             'https://www.googleapis.com/auth/spreadsheets.readonly',
//         ];

//         const jwt = new google.auth.JWT(
//             process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
//             null,
//             (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
//             target
//         );

//         const sheets = google.sheets({ version: 'v4', auth: jwt });
//         const response = await sheets.spreadsheets.values.get({
//             spreadsheetId: process.env.SPREADSHEET_ID,
//             range: 'ids', // sheet name
//         });
//         const rows = response.data.values.slice(1);
//         let playlists = [];
//         if (rows.length) {
//             rows.map((row) =>
//                 playlists.push({
//                     id: row[0],
//                     name: row[1],
//                     image: row[2] || null,
//                 })
//             );
//             sortPlaylists(playlists);
//         }
//         return playlists;
//     } catch (err) {
//         console.error('Error retrieving data', err);
//     }
//     return [];
// };

export const getPlaylistFromApi = async () => {
    try {
        const response = await fetch(
            'https://6x0pfyvd52.execute-api.us-east-1.amazonaws.com/playlists',
            {
                method: 'POST',
                headers: {
                    'x-api-token': process.env.API_TOKEN,
                },
            }
        );

        const data = await response.json();
        return data;
    } catch (e) {
        console.error('error retreiving playlists', e);
        return [];
    }
};
