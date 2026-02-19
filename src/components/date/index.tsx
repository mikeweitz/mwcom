import { formatDate } from '@mw/helpers/date';

type Format = 'long' | 'short' | 'numeric';

export default function Date({
    children,
    format,
    ...rest
}: React.ComponentProps<'time'> & { format?: Format }) {
    const formattedDate = formatDate(children as string, format);
    return (
        <time {...rest} dateTime={children as string}>
            {formattedDate}
        </time>
    );
}
