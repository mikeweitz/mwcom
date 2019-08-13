import { styled } from 'styletron-react';

export const SkillGroup = styled('div', {});

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
