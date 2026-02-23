// @flow
import cx from 'classnames';

import styles from './styles.module.scss';

interface ProjectProps {
    title: string;
    subtitle?: string;
    link?: { url: string; title?: string };
    summary?: string[];
    stack?: string[];
}

const Project = ({
    title = '',
    subtitle = '',
    link = { url: undefined, title: undefined },
    summary = [],
    stack = [],
}: ProjectProps) => {
    const slug = title.replace(/\s/g, '');

    return !title ? (
        <></>
    ) : (
        <a
            tabIndex={-1}
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
            <footer className={styles.footer}>
                {stack.map((item, n) => (
                    <small key={n} className={styles.em}>
                        {item}
                    </small>
                ))}
            </footer>
        </a>
    );
};

export default Project;
