import { styled } from 'styletron-react';
import { THEME } from '../../styles/theme';

const {
  breakpoints: { print }
} = THEME;

export const SkillGroup = styled('div', {
  [print]: {
    display: 'inline-block',
    width: '50%',
    paddingRight: '3em',
    verticalAlign: 'top'
  }
});

export const SkillHeading = styled('header', {
  textTransform: 'uppercase',
  fontWeight: '700'
});

export const SkillList = styled('ul', {
  margin: '0 0',
  padding: '0 0'
});

export const Skill = styled('li', {
  listStyleType: 'none',
  listStylePosition: 'inside',
  margin: '0 1em 0 0',
  padding: '0.5em 0.325em',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.1)'
  }
});
