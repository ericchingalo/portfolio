import styles from "../page.module.css";

export function OpenCollabSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      className={`${styles.section} ${styles.sectionDefault} ${styles.animate}`}
      data-animate
      id="collab"
    >
      <div className={styles.shell}>
        <section className={styles.openCollab}>
          <div className={styles.openHeader}>
            <p className={styles.overline}>Availability</p>
            <h2>Open for work & collaboration</h2>
            <p className={styles.lead}>
              I partner on mobile, web, and data projects—especially
              integrations and DHIS2 implementations.
            </p>
          </div>
          <div className={styles.openGrid}>
            <div className={styles.openCard}>
              <p className={styles.openLabel}>Collaboration</p>
              <p className={styles.openTitle}>Consulting & Architecture</p>
              <p className={styles.openCopy}>
                Systems design, API contracts, integration paths, and rollout
                plans.
              </p>
            </div>
            <div className={styles.openCard}>
              <p className={styles.openLabel}>Delivery</p>
              <p className={styles.openTitle}>Build & Ship</p>
              <p className={styles.openCopy}>
                Web (Angular/React/Next), mobile (Flutter/Ionic), dashboards,
                and DHIS2 apps.
              </p>
            </div>
            <div className={styles.openCard}>
              <p className={styles.openLabel}>Engagement</p>
              <p className={styles.openTitle}>Let’s talk</p>
              <p className={styles.openCopy}>
                Available for select projects and collaborations. Reach me
                directly.
              </p>
              <div className={styles.openActions}>
                <a
                  className={`${styles.primary} ${styles.emailLink}`}
                  href="mailto:ericchingalo@gmail.com"
                >
                  Email Eric
                </a>
                <a
                  className={`${styles.secondary} ${styles.linkedinLink}`}
                  href="https://www.linkedin.com/in/eric-chingalo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a
        className={`${styles.fab} ${styles.fabDown}`}
        href="#experience"
        aria-label="Scroll to experience"
        onClick={handleSmoothScroll}
      >
        ↓
      </a>
    </section>
  );
}
