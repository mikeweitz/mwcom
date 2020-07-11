import { styled, withStyle, autoComposeDeep } from 'styletron-react';
import { THEME, A } from '../../styles/theme';
const {
  fonts,
  fontSize,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  colors,
  breakpoints: { tablet, print },
} = THEME;

const bgUrl =
  'https://images.unsplash.com/photo-1579547944064-0180251f94c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3292&q=80';
// /static/images/dark_stripes.png
// /static/images/texture.png
export const Heading = styled('header', ({ $scrolled }) => ({
  background: 'rgba(0, 0, 0, 0.9)',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: '15',
  paddingTop: '0',
  paddingBottom: '0',
  width: '100%',
  height: '64px',
  color: '#ddd',
  borderBottom: '1px solid rgba(0,0,0, 0.4)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  transition: `all 1s ${easeOutCirc}`,
  [tablet]: {
    paddingTop: '0',
    paddingBottom: '0',
    background: $scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)',
    height: $scrolled ? '48px' : '162px',
  },
  [print]: {
    minHeight: '150px',
    position: 'static',
    overflow: 'visible',
    borderBottom: 'none',
    paddingTop: '5em',
  },
}));

export const Overflow = styled('div', ({ $scrolled }) => ({
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  [tablet]: {
    paddingTop: $scrolled ? '0' : '2.125em',
    paddingBottom: $scrolled ? '0' : '2.125em',
    paddingTop: '0',
    paddingBottom: '0',
  },
}));

export const PageTop = styled('div', ({ $scrolled }) => ({
  display: 'none',
  // display: 'none',
  [tablet]: {
    display: 'block',
    position: 'relative',
    zIndex: $scrolled ? 1 : 2,
    // top: '4px',
    transitionProperty: 'all',
    transitionDuration: '1s',
    transitionTimingFunction: easeOutCirc,
    top: '46px',
    transform: $scrolled ? 'translateX(50px)' : 'translateX(0)',
    opacity: $scrolled ? '0' : '1',
    paddingLeft: $scrolled ? '122px' : '162px',
    transitionDelay: $scrolled ? '0' : '0.5s',
  },
  [print]: {
    transform: 'none',
  },
}));

export const PageScrolled = styled('div', ({ $scrolled }) => ({
  zIndex: $scrolled ? 2 : 1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  top: '1.75em',
  paddingLeft: '64px',
  paddingTop: '32px',
  // paddingLeft:'138px',
  // transition: `all 0.3s ${easeOutCirc}`,
  transitionProperty: 'all',
  transitionDuration: $scrolled ? '1s' : '0.7s',
  transitionTimingFunction: $scrolled ? easeOutExpo : easeInOutSine,
  transitionDelay: $scrolled ? '0' : '0',
  [tablet]: {
    top: '1.325em',
    paddingTop: '0',
    transform: $scrolled ? 'translate(0, -76px)' : 'translate(0, -76px)',
    paddingLeft: $scrolled ? '138px' : '124px',
    opacity: $scrolled ? '1' : '0',
    position: 'relative',
  },
  [print]: {
    display: 'none',
  },
}));

export const MenuButton = styled('button', {
  position: 'absolute',
  display: 'block',
  right: '64px',
  top: '0',
  right: '0',
  margin: 0,
  padding: 0,
  height: '64px',
  width: '64px',
  zIndex: 2,
  background: colors.black,
  border: 'none',
  borderLeft: `1px solid ${colors.steelBlue}`,
  cursor: 'pointer',
  display: 'flex',
  [tablet]: {
    display: 'none',
  },
  [print]: {
    display: 'none',
  },
});

export const DotWrap = styled('div', {
  position: 'relative',
  top: 0,
  left: 0,
  backgroundColor: 'red',
  height: '100%',
  width: '100%',
});

export const MenuDot = styled('span', ({ $active, $position }) => ({
  borderRadius: '100% 100%',
  backgroundColor: 'white',
  width: '8px',
  height: '8px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(0)',
  transformOrigin: '50% 50%',
  animationDuration: $active ? '1s' : '0.65s',
  animationTimingFunction: 'cubic-bezier(.68,-0.07,.28,1.14)',
  animationFillMode: 'forwards',
  transition: `background-color 0.1s 0.25s ${easeInOutSine}`,
  ...($active && {
    backgroundColor: colors.turquoise,
  }),
}));

export const TransitionDot = withStyle(MenuDot, ({ $active }) => ({
  backgroundColor: 'purple',
  transition: `width 0.5s ease,
    border-radius 0.5s 0.5s ease,
    transform 1s 1s ease
  `,
  ...($active && {
    width: '36px',
    height: '4px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(-57deg)',
    borderRadius: '0 0',
  }),
}));

export const MenuDotOne = withStyle(MenuDot, ({ $active }) => ({
  // backgroundColor: 'red',
  'animation-name': 'menuDotOne_off',
  ...($active && {
    'animation-name': 'menuDotOne_on',
  }),
}));

export const MenuDotTwo = withStyle(MenuDot, ({ $active }) => ({
  'animation-name': 'menuDotTwo_off',
  ...($active && {
    'animation-name': 'menuDotTwo_on',
  }),
}));

