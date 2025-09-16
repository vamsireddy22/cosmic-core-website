import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'web-development',
    title: 'Java Full Stack',
    description: 'Learn to build modern web applications from frontend to backend using the latest technologies.',
    duration: '3 months',
    level: 'Beginner',
    price: '16999',
    features: [
      'Core Java Programming',
      'Backend Development',
      'Frontend Development',
      'Database Management',
      'Project Development'
    ],
    image: '/images/courses/Full-Stack-Developer-NodeJS.png'
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    description: 'Master data analysis, visualization, and machine learning algorithms for real-world applications.',
    duration: '6 months',
    level: 'Advanced',
    price: '19999',
    features: [
      'Python Programming',
      'Statistics & Mathematics',
      'Data Analysis',
      'Machine Learning',
      'Deep Learning & NLP',
      'Data Visualization',
      'Project Development'
    ],
    image: 'public/images/courses/data-science.jpg'
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'Master advanced AI concepts including neural networks, natural language processing, and computer vision for cutting-edge applications.',
    duration: '6 months',
    level: 'Advanced',
    price: '19999',
    features: [
      'Introduction to AI & Programming',
      'Machine Learning',
      'Neural Networks & Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
      'AI Ethics & Responsible AI',
      'Real-world AI Projects'
    ],
    image: '/images/courses/artificial-intelligence.jpg'
  },
  {
    id: 'mobile-development',
    title: 'UI/UX Design',
    description: 'Create cross-platform mobile applications using React Native and modern development practices.',
    duration: '4 months',
    level: 'Intermediate',
    price: '16999',
    features: [
      'Introduction to UI/UX Design',
      'React Native',
      'Mobile UI/UX (Figma, Adobe XD)',
      'State Management ',
      'API Integration',
      'App Store Deployment (iOS, Android)',
      'Performance Optimization'
    ],
    image: '/images/ui-ux-design.png'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn essential cybersecurity concepts, tools, and practices to protect digital assets.',
    duration: '4 months',
    level: 'Intermediate',
    price: '16999',
    features: [
      'Introduction to Cybersecurity',
      'Network Security',
      'Ethical Hacking',
      'Cryptography',
      'Security Tools',
      'Incident Response',
      'Security Certifications'
    ],
    image: '/images/courses/Full-Stack-Developer-NodeJS.jpg'
  },
  {
    id: 'python-full-stack',
    title: 'Python Full Stack',
    description: 'Become a proficient full stack developer using Python for backend and modern frontend technologies.',
    duration: '3 months',
    level: 'Beginner',
    price: '9999',
    features: [
      'Python Programming Fundamentals',
      'Python & Django',
      'REST API Development',
      'Frontend with React',
      'Database Integration',
      'SQL',
      'Project Development'
    ],
    image: '/images/courses/python-full-stack.jpg'
  },
  {
    id: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    description: 'Master the fundamentals of data structures and algorithms to excel in technical interviews and real-world problem solving.',
    duration: '3 months',
    level: 'Intermediate',
    price: '16999',
    features: [
      'Introduction to Data Structures & Algorithms',
      'Core Data Structures & Algorithms',
      'Algorithm Design',
      'Problem Solving Techniques',
      'Coding Interview Preparation',
      'Time & Space Complexity',
      'Project Development'
    ],
    image: '/images/courses/data-structures-algorithms.jpg'
  },
  {
    id: 'vlsi-design',
    title: 'VLSI Design',
    description: 'A VLSI design internship offers hands-on experience in IC design, HDL coding, simulation, and EDA tools, bridging academic theory with real-world chip development.',
    duration: '6 months',
    level: 'Advanced',
    price: '26999',
    features: [
      'Fundamentals of VLSI Design',
      'IC Design',
      'HDL Coding',
      'Simulation',
      'EDA Tools',
      'Project Development'
    ],
    image: '/images/courses/VLSI-Design.png'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Master modern digital marketing strategies including SEO, social media marketing, content creation, analytics, and online advertising to drive business growth and build successful marketing campaigns.',
    duration: '3 months',
    level: 'Beginner',
    price: '14999',
    features: [
      'Fundamentals of Digital Marketing',
      'SEO & SEM Optimization',
      'Social Media Marketing (Meta, LinkedIn, Twitter)',
      'Content Marketing & Strategy',
      'Google Analytics & Data Analysis',
      'Email Marketing & Automation',
      'PPC Advertising (Google Ads, Facebook Ads)',
      'Marketing Automation Tools',
      'Brand Building & Reputation Management',
      'E-commerce Marketing Strategies'
    ],
    image: '/images/courses/digital-marketing.jpg'
  },
  {
    id: 'human-resources',
    title: 'Human Resources Management',
    description: 'Comprehensive HR training covering recruitment, employee relations, performance management, and organizational development strategies.',
    duration: '3 months',
    level: 'Beginner',
    price: '17999',
    features: [
      'Fundamentals of Human Resources Management',
      'Recruitment & Selection',
      'Employee Relations',
      'Performance Management',
      'Training & Development',
      'Compensation & Benefits',
      'HR Compliance and Legal Framework',
      'HR Analytics & Technology'
    ],
    image: '/images/courses/human-resources.jpg'
  },
  {
    id: 'finance-management',
    title: 'Finance Management',
    description: 'Master financial analysis, risk management, and corporate finance to excel in finance careers.',
    duration: '3 months',
    level: 'Beginner',
    price: '19999',
    features: [
      'Fundamentals of Finance Management',
      'Financial Analysis',
      'Risk Management',
      'Corporate Finance',
      'Financial Modeling',
      'Portfolio Management'
    ],
    image: '/images/courses/finance-management.jpg'
  },
  {
    id: 'business-development-sales',
    title: 'Business Development & Sales',
    description: 'Master the art of business development, sales strategies, client acquisition, and relationship building to drive business growth and achieve sales targets.',
    duration: '3 months',
    level: 'Beginner',
    price: '15999',
    features: [
      'Fundamentals of Business Development',
      'Sales Fundamentals & Techniques',
      'Business Development Strategies',
      'Client Acquisition & Retention',
      'CRM Systems & Sales Tools',
      'Negotiation & Closing Skills',
      'Lead Generation & Prospecting',
      'Sales Analytics & Reporting',
      'Relationship Building',
      'Market Research & Analysis',
      'Sales Team Management'
    ],
    image: '/images/courses/business-development-sales.jpg'
  },
  {
    id: 'iot-development',
    title: 'Internet of Things(IoT)',
    description: 'Master Internet of Things development including sensor integration, connectivity protocols, data processing, and IoT platform management to build smart connected devices.',
    duration: '4 months',
    level: 'Intermediate',
    price: '18999',
    features: [
      'Introduction to IoT',
      'IoT Architecture & Protocols',
      'Sensor Integration & Data Collection',
      'Microcontroller Programming (Arduino, ESP32)',
      'Wireless Communication (WiFi, Bluetooth, LoRa)',
      'Cloud Platforms (AWS IoT, Azure IoT)',
      'Data Analytics & Visualization',
      'IoT Security & Privacy',
      'IoT Project Development'
    ],
    image: '/images/courses/iot-development.jpg'
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Systems',
    description: 'Master embedded systems design and programming including microcontroller development, real-time systems, hardware-software integration, and system optimization.',
    duration: '4 months',
    level: 'Intermediate',
    price: '19999',
    features: [
      'Introduction to Embedded Systems and Applications',
      'Microcontroller Architecture',
      'C/C++ Programming for Embedded Systems',
      'Real-time Operating Systems (RTOS)',
      'Hardware-Software Integration',
      'Peripheral Interface Programming',
      'Memory Management & Optimization',
      'Interrupt Handling & Timers',
      'Communication Protocols (SPI, I2C, UART)',
      'Power Management',
      'Embedded System Design'
    ],
    image: '/images/courses/embedded-systems.jpg'
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Master data analysis techniques including statistical analysis, data visualization, SQL, Excel, and business intelligence tools to extract insights and drive data-driven decisions.',
    duration: '3 months',
    level: 'Beginner',
    price: '12999',
    features: [
      'Introduction to Data Analysis',
      'Statistical Analysis & Mathematics',
      'Introduction to Machine Learning',
      'SQL Database Queries',
      'Excel Advanced Functions',
      'Data Visualization',
      'Python for Data Analysis',
      'Data Cleaning & Preprocessing',
      'Business Intelligence Tools (Tableau, Power BI)',
      'Advanced Data Analytics and Statistics',
      'Report Writing & Presentation',
      'Data Storytelling'
    ],
    image: '/images/courses/data-analyst.jpg'
  },
]; 