import styles from "../page.module.css";

type Experience = {
  title: string;
  org: string;
  period: string;
};

type ExperienceProps = {
  experience: Experience[];
};

export function ExperienceSection({ experience }: ExperienceProps) {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Use window.scrollTo for better mobile compatibility
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 0;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      className={`${styles.section} ${styles.sectionDefault} ${styles.animate}`}
      data-animate
      id="experience"
    >
      <div className={styles.shell}>
        <section className={styles.experience}>
          <div className={styles.experienceHeader}>
            <p className={styles.overline}>Experience</p>
            <h2>Where I’ve been</h2>
          </div>
          <div className={styles.experienceList}>
            {experience.map((role) => (
              <div className={styles.experienceItem} key={`${role.title}-${role.org}`}>
                <div>
                  <p className={styles.experienceTitle}>{role.title}</p>
                  <p className={styles.experienceOrg}>{role.org}</p>
                </div>
                <p className={styles.experiencePeriod}>{role.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <a
        className={`${styles.fab} ${styles.fabUp}`}
        href="#hero"
        aria-label="Back to top"
        onClick={handleSmoothScroll}
      >
        ↑
      </a>
    </section>
  );
}

