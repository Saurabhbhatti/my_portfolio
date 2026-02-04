import {
  prmitr,
  sgbau,
  maharashtra_board,
  mayora,
  angsoftware,
  google,
  whmis,
  connectwise,
  github,
  mongodb,
  microsoft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    company_name:
      "Prof. Ram Meghe Institute of Technology & Research, Badnera – Amravati",
    icon: prmitr,
    iconBg: "#fff",
    date: "2020 - 2022",
    points: [
      "Graduated with 10.00 CGPA",
      "Achieved 1st Rank in University",
      "Focused on advanced computer science concepts and software development",
    ],
    certificate: "/certificates/mca-first-rank.jpg",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    company_name: "Smt. Maherbanu College of Science & Commerce, Akola",
    icon: sgbau,
    iconBg: "#fff",
    date: "2017 - 2020",
    points: [
      "Graduated with 67.41%",
      "Built strong foundation in programming, databases, and web technologies",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company_name: "Bhartiya Dnyanpeeth Junior College, Murtijapur",
    icon: maharashtra_board,
    iconBg: "#fff",
    date: "2017",
    points: ["Completed Higher Secondary education", "Percentage: 59.38%"],
  },
  {
    title: "Secondary School Certificate (SSC)",
    company_name: "Saint Ann’s High School, Murtijapur",
    icon: maharashtra_board,
    iconBg: "#fff",
    date: "2015",
    points: ["Completed Secondary education", "Percentage: 63.40%"],
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Mayora Infotech Pvt. Ltd.",
    icon: mayora,
    iconBg: "#fff",
    date: "2021 - Present",
    points: [
      "Developed responsive and scalable web applications using ReactJS, TypeScript, Redux Toolkit, and Tailwind CSS.",
      "Converted Figma and UI/UX designs into pixel-perfect, reusable React components.",
      "Integrated RESTful APIs and handled complex asynchronous flows using Redux-Saga.",
      "Collaborated with backend teams to define API contracts, manage error states, and optimize data flow.",
      "Ensured cross-browser compatibility, performance optimization, and clean, maintainable code.",
    ],
  },
  {
    title: "UI / React.js Developer",
    company_name: "ANG Software",
    icon: angsoftware,
    iconBg: "#fff",
    date: "2020 - 2021",
    points: [
      "Built responsive and scalable web applications using ReactJS, Redux-Saga, and Tailwind CSS.",
      "Translated UI/UX wireframes into pixel-perfect interfaces across healthcare and e-commerce domains.",
      "Integrated RESTful APIs to enable smooth data communication between frontend and backend.",
      "Managed asynchronous state logic to enhance application performance and user experience.",
      "Collaborated with designers and backend engineers in Agile development environments.",
    ],
  },
];

const extracurricular = [
  {
    title: "GitHub Copilot Intermediate (GH-300)",
    type: "Microsoft Certification",
    icon: microsoft,
    iconBg: "#000000",
    date: "Issued: Oct 13, 2025 - Expires: Oct 13, 2027",
    points: [
      "Prompt Engineering, Copilot Chat Architecture, Policy Enforcement, Enterprise AI Integration, Secure Development Workflows",
    ],
    credential: "",
  },
  {
    title: "MongoDB Python Developer Path",
    type: "Proof of Completion",
    icon: mongodb,
    iconBg: "#000000",
    date: "Feb 2025",
    points: [
      "PyMongo, NoSQL Schema Design, Data Aggregation, MongoDB Query Optimization",
    ],
    credential: "https://learn.mongodb.com/c/tf2DSC7hTcyM3NBZjkLPoA",
  },
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "Issued: Sep 2024 - Expires: Sep 2027",
    points: [
      "Version Control, Git, Actions, CI/CD, Repository Management, SAP Workflow",
    ],
    credential:
      "https://www.credly.com/badges/b6f69785-2da8-447e-b02c-3350bf9af803",
  },
  {
    title: "Certified Enterprise Scripting Architect",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: [
      "RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization",
    ],
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: [
      "Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention",
    ],
  },
];

const projects = [
  {
    name: "Monitor Mate (Workforce Management)",
    description:
      "Monitor Mate is a workforce management and employee productivity platform built to track work hours, capture periodic screenshots, manage leaves and holidays, and generate Daily Status Reports (DSR). I developed responsive and interactive UI modules using ReactJS and TypeScript, implemented real-time time tracking and screenshot monitoring features, and integrated RESTful APIs with Redux-Saga for reliable asynchronous state management. The platform improves productivity, accountability, and performance monitoring for both remote and in-office teams.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Redux-Saga", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
  },
  {
    name: "Wheel (Cybersecurity Platform)",
    description:
      "Wheel is a cybersecurity web application designed to monitor and protect domains from threats such as phishing, email spoofing, and malicious activities. I worked on building the complete frontend architecture using ReactJS and TypeScript, implemented Redux-Saga for handling complex asynchronous operations, and integrated RESTful APIs for real-time threat analysis and data visualization. The application delivers a secure, responsive, and user-friendly interface for managing domain security.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Redux-Saga", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
  },
  {
    name: "OTC-BODY (Healthcare Platform)",
    description:
      "OTC-BODY is a healthcare web application developed to simplify appointment booking with real-time doctor availability and seamless navigation. I built responsive user interfaces using ReactJS, Material UI, and Bootstrap, implemented React Router for smooth page transitions, and ensured cross-browser compatibility and mobile responsiveness. The platform enhances patient engagement and improves the overall booking experience across devices.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "React Router", color: "blue-text-gradient" },
    ],
  },
  {
    name: "Hospitania (Healthcare Domain)",
    description:
      "Hospitania is a healthcare application focused on delivering a high-quality digital experience through scalable and reusable UI components. I developed multiple reusable components using ReactJS, implemented Formik-based dynamic forms with validations, and managed application state using React hooks and context. Close collaboration with backend and QA teams ensured seamless integration, maintainability, and consistent user experience.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Formik", color: "green-text-gradient" },
      { name: "Context API", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
    ],
  },
  {
    name: "MultiKart (E-commerce Platform)",
    description:
      "MultiKart is an e-commerce web application built with a scalable and maintainable frontend architecture. I developed reusable UI components using ReactJS and TypeScript, implemented Redux-Saga for managing complex asynchronous workflows, and built authentication flows with form validation. Performance optimizations such as lazy loading and code splitting were applied, along with accessibility and SEO best practices to enhance overall user experience.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "Redux-Saga", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "Performance Optimization", color: "blue-text-gradient" },
    ],
  },
];


export {
  experiences,
  extracurricular,
  projects,
  education,
};
