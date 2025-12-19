import { PlaylistSheetsData } from '@mw/types';

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

const sortPlaylists = (playlists: PlaylistSheetsData[]) => {
    playlists.forEach((list, index) => {
        let date = parseDateFrom(list.name);
        playlists[index].date = new Date(`${date.month} ${date.year} 12:00`);
    });

    return playlists.sort((a, b) => b.date.getTime() - a.date.getTime());
};

export default sortPlaylists;
