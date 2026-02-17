import Link from 'next/link';

import Date from '@mw/components/date';
import { Post } from '@mw/pages/blog';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface BlogHeaderProps
    extends
        Pick<Post, 'title' | 'excerpt'>,
        Partial<Pick<Post, 'slug' | 'date'>> {
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
}: BlogHeaderProps) {
    return (
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
    );
}

const ConditionalLink = ({
    slug,
    children,
}: {
    slug?: string;
    children: React.ReactNode;
}) => (slug ? <Link href={`/blog/${slug}`}>{children}</Link> : <>{children}</>);
