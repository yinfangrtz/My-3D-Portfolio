import {
  javascript,
  python,
  html,
  css,
  reactjs,
  rstudio,
  tailwind,
  typescript,
  firebase,
  git,
  figma,
  framermotion,
  huaqiao,
  ucddublin,
  boeri,
  polimi,
  threejs,
  project1,
  project2,
  project3,
  project4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "R",
    icon: rstudio,
  },
  {
    name: "Node JS",
    icon: typescript,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Framermotion",
    icon: framermotion,
  },
];

const experiences = [
  {
    title: "Master Degree in Information systems",
    company_name: "UCD - University College Dublin / Ireland",
    icon: ucddublin,
    iconBg: "#000000",
    date: "Sep.2022 - Sep.2023",
    points: [
      "Relevant Coursework:",
      "Machine Learning Foundations,",
      "Artificial Intelligence,Informatics,",
      "Human Language Technologies,",
      "Quantitative Data Analysis, AI Ethics.",
    ],
  },
  {
    title: "Project Manager / Architect",
    company_name: "Stefano Boeri Architetti, Shenzhen, China",
    icon: boeri,
    iconBg: "#000000",
    date: "Jul.2020-Sep.2022",
    points: [
      "Successfully led the Shenzhen Accessible Rehabilitation Service Center project, the largest accessible project in China with a design fee of 2.2 million Euros.",
      "Managed the project in all phases and aspects, demonstrating strong project management and leadership skills.",
      "Communication and presentations with the client, mayor, administrative approval departments and all stakeholder, ensuring effective collaboration and satisfaction.",
      "Ensured quality control. Engaged in all design tasks and contribute highly technical and creative solutions.",
      "Business Development and Curation.",
    ],
  },
  {
    title: "Master Degree in Architecture Design",
    company_name: "Politecnico di Milano / Italy",
    icon: polimi,
    iconBg: "#000000",
    date: "Mar.2016 - Dec.2018",
    points: [
      "Grade: 109 / 110",
      "Thesis: Post-war Reconstruction in Syria - 30cum laude Honored",
      "Honored Graduation selected by the Milan institute of architects",
      "Relevant Coursework: Mathematics 30/30, Mechanics of Solid 28/30",
      "Awards: First place in the major course for four consecutive semesters",
    ],
  },
  {
    title: "Bachelor Degree in Architecture",
    company_name: "Huaqiao University / China",
    icon: huaqiao,
    iconBg: "#000000",
    date: "Sep.2010 - Jul.2015",
    points: [
      "Grade: 82.74 / 100",
      "Awards:First-Class Scholarship at the University,",
      "National Innovation and Entrepreneurship Fund Grant of ¥5000 - VR and Human-computer",
      "Exchange student in Chung Yuan Christian University Exchange Student / Taiwan. Grade: A-.",
    ],
  },
];

const projects = [
  {
    name: "AIStockWise React Website",
    company: "HTML / CSS / JavaScript / React / Tailwind",
    projectImage: project1,
    weblink: "https://ai-stock-wise-react.netlify.app",
    github: "https://github.com/yinfangrtz/AIStockWise-React",
  },
  {
    name: "Superconductor Website",
    company: "HTML / CSS / JavaScript",
    projectImage: project2,
    weblink: "https://superconductor-css-practice.netlify.app",
    github: "https://github.com/yinfangrtz/Superconductor-site-with-css-design-system",
  },
  {
    name: "XAMPP TechStack APP",
    company: "HTML / CSS / MySQL / SQL / PHP",
    projectImage: project3,
    weblink: "https://stalwart-pie-926a25.netlify.app",
    github: "https://github.com/yinfangrtz/XAMPP-tech-stack-APP",
  },
  {
    name: "FramerMotion Reservation Website",
    company: "HTML / CSS / JavaScript / React / Framermotion",
    projectImage: project4,
    weblink: "https://framer-motion-reservation.netlify.app",
    github: "https://github.com/yinfangrtz/Framer-Motion-Reservation-Website",
  },
];




export { technologies, experiences, projects };
