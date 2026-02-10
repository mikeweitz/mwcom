interface TurncateProps {
    width?: number | string;
    children: string;
}

export function Truncate({ children, width }: TurncateProps) {
    const styleProp = {
        display: 'block',
        width: width || '60ch',
        'white-space': 'nowrap',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'padding-right': '4ch',
    };

    return <span style={styleProp}>{children}</span>;
}
