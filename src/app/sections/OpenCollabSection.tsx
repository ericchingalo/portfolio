import styles from "../page.module.css";
import { getSocialLinks } from "../../services/contentService";

export function OpenCollabSection() {
  const socialLinks = getSocialLinks();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const targetId = e.currentTarget.getAttribute("href")?.slice(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        // Use window.scrollTo for better mobile compatibility
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
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
      id="collab"
    >
      <div className={styles.shell}>
        <section className={styles.openCollab}>
          <div className={styles.openHeader}>
            <p className={styles.overline}>Availability</p>
            <h2>Open for work & collaboration</h2>
            <p className={styles.lead}>
              I'm open to partnering on mobile, web, integrations, and UI/UX
              design projects. I'm also interested in data collections,
              analytics, and user experience projects especially around DHIS2
              implementations and integrations.
            </p>
          </div>
          <div className={styles.openGrid}>
            <div className={styles.openCard}>
              <p className={styles.openLabel}>Collaboration</p>
              <p className={styles.openTitle}>Consulting & Architecture</p>
              <p className={styles.openCopy}>
                System design, architecture, and implementation consulting.
              </p>
            </div>
            <div className={styles.openCard}>
              <p className={styles.openLabel}>Delivery</p>
              <p className={styles.openTitle}>Build & Ship</p>
              <p className={styles.openCopy}>
                Web and mobile apps, integrations, UI/UX design, data
                visualizations and dashboards, and DHIS2 implementations.
              </p>
            </div>
            <div className={styles.openCard}>
              <p className={styles.openLabel}>Engagement</p>
              <p className={styles.openTitle}>Let’s talk</p>
              <p className={styles.openCopy}>
                Available for projects consulations and collaborations. Reach me
                directly.
              </p>
              <div className={styles.openActions}>
                <a
                  className={`${styles.primary} ${styles.emailLink}`}
                  href={socialLinks.email}
                >
                  Email
                </a>
                <a
                  className={`${styles.secondary} ${styles.linkedinLink}`}
                  href={socialLinks.linkedin}
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
