import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';
const {
  breakpoints: { print, tabletLarge }
} = THEME;
export const Summary = styled('section', {
  fontSize: '1.25em',
  marginTop: '64px',
  marginBottom: '18px',
  [tabletLarge]: {
    width: '66.667%'
  },
  [print]: {
    marginTop: '12px',
    marginBottom: '24px',
    width: '75%'
  }
});
