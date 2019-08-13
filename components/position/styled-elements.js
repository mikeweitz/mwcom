import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';
const { fontSize } = THEME;

// statically styled component
export const Position = styled('article', {
  margin: '2em 0 2em',
  paddingBottom: '1.5em',
  borderBottom: '1px solid #ccc',
  justifySelf: 'center'
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
  paddingRight: '0.5em',
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
