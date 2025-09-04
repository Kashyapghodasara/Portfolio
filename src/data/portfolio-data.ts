import { Project, Education, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Rolls-Royce Landing Page",
    description: "This is an decent landing page about Rolls Royce. This was Designed in Hackathon 2024",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kashyapghodasara/Landing-Page-Rolls-Royce",
  },
  {
    id: 2,
    title: "Bhagwad Gita API-Based Project",
    description: "The Bhagavad Gita API offers insights into the verses, chapters, and shlokas of the Bhagavad Gita, complete with translations in both English and Hindi. This resource provides a deeper understanding of the text, making its wisdom accessible to a wider audience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Kashyapghodasara/BhagavadGita-API-Project",
  },
  {
    id: 3,
    title: "Authentication with Email Verification - Nodemailer",
    description: "The Node.js application using Nodemailer to send automated emails. Features include user registration email confirmations. Configured with SMTP for email delivery and customizable templates for a personalized user experience.",
    technologies: ["React", "Tailwind", "MongoDB", "Express","JWT", "Bcrypt", "Nodemailer"],
    github: "https://github.com/Kashyapghodasara/Registration-Nodemailer",
  },
  {
    id: 4,
    title: "Decent Social Media App",
    description: "This project is a part of my Backend Learning. This app allows users to create multiple accounts, upload a profile picture, and manage posts with various features. 💻",
    technologies: ["EJS", "Express", "MongoDB", "JWT", "Bcrypt", "Tailwind"],
    github: "https://github.com/Kashyapghodasara/Basic-SocialMedia-App.",
  },
  {
    id: 5,
    title: "Twitter Clone",
    description: "X-Clone is a fully functional social media application inspired by X (formerly Twitter), designed to replicate and enhance the core features of modern social networking platforms.",
    technologies: ["React", "Express", "MongoDB", "NodeJS", "JWT", "Bcrypt", "Tailwind"],
    github: "https://github.com/Kashyapghodasara/X-Clone",
  },
  {
    id: 6,
    title: "Box Cricket Application",
    description: "This is a MERN Stack based web application designed to streamline and simplify the process of booking box cricket grounds. The platform includes features for both Users and Admins, ensuring smooth management of time slots, bookings, and payments.",
    technologies: ["React", "Express", "MongoDB", "NodeJS", "JWT", "Postman", "Tailwind", "Zustand", "Jest"],
    github: "https://github.com/Kashyapghodasara/Box-Cricket-App",
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "SSC (10th Board)",
    institution: "Sister Nivedita High School",
    year: "2022-2023",
    PR: 98.5,
  },
  {
    id: 2,
    degree: "Diploma in Computer Enginnering",
    institution: "Atmiya University",
    year: "2023-2026",
    sem: 4,
    description: "",
    SGPA: 9.7,
    CGPA: 9.6,
  },
];

export const skills: Skill[] = [

  { name: "HTML", category: "frontend" },
  { name: "Vanila CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "EJS", category: "frontend" },
  { name: "Javascript", category: "frontend" },
  { name: "React", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },

  { name: "Postman", category: "tools" },
  { name: "Figma", category: "tools" },
];

export const socialLinks = {
  github: "https://github.com/kashyapghodasara",
  linkedin: "https://www.linkedin.com/in/kashyap-ghodasara-323b11314/",
};