import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const { fonts, colors } = THEME;

export const Main = styled('main', {
  ...fonts.body
});
