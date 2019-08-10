import Header from "../header";

import * as S from "./styled-elements";

const Layout = props => (
  <div>
    <Header />
    <S.Title>Title</S.Title>
    <S.SubTitle>Title</S.SubTitle>
    {props.children}
  </div>
);

export default Layout;
