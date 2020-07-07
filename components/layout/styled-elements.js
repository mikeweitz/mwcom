import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const {
  fonts,
  colors,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  breakpoints: { print },
} = THEME;

export const Main = styled('main', ({$scrolled}) => ({
  ...fonts.body,
  paddingTop: $scrolled ? '48px' : '160px',
  transition: `all 1s ${easeOutCirc}`,
  [print]: {
    paddingTop: 'initial',
  },
}));
