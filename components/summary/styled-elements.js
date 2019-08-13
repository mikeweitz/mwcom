import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';
const {
  breakpoints: { print }
} = THEME;
export const Summary = styled('section', {
  fontSize: '1.25em',
  marginTop: '64px',
  marginBottom: '18px',
  width: '66.667%',
  [print]: {
    marginBottom: '32px',
    width: '66.667%'
  }
});
