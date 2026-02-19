import cx from 'classnames';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

import { Truncate } from '@mw/components/truncate';
import useInViewport from '@mw/hooks/use-in-viewport';

import styles from './styles.module.scss';

const url = process.env.NEXT_PUBLIC_HOST;

export default function AdjacentPosts({
    className,
    date,
}: {
    className?: string;
    date: string;
}) {
    const [posts, setPosts] = useState({ next: null, prev: null });
    const targetRef = useRef<HTMLElement>(null);
    const inViewport = useInViewport(targetRef, { threshold: 1 });

    useEffect(() => {
        if (inViewport) {
            fetch(new URL(url + '/api/wp/get-adjacent-posts'), {
                method: 'POST',
                body: JSON.stringify({ date }),
            })
                .then((res) => res.json())
                .then(setPosts);
        }
    }, [date, inViewport]);

    return (
        <section ref={targetRef} className={cx(className)}>
            {inViewport && date ? (
                <>
                    <div className={cx(styles['post-link'], styles['prev'])}>
                        {posts.prev && (
                            <>
                                <Link
                                    className={styles['link']}
                                    href={`/blog/${posts.prev.slug}`}
                                >
                                    <span className={styles['button-back']}>
                                        <ChevronsLeft />
                                    </span>
                                    <Truncate length={14}>
                                        {posts.prev.title}
                                    </Truncate>
                                </Link>
                            </>
                        )}
                    </div>
                    <div className={cx(styles['post-link'], styles['next'])}>
                        {posts.next && (
                            <>
                                <Link
                                    className={styles['link']}
                                    href={`/blog/${posts.next.slug}`}
                                >
                                    <Truncate length={14}>
                                        {posts.next.title}
                                    </Truncate>
                                    <span className={styles['button-back']}>
                                        <ChevronsRight />
                                    </span>
                                </Link>
                            </>
                        )}
                    </div>
                </>
            ) : (
                <>Loading...</>
            )}
        </section>
    );
}
