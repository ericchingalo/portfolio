"use client";

import styles from "../page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

type HeroProps = {
  emailHref: string;
  linkedinHref: string;
  twitterHref: string;
  githubHref: string;
};

const visible = { opacity: 1, y: 0 };
const hidden = { opacity: 0, y: 24 };

export function HeroSection({
  emailHref,
  linkedinHref,
  twitterHref,
  githubHref,
}: HeroProps) {
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
    <section className={`${styles.section} ${styles.sectionHero}`} id="hero">
      <div className={styles.shell}>
        <motion.main
          className={styles.hero}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h1
            className={styles.heroTitle}
            variants={{
              hidden,
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
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
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            variants={{
              hidden,
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Senior Systems Developer
          </motion.p>
          <motion.p
            className={styles.overline}
            variants={{
              hidden,
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Mobile · Web · UI/UX · Integrations · DHIS2
          </motion.p>
          <motion.p
            className={styles.lead}
            variants={{
              hidden,
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            I’m a Tanzanian software developer who enjoys building thoughtful,
            user-centered digital solutions. With over 5 years of experience
            across web and mobile development, UI/UX design, and system
            integration, I work closely with teams to turn ideas into reliable,
            impactful products. I’ve also built and customized solutions within
            the DHIS2 ecosystem, contributing to data-driven health systems and
            better decision-making.
          </motion.p>
          <motion.div
            className={styles.actions}
            variants={{
              hidden,
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.primary} ${styles.emailLink}`}
              href={emailHref}
            >
              Email Eric
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.secondary} ${styles.linkedinLink}`}
              href={linkedinHref}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.secondary} ${styles.twitterLink}`}
              href={twitterHref}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.secondary} ${styles.githubLink}`}
              href={githubHref}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.main>
      </div>
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        className={`${styles.fab} ${styles.fabDown}`}
        href="#skills"
        aria-label="Scroll to skills"
        onClick={handleSmoothScroll}
      >
        ↓
      </motion.a>
    </section>
  );
}
