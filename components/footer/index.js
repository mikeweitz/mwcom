import * as S from './styled-elements';
import { animateScroll } from 'react-scroll';
import { Container } from '../../styles/grid';
import Link from 'next/link';

const Footer = () => {
  const onPrint = e => {
    return window.print();
  };

  const handleToTop = e => {
    animateScroll.scrollToTop();
  };

  return (
    <S.Footer id="footer">
      <Container>
        <S.ButtonPrint onClick={onPrint}>Print this</S.ButtonPrint>

        <S.ButtonTop onClick={handleToTop}>Back to top</S.ButtonTop>
      </Container>
    </S.Footer>
  );
};

export default Footer;
