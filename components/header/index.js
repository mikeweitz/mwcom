import * as S from './styled-elements';
import { Container } from '../../styles/grid';

import { copy } from '../../data';

const Header = () => {
  const {
    header: { title, email, github, linkedin }
  } = copy;
  return (
    <S.Heading id="header">
      <Container>
        <S.Group>
          <S.Title>{title}</S.Title>
        </S.Group>

        <address>
          <S.StyledLink href="#">
            <S.LinkSpan>
              {email.address}
              {email.domain}
            </S.LinkSpan>
          </S.StyledLink>
          <S.StyledLink href={github.url}>
            <S.LinkSpan>{github.text}</S.LinkSpan>
          </S.StyledLink>
          <S.StyledLink href={linkedin.url}>
            <S.LinkSpan>{linkedin.text}</S.LinkSpan>
          </S.StyledLink>
        </address>
      </Container>
    </S.Heading>
  );
};

export default Header;
