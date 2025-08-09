import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    duration: '8 weeks',
    difficulty: 'Hard',
    image: '/images/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/example/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.example.com'
  },
  {
    id: 'task-manager',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    duration: '6 weeks',
    difficulty: 'Medium',
    image: '/images/projects/task-manager.jpg',
    githubUrl: 'https://github.com/example/task-manager',
    liveUrl: 'https://task-manager-demo.example.com'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A weather application that displays current weather and forecasts using external APIs.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    duration: '4 weeks',
    difficulty: 'Easy',
    image: '/images/projects/weather-app.jpg',
    githubUrl: 'https://github.com/example/weather-app',
    liveUrl: 'https://weather-demo.example.com'
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A content management system for creating and managing blog posts with rich text editing.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    duration: '7 weeks',
    difficulty: 'Medium',
    image: '/images/projects/blog-platform.jpg',
    githubUrl: 'https://github.com/example/blog-platform',
    liveUrl: 'https://blog-demo.example.com'
  },
  {
    id: 'chat-application',
    title: 'Real-time Chat App',
    description: 'A real-time messaging application with user authentication and file sharing capabilities.',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    duration: '5 weeks',
    difficulty: 'Medium',
    image: '/images/projects/chat-app.jpg',
    githubUrl: 'https://github.com/example/chat-app',
    liveUrl: 'https://chat-demo.example.com'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website with animations and contact form integration.',
    technologies: ['React', 'Framer Motion', 'EmailJS', 'Tailwind CSS'],
    duration: '3 weeks',
    difficulty: 'Easy',
    image: '/images/projects/portfolio.jpg',
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://portfolio-demo.example.com'
  }
]; 


export const projectCategories = [
  { title: 'Web Applications', icon: '🌐', count: '3 projects', color: 'from-blue-400 to-blue-600' },
  { title: 'Mobile Apps', icon: '📱', count: '2 projects', color: 'from-green-400 to-green-600' },
  { title: 'Full-Stack', icon: '⚡', count: '4 projects', color: 'from-purple-400 to-purple-600' },
  { title: 'UI/UX Design', icon: '🎨', count: '1 project', color: 'from-pink-400 to-pink-600' }
]


export const projectFeatures = [
  {
    title: 'Portfolio Building',
    description: 'Create impressive projects to showcase to potential employers and clients',
    icon: '📁'
  },
  {
    title: 'Real-world Experience',
    description: 'Work on projects that solve actual problems and use industry-standard tools',
    icon: '🌍'
  },
  {
    title: 'Skill Development',
    description: 'Apply theoretical knowledge to practical scenarios and learn new technologies',
    icon: '🚀'
  },
  {
    title: 'Problem Solving',
    description: 'Develop critical thinking and problem-solving skills through project challenges',
    icon: '🧩'
  },
  {
    title: 'Collaboration',
    description: 'Learn to work in teams and understand real-world development workflows',
    icon: '👥'
  },
  {
    title: 'Career Preparation',
    description: 'Gain the experience and confidence needed for job interviews and career advancement',
    icon: '🎯'
  }
];