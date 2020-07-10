import { styled } from 'styletron-react';
import { THEME } from './theme';

export const PlaylistWrap = styled('div', ({ $active }) => ({
  position: 'relative',
  transition: 'all 1s ease',
  // transition: 'all 0.3s ease-in-out',
  // padding: '1em',
  // flex: '0 0 20%',
  ...($active &&
    {
      // position: 'static',
      // flex: '0 0 100%',
      // zIndex: '100',
      // gridColumnStart: '1',
      // gridColumnEnd: '-1',
    }),
}));
