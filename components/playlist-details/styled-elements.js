import { styled, withStyle } from 'styletron-react';
import { THEME, A } from '../../styles/theme';
const {
  fonts,
  fontSize,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  colors,
  breakpoints: { print },
} = THEME;

export const Section = styled('section', ({ $scrolled, $active }) => ({
  background: 'url(/static/images/texture.png) #222',
  background: 'url(/static/images/dark_stripes.png) #222',
  position: 'fixed',
  top: '0',
  left: '0',
  transform: 'translateY(-100%)',
  overflow: 'scroll',
  zIndex: '1',
  paddingTop: 0,
  paddingBottom: 0,
  minHeight: 0,
  maxHeight: '50vh',
  width: '100%',
  // height: $scrolled ? '48px' : '162px',
  color: '#ddd',
  // borderBottom: '1px solid rgba(255,255,255, 0.4)',
  // boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  // marginBottom: $scrolled ? '50px' : '168px',
  transition: `all 1s ${easeOutCirc}`,
  ...($active && {
    minHeight: '250px',
    top: $scrolled ? '48px' : '156px',
    paddingTop: $scrolled ? '1em' : '2.125em',
    paddingBottom: $scrolled ? '1em' : '2.125em', 
    transform: 'translateY(0)',
  })
}));

export const PlistName = styled('h3', {
  position: 'relative',
  zIndex: '5',
  color: 'white',
  fontWeight: 800,  
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
  }
});


export const TrackList = styled('ol', {
  listStyleType: 'number',
  margin: 0,
  padding: 0,
});

export const Track = styled('li', {
  listStyleType: 'number',
})