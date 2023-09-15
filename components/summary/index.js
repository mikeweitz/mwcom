import { copy } from '../../data';

import styles from './styles.module.scss';

const Summary = () => {
  const { summary } = copy;

  return (
    <section className={styles.summary}>
      <p>{summary}</p>
    </section>
  );
};

export default Summary;
