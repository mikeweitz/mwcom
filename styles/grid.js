import { styled, withStyle } from 'styletron-react';
import { THEME } from './theme';
import { ECANCELED } from 'constants';

const {
  breakpoints: { tablet, tabletLarge, desk, wide, max },
  colors
} = THEME;

export const Container = styled('div', {
  position: 'relative',
  maxWidth: '90%',
  margin: '0 auto',
  [desk]: {
    width: '90%',
    maxWidth: '1440px'
  }
});

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '32px',
  justifyContent: 'center',
  [tablet]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [tabletLarge]: {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [desk]: {
    maxWidth: '1440px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '24px'
  }
});

export const GridLinks = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '32px',
  [tablet]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [tabletLarge]: {
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [desk]: {
    maxWidth: '1440px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '24px'
  }
});
