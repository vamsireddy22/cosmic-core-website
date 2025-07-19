import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'web-development',
    title: 'Full Stack Web Development',
    description: 'Learn to build modern web applications from frontend to backend using the latest technologies.',
    duration: '6 months',
    level: 'Intermediate',
    price: '$999',
    features: [
      'React & TypeScript',
      'Node.js & Express',
      'Database Design',
      'API Development',
      'Deployment & DevOps',
      'Real-world Projects'
    ],
    image: '/images/courses/web-development.jpg'
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    description: 'Master data analysis, visualization, and machine learning algorithms for real-world applications.',
    duration: '8 months',
    level: 'Advanced',
    price: '$1299',
    features: [
      'Python Programming',
      'Statistics & Mathematics',
      'Machine Learning',
      'Deep Learning',
      'Data Visualization',
      'Capstone Project'
    ],
    image: '/images/courses/data-science.jpg'
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Create cross-platform mobile applications using React Native and modern development practices.',
    duration: '4 months',
    level: 'Intermediate',
    price: '$799',
    features: [
      'React Native',
      'Mobile UI/UX',
      'State Management',
      'API Integration',
      'App Store Deployment',
      'Performance Optimization'
    ],
    image: '/images/courses/mobile-development.jpg'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Fundamentals',
    description: 'Learn essential cybersecurity concepts, tools, and practices to protect digital assets.',
    duration: '5 months',
    level: 'Beginner',
    price: '$699',
    features: [
      'Network Security',
      'Ethical Hacking',
      'Cryptography',
      'Security Tools',
      'Incident Response',
      'Security Certifications'
    ],
    image: '/images/courses/cybersecurity.jpg'
  }
]; 