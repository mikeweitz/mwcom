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
            // console.log('get posts...', url + '/api/wp/get-adjacent-posts');
            // fetch(new URL(url + '/api/wp/get-adjacent-posts'), {
            //     method: 'POST',
            //     body: JSON.stringify({ date }),
            // })
            //     .then((res) => {
            //         if (res.headers.get('content-type').includes('json')) {
            //             return res.json();
            //         } else {
            //             return res.text();
            //         }
            //     })
            //     .then((result) => {
            //         console.log('received from api:', result);
            //         if (result) {
            //             setPosts(result);
            //         }
            //     })
            //     .catch((e) => {
            //         console.log('error returned server side', e);
            //     });

            const fields = 'ID,title,slug,date';
            Promise.all([
                fetch(
                    new URL(
                        process.env.NEXT_PUBLIC_WP_API_HOST +
                            `/posts?after=${date}&number=1&fields=${fields}&order=ASC`
                    ),
                    {
                        mode: 'cors',
                    }
                ),
                fetch(
                    new URL(
                        process.env.NEXT_PUBLIC_WP_API_HOST +
                            `/posts?before=${date}&number=1&fields=${fields}`
                    ),
                    {
                        mode: 'cors',
                    }
                ),
            ])
                .then(([after, before]) => {
                    console.log('after before', after, before);
                    return Promise.all([after.json(), before.json()]);
                })
                .then(([next, prev]) => {
                    console.log('after json called results:', next, prev);
                    setPosts({ next: next.posts[0], prev: prev.posts[0] });
                })
                .catch((e) => console.log('error clause', e));
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