export const MenuDotThree = withStyle(MenuDot, ({ $active }) => ({
  // backgroundColor: 'lime',
  animationName: 'menuDotThree_off',
  ...($active && {
    animationName: 'menuDotThree_on',
  }),
}));

export const Logo = styled('div', ({ $scrolled }) => ({
  position: 'relative',
  cursor: 'pointer',
  height: '64px',
  width: '64px',
  zIndex: 0,
  top: '2px',
  left: '6px',
  transform: 'translate(-10%, -58px)',
  transitionProperty: 'all',
  transitionDuration: '1s',
  transitionTimingFunction: easeOutCirc,
  transitionDelay: '0.325s',
  [tablet]: {
    top: 0,
    left: 0,
    height: '162px',
    width: '162px',
    transform: 'translate(0, -96px)',
    zIndex: 3,
    ...($scrolled && {
      transitionDelay: '0',
      width: '328px',
      height: '328px',
      transform: 'translate(-160px, -310px)',
      opacity: '0.7',
      // filter: 'hue-rotate(180deg)',
      filter: 'invert(10%)',
    }),
  },
}));

export const Img = styled('img', {
  display: 'block',
  width: '100%',
  height: '100%',
});

export const Group = styled('hgroup', {
  textShadow: '1px 1px 0 #000',
  transition: `all 0.3s ${easeOutCirc}`,
  ':hover': {
    textShadow: '0 0 4px #555',
  },
});

export const Title = styled('h1', ({ $small }) => ({
  ...fonts.heading,
  marginTop: 0,
  cursor: 'inherit',
  textTransform: 'none',
  transform: 'translateY(-10px)',
  ...($small
    ? {
        marginBottom: 0,
        paddingRight: '2em',
        fontSize: fontSize.position,
      }
    : {
        fontSize: fontSize.display,
      }),

  [print]: {
    paddingTop: '2em',
  },
  [tablet]: {
    transform: 'none',
  },
}));

export const NavWrap = styled('address', ({ $showMenu }) => ({
  display: 'block',
  opacity: $showMenu ? '1' : '0.75',
  maxHeight: $showMenu ? '70vh' : 0,
  overflow: 'hidden',
  width: '100%',
  transition: `all 0.5s cubic-bezier(.39,.46,.06,1.06)`,
  position: 'absolute',
  top: '64px',
  left: '0',
  background: 'rgba(0, 0, 0, 0.9)',
  // filter: $showMenu ? 'none' : 'blur(2px)',
  ...($showMenu && {
    top: '64px',
    left: '0',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.9)',
    zIndex: 20,
  }),
  [tablet]: {
    maxHeight: 'initial',
    display: 'block',
    width: 'auto',
    opacity: 1,
    position: 'static',
    background: 'transparent',
  },
}));

export const Initial = styled('span', {
  textTransform: 'uppercase',
});

export const TitleLink = styled('a', {
  display: 'inline-block',
  color: colors.heliotrope,
  textDecoration: 'none',
  textShadow: `1px 1px 0 ${colors.black}`,
  transition: `all 0.3s ${easeOutCirc}`,

  [':hover']: {
    color: colors.heliotrope,
    textShadow: `0 0 2px ${colors.steelBlue}`,
    textDecoration: 'none',
  },
});

export const StyledLink = withStyle(A, ({ $scrolled }) => ({
  color: colors.steelBlue,
  // fontSize: fontSize.mobile.display,
  transition: 'all 0.5s ease',
  display: 'block',
  padding: '1.5em 0 1.5em 64px',
  borderBottom: `1px solid ${colors.gray2}`,
  ':link': {
    color: colors.steelBlue,
  },
  ':hover': {
    color: colors.turquoise,
    backgroundColor: colors.darkBlue,
    textDecoration: 'none',
    padding: '1.5em 0 1.5em 84px',
  },
  ':focus': {
    color: colors.neonGreen,
    textDecoration: 'none',
  },
  [tablet]: {
    fontSize: fontSize.body,
    display: 'inline',
    padding: '0',
    borderBottom: 'none',
    textIndex: '0',
    transform: 'translateX(0)',
    textShadow: `-1px 1px 0px ${colors.black}`,
    ':hover': {
      color: colors.turquoise,
      backgroundColor: 'transparent',
      textDecoration: 'none',
      padding: '1.5em 0 1.5em 0',
      textShadow: `-6px -6px 2px ${colors.black}`,
      marginRight: '-3px',
    },
  },
}));

export const LinkSpan = styled('span', {
  padding: '0',
  position: 'relative',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
  },
  ':focus': {
    textDecoration: 'none',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: '0',
    left: '0',
    backgroundColor: colors.turquoise,
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transitionProperty: 'all',
    transitionDelay: '0.2s',
    transitionDuration: '0.4s',
    transitionTimingFunction: easeOutExpo,
  },
  ':hover:after': {
    visibility: 'visible',
    transform: 'scaleX(1)',
    transitionDuration: '0.4s',
    transitionDelay: '0',
  },
  [tablet]: {
    marginRight: '25px',
  },
});
