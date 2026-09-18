export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  hackathonTag?: string;
  tags: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  architecture?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: 'Code' | 'Layers' | 'Database' | 'Cpu' | 'Terminal' | 'Server';
  description: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  location: string;
  coursework: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
  link?: string;
  isFeatured?: boolean;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  verifyUrl?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  subRole: string;
  status: string;
  bio: string;
  aboutText: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  resumeUrl: string;
}
