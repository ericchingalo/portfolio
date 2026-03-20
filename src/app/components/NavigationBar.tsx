"use client";

import Link from "next/link";
import styles from "./NavigationBar.module.css";
import { useState } from "react";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>■</span> ERIC CHINGALO
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="#systems" className={styles.navLink}>PORTFOLIO</Link>
          <Link href="#skills" className={styles.navLink}>SKILLS</Link>
          <Link href="#experience" className={styles.navLink}>EXPERIENCE</Link>
          <Link href="#contact" className={styles.connectBtn}>CONTACT</Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.line} ${isOpen ? styles.open : ""}`} />
          <span className={`${styles.line} ${isOpen ? styles.open : ""}`} />
          <span className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#systems" className={styles.mobileLink} onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link href="#skills" className={styles.mobileLink} onClick={() => setIsOpen(false)}>SKILLS</Link>
          <Link href="#experience" className={styles.mobileLink} onClick={() => setIsOpen(false)}>EXPERIENCE</Link>
          <Link href="#contact" className={styles.mobileLink} onClick={() => setIsOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}
