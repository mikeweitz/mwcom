import Head from 'next/head';
import cx from 'classnames';
import { useState } from 'react';

import Layout from '@mw/components/layout';
import Summary from '@mw/components/summary';
import Position, { Detail } from '@mw/components/position';
import SkillGroup from '@mw/components/skillGroup';
import Project from '@mw/components/project';
import Button from '@mw/components/button';
import { ScrollProvider } from '@mw/components/scrollContext';
import { positions, skills, projects } from '@mw/data';

import styles from './styles.module.scss';

const Home = () => {
    const [activeRole, setActiveRole] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [transitionClass, setTransitionClass] = useState('');

    const togglePanel = (role = null) => {
        setShowDetail(!showDetail);
        setTransitionClass(
            showDetail ? styles['animate-out'] : styles['animate-in']
        );
        setTimeout(setActiveRole, !role ? 1000 : 0, role);
        setTimeout(setTransitionClass, 1000, '');
    };

    return (
        <ScrollProvider>
            <Head>
                <title>Michael Weitzman</title>
            </Head>
            <Layout>
                <div className={styles.container}>
                    <Summary />
                </div>

                <div
                    className={cx(
                        styles.viewport,
                        showDetail && styles.open,
                        transitionClass
                    )}
                >
                    <aside className={cx(styles['position-detail'])}>
                        {!!activeRole && (
                            <Detail
                                className={styles.container}
                                {...activeRole}
                            >
                                <Button
                                    className={styles.button}
                                    onClick={() => togglePanel(null)}
                                >
                                    close
                                </Button>
                            </Detail>
                        )}
                    </aside>

                    <div
                        className={cx(
                            styles['experience'],
                            transitionClass,
                            showDetail && styles.open
                        )}
                    >
                        <div className={styles.container}>
                            <div className={styles.grid}>
                                {positions.map((position, i) => {
                                    return (
                                        <Position
                                            key={`position-${i}`}
                                            {...position}
                                            setRole={togglePanel}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={cx(
                        styles.container,
                        styles['pad-top'],
                        styles['page-break']
                    )}
                >
                    <div className={styles.skillset}>
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
