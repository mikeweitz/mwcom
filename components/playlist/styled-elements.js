import { styled, withStyle, NoopDebugEngine } from 'styletron-react';
import { THEME, A } from '../../styles/theme';

const {
  fontSize,
  breakpoints: { print, tablet, tabletLarge, desk, wide },
} = THEME;

export const PList = styled('article', ({ $hasLink }) => ({
  minWidth: '50%',
  margin: '2em auto',
  fontSize: '0.85em',
  lineHeight: '1.4em',
  border: '1px solid #ddd',
  borderRadius: '1em 1em',
  padding: '3em',
  transition: 'all 0.3s ease-in-out',
  cursor: $hasLink ? 'pointer' : 'default',
}));


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
})