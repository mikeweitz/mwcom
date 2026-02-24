import cx from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { HOST } from '@mw/helpers/host';
import Layout from '@mw/components/layout';
import Summary from '@mw/components/summary';
import Position, { Detail } from '@mw/components/position';
import Project from '@mw/components/project';
import SkillGroup from '@mw/components/skillGroup';
import { ScrollProvider } from '@mw/components/scrollContext';
import Drawer from '@mw/components/drawer';
import { positions, skills, projects } from '@mw/data';

import styles from './styles.module.scss';

export default function Sticky() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [activeRole, setActiveRole] = useState(null);
    const [post, setPost] = useState<Record<string, any>>(null);

    const scrollRef = useRef(null);
    const detailRef = useRef(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const togglePanel = (role = null) => {
        if (role) {
            clearTimeout(timeoutRef.current);
            setShowDrawer(true);
            setActiveRole(role);
        } else {
            setShowDrawer(false);
            timeoutRef.current = setTimeout(setActiveRole, 250, null);
        }
    };

    useEffect(() => {
        fetch(HOST + '/api/wp/get-posts')
            .then((res) => {
                res.json().then(setPost);
            })
            .catch((err) => {
                console.error('error fetching posts:', err);
            });
    }, []);

    return (
        <ScrollProvider>
            <Layout>
                <Drawer handleClose={togglePanel} active={showDrawer}>
                    {activeRole && <Detail {...activeRole} ref={detailRef} />}
                </Drawer>
                <div className={cx(styles.container, styles['summary'])}>
                    <Summary className={styles['summary-copy']} />
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        position: 'relative',
                    }}
                >
                    <div
                        className="experience"
                        style={{
                            position: 'relative',
                            top: '0',
                            left: '0',
                            transition: 'all 1s ease',
                        }}
                    >
                        <div
                            className={styles.container}
                            style={{
                                transition: 'all 1s ease',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                            }}
                        >
                            <div
                                className={styles.grid}
                                style={{ paddingBottom: '10px' }}
                            >
                                {positions.map((position, i) => {
                                    return (
                                        <Position
                                            key={`position-${i}`}
                                            {...position}
                                            index={i}
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
}
