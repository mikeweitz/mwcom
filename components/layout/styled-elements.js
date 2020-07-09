import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const bgUrl = [
  'https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3292&q=80',
  'https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
]
const {
  fonts,
  colors,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  breakpoints: { tablet, print },
} = THEME;

export const Main = styled('main', ({$scrolled}) => ({
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
  backgroundImage: `url(${bgUrl[0]})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundColor: '#111',
  [tablet]: {
    paddingTop: '172px',
  },
  [print]: {
    paddingTop: 'initial',
  },
}));
