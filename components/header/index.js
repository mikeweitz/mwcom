import * as S from './styled-elements';
import { Container } from '../../styles/grid';

const Header = () => (
  <S.Heading id="header">
    <Container>
      <S.Group>
        <S.Title>Michael Weitzman</S.Title>
      </S.Group>

      <address>
        <S.StyledLink href="#">
          <S.LinkSpan>weitzly@gmail.com</S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href="https://github.com/mikeweitz">
          <S.LinkSpan>github</S.LinkSpan>
        </S.StyledLink>
        <S.StyledLink href="http://www.linkedin.com/in/mikeweitzman/">
          <S.LinkSpan>Linkedin</S.LinkSpan>
        </S.StyledLink>
      </address>
    </Container>
  </S.Heading>
);

export default Header;
