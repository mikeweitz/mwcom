import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';
const { fontSize } = THEME;

const {
  breakpoints: { tablet, tabletLarge, desk, wide, print }
} = THEME;

// statically styled component
export const Position = styled('article', {
  marginTop: '4em',
  paddingBottom: '4em',
  position: 'relative',
  justifySelf: 'center',
  ':first-of-type': {
    marginTop: '2em'
  },
  [tablet]: {
    ':first-of-type': {
      marginTop: '4em'
    }
  },
  ':after': {
    position: 'absolute',
    content: '""',
    height: '1px',
    width: '100%',
    backgroundColor: '#ccc',
    left: '0',
    bottom: '0'
  },
  [print]: {
    display: 'inline-block',
    width: '50%',
    verticalAlign: 'top',
    paddingRight: '4em',
    paddingTop: '0',
    marginTop: '0',
    marginBottom: '4em',
    ':first-of-type': {
      marginTop: '0'
    },
    ':after': {
      width: '80%'
    }
  }
});

export const Role = styled('header', ({ $hover }) => ({
  textTransform: 'uppercase',
  fontSize: '1.25em',
  lineHeight: '1em',
  fontWeight: '700',
  position: 'relative',
  overflow: 'hidden',
  display: 'inline-block',
  textShadow: '1px 1px 4px #fff',
  transition: 'all 0.25s',
  paddingTop: '0.25em',
  paddingBottom: '0.25em',
  paddingLeft: '0',
  paddingRight: '2em',
  ':after': {
    content: '""',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    transition: 'all 0.25s ease',
    position: 'absolute',
    top: '0',
    left: $hover ? '0' : '-101%'
  },
  ...($hover
    ? {
        paddingLeft: '1em',
        paddingRight: '1em'
      }
    : {})
}));

export const Organization = styled('h4', {
  fontSize: fontSize.position,
  margin: '0.5em 0 0.75em',
  lineHeight: '20px'
});

export const Dates = styled('div', {
  fontStyle: 'oblique'
});

export const Subhead = styled('strong', {
  display: 'block',
  lineHeight: '1.5em',
  margin: '1.5em 0 0.25em',
  fontSize: '0.8em'
});

export const List = styled('ul', {
  [print]: {
    width: '75%'
  }
});
