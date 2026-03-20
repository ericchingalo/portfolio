"use client";

import { motion } from "framer-motion";
import styles from "./SkillsSection.module.css";
import { Skill } from "../../services/contentService";

type SkillsProps = {
  skills: Skill[];
};

export function SkillsSection({ skills }: SkillsProps) {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.shell}>
        <div className={styles.skillsHeader}>
          <p className={styles.overline}>TECH STACK</p>
          <h2 className={styles.title}>
            TECHNOLOGICAL <span className={styles.titleHighlight}>SKILLS</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              className={styles.card}
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.cardIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <p className={styles.cardDescription}>
                  {skill.description}
                </p>
              </div>
              <div className={styles.tags}>
                {skill.items.map((item) => (
                  <span className={styles.tag} key={item}>
                    #{item.replace(/\s+/g, "_").toUpperCase()}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
