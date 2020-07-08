import { styled } from 'styletron-react';

const THEME = {
  breakpoints: {
    tablet: '@media screen and (min-width: 768px)',
    tabletLarge: '@media screen and (min-width: 980px)',
    desk: '@media screen and (min-width: 1025px)',
    wide: '@media screen and (min-width: 1220px)',
    max: '@media screen and (min-width: 1440px)',
    print: '@media print',
  },
  colors: {
    primary: ['#276EF1', '#174EB6', '#9CBCF8'],
    positive: ['#07A35A', '#057C44', '#88D3B0'],
    lime: '#c6ff00',
    darkBlue: '#103037',
    blueViolet: '#402081',
    black: '#111',
    gray1: '#dcdcdc',
    gray2: '#404040',
    neonGreen: '#2BF403',
    heliotrope: '#EC5AFF',
    orangePeel: '#FF9D00',
    turquoise: '#51E8CF',
    raspberry: '#EE2677',
  },
  fonts: {
    heading: {
      fontFamily: '"Montserrat", sans-serif',
      fontFamily: '"Metrophobic", sans-serif',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '400',
    },
    body: {
      fontFamily: '"Open Sans", sans-serif',
      fontFamily: '"Metrophobic", sans-serif',
      fontFamily: '"Roboto", sans-serif',
      fontWeight: '300',
    },
  },
  fontSize: {
    small: '12px',
    body: '16px',
    position: '17.5px',
    display: '38.5px',
  },
  sizing: ['2px', '6px', '10px', '16px', '24px'],
  easing: {
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
};

THEME.body = {
  ...THEME.fonts.body,
  fontSize: THEME.fontSize.body,
};

export const A = styled('a', {
  color: '#555',
  textDecoration: 'none',
  cursor: 'pointer',
  ':link': {
    color: '#555',
  },
  ':active': {
    color: '#555',
  },
  ':focus': {
    color: '#555',
  },
  ':hover': {
    color: '#555',
    textDecoration: 'underline',
    outline: 'none',
  },
  ':focus': {
    textDecoration: 'underline',
    outline: 'none',
  },
});

export { THEME };
