import { styled, withStyle } from 'styletron-react';
import { THEME, A } from '../../styles/theme';
const {
  fonts,
  fontSize,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  colors,
  breakpoints: { print },
} = THEME;

export const Heading = styled('header', ({ $scrolled }) => ({
  background: 'url(/static/images/texture.png) #222',
  background: 'url(/static/images/dark_stripes.png) #222',
  position: 'fixed',
  top: '0',
  left: '0',
  overflow: 'hidden',
  zIndex: '10',
  paddingTop: $scrolled ? '1em' : '2.125em',
  paddingBottom: $scrolled ? '1em' : '2.125em',
  width: '100%',
  height: $scrolled ? '48px' : '162px',
  color: '#ddd',
  borderBottom: '1px solid rgba(255,255,255, 0.4)',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  marginBottom: $scrolled ? '48px' : '168px',
  transition: `all 1s ${easeOutCirc}`,
  [print]: {
    minHeight: '150px',
    position: 'static',
    overflow: 'visible',
    borderBottom: 'none',
    paddingTop: '5em',
  },
}));

export const PageTop = styled('div', ({ $scrolled }) => ({
  position: 'relative',
  zIndex: 1,
  top: '1em',
  transform: $scrolled ? 'translateX(50px)' : 'translateX(0)',
  opacity: $scrolled ? '0' : '1',
  paddingLeft: $scrolled ? '122px' : '162px',
  transitionProperty: 'all',
  transitionDuration: '1s',
  transitionTimingFunction: easeOutCirc,
  transitionDelay: $scrolled ? '0' : '0.5s',
  [print]: {
    transform: 'none',
  },
}));

export const PageScrolled = styled('div', ({ $scrolled }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  top: '2.325em',
  transform: $scrolled ? 'translate(0, -110px)' : 'translate(0, -110px)',
  paddingLeft: $scrolled ? '138px' : '124px',
  // paddingLeft:'138px',
  opacity: $scrolled ? '1' : '0',
  // transition: `all 0.3s ${easeOutCirc}`,
  transitionProperty: 'all',
  transitionDuration: $scrolled ? '1s' : '0.7s',
  transitionTimingFunction: $scrolled ? easeOutExpo : easeInOutSine,
  transitionDelay: $scrolled ? '0' : '0',
  [print]: {
    display: 'none',
  },
}));

export const Logo = styled('div', ({ $scrolled }) => ({
  position: 'absolute',
  height: $scrolled ? '128px' : '162px',
  width: $scrolled ? '128px' : '162px',
  transitionProperty: 'all',
  transitionDuration: '1s',
  transitionTimingFunction: easeOutCirc,
  transitionDelay: $scrolled ? '0' : '0.325s',
  zIndex: 0,
  top: $scrolled ? '-4em' : '-2.125em',
  left: 0,
}));

export const Img = styled('img', {
  display: 'block',
  width: '100%',
  height: '100%',
})
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
  color: '#fff',
  ...($small
    ? {
        marginBottom: 0,
        paddingRight: '2em',
        fontSize: fontSize.body,
      }
    : {
        fontSize: fontSize.display,
      }),
  [':hover']: {
    textDecoration: 'none',
  },
  [print]: {
    paddingTop: '2em',
  },
}));

export const TitleLink = styled('a', {
  color: '#fff',
  textDecoration: 'none',
  [':hover']: {
    color: '#fff',
    textDecoration: 'none',
  },
});

export const StyledLink = withStyle(A, ({ $scrolled }) => ({
  ':hover': {
    textDecoration: 'none',
  },
  ':focus': {
    textDecoration: 'none',
  },
}));

export const LinkSpan = styled('span', {
  padding: '0',
  marginRight: '25px',
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
    backgroundColor: 'currentColor',
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
});
