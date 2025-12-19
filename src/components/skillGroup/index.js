import styles from './styles.module.scss';

const SkillGroup = ({
    heading = 'Skill Group Title',
    skills = ['item 1', 'item 2', 'item 3'],
}) => (
    <div className={styles['skill-group'] + ' skillset'}>
        {heading && (
            <header className={styles['skill-heading']}>{heading}</header>
        )}
        {skills && (
            <ul className={styles['skill-list']}>
                {skills.map((skill, i) => (
                    <li className={styles.skill} key={`${heading}-skill-${i}`}>
                        {skill}
                    </li>
                ))}
            </ul>
        )}
    </div>
);

export default SkillGroup;
