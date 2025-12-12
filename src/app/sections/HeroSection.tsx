import styles from "../page.module.css";

type HeroProps = {
  emailHref: string;
  linkedinHref: string;
  twitterHref: string;
  githubHref: string;
};

export function HeroSection({
  emailHref,
  linkedinHref,
  twitterHref,
  githubHref,
}: HeroProps) {
  return (
    <section
      className={`${styles.section} ${styles.sectionHero} ${styles.animate}`}
      data-animate
      id="hero"
    >
      <div className={styles.shell}>
        <main className={styles.hero}>
          <p className={styles.overline}>Mobile · Web · Integrations · DHIS2</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroAbbr}>EC</span> Eric Chingalo
          </h1>
          <p className={styles.heroSubtitle}>Senior Systems Developer</p>
          <p className={styles.lead}>
            Tanzanian software developer with 5+ years building DHIS2 tracker and aggregate
            customizations, plus custom apps across global health programs. Skilled in UI/UX, system
            integration, and user-centered digital tools that strengthen health systems and improve
            data use for decision-making.
          </p>
          <div className={styles.actions}>
            <a className={`${styles.primary} ${styles.emailLink}`} href={emailHref}>
              Email Eric
            </a>
            <a
              className={`${styles.secondary} ${styles.linkedinLink}`}
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={`${styles.secondary} ${styles.twitterLink}`}
              href={twitterHref}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              className={`${styles.secondary} ${styles.githubLink}`}
              href={githubHref}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </main>
      </div>
      <a className={`${styles.fab} ${styles.fabDown}`} href="#skills" aria-label="Scroll to skills">
        ↓
      </a>
    </section>
  );
}

