import { styled, withStyle, NoopDebugEngine } from 'styletron-react';
import { THEME, A } from '../../styles/theme';

const {
  fontSize,
  breakpoints: { print, tablet, tabletLarge, desk, wide },
} = THEME;

export const PList = styled('article', ({ $active }) => ({
  // minWidth: '50%',
  // margin: '2em auto',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 1s ease-out',
  width: '100%',
  height: '0',
  paddingBottom: '100%',
  fontSize: '0.85em',
  lineHeight: '1.4em',
  border: '1px solid #ddd',
  borderRadius: '1em 1em',
  // padding: '3em',
  cursor: 'pointer',
  ...($active
    && {
      // width: 'calc(100% + 1em)',
      // height: 'calc(100% + 1em)',
      // margin: '-0.5em',
    }),
}));

export const CoverArt = styled('img', ({$hover}) => ({
  position: 'absolute',
  zIndex: 0,
  top: '50%',
  left: '50%',
  width: '110%',
  filter: 'grayscale(100%)',
  transform: 'translate(-50%, -50%)',
  transition: 'all 0.5s ease-out',
  ...($hover
    && {
      filter: 'grayscale(0)',
      width: '100%',
    }),
}));

export const PlistName = styled('h3', {
  position: 'relative',
  zIndex: '5',
  color: 'white',
  fontWeight: 800,  
});

export const Artist = styled('span', {
  fontSize: fontSize.small,
  ':after': {
    display: 'inline',
    content: '", "',
  },
  ':last-of-type:after': {
    display: 'none',
    content: '""',
  }
});