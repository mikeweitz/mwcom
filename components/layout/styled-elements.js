import { styled, staticComposeDeep } from 'styletron-react';
import { THEME } from '../../styles/theme';

const bgUrl = [
  'https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3292&q=80',
  'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
];
const {
  fonts,
  colors,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  breakpoints: { tablet, print },
} = THEME;

export const Main = styled('main', ({ $hue, $delay }) => ({
  ...fonts.body,
  display: 'flex',
  width: '100%',
  minHeight: '100%',
  // paddingTop: $scrolled ? '48px' : '172px',
  paddingTop: '72px',
  transitionProperty: 'all',
  transitionTimingFunction: easeOutCirc,
  transitionDuration: '0.5s',
  transitionDelay: '.5s',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // textShadow: '-1px 1px 1px rgba(64,224,208, 0.3)',
  textShadow: `-1px 1px 0 rgba(255, 255, 255, 0.25)`,
  [tablet]: {
    paddingTop: '162px',
  },
  [print]: {
    paddingTop: 'initial',
  },
  [':after']: {
    content: '""',
    display: 'block',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    backgroundImage: `url(${bgUrl[0]})`,
    backgroundSize: 'auto 230%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    ...($hue && {
      transition: `filter ${$delay}ms linear`,
      filter: `hue-rotate(${$hue}deg)`,
    }),
    [tablet]: {
      backgroundSize: 'cover',
    },
  },
}));

export const ContentWrap = styled('div', {
  position: 'static',
  zIndex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
