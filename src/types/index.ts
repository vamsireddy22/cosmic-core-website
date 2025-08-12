export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  features: string[];
  image: string;
}

export interface Internship {
  id: string;
  title: string;
  description: string;
  duration: string;
  stipend: string;
  requirements: string[];
  benefits: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
} 