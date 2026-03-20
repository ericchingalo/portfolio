export type SocialLinks = {
  email: string;
  linkedin: string;
  twitter: string;
  github: string;
};

export type Skill = {
  title: string;
  description?: string;
  items: string[];
};

export type Experience = {
  title: string;
  org: string;
  period: string;
  description?: string;
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
      description: "Specialized in building robust architectures and systems related to web app development, ensuring high performance and reliability.",
      items: ["Angular", "React", "Next.js", "Responsive UIs"],
    },
    {
      title: "Mobile App Development",
      description: "Development of  mobile applications for various platforms, ensuring high performance and reliability.",
      items: ["Flutter/Dart", "Native-like UX"],
    },
    {
      title: "UI/UX Design & Research",
      description: "Design and development of user interfaces for various platforms, ensuring high performance and reliability. Prepared and conducted user interviews and usability testing to gather feedback and iterate on designs.",
      items: ["Figma", "Prototyping", "User interviews"],
    },
    {
      title: "DHIS2",
      description: "Development of DHIS2 applications for various platforms, ensuring high performance and reliability.",
      items: ["Tracker", "Aggregate", "App Development", "Analytics"],
    },
    {
      title: "Data Visualization & Analysis",
      description: "Development of data visualization and analysis tools for various platforms, ensuring high performance and reliability.",
      items: ["Dashboards", "Insights", "Reporting"],
    },
    {
      title: "System Design & Architecture",
      description: "Design and development of system architectures for various platforms, ensuring high performance and reliability.",
      items: ["Scalable services", "Reliability patterns"],
    },
    {
      title: "Interoperability & Integrations",
      description: "Design and development of interoperability and integration solutions for various platforms, ensuring high performance and reliability.",
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
      description: "Leading technical implementation and operational support for national-scale digital health platforms serving different Ministries of Health and international agencies. Work spans system interoperability, high-availability platform operations, incident management across government and partner environments, and UX research contributions to globally deployed health applications"
    },
    {
      title: "Information Systems Developer",
      org: "HISP Tanzania",
      period: "Jan 2021 — Dec 2025",
      description: "Delivered DHIS2 web-based, mobile, and interoperability solutions across countries in East and Southern Africa, supporting national health registries, cross-border data systems, and programme platforms for COVID-19, HIV/AIDS, and humanitarian health initiatives."
    },
    {
      title: "Software Developer",
      org: "Marimba Informatics",
      period: "Apr 2019 — Sep 2023",
      description: "Built and maintained backend and frontend systems for a consumer digital platform, and configured data collection pipelines integrated with centralised health registries."
    },
  ];
};
