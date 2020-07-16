import { styled, withStyle, autoComposeDeep } from 'styletron-react';
import { THEME, A } from '../../styles/theme';
import { Container } from '../../styles/grid';
import { over, wrap } from 'lodash';
const {
  fonts,
  fontSize,
  easing: { ease, easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  colors,
  breakpoints: { tablet, print },
} = THEME;

const transition = {
  transitionProperty: 'all',
  transitionDuration: '1s',
  transitionTimingFunction: easeOutCirc,
  transitionDelay: '0',
};

export const Drawer = styled('div', ({ $scrolled, $scrolling, $active }) => ({
  position: 'fixed',
  zIndex: '10',
  top: '64px',
  left: '0',
  overflow: 'hidden',
  minHeight: '0',
  ...transition,

  // transform: 'translateY(-100%)',
  height: $active ? 'calc(60vh + 60px)' : '0',
  display: $scrolling && !$active ? 'none' : 'grid',
  width: '100%',
  gridAutoFlow: 'rows',
  gridTemplateRows: '60vh 60px',
  ...($active &&
    {
      // minHeight: '250px',
      // transform: 'translateY(0)',
    }),
  [tablet]: {
    height: $active ? '520px' : '0',
    top: $scrolled ? '48px' : '162px',
    gridTemplateRows: '420px 100px',
  },
}));

export const ScrollContainer = withStyle(Container, () => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  flexWrap: 'wrap',
  overflow: 'scroll',
  width: '100%',
  height: '100%',
  position: 'relative',
  paddingTop: '1em',
  paddingBottom: '3em',
  ':after': {
    position: 'fixed',
    zIndex: 3,
    content: '""',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '3em',
    transform: 'translateY(-100%)',
    background: `linear-gradient(0deg, ${colors.black}, transparent 100%)`,
  },
  [tablet]: {
    flexDirection: 'row',
  },
}));

export const Section = styled('section', ({ $scrolled, $active }) => ({
  // background: 'url(/static/images/texture.png) #222',
  // background: 'url(/static/images/dark_stripes.png) #222',
  background: colors.black,
  paddingTop: '1em',
  paddingBottom: '3em',
  color: colors.gray1,
  ...transition,

  transform: $active ? 'translateY(0)' : 'translateY(-420px)',
}));

export const Cover = styled('div', {
  flexBasis: '1 1 40%',
  width: '40%',
  height: 'auto',
  [tablet]: {
    flexBasis: '1 1 30%',
    width: '30%',
  },
});

export const CoverImg = styled('img', {
  display: 'block',
  width: '100%',
  height: 'auto',
});

export const Songs = styled('div', {
  flex: '1 1 70%',
  paddingLeft: '2em',
});

export const TrackList = styled('ol', {
  width: 'auto',
  display: 'block',
  listStyleType: 'decimal-leading-zero',
  padding: 0,
  margin: '2em 0 0 0',
  columns: 2,
  [tablet]: {
    margin: '0 0 0 2em',
  },
});

export const Track = styled('li', {
  listStyleType: 'decimal-leading-zero',
  margin: '0 0 1em 0',
  paddingRight: '3em',
  fontSize: '80%',
  // [':hover']: {
  //   color: colors.steelBlue,
  // },
});
export const TrackLink = styled('a', {
  display: 'block',
  color: colors.gray1,
  [':link']: {
    color: colors.gray1,
  },
  [':visited']: {
    color: colors.steelBlue,
  },
  [':hover']: {
    color: colors.steelBlue,
    textDecoration: 'none',
  },
  [':active']: {
    color: colors.steelBlue,
  },
  [':focus']: {
    color: colors.steelBlue,
  },
});

export const Action = styled('div', {
  flexBasis: '0 0 100%',
  width: '100%',
  display: 'flex',
  marginTop: '2em',
  justifyContent: 'center',
  alignItems: 'stretch',
});

export const Go = styled('a', {
  display: 'flex',
  position: 'relative',
  flex: '1 1 100%',
  width: '50%',
  maxWidth: '220px',
  borderRadius: '1.5em 1.5em',
  padding: '0 1.5em',
  height: '3em',
  width: '100%',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: colors.heliotrope,
  backgroundColor: colors.darkBlue,
  backgroundImage: `linear-gradient(
    ${colors.darkBlue}, ${colors.darkBlue} 50%, ${colors.darkBlueHover} 50%, ${colors.darkBlueHover}
  )`,
  backgroundSize: '100% 200%',
  // boxShadow: `0 0 6px 2px ${colors.black},
  //   0 4px 10px -8px ${colors.steelBlue}`,
  overflow: 'hidden',
  transition: `all 0.2s ${easeOutCirc}`,
  [':link']: {
    color: colors.steelPink,
    textDecoration: 'none',
  },
  [':hover']: {
    // backgroundColor: colors.darkBlue,
    backgroundPosition: '100% 100%',
    color: colors.turquoise,
    // boxShadow: `0 0 4px 2px ${colors.black},
    // 0 8px 18px -13px ${colors.steelBlue}`,
    textDecoration: 'none',
  },
  [':active']: {
    color: colors.heliotrope,
    textDecoration: 'none',
  },
  [tablet]: {
    maxWidth: '320px',
  },
});

export const Close = styled('button', ({ $active }) => ({
  justifySelf: 'end',
  alignSelf: 'end',
  zIndex: 5,
  cursor: 'pointer',
  margin: '0',
  padding: '0',
  border: 'none',
  width: '60px',
  height: '62px',
  background: colors.black,
  color: colors.gray1,
  transform: $active ? 'translateY(0)' : 'translateY(-420px)',
  ...transition,
  [tablet]: {
    width: '100px',
    height: '102px',
  },
}));

export const Icon = styled('div', {
  width: '40%',
  height: '40%',
  margin: 'auto',
  [tablet]: {
    width: '20%',
    height: '20%',
  },
});

export const Meta = styled('div', {
  flex: '0 0 60%',
  // width: '100%',
  fontSize: fontSize.position,
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'flex-end',
  [tablet]: {
    flex: '0 0 100%',
    width: '100%',
    display: 'block',
  },
});

export const PlistName = styled('h3', {
  position: 'relative',
  zIndex: '5',
  margin: '0 0',
  paddingLeft: '1em',
  color: 'white',
  fontWeight: 800,
  [tablet]: {
    margin: '1em 0 0.5em',
    padding: 0,
  },
});

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
