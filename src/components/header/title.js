import Link from 'next/link';
import cx from 'classnames';

import styles from './styles.module.scss';

const Title = ({ name = '', small = false, allowFocus = true }) => {
    // const initials = name
    //     .split(' ')
    //     .map((part) => part.charAt(0))
    //     .join('');

    return (
        <h2
            className={cx(styles.title, {
                [styles['title-small']]: small,
            })}
        >
            <Link
                className={styles['title-link']}
                href="/"
                tabIndex={allowFocus ? 0 : -1}
            >
                {small ? (
                    <span className={styles.initials}>
                        <svg
                            width="59"
                            height="24"
                            viewBox="0 0 59 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="w"
                                transform="rotate(180, 27.9, 11.8)"
                                strokeLinecap="round"
                                fillRule="evenodd"
                                fill="currentColor"
                            >
                                <path
                                    d="M15.834 10.134 11.667 0.167h1.667l3.534 8.601L20.4 0.167h1.667l-4.167 9.967 4.967 11.534L31.934 0h1.866L23.666 23.667h-1.566l-5.199 -12.167 -5.234 12.167h-1.566L0 0h1.833l9.099 21.667z"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </g>

                            <g
                                id="M"
                                transform="translate(0, 0.39)"
                                strokeLinecap="round"
                                fillRule="evenodd"
                                fill="currentColor"
                            >
                                <path
                                    d="M15.834 10.134 11.667 0.167h1.667l3.534 8.601L20.4 0.167h1.667l-4.167 9.967 4.967 11.534L31.934 0h1.866L23.666 23.667h-1.566l-5.199 -12.167 -5.234 12.167h-1.566L0 0h1.833l9.099 21.667z"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </g>
                        </svg>
                    </span>
                ) : (
                    name
                )}
            </Link>
        </h2>
    );
};

export default Title;
