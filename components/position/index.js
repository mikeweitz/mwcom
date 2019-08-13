import React, { Component } from 'react';
import * as S from './styled-elements';

class Position extends Component {
  static defaultProps = {
    role: 'Title',
    company: 'Company Name',
    dates: {
      start: 'Month, Year',
      end: 'Month, Year'
    },
    responsibilities: [],
    skills: []
  };
  constructor() {
    super();
  }

  state = {
    hover: false
  };

  handleMouseEnter = () => {
    this.setState({ hover: true });
  };

  handleMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    const { role, company, dates, responsibilities, skills } = this.props;
    const { hover } = this.state;
    return !role ? null : (
      <S.Position
        className="position"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <S.Role $hover={hover}>{role}</S.Role>
        <S.Organization>{company}</S.Organization>
        <S.Dates>
          {dates.start}
          {dates.end && ` - ${dates.end}`}
        </S.Dates>

        <S.Subhead>Key attributes and responsibilities</S.Subhead>
        <ul>
          {responsibilities.length > 0 &&
            responsibilities.map((item, i) => (
              <li key={`role-actions_${i}`}>{item}</li>
            ))}
        </ul>
        {skills && skills.length > 0 && (
          <>
            <S.Subhead>Primary skill utilization</S.Subhead>
            <ul>
              {skills.map((item, i) => (
                <li key={`${company}-${role}-skills_${i}`}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </S.Position>
    );
  }
}

export default Position;
