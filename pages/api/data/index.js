import { data as nov_2015 } from './lists/nov_2015';
import { data as oct_2015 } from './lists/oct_2015';

import { data as dec_2017 } from './lists/dec_2017';
import { data as oct_2017 } from './lists/oct_2017';
import { data as jun_2017 } from './lists/jun_2017';
import { data as may_2017 } from './lists/may_2017';
import { data as apr_2017 } from './lists/apr_2017';
import { data as jan_2017 } from './lists/jan_2017';

import { data as dec_2018 } from './lists/dec_2018';
import { data as nov_2018 } from './lists/nov_2018';
import { data as oct_2018 } from './lists/oct_2018';
import { data as sep_2018 } from './lists/sep_2018';
import { data as aug_2018 } from './lists/aug_2018';
import { data as jul_2018 } from './lists/jul_2018';
import { data as may_2018 } from './lists/may_2018';
import { data as apr_2018 } from './lists/apr_2018';
import { data as feb_2018 } from './lists/feb_2018';

import { data as jan_2019 } from './lists/jan_2019';
import { data as feb_2019 } from './lists/feb_2019';
import { data as mar_2019 } from './lists/mar_2019';
import { data as apr_2019 } from './lists/apr_2019';
import { data as may_2019 } from './lists/may_2019';
import { data as jun_2019 } from './lists/jun_2019';
import { data as jul_2019 } from './lists/jul_2019';

import { data as oct_2019 } from './lists/oct_2019';
import { data as nov_2019 } from './lists/nov_2019';
import { data as dec_2019 } from './lists/dec_2019';

import { data as jan_2020 } from './lists/jan_2020';
import { data as feb_2020 } from './lists/feb_2020';
import { data as march_2020 } from './lists/march_2020';
import { data as apr_2020 } from './lists/apr_2020';
import { data as may_2020 } from './lists/may_2020';

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

const playlists = [
  may_2020,
  apr_2020,
  march_2020,
  feb_2020,
  jan_2020,

  dec_2019,
  nov_2019,
  oct_2019,
  jul_2019,
  jun_2019,
  may_2019,
  apr_2019,
  mar_2019,
  feb_2019,
  jan_2019,

  dec_2018,
  nov_2018,
  oct_2018,
  sep_2018,
  aug_2018,
  jul_2018,
  may_2018,
  apr_2018,
  feb_2018,

  dec_2017,
  oct_2017,
  jun_2017,
  may_2017,
  apr_2017,
  jan_2017,

  nov_2015,
  oct_2015,
];

playlists.forEach((list, index) => {
  let date = parseDateFrom(list.name);
  playlists[index].date = new Date(`${date.month} ${date.year}`);
});

playlists.sort((a, b) => b.date - a.date);

export { playlists };
