export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Python & Backend' | 'Campus System' | 'Game Development';
  year: string;
  image: string;
  summary: string;
  features: string[];
  technologies: string[];
  role: string;
  status: 'Completed' | 'Active Development' | 'Coursework Project' | 'Upcoming Capstone';
  githubUrl?: string;
  demoAvailable?: boolean;
  metrics?: { label: string; value: string }[];
  challenges?: string;
  solutions?: string;
}

export interface PythonCodePreset {
  id: string;
  name: string;
  fileName: string;
  description: string;
  code: string;
  outputSimulator: (inputCode: string) => string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    detail: string;
  }[];
}
