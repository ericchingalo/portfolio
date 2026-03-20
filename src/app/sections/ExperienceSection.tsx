"use client";

import { motion } from "framer-motion";
import styles from "./ExperienceSection.module.css";
import { Experience } from "../../services/contentService";

type ExperienceProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.shell}>
        <div className={styles.experienceHeader}>
          <h2 className={styles.title}>
            WHERE I'VE <span className={styles.titleHighlight}>BEEN</span>
          </h2>
          <span className={styles.logTag}>WORK EXPERIENCE</span>
        </div>

        <div className={styles.timeline}>
          {experience.map((role, index) => (
            <motion.div
              className={styles.timelineItem}
              key={`${role.title}-${role.org}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.timelineDot}></div>
              
              <div className={styles.period}>{role.period.replace(' — ', ' – ')}</div>
              
              <div>
                <h3 className={styles.roleTitle}>{role.title}</h3>
                <p className={styles.roleOrg}>{role.org}</p>
              </div>

              {/* Added a placeholder description since design has it but data doesn't */}
              <div className={styles.description}>
                <div className={styles.descriptionList}>
                   <div className={styles.descriptionItem}>
                     {role.description}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
