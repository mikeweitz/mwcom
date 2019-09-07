import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const {
  fonts,
  colors,
  breakpoints: { print },
} = THEME;

export const Main = styled('main', {
  ...fonts.body,
  paddingTop: '160px',
  [print]: {
    paddingTop: 'initial',
  },
});
