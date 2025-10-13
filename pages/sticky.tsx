import Head from 'next/head';
import cx from 'classnames';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animateScroll } from 'react-scroll';

import { useScrollContext } from '@mw/components/scrollContext';
import Layout from '@mw/components/layout';
import Summary from '@mw/components/summary';
import Position, { Detail } from '@mw/components/position';
import SkillGroup from '@mw/components/skillGroup';
import Project from '@mw/components/project';
import { ScrollProvider } from '@mw/components/scrollContext';
import { positions, skills, projects } from '@mw/data';
import Drawer from '@mw/components/drawer';

import styles from './styles.module.scss';

export default function Sticky() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [activeRole, setActiveRole] = useState(null);

    const scrollRef = useRef(null);
    const detailRef = useRef(null);
    // move this into own component
    // const scroll = useScrollContext();

    const togglePanel = (role = null) => {
        // get scrollRef top
        // get detailRef height, offsetTop and offsetBottom
        // calc position based on that
        // console.log('scroll relative', {
        //     detailTTop: scrollRef?.current?.getBoundingClientRect().top,
        //     scrollY: window.scrollY,
        // });
        if (
            role
            // &&
            // window.scrollY <
            //     scrollRef?.current?.getBoundingClientRect().top - 80
        ) {
            // animateScroll.scrollTo(
            //     scrollRef?.current?.getBoundingClientRect().top +
            //         window.scrollY +
            //         -80,
            //     { delay: 0, duration: 250, smooth: true }
            // );
            setShowDrawer(true);
            setActiveRole(role);
        } else {
            setShowDrawer(false);
            setTimeout(setActiveRole, 1000, null);
        }

        // setShowDetail(!showDetail);
        // setTimeout(setActiveRole, !role ? 1000 : 0, role);
        // setTransitionClass(
        //     showDetail ? styles['animate-out'] : styles['animate-in']
        // );
        // setTimeout(setTransitionClass, 1000, '');
    };
    return (
        <ScrollProvider>
            <Layout>
                <Drawer handleClose={togglePanel} active={showDrawer}>
                    {activeRole && <Detail {...activeRole} ref={detailRef} />}
                </Drawer>
                <div className={styles.container}>
                    <Summary />
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        position: 'relative',
                        // transition: 'all 500ms ease',
                        // overflow: 'hidden',
                        // display: 'grid',
                        // gridTemplateColumns: '100% 100%',
                    }}
                >
                    {/* <aside
                        className="details"
                        style={{
                            // overflow: 'hidden',
                            position: 'relative',
                            // top: 0,
                            // left: 0,
                            // backgroundColor: 'white',
                            width: '100%',
                            // outline: '1px solid red',
                            transition: 'all 1s ease',
                            ...(showDetail
                                ? {
                                      transform: 'translate(0, 0)',
                                  }
                                : {
                                      transform: 'translate(-101%, 0)',
                                  }),
                        }}
                    >
                        <div
                            className={styles.container}
                            style={{
                                transition: 'all 600ms ease-in',
                                transitionDelay: '350ms',
                                ...(showDetail
                                    ? {
                                          transform: 'translate(0, 0)',
                                      }
                                    : {
                                          transform: 'translate(-35%, 0)',
                                      }),
                            }}
                        >
                            {activeRole && (
                                <Detail {...activeRole} ref={detailRef}>
                                    <button
                                        className={
                                            styles['position-detail-close']
                                        }
                                        onClick={() => togglePanel(null)}
                                    >
                                        <X />
                                    </button>
                                </Detail>
                            )}
                        </div>
                    </aside> */}

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
                                ...(showDetail
                                    ? {
                                          transform: 'translate(35%, 0)',
                                      }
                                    : {
                                          transform: 'translate(0, 0)',
                                      }),
                            }}
                        >
                            <div className={styles.grid}>
                                {new Array(4).fill(1).map((item, i) => {
                                    return (
                                        <div
                                            style={{
                                                //                                     width: 200px;
                                                //    height: 100px;
                                                backgroundColor: '#3e92cc',
                                                transform: 'skewY(-2deg)',
                                                marginBlock: '-4px',
                                            }}
                                            key={i}
                                        >
                                            <div
                                                style={{
                                                    transform: 'skewY(2deg)',
                                                }}
                                            >
                                                <p
                                                    style={{
                                                        padding: '0.625em',
                                                    }}
                                                >
                                                    asdfjl al ljfl aiwenxf asdf
                                                    how ado thos this seem for a
                                                    canopt of true face double
                                                    pull everest.
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}

                                {positions.map((position, i) => {
                                    return (
                                        <Position
                                            key={`position-${i}`}
                                            {...position}
                                            setRole={togglePanel}
                                            // setRole={() => {
                                            //     setActiveRole(position);
                                            //     setShowDetail(true);
                                            // }}
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
