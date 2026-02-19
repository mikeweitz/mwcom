import { ArrowBigUp, FileText, Printer } from 'lucide-react';
import { animateScroll } from 'react-scroll';

import colors from '@mw/constants/colors';
import { copy } from '@mw/data';

import styles from './styles.module.scss';

const Footer = () => {
    const {
        header: { github, linkedin, playlists, blog },
    } = copy;

    const onPrint = () =>
        window.open('/pdf/michael-weitzman-resume.pdf', 'download');

    const handleToTop = (e) => {
        animateScroll.scrollToTop();
    };

    return (
        <>
            <footer id={styles.footer}>
                <div className={styles.row}>
                    <div>
                        &copy; mw
                        <ul className={styles['nav-list']}>
                            <li>
                                <a
                                    className={styles.link}
                                    href={blog.url}
                                    tabIndex={0}
                                >
                                    {blog.text}
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.link}
                                    href={playlists.url}
                                    tabIndex={0}
                                >
                                    {playlists.text}
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.link}
                                    href={github.url}
                                    tabIndex={0}
                                >
                                    {github.text}
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.link}
                                    href={linkedin.url}
                                    tabIndex={0}
                                >
                                    {linkedin.text}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <aside>
                        <button
                            className={styles['button-print']}
                            tabIndex={0}
                            onClick={onPrint}
                        >
                            <span className={styles['print-icon']}>
                                <Printer strroke={colors.turquoise} />
                            </span>
                            Print Resume
                        </button>
                        <button
                            tabIndex={0}
                            className={styles['button-top']}
                            onClick={handleToTop}
                        >
                            <div className={styles.out}>
                                <ArrowBigUp
                                    fill={'currentColor'}
                                    strokeWidth={0}
                                    alt="Back to top"
                                />
                            </div>
                            <div className={styles.over}>
                                <ArrowBigUp
                                    stroke={'currentColor'}
                                    fill={'currentColor'}
                                    strokeWidth={0}
                                    alt="Back to top"
                                />
                            </div>
                        </button>
                        {/* </div> */}
                    </aside>
                </div>
            </footer>
        </>
    );
};

export default Footer;
