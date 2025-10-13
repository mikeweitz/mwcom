import React, { Component, useState } from 'react';
import cx from 'classnames';

import Button from '@mw/components/button';
import { dateOptions } from './detail';

import styles from './styles.module.scss';

export { default as Detail } from './detail';

interface PositionProps {
    role: string;
    company: string;
    index?: number;
    dates: { start: string; end?: string };
    summary?: string;
    responsibilities?: string[];
    skills?: string[];
    setRole?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const Position = ({
    role = 'Title',
    company = 'Company Name',
    index = undefined,
    dates = { start: 'Month Year', end: 'Month Year' },
    summary = undefined,
    responsibilities = [],
    skills = [],
    setRole,
}: PositionProps) => {
    const [hover, setHover] = useState(false);
    const [showDetails, setShowDeatils] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return !role ? (
        <></>
    ) : (
        <article
            className={cx(styles.position, showDetails && styles.open)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() =>
                setRole({
                    role,
                    company,
                    dates,
                    summary,
                    index,
                    responsibilities,
                    skills,
                })
            }
        >
            <div
                className={styles.wrap}
                // style={{
                //     transform: 'skewY(2deg)',
                // }}
            >
                <time
                    className={styles.dates}
                    dateTime={dates.start + dates.end ? '/' + dates.end : ''}
                >
                    {new Intl.DateTimeFormat('en-US', dateOptions).format(
                        new Date(dates.start)
                    )}
                    {dates.end &&
                        ` - ${new Intl.DateTimeFormat(
                            'en-US',
                            dateOptions
                        ).format(new Date(dates.end))}`}
                </time>
                <header
                    className={cx(styles.role, {
                        [styles.hover]: hover,
                    })}
                >
                    {role}
                </header>
                <h4 className={styles.organization}>{company}</h4>

                <Button
                    className={styles.button}
                    onClick={() => {
                        // setShowDeatils(!showDetails);
                        setRole({
                            role,
                            company,
                            dates,
                            summary,
                            responsibilities,
                            skills,
                        });
                    }}
                >
                    <span>{showDetails ? 'Show Less' : 'Info'}</span>
                </Button>

                <section
                    style={{
                        visibility: showDetails ? 'initial' : 'hidden',
                        height: showDetails ? '320px' : '0',
                        overflowY: 'scroll',
                        transition: 'all 1s ease-in-out',
                    }}
                >
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
                            <strong className={styles.subhead}>
                                Primary skill utilization
                            </strong>
                            <ul className={styles.skills}>
                                {skills.map((item, i) => (
                                    <li key={`${company}-${role}-skills_${i}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </section>
            </div>
        </article>
    );
};

export default Position;
