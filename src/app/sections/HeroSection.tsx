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
      className={`${styles.section} ${styles.sectionDefault} ${styles.animate}`}
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
          I’m a Tanzanian software developer who enjoys building thoughtful, user-centered digital solutions. 
          With over 5 years of experience across web and mobile development, UI/UX design, and system integration, I work closely with teams to turn ideas into reliable, impactful products. 
          I’ve also built and customized solutions within the DHIS2 ecosystem, contributing to data-driven health systems and better decision-making.
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
