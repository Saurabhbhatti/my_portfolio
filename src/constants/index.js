import {
  prmitr,
  sgbau,
  maharashtra_board,
  neosoft,
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
  // {
  //   id: "extracurricular",
  //   title: "Certifications",
  // },
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
    certificate: "/certificates/Rank Certificate.png",
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
    company_name: "NeoSOFT Pvt. Ltd.",
    icon: neosoft, // add your icon import
    iconBg: "#fff",
    date: "June-2025 - Present",
    points: [
      "Engineered a real-time production monitoring system to capture and visualize live manufacturing data, improving operational visibility.",
      "Built factory tracking dashboards to monitor machine status and production workflows.",
      "Enhanced production planning & scheduling system, improving workflow efficiency and resource utilization.",
      "Created data-driven dashboards for business insights and decision-making.",
      "Executed audit support features for validating production records during month-end audits.",
      "Incorporated REST APIs for real-time system updates and workflows.",
      "Streamlined application performance by ~20% using lazy loading, memoization, and code splitting.",
      "Reduced manual audit effort by ~25% by digitizing audit workflows.",
      "Improved UI rendering efficiency by ~15% through optimized component architecture.",
      "Collaborated with cross-functional teams in Agile environment."
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Mayora Infotech Pvt. Ltd.",
    icon: mayora,
    iconBg: "#fff",
    date: "April-2024 - June-2025",
    points: [
      "Developed scalable frontend applications using React.js, TypeScript, Redux-Saga, and Tailwind CSS.",
      "Translated Figma designs into pixel-perfect, responsive interfaces.",
      "Merged REST APIs to improve frontend-backend communication workflows.",
      "Reduced API integration time by ~30–35% through optimized state management and reusable services.",
      "Enhanced UI performance by ~15% by minimizing unnecessary re-renders.",
      "Ensured cross-browser compatibility and responsive design across devices."
    ],
  },
  {
    title: "UI / React.js Developer",
    company_name: "ANG Softwares Pvt. Ltd.",
    icon: angsoftware,
    iconBg: "#fff",
    date: "Oct-2021 - March-2024",
    points: [
      "Created responsive web applications using React.js and modern JavaScript.",
      "Built reusable UI components to improve maintainability and scalability.",
      "Integrated REST APIs for seamless data communication between frontend and backend.",
      "Ensured cross-browser compatibility and responsive UI across devices.",
      "Collaborated with designers and backend engineers in Agile development environments."
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
    name: "C6 (Carbon 6) – Audit Management System",
    description:
      "Built a centralized audit platform to manage month-wise operational, financial, and resource data across manufacturing units. Enabled tracking of raw materials, fuel usage, procurement costs, and workforce data. Developed real-time dashboards and validation workflows, reducing manual audit effort by ~25% and improving compliance readiness.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "REST API", color: "blue-text-gradient" },
    ],
  },
  {
    name: "History Card Digitization System",
    description:
      "Designed a digital system to track product lifecycle across assembly lines and workstations. Enabled real-time tracking across manufacturing, quality, packaging, and audit teams. Improved traceability and quality control by replacing manual records with structured digital workflows.",
    tags: [
      { name: "React JS", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "REST API", color: "blue-text-gradient" },
    ],
  },
  {
    name: "Monitor Mate (Workforce Management)",
    description:
      "Developed a workforce management platform to track employee activity, work hours, and productivity. Implemented real-time time tracking, screenshot monitoring, and DSR features. Integrated APIs using Redux-Saga to ensure reliable asynchronous data handling and improve team productivity visibility.",
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
      "Built a cybersecurity platform to monitor domains and detect threats such as phishing and spoofing. Developed scalable frontend architecture with real-time dashboards and data visualization, enabling efficient threat analysis and improved system reliability.",
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
      "Developed a healthcare platform for seamless appointment booking with real-time doctor availability. Built responsive UI using ReactJS and Material UI, improving user experience and accessibility across devices.",
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
      "Created scalable and reusable UI components for a healthcare platform. Implemented dynamic forms with validation using Formik and managed state using React hooks, ensuring maintainability and consistent user experience.",
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
      "Built an e-commerce platform with reusable components and scalable architecture. Implemented Redux-Saga for handling asynchronous workflows and applied performance optimizations such as lazy loading and code splitting to enhance user experience.",
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
