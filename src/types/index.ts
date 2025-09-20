export interface Project {
  title: string;
  description: string[];
  techStack: string;
  date?: string;
  demo?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export interface Experience {
  title: string;
  description: string[];
  date?: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Achievement {
  title: string;
}