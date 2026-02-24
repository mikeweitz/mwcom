import cx from 'classnames';
import { forwardRef } from 'react';

// import styles from './styles.module.scss';
import styles from './detail.module.scss';

interface DetailProps {
    role: string;
    company: string;
    summary?: string;
    dates: {
        start: string;
        end?: string;
    };
    className?: string;
    responsibilities?: string[];
    skills?: string[];
    children?: React.ReactNode;
}

export const dateOptions: Parameters<typeof Intl.DateTimeFormat>[1] = {
    year: 'numeric',
    month: 'short',
};

const Detail = forwardRef<HTMLElement, DetailProps>(
    (
        {
            role = 'Title',
            company = 'Company Name',
            dates = { start: 'Month Year', end: 'Month Year' },
            summary = undefined,
            responsibilities = [],
            skills = [],
            className = undefined,
            children = null,
        },
        ref
    ) => {
        return (
            <section ref={ref} className={cx(styles.detail, className)}>
                <header className={styles.role}>{role}</header>
                {company && <h4 className={styles.company}>{company}</h4>}
                <div className={styles.dates}>
                    {new Intl.DateTimeFormat('en-US', dateOptions).format(
                        new Date(dates.start)
                    )}
                    {dates.end &&
                        ` - ${new Intl.DateTimeFormat(
                            'en-US',
                            dateOptions
                        ).format(new Date(dates.end))}`}
                </div>
                {summary && <p className={styles.summary}>{summary}</p>}
                <strong className={styles.subhead}>
                    Key attributes and responsibilities
                </strong>
                <ul className={styles.responsibilities}>
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
                                <li
                                    className={styles.item}
                                    // style={{ listStyleType: 'none' }}
                                    key={`${company}-${role}-skills_${i}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {children}
            </section>
        );
    }
);

Detail.displayName = 'Detail';

export default Detail;
