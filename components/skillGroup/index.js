import React, { Component } from 'react';
import * as S from './styled-elements';

class SkillGroup extends Component {
  static defaultProps = {
    heading: 'Skill Group Title',
    skills: ['item 1', 'item 2', 'item 3']
  };
  constructor() {
    super();
  }
  render() {
    const { heading, skills } = this.props;
    return (
      <S.SkillGroup>
        <S.SkillHeading>{heading}</S.SkillHeading>
        <S.SkillList>
          {skills.map((skill, i) => (
            <S.Skill key={`${heading}-skill-${i}`}>{skill}</S.Skill>
          ))}
        </S.SkillList>
      </S.SkillGroup>
    );
  }
}

export default SkillGroup;
