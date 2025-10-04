// @flow
import cx from 'classnames';

import styles from './styles.module.scss';

const Project = ({
    title = '',
    subtitle = '',
    link = { url: undefined },
    summary = [],
    stack = [],
}) => {
    const slug = title.replace(/\s/g, '');

    return !title ? (
        <></>
    ) : (
        <a
            className={cx(styles.article, {
                [styles['has-link']]: !!link.url,
            })}
            {...(link.url && {
                href: link.url,
                target: '_blank',
                title: link.title,
            })}
        >
            <strong className={styles.strong}>{title}</strong>
            <div className={styles.subtitle}>{subtitle}</div>
            {summary.map((paragraph, i) => (
                <p className={styles.p} key={`${slug}-p-${i}`}>
                    {paragraph}
                </p>
            ))}
            <small className={styles.em}>{stack.join(' | ')}</small>
        </a>
    );
};

export default Project;
