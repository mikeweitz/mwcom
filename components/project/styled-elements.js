import { styled, withStyle } from 'styletron-react';
import { THEME, A } from '../../styles/theme';

const {
  breakpoints: { print, tablet, tabletLarge, desk, wide }
} = THEME;

export const Article = withStyle(A, ({ $hasLink }) => ({
  margin: '2em auto',
  fontSize: '0.85em',
  lineHeight: '1.4em',
  border: '1px solid #ddd',
  borderRadius: '1em 1em',
  padding: '3em',
  transition: 'all 0.3s ease-in-out',
  cursor: $hasLink ? 'pointer' : 'default',
  ':hover': {
    textDecoration: 'none',
    backgroundColor: 'rgba(0,0,0,0.025)'
  },
  [print]: {
    display: 'inline-block',
    border: 'none',
    padding: '0 96px 24px 0',
    width: '50%',
    verticalAlign: 'top'
  }
}));

export const Strong = styled('strong', {
  textTransform: 'uppercase'
});

export const Subtitle = styled('div', {
  minHeight: '1em'
});

export const P = styled('p', {
  margin: '1em auto'
});

export const Em = styled('em', {
  fontSize: '0.8em'
});
