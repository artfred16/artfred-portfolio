export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'language' | 'framework' | 'tool';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  icon: string;
  color: string;
}

export interface Project {
  id: number;
  slug?: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
