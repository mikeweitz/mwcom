import { styled, withStyle, autoComposeDeep } from 'styletron-react';
import { THEME, A } from '../../styles/theme';
import { Container } from '../../styles/grid';
import { over, wrap } from 'lodash';
const {
  fonts,
  fontSize,
  easing: { easeOutCirc, easeOutQuart, easeOutExpo, easeInOutSine },
  colors,
  breakpoints: { print },
} = THEME;

export const Drawer = styled('div', ({ $scrolled, $active }) => ({
  position: 'fixed',
  zIndex: '5',
  top: '0',
  left: '0',
  minHeight: '0',
  maxHeight: '0', 
  transition: `all 1s ${easeOutCirc}`,
  transform: 'translateY(-100%)',
  maxHeight: '50vh',
  width: '100%',
  display: 'grid',
  gridAutoFlow: 'rows',
  gridTemplateRows: 'auto 100px',
  ...($active && {
    minHeight: '250px',
    top: $scrolled ? '48px' : '162px',
    transform: 'translateY(0)',
  })
}));

export const ScrollContainer = withStyle(Container, () => ({
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'scroll',
  height: '400px',
}));

export const Section = styled('section', ({ $scrolled, $active }) => ({
  background: 'url(/static/images/texture.png) #222',
  background: 'url(/static/images/dark_stripes.png) #222',
  paddingTop: '1em',
  paddingBottom: '3em',
  color: '#ddd',
}));

export const Cover = styled('div', {
  flexBasis: '1 1 30%',
  width: '30%',
  height: 'auto',
});

export const CoverImg = styled('img', {
  display: 'block',
  width: '100%',
  height: 'auto',
});

export const Songs = styled('div', {
  flex: '1 1 70%',
  paddingLeft: '1em',
});

export const TrackList = styled('ol', {
  width: '100%',
  display: 'block',
  listStyleType: 'decimal-leading-zero',
  margin: '0 0 0 1.5em',
  padding: 0,
  columns: 2,
});

export const Track = styled('li', {
  listStyleType: 'decimal-leading-zero',
  margin: '0 0 1em 0',
  fontSize: '80%',
})

export const Close = styled('button', () => ({
  justifySelf: 'end',
  zIndex: 5,
  cursor: 'pointer',
  margin: '0',
  padding: '0',
  border: 'none',
  width: '100px',
  height: '100px',
  background: '#000',
  color: 'white',
  transition: `all 1s ${easeOutCirc}`,

}))

export const Meta = styled('div', {
  flex: '0 0 100%',
  width: '100%',
});

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
