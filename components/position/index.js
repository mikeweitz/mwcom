import React, { Component } from "react";
import * as S from "./styled-elements";

class Position extends Component {
  static defaultProps = {
    role: "Title",
    company: "Company Name",
    dates: {
      start: "Month, Year",
      end: "Month, Year"
    },
    responsibilities: ["item 1", "item 2", "item 3"],
    skills: ["skill 1", "skill 2", "skill 3"]
  };
  constructor() {
    super();
  }
  render() {
    const { role, company, dates, responsibilities } = this.props;
    return (
      <article className="position">
        <header>{role}</header>
        <h4>{company}</h4>
        <date>
          {dates.start}
          {dates.end && ` - ${dates.end}`}
        </date>
        <strong>Key attributes and responsibilities</strong>
        <ul>
          {responsibilities.map((item, i) => (
            <li key={`role-actions_${i}`}>{item}</li>
          ))}
        </ul>
        <strong>Primary skill utilization</strong>
        <ul>
          <li>
            {responsibilities.map((item, i) => (
              <span key={`${company}-${role}-skills_${i}`}>{item}</span>
            ))}
          </li>
        </ul>
      </article>
    );
  }
}

export default Position;
