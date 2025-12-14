import styles from "../page.module.css";
import Image from "next/image";

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
      className={`${styles.section} ${styles.sectionHero} ${styles.animate}`}
      data-animate
      id="hero"
    >
      <div className={styles.shell}>
        <main className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <Image
              className={styles.heroAvatar}
              src="/portrait.jpg"
              alt="Eric Chingalo"
              width={64}
              height={64}
              style={{ height: "1em", width: "1em" }}
              priority
            />
            Eric Chingalo
          </h1>
          <p className={styles.heroSubtitle}>Senior Systems Developer</p>
          <p className={styles.overline}>
            Mobile · Web · UI/UX · Integrations · DHIS2
          </p>
          <p className={styles.lead}>
            Tanzanian software developer with 5+ years building web and mobile
            apps , mostly around DHIS2 tracker and aggregate data models
            centered primarily around Health services. Skilled in UI/UX, system
            integration, and user-centered digital tools that strengthen health
            systems and improve data use for decision-making.
          </p>
          <div className={styles.actions}>
            <a
              className={`${styles.primary} ${styles.emailLink}`}
              href={emailHref}
            >
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
      <a
        className={`${styles.fab} ${styles.fabDown}`}
        href="#skills"
        aria-label="Scroll to skills"
        onClick={handleSmoothScroll}
      >
        ↓
      </a>
    </section>
  );
}
