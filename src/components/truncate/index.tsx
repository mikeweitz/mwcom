interface Children {
    children: string;
}
interface Width {
    width: number | string;
}

interface Words {
    words: number;
}

interface Length {
    length: number;
}

type TurncateProps =
    | (Width & Children)
    | (Words & Children)
    | (Length & Children);

export function Truncate({ children, ...props }: TurncateProps) {
    let styleProp = {};
    let val = children;

    if ('words' in props) {
        const arr = val.split(' ');
        if (props.words < arr.length) {
            arr.splice(props.words, arr.length);
            val = arr.join(' ') + '...';
        }
    } else if ('length' in props) {
        // trim string to first space less than requested legnth
        // trim any trailing partial word
        if (props.length < val.length) {
            let x = props.length;
            while (x > 0) {
                if (val.charAt(x) === ' ') {
                    break;
                }
                x--;
            }
            val = val.substring(0, x);
            val += '...';
        }
    } else {
        // truncate to set width prop
        styleProp = {
            display: 'inline-block',
            width: props.width || '60ch',
            'white-space': 'nowrap',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
            'padding-right': '4ch',
        };
    }

    return <span style={styleProp}>{val}</span>;
}
