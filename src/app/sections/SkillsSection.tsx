import styles from "../page.module.css";

type Skill = {
  title: string;
  items: string[];
};

type SkillsProps = {
  skills: Skill[];
};

export function SkillsSection({ skills }: SkillsProps) {
  return (
    <section
      className={`${styles.section} ${styles.sectionDefault} ${styles.animate}`}
      data-animate
      id="skills"
    >
      <div className={styles.shell}>
        <section className={styles.skills}>
          <div className={styles.skillsHeader}>
            <p className={styles.overline}>Capabilities</p>
            <h2>What I work with</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div className={styles.skillCard} key={skill.title}>
                <p className={styles.skillTitle}>{skill.title}</p>
                <ul className={styles.skillList}>
                  {skill.items.map((item) => (
                    <li className={styles.skillItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <a className={`${styles.fab} ${styles.fabDown}`} href="#collab" aria-label="Scroll to collaboration">
        ↓
      </a>
    </section>
  );
}

