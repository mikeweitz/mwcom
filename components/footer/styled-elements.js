import { styled, withStyle } from 'styletron-react';
import { THEME } from '../../styles/theme';
import { Container } from '../../styles/grid';

const {
  colors,
  breakpoints: { print, tablet, tabletLarge, desk, wide },
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
} = THEME;

export const Footer = styled('footer', {
  position: 'relative',
  overflow: 'hidden',
  // background: 'url(/images/txture.png) #222',
  // background: 'url(/images/dark_stripes.png) #222',
  background: 'rgba(0, 0, 0, 0.7)',
  padding: '4rem 0',
  marginTop: '3em',
  width: '100%',
  minHeight: '80px',
  color: '#ddd',
  boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.3)',
  borderTop: `1px solid rgba(0, 0, 0, 0.5)`,
  [print]: {
    display: 'none',
  },
});

export const ButtonPrint = styled('button', {
  position: 'relative',
  display: 'block',
  overflow: 'hidden',
  left: '2em',
  // top: '50%',
  margin: '0',
  padding: '0',
  textAlign: 'center',
  color: colors.steelBlue,
  backgroundColor: colors.blueViolet,
  width: '100px',
  height: '30px',
  border: `1px solid ${colors.blueViolet}`,
  borderRadius: '8px',
  transition: 'all 0.15s ease-in-out',
  ':before': {
    content: '""',
    width: '17px',
    height: '22px',
    position: 'absolute',
    left: '-50px',
    top: '2px',
    // background: 'url(/images/icon_print.png)'
  },
  ':hover': {
    color: colors.turquoise,
    width: '124px',
    height: '40px',
    // marginTop: '-20px',
    borderRadius: '20px',
    paddingLeft: '14px',
    ':before': {
      left: '10px',
      top: '7px',
    },
  },
  [print]: {
    display: 'none',
  },
});

export const Row = withStyle(Container, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const PrintIcon = styled('span', ({ $hover }) => ({
  position: 'absolute',
  display: 'inline-block',
  top: '50%',
  left: '16px',
  transform: $hover ? 'translate(0, -50%)' : 'translate(-60px, -50%)',
  transition: `transform 0.3s ${easeInOutSine}`,
}));

export const ButtonTop = styled('button', {
  position: 'relative',
  // textIndent: '105%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  right: '2em',
  top: '50%',
  margin: '0',
  padding: '0',
  textAlign: 'left',
  backgroundColor: colors.blueViolet,
  height: '42px',
  width: '42px',
  border: `1px solid ${colors.blueViolet}`,
  padding: '4px',
  borderRadius: '20px',
  transition: 'all 0.35s ease',
  // backgroundImage: 'url(/images/arrow-top.png)',
  // backgroundPosition: 'center center',
  // backgroundRepeat: 'no-repeat',
  // backgroundColor: 'transparent',
  cursor: 'pointer',
  ':hover': {
    // backgroundColor: '#eee',
    border: `1px solid ${colors.steelBlue}`,
  },
  [print]: {
    display: 'none',
  },
});

export const Out = styled('div', ({ $hover }) => ({
  position: 'absolute',
  width: '54%',
  height: '54%',
  top: '50%',
  left: '50%',
  transition: `transform 0.3s ${easeInOutSine}`,
  transform: $hover ? 'translate(-50%, -200%)' : 'translate(-50%, -60%)',
}));

export const Over = styled('div', ({ $hover }) => ({
  position: 'absolute',
  width: '54%',
  height: '54%',
  margin: 'auto',
  top: '50%',
  left: '50%',
  transition: `transform 0.3s ${easeInOutSine}`,
  transform: !$hover ? 'translate(-50%, 200%)' : 'translate(-50%, -60%)',
}));
