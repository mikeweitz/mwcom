import { animateScroll } from 'react-scroll';
import { Print, Arrow } from '../icons';
import colors from '@mw/constants/colors';

import styles from './styles.module.scss';

const Footer = () => {
    // const [hoverPrint, setHoverPrint] = useState(false);
    // const [hoverArrow, setHoverArrow] = useState(false);

    const onPrint = () =>
        window.open('/pdf/michael-weitzman-resume.pdf', 'download');

    const handleToTop = (e) => {
        animateScroll.scrollToTop();
    };

    return (
        <>
            <footer id={styles.footer}>
                <div className={styles.row}>
                    <button
                        className={styles['button-print']}
                        onClick={onPrint}
                    >
                        <span className={styles['print-icon']}>
                            <Print fill={colors.turquoise} />
                        </span>
                        Print this
                    </button>

                    <button
                        className={styles['button-top']}
                        onClick={handleToTop}
                    >
                        <div className={styles.out}>
                            <Arrow fill={colors.steelBlue} alt="Back to top" />
                        </div>
                        <div className={styles.over}>
                            <Arrow fill={colors.turquoise} alt="Back to top" />
                        </div>
                    </button>
                </div>
            </footer>
        </>
    );
};

export default Footer;
