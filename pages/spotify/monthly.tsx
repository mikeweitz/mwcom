import { useState } from 'react';

import List from '@mw/components/playlists/list';
import { CardById } from '@mw/components/playlists';
import { getPlaylistFromApi } from '@mw/helpers/sheets';

import styles from './styles.module.scss';

export const getStaticProps = async () => {
    const data = await getPlaylistFromApi();
    return {
        props: {
            lists: JSON.parse(JSON.stringify(data.slice(1, data.length))),
        },
        revalidate: 1 * 60 * 60 * 24, // value in seconds for 24 hours
    };
};

const Monthly = ({ lists = [] }) => {
    const [selected, setSelected] = useState<string>(null);
    return (
        <main>
            <h1>My playlists</h1>
            <section className={styles['playlists-container']}>
                <aside>
                    {lists?.map(({ id, name, image }, n: number) => {
                        return (
                            <CardById
                                key={n}
                                id={id}
                                name={name}
                                image={image}
                                onClick={() => setSelected(id)}
                            />
                        );
                    })}
                </aside>
                <div className={styles.list}>
                    {selected && <List id={selected} />}
                </div>
            </section>
        </main>
    );
};

export default Monthly;
