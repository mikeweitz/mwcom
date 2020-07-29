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
  margin: '0 0 1em',
  padding: '0 0 1em',
  color: colors.blueViolet,
  overflowX: 'scroll',
  overflowY: 'auto',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  [':after']: {
    position: 'static',
    content: '"\\0020"',
    display: 'inline-block',
    width: '36px',
    minWidth: '36px',
    height: '4px',
  },
  [tablet]: {
    margin: '2em 0 1em',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    overflow: 'initial',
    [':after']: {
      content: 'none',
    },
  },
});

export const FilterOption = styled('button', ({ $active }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '4px 4px',
  margin: '0 4px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  cursor: 'pointer',
  transition: `all 0.5s ${easeOutCirc}`,
  fontSize: fontSize.mobile.body,
  color: colors.white,
  padding: '0.5em 1em',
  [':hover']: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  ...($active && {
    color: colors.white,
    backgroundColor: colors.orangePeel,
    [':hover']: {
      backgroundColor: colors.orangePeel,
    },
  }),
  [tablet]: {
    fontSize: fontSize.body,
  },
}));

export const FilterLabel = styled('small', {
  display: 'block',
  color: colors.steelBlue,
  margin: '2em 0 0.5em',
  padding: '6px',
  [tablet]: {
    display: 'none',
  },
});

export const ClearButton = styled('button', {
  // justifySelf: 'start',
  alignSelf: 'center',
  display: 'flex',
  fontSize: fontSize.body,
  cursor: 'pointer',
  margin: '4px 12px',
  padding: '0',
  border: 'none',
  width: '32px',
  height: '24px',
  alignSelf: 'center',
  background: 'transparent',
  color: colors.black,
  position: 'relative',
  [tablet]: {
    justifySelf: 'end',
    alignSelf: 'center',
    width: '18px',
    height: '18px',
  },
});

export const SvgWrap = styled('div', {
  width: '24px',
  height: '24px',
  margin: 'auto',
});
