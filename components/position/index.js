import React, { Component, useState } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

const Position = ({
  role = 'Title',
  company = 'Company Name',
  dates = { start: 'Month Year', end: 'Month Year' },
  responsibilities = [],
  skills = [],
}) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return !role ? (
    <></>
  ) : (
    <article
      className={styles.position}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <header
        className={cx(styles.role, {
          [styles.hover]: hover,
        })}
      >
        {role}
      </header>
      <h4 className={styles.organization}>{company}</h4>
      <div className={styles.dates}>
        {dates.start}
        {dates.end && ` - ${dates.end}`}
      </div>

      <strong className={styles.subhead}>
        Key attributes and responsibilities
      </strong>
      <ul className={styles.list}>
        {responsibilities.length > 0 &&
          responsibilities.map((item, i) => (
            <li key={`role-actions_${i}`}>{item}</li>
          ))}
      </ul>
      {skills && skills.length > 0 && (
        <>
          <strong className={styles.subhead}>Primary skill utilization</strong>
          <ul>
            {skills.map((item, i) => (
              <li key={`${company}-${role}-skills_${i}`}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
};

export default Position;
