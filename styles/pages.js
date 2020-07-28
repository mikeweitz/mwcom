import { styled, staticComposeDeep } from 'styletron-react';
import { THEME } from './theme';

const {
  breakpoints: { tablet },
  colors,
  fontSize,
  easing: { ease, easeOutCirc },
} = THEME;

const transition = {
  transitionProperty: 'all',
  transitionDuration: '1s',
  transitionTimingFunction: easeOutCirc,
  transitionDelay: '0',
};

export const PlaylistWrap = styled('div', ({ $active }) => ({
  position: 'relative',
  transition: 'all 1s ease',
  // transition: 'all 0.3s ease-in-out',
  // padding: '1em',
  // flex: '0 0 20%',
  ...($active &&
    {
      // position: 'static',
      // flex: '0 0 100%',
      // zIndex: '100',
      // gridColumnStart: '1',
      // gridColumnEnd: '-1',
    }),
}));

export const PlaylistFilters = styled('div', {
  color: colors.black,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  margin: '2em 0',
  color: colors.blueViolet,
});

export const FilterOption = styled('button', ({ $active }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '4px 4px',
  margin: '4px 4px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  transition: `all 0.5s ${easeOutCirc}`,
  fontSize: fontSize.mobile.display,
  color: colors.white,
  padding: '0.5em 1em',
  [':hover']: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  ...($active && {
    color: colors.white,
    backgroundColor: colors.heliotrope,
    [':hover']: {
      backgroundColor: colors.steelPink,
    },
  }),
  [tablet]: {
    fontSize: fontSize.body,
  },
}));

export const ClearButton = styled('button', {
  justifySelf: 'end',
  alignSelf: 'end',
  fontSize: fontSize.body,
  zIndex: 5,
  cursor: 'pointer',
  margin: '4px 12px',
  padding: '0',
  border: 'none',
  width: '24px',
  height: '24px',
  alignSelf: 'center',
  background: 'transparent',
  color: colors.gray1,
  position: 'relative',
  ...transition,
  [tablet]: {
    width: '18px',
    height: '18px',
  },
});
