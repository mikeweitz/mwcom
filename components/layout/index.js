import Header from '../header';
import Footer from '../footer';

import * as S from './styled-elements';

const Layout = props => (
  <S.Main>
    <Header />
    {props.children}
    <Footer />
  </S.Main>
);

export default Layout;
