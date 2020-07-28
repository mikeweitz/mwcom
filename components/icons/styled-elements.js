import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const {
  breakpoints: { tablet },
} = THEME;

export const Icon = styled('div', {
  width: '40%',
  height: '40%',
  margin: 'auto',
  [tablet]: {
    width: '20%',
    height: '20%',
  },
});
