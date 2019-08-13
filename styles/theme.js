import { styled } from 'styletron-react';

const THEME = {
  breakpoints: {
    tablet: '@media screen and (min-width: 768px)',
    tabletLarge: '@media screen and (min-width: 980px)',
    desk: '@media screen and (min-width: 1025px)',
    wide: '@media screen and (min-width: 1220px)',
    max: '@media screen and (min-width: 1440px)',
    print: '@media print'
  },
  colors: {
    primary: ['#276EF1', '#174EB6', '#9CBCF8'],
    positive: ['#07A35A', '#057C44', '#88D3B0'],
    lime: '#c6ff00',
    darkBlue: '#103037',
    gray1: '#dcdcdc',
    gray2: '#404040'
  },
  fonts: {
    heading: {
      fontFamily: '"Montserrat", sans-serif',
      fontFamily: '"Metrophobic", sans-serif',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '400'
    },
    body: {
      fontFamily: '"Open Sans", sans-serif',
      fontFamily: '"Metrophobic", sans-serif',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '300'
    }
  },
  fontSize: {
    body: '16px',
    position: '17.5px',
    display: '38.5px'
  },
  sizing: ['2px', '6px', '10px', '16px', '24px']
};

THEME.body = {
  ...THEME.fonts.body,
  fontSize: THEME.fontSize.body
};

export const A = styled('a', {
  color: '#555',
  textDecoration: 'none',
  cursor: 'pointer',
  ':link': {
    color: '#555'
  },
  ':active': {
    color: '#555'
  },
  ':focus': {
    color: '#555'
  },
  ':hover': {
    color: '#555',
    textDecoration: 'underline',
    outline: 'none'
  },
  ':focus': {
    textDecoration: 'underline',
    outline: 'none'
  }
});

export { THEME };
