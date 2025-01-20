export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  sem?: Number;
  description?: string;
  PR? : Number,
  SGPA? :  Number,
  CGPA? : Number,
  Percentage? : Number
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}