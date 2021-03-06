import { styled, withStyle, NoopDebugEngine } from 'styletron-react';
import { THEME, A } from '../../styles/theme';

const {
  fontSize,
  colors,
  easing,
  breakpoints: { print, tablet, tabletLarge, desk, wide },
} = THEME;

export const PList = styled('article', ({ $active }) => ({
  // minWidth: '50%',
  // margin: '2em auto',
  position: 'relative',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  transform: 'translate3d(0, 0, 0)',
  transition: 'all 1s ease-out',
  width: '100%',
  height: '0',
  paddingBottom: '100%',
  fontSize: '0.85em',
  lineHeight: '1.4em',
  border: `1px solid ${colors.black}`,
  borderRadius: '100% 100%',
  backgroundColor: colors.blueViolet,
  cursor: 'pointer',
  ...($active && {
    // borderRadius: '1em 1em',
    border: `1px solid ${colors.turquoise}`,
    // width: 'calc(100% + 1em)',
    // height: 'calc(100% + 1em)',
    // margin: '-0.5em',
  }),
}));

export const CoverArt = styled('img', ({ $hover }) => ({
  position: 'absolute',
  zIndex: 0,
  top: '50%',
  left: '50%',
  width: '116%',
  height: 'auto',
  filter: 'grayscale(100%)',
  transform: 'translate(-50%, -50%)',
  transition: `all 0.75s ${easing.easeOutCirc}`,
  opacity: '0.5',
  ...($hover && {
    filter: 'grayscale(0)',
    opacity: 1,
    width: '102%',
  }),
}));

export const PlistName = styled('h3', ({ $hover }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  margin: '0',
  padding: '0',
  top: '0',
  left: '0',
  position: 'absolute',
  zIndex: '1',
  color: 'white',
  fontWeight: 800,
  transition: `transform 0.5s 0.2s ${easing.ease},
    filter 0.5s 0.2s ${easing.ease},
    color 0.5s 0.2s ${easing.ease},
    opacity 0.5s 0.45s ${easing.ease}`,
  // transform: $hover ? 'translateY(100%)' : 'translateY(0)',
  ...($hover && {
    filter: 'blur(2px)',
    opacity: 0,
    color: colors.turquoise,
    // mixBlendMode: 'difference',
    transform: 'scale(1.05)',
  }),
}));

export const Artist = styled('span', {
  fontSize: fontSize.small,
  ':after': {
    display: 'inline',
    content: '", "',
  },
  ':last-of-type:after': {
    display: 'none',
    content: '""',
  },
});
