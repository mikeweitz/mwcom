// DOCUMENTATION: http://styletron.org

import { styled, useStyletron } from "styletron-react";
import Layout from "../components/layout";

import Position from "../components/position";

const Home = () => {
  // an alternative hook based API
  const [css] = useStyletron();
  return (
    <Layout>
      <strong>This is a page</strong>
      <p>I am some stuff</p>
      <Position />
    </Layout>
  );
};

export default Home;
