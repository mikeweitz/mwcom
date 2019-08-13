// DOCUMENTATION: http://styletron.org

import { styled, useStyletron } from 'styletron-react';
import Layout from '../components/layout';

import Summary from '../components/summary';
import Position from '../components/position';
import SkillGroup from '../components/skillGroup';
import Project from '../components/project';

import { positions, skills, projects } from '../data';

import { Grid, GridLinks, Container } from '../styles/grid';

const Home = () => {
  // an alternative hook based API
  const [css] = useStyletron();
  return (
    <Layout>
      <Container>
        <Summary />
      </Container>

      <Container>
        <Grid>
          {positions.map((position, i) => {
            return <Position key={`position-${i}`} {...position} />;
          })}
        </Grid>
      </Container>

      <Container style={{ paddingTop: '48px' }} $pageBreak>
        <GridLinks>
          {skills.map((skillset, i) => {
            return <SkillGroup key={`skillset-${i}`} {...skillset} />;
          })}
        </GridLinks>
      </Container>

      <Container style={{ paddingTop: '48px' }}>
        <GridLinks>
          {projects.map((project, i) => {
            return <Project key={`project-${i}`} {...project} />;
          })}
        </GridLinks>
      </Container>
    </Layout>
  );
};

export default Home;
