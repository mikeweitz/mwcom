import { styled, withStyle } from 'styletron-react';
import { THEME } from './theme';

const {
  breakpoints: { tablet, tabletLarge, desk, wide, max, print },
  colors
} = THEME;

export const Container = styled('div', ({ $pageBreak }) => ({
  position: 'relative',
  maxWidth: '90%',
  margin: '0 auto',
  [desk]: {
    width: '90%',
    maxWidth: '1440px'
  },
  ...($pageBreak
    ? {
        [print]: {
          pageBreakAfter: 'always'
        }
      }
    : {})
}));

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gridAutoFlow: 'row',
  gridGap: '20px',
  justifyContent: 'center',
  [tablet]: {
    gridGap: '32px',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  [tabletLarge]: {
    gridGap: '32px',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  [desk]: {
    maxWidth: '1440px',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '24px'
  },
  [print]: {
    display: 'block'
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
  },
  [print]: {
    display: 'block'
  }
});
