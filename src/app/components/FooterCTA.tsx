"use client";

import Link from "next/link";
import styles from "./FooterCTA.module.css";

type FooterProps = {
  emailHref: string;
  linkedinHref: string;
  githubHref: string;
};

export function FooterCTA({ emailHref, linkedinHref, githubHref }: FooterProps) {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.ctaContainer}>
        <h2 className={styles.title}>
          READY TO WORK TOGETHER?<br />
          <span className={styles.highlight}>LET'S TALK.</span>
        </h2>
        
        <div className={styles.actions}>
          <Link href={emailHref} className={styles.primaryAction}>
            EMAIL
          </Link>
          <Link href={githubHref} target="_blank" rel="noreferrer" className={styles.secondaryAction}>GITHUB</Link>
          <Link href={linkedinHref} target="_blank" rel="noreferrer" className={styles.secondaryAction}>LINKEDIN</Link>
          <Link href="https://drive.google.com/file/d/1vCmka6IMPPXhnIJYnfwIJou9EpEujikC/view?usp=sharing" target="_blank" className={styles.secondaryAction}>
            RESUME 
          </Link>
        </div>
      </div>
    </footer>
  );
}
