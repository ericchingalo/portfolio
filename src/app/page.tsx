"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { SkillsSection } from "./sections/SkillsSection";
import { NavigationBar } from "./components/NavigationBar";
import { FooterCTA } from "./components/FooterCTA";
import {
  getExperience,
  getSkills,
  getSocialLinks,
} from "../services/contentService";

export default function Home() {
  const skills = getSkills();
  const experience = getExperience();
  const socialLinks = getSocialLinks();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // add class when entering viewport, remove when leaving to enable fade in/out
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.5 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <NavigationBar />
      <HeroSection
        emailHref={socialLinks.email}
        linkedinHref={socialLinks.linkedin}
        twitterHref={socialLinks.twitter}
        githubHref={socialLinks.github}
      />

      <SkillsSection skills={skills} />

      <ExperienceSection experience={experience} />
      
      <FooterCTA 
        emailHref={socialLinks.email}
        linkedinHref={socialLinks.linkedin}
        githubHref={socialLinks.github}
      />
    </div>
  );
}
