import cx from 'classnames';
import Link, { LinkProps } from 'next/link';

export interface LinkButtonProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    key?: string | number;
}

import styles from './styles.module.scss';

export default function LinkButton({
    children,
    className,
    ...rest
}: LinkButtonProps) {
    return (
        <Link className={cx(styles.button, className)} {...rest}>
            {children}
        </Link>
    );
}
