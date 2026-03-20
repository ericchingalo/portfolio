"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

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
  return (
    <section className={styles.section} id="hero">
      <div className={styles.shell}>
        <main className={styles.hero}>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.p
              className={styles.versionText}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              PORTFOLIO
            </motion.p>
            
            <motion.div
              className={styles.status}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <span className={styles.statusDot}></span>
              STATUS: AVAILABLE FOR WORK
            </motion.div>

            <motion.h1
              className={styles.title}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Information Systems
              <span className={styles.titleHighlight}> Developer</span>
            </motion.h1>

            <motion.div
              className={styles.stats}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className={styles.statItem}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>YEARS EXPERIENCE</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>3</span>
                <span className={styles.statLabel}>COUNTRIES SUPPORTED</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>PROJECTS</span>
              </div>
            </motion.div>

            <motion.p
              className={styles.description}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Architecting resilient digital infrastructure with a focus on high-performance
              backend systems and low-latency architectural patterns. Eric Chingalo
              merges technical precision with editorial aesthetic.
            </motion.p>

            <motion.p
              className={styles.description}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              A Tanzanian software developer who enjoys building thoughtful, user-centered digital solutions, 
              with over 5 years of experience across web and mobile development, UI/UX design, and system integration.
            </motion.p>

            
            

            <motion.div
              className={styles.actions}
              variants={{
                hidden,
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <a href="#skills" className={styles.primaryBtn}>
                SKILLS
              </a>
              <a href="#experience" className={styles.secondaryBtn} style={{textAlign: "center"}} >
                EXPERIENCE
              </a>
              
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className={styles.imageArea}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              className={styles.portrait}
              src="/portrait.jpg"
              alt="Eric Chingalo Portrait"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </main>
      </div>
    </section>
  );
}
