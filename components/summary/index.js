import * as S from './styled-elements';
import { copy } from '../../data';

const Summary = () => {
  const { summary } = copy;
  return (
    <S.Summary>
      <p>{summary}</p>
    </S.Summary>
  );
};

export default Summary;
