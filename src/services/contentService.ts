export type SocialLinks = {
  email: string;
  linkedin: string;
  twitter: string;
  github: string;
};

export type Skill = {
  title: string;
  items: string[];
};

export type Experience = {
  title: string;
  org: string;
  period: string;
};

export const getSocialLinks = (): SocialLinks => {
  return {
    email: "mailto:ericchingalo@gmail.com",
    linkedin: "https://www.linkedin.com/in/eric-chingalo/",
    twitter: "https://twitter.com/ericchingalo",
    github: "https://github.com/ericchingalo",
  };
};

export const getSkills = (): Skill[] => {
  return [
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
};

export const getExperience = (): Experience[] => {
  return [
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
};
