import cx from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    key?: string | number;
}

import styles from './styles.module.scss';

export default function Button({ children, className, ...rest }: ButtonProps) {
    return (
        <button className={cx(className, styles.button)} {...rest}>
            {children}
        </button>
    );
}
