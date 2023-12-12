import Head from 'next/head';
import cx from 'classnames';

import Layout from '@mw/components/layout';
import Summary from '@mw/components/summary';
import Position from '@mw/components/position';
import SkillGroup from '@mw/components/skillGroup';
import Project from '@mw/components/project';
import { ScrollProvider } from '@mw/components/scrollContext';
import { positions, skills, projects } from '@mw/data';

import styles from './styles.module.scss';

const Home = () => {
    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman</title>
            </Head>
            <Layout>
                <div className={styles.container}>
                    <Summary />
                </div>

                <div className={styles.container}>
                    <div className={styles.grid}>
                        {positions.map((position, i) => {
                            return (
                                <Position key={`position-${i}`} {...position} />
                            );
                        })}
                    </div>
                </div>

                <div
                    className={cx(
                        styles.container,
                        styles['pad-top'],
                        styles['page-break']
                    )}
                >
                    <div className={styles.links}>
                        {skills.map((skillset, i) => {
                            return (
                                <SkillGroup
                                    key={`skillset-${i}`}
                                    {...skillset}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className={cx(styles.container, styles['pad-top'])}>
                    <div className={styles.links}>
                        {projects.map((project, i) => {
                            return (
                                <Project key={`project-${i}`} {...project} />
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </ScrollProvider>
    );
};

export default Home;
