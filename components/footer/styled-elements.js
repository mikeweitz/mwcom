import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const {
  breakpoints: { print, tablet, tabletLarge, desk, wide }
} = THEME;

export const Footer = styled('footer', {
  position: 'relative',
  overflow: 'hidden',
  background: 'url(/static/images/txture.png) #222',
  background: 'url(/static/images/dark_stripes.png) #222',
  padding: '4rem 0',
  marginTop: '3em',
  width: '100%',
  minHeight: '80px',
  color: '#ddd',
  boxShadow: '0 -4px 8px rgba(0,0,0,0.3)',
  borderTop: '1px solid #ccc'
});

export const ButtonPrint = styled('button', {
  position: 'absolute',
  display: 'block',
  overflow: 'hidden',
  left: '2em',
  top: '50%',
  margin: '-15px 0 0',
  padding: '0',
  textAlign: 'center',
  backgroundColor: '#eee',
  width: '100px',
  height: '30px',
  border: '1px solid #888',
  borderRadius: '8px',
  transition: 'all 0.15s ease-in-out',
  ':before': {
    content: '""',
    width: '17px',
    height: '22px',
    position: 'absolute',
    left: '-50px',
    top: '2px'
    // background: 'url(/static/images/icon_print.png)'
  },
  ':hover': {
    // @include boxshadow(0 0 5px #ccc);
    width: '124px',
    height: '40px',
    marginTop: '-20px',
    borderRadius: '20px',
    paddingLeft: '14px',
    ':before': {
      left: '10px',
      top: '7px'
    }
  },
  [print]: {
    display: 'none'
  }
});

export const PrintIcon = styled('span', ({ $hover }) => ({
  position: 'absolute',
  display: 'inline-block',
  top: '50%',
  left: '16px',
  transform: $hover ? 'translate(0, -50%)' : 'translate(-60px, -50%)',
  transition: 'transform 0.3s ease-in-out'
}));

export const ButtonTop = styled('button', {
  position: 'absolute',
  textIndent: '105%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  right: '2em',
  top: '50%',
  margin: '-15px 0 0',
  padding: '0',
  textAlign: 'left',
  backgroundColor: '#eee',
  height: '30px',
  width: '30px',
  border: '1px solid #888',
  borderRadius: '20px',
  transition: 'all 0.15s ease',
  backgroundImage: 'url(/static/images/arrow-top.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#888',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#eee'
  },
  [print]: {
    display: 'none'
  }
});
