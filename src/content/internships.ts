import { Internship } from '../types';

export const internships: Internship[] = [
  {
    id: 'frontend-intern',
    title: 'Frontend Development Intern',
    description: 'Join our team to build beautiful, responsive user interfaces using modern web technologies.',
    duration: '3-6 months',
    stipend: '$800-1200/month',
    requirements: [
      'Strong knowledge of HTML, CSS, JavaScript',
      'Experience with React or similar frameworks',
      'Understanding of responsive design',
      'Good problem-solving skills',
      'Currently pursuing Computer Science or related field'
    ],
    benefits: [
      'Hands-on experience with real projects',
      'Mentorship from senior developers',
      'Flexible working hours',
      'Potential full-time opportunity',
      'Certificate upon completion'
    ],
    image: '/images/internships/frontend.jpg'
  },
  {
    id: 'backend-intern',
    title: 'Backend Development Intern',
    description: 'Work on server-side development, APIs, and database design for scalable applications.',
    duration: '3-6 months',
    stipend: '$900-1300/month',
    requirements: [
      'Knowledge of Node.js, Python, or Java',
      'Understanding of databases (SQL/NoSQL)',
      'Basic knowledge of APIs and REST',
      'Familiarity with version control (Git)',
      'Currently pursuing Computer Science or related field'
    ],
    benefits: [
      'Work on production-level applications',
      'Learn cloud deployment (AWS/Azure)',
      'Database design and optimization',
      'API development and testing',
      'Networking opportunities'
    ],
    image: '/images/internships/backend.jpg'
  },
  {
    id: 'data-science-intern',
    title: 'Data Science Intern',
    description: 'Apply machine learning and statistical analysis to solve real-world business problems.',
    duration: '4-8 months',
    stipend: '$1000-1500/month',
    requirements: [
      'Strong foundation in Python',
      'Knowledge of statistics and mathematics',
      'Experience with data analysis libraries',
      'Understanding of machine learning concepts',
      'Currently pursuing Data Science, Statistics, or related field'
    ],
    benefits: [
      'Work with real datasets',
      'Learn advanced ML algorithms',
      'Data visualization skills',
      'Business intelligence exposure',
      'Research publication opportunities'
    ],
    image: '/images/internships/data-science.jpg'
  },
  {
    id: 'ui-ux-intern',
    title: 'UI/UX Design Intern',
    description: 'Create user-centered designs that enhance user experience and drive business growth.',
    duration: '3-6 months',
    stipend: '$700-1100/month',
    requirements: [
      'Proficiency in design tools (Figma, Sketch)',
      'Understanding of user-centered design',
      'Basic knowledge of HTML/CSS',
      'Portfolio of design work',
      'Currently pursuing Design, HCI, or related field'
    ],
    benefits: [
      'Work on real product designs',
      'Learn user research methods',
      'Prototyping and testing skills',
      'Design system development',
      'Portfolio enhancement'
    ],
    image: '/images/internships/ui-ux.jpg'
  }
]; 