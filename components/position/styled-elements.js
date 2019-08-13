import { styled } from 'styletron-react';

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
  fontWeight: '700',
  position: 'relative',
  overflow: 'hidden',
  display: 'inline-block',
  textShadow: '1px 1px 4px #fff',
  transition: 'all 0.25s',
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
        padding: '0 0.5em'
      }
    : {})
}));

export const Organization = styled('h4', {});

export const Dates = styled('div', {
  fontStyle: 'oblique'
});

export const Subhead = styled('strong', {
  display: 'block',
  margin: '1em 0 0',
  fontSize: '0.8em'
});
