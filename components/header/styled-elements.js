import { styled, withStyle } from 'styletron-react';
import { THEME, A } from '../../styles/theme';
const {
  fonts,
  fontSize,
  colors,
  breakpoints: { print }
} = THEME;

export const Heading = styled('header', {
  background: 'url(/static/images/txture.png) #222',
  background: 'url(/static/images/dark_stripes.png) #222',
  position: 'relative',
  paddingTop: '2.125em',
  paddingBottom: '2.125em',
  width: '100%',
  minHeight: '100px',
  color: '#ddd',
  borderBottom: '1px solid #ccc',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  [print]: {
    borderBottom: 'none',
    paddingTop: '5em'
  }
});

export const Group = styled('hgroup', {
  textShadow: '1px 1px 0 #000',
  transition: 'all, 0.5s',
  ':hover': {
    textShadow: '0 0 4px #555'
  }
});

export const Title = styled('h1', {
  ...fonts.heading,
  fontSize: fontSize.display,
  [print]: {
    paddingTop: '2em'
  }
});

export const StyledLink = withStyle(A, {
  ':hover': {
    textDecoration: 'none'
  },
  ':focus': {
    textDecoration: 'none'
  }
});

export const LinkSpan = styled('span', {
  padding: '0',
  marginRight: '25px',
  position: 'relative',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none'
  },
  ':focus': {
    textDecoration: 'none'
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
    transition: 'all 0.25s ease-in-out'
  },
  ':hover:after': {
    visibility: 'visible',
    transform: 'scaleX(1)'
  }
});
