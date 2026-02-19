import { copy } from '../../data';

const Summary = ({ className }: React.ComponentPropsWithoutRef<'section'>) => {
    return <section className={className}>{copy.summary}</section>;
};

export default Summary;
