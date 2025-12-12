"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { OpenCollabSection } from "./sections/OpenCollabSection";
import { SkillsSection } from "./sections/SkillsSection";

export default function Home() {
  const skills = [
    {
      title: "Web App Development",
      items: ["Angular", "React", "Next.js", "Responsive UIs"],
    },
    {
      title: "Mobile App Development",
      items: ["Flutter/Dart", "Ionic", "Native-like UX"],
    },
    {
      title: "UI/UX Design & Research",
      items: ["Figma", "Prototyping", "User interviews"],
    },
    {
      title: "DHIS2",
      items: ["Tracker", "Aggregate", "App Development", "Analytics"],
    },
    {
      title: "Data Visualization & Analysis",
      items: ["Dashboards", "Insights", "Reporting"],
    },
    {
      title: "System Design & Architecture",
      items: ["Scalable services", "Reliability patterns"],
    },
    {
      title: "Interoperability & Integrations",
      items: ["APIs", "Mediators", "Data pipelines"],
    },
  ];

  const experience = [
    {
      title: "Senior Information Systems Developer",
      org: "HISP Tanzania",
      period: "Jan 2025 — Present",
    },
    {
      title: "Information Systems Developer",
      org: "HISP Tanzania",
      period: "Jan 2021 — Dec 2025",
    },
    {
      title: "Software Developer",
      org: "Marimba Informatics",
      period: "Apr 2019 — Sep 2023",
    },
  ];

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <HeroSection
        emailHref="mailto:ericchingalo@gmail.com"
        linkedinHref="https://www.linkedin.com/"
        twitterHref="https://twitter.com/"
        githubHref="https://github.com/"
      />

      <SkillsSection skills={skills} />

      <OpenCollabSection />

      <ExperienceSection experience={experience} />
    </div>
  );
}
