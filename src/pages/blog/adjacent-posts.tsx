import cx from 'classnames';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

import { useEffect, useState } from 'react';
import LinkButton from '@mw/components/button/link';

import styles from './styles.module.scss';
import blogStyles from './gutenberg.module.scss';
import { Truncate } from '@mw/components/truncate';

const url = process.env.NEXT_PUBLIC_HOST;

export default function AdjacentPosts({
    className,
    date,
}: {
    className?: string;
    date: string;
}) {
    const [posts, setPosts] = useState({ next: null, prev: null });

    useEffect(() => {
        fetch(new URL(url + '/api/wp/get-adjacent-posts'), {
            method: 'POST',
            body: JSON.stringify({ date }),
        })
            .then((res) => res.json())
            .then(setPosts);
    }, [date]);

    return (
        <section className={cx(className, styles['adjacent-posts'])}>
            <div className={cx(styles['post-link'], styles['prev'])}>
                {posts.prev && (
                    <>
                        <LinkButton
                            className={styles['button-back']}
                            onClick={console.log}
                            href={`/blog/${posts.prev.slug}`}
                        >
                            <ChevronsLeft />
                        </LinkButton>
                        <span>{posts.prev.title}</span>
                    </>
                )}
            </div>
            <div className={cx(styles['post-link'], styles['next'])}>
                {posts.next && (
                    <>
                        <span>{posts.next.title}</span>
                        <LinkButton
                            className={styles['button-back']}
                            href={`/blog/${posts.next.slug}`}
                        >
                            <ChevronsRight />
                        </LinkButton>
                    </>
                )}
            </div>
        </section>
    );
}
