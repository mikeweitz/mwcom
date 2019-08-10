import * as S from "./styled-elements";
import Link from "next/link";

const Header = () => (
  <S.Heading id="header">
    <S.Group>
      <h1>Michael Weitzman</h1>
    </S.Group>

    <address>
      <Link href="#">
        <a>
          <S.StyledLink>weitzly@gmail.com</S.StyledLink>
        </a>
      </Link>
      <Link href="https://github.com/mikeweitz">
        <a>
          <S.StyledLink>github</S.StyledLink>
        </a>
      </Link>
      <Link href="http://www.linkedin.com/in/mikeweitzman/">
        <a>
          <S.StyledLink>Linkedin</S.StyledLink>
        </a>
      </Link>
    </address>
  </S.Heading>
);

export default Header;
