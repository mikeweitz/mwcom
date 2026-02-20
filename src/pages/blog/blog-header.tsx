import Link from 'next/link';
import classNames from 'classnames';

import Date from '@mw/components/date';
import { TPost } from '@mw/types';

import styles from './styles.module.scss';

interface BlogHeaderProps
    extends
        Pick<TPost, 'title'>,
        Partial<Pick<TPost, 'excerpt' | 'slug' | 'date' | 'tags'>> {
    className?: string;
    children?: React.ReactNode;
}

export default function BlogHeader({
    className,
    children,
    slug,
    title,
    date,
    excerpt,
    tags,
}: BlogHeaderProps) {
    return (
        <>
            <header className={classNames(styles.feature, className)}>
                <div className={styles.container}>
                    <ConditionalLink slug={slug}>
                        {children}
                        {date && <Date className={styles.date}>{date}</Date>}
                        <h2>{title}</h2>
                        {excerpt && (
                            <article
                                className={styles.blurb}
                                dangerouslySetInnerHTML={{
                                    __html: excerpt,
                                }}
                            />
                        )}
                    </ConditionalLink>
                </div>
            </header>
            {tags && (
                <div
                    className={classNames(
                        styles.container,
                        styles['blog-tags']
                    )}
                >
                    {Object.values(tags).map(({ name, ID }, i) => (
                        <span className={styles.tag} key={ID + '_' + i}>
                            {name}
                        </span>
                    ))}
                </div>
            )}
        </>
    );
}

const ConditionalLink = ({
    slug,
    children,
}: {
    slug?: string;
    children: React.ReactNode;
}) => (slug ? <Link href={`/blog/${slug}`}>{children}</Link> : <>{children}</>);
