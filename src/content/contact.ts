import { ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  email: 'cosmiccoretechnologies@gmail.com',
  phone: '+91 9901480919',
  address: 'Bangalore, Karnataka, India',
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/cosmiccore-technologies-0564a1376',
    twitter: 'https://x.com/cosmiccore4',
    facebook: 'https://www.facebook.com/share/1JSroE8fv8/',
    instagram: 'https://www.instagram.com/cosmiccore4/',
    whatsapp: 'https://wa.me/919901480919',
    youtube: 'https://www.youtube.com/@cosmiccoretechnologies'
  }
};

export const contactMethods = [
  {
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: contactInfo.email,
    icon: '📧',
    action: `mailto:${contactInfo.email}`,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm',
    value: contactInfo.phone,
    icon: '📞',
    action: `tel:${contactInfo.phone}`,
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Visit Us',
    description: 'Come say hello at our office',
    value: contactInfo.address,
    icon: '📍',
    action: `https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`,
    color: 'from-purple-400 to-purple-600'
  }
];

export const faqs = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer a wide range of technology and business courses including Java Full Stack, Data Science & Machine Learning, Python Full Stack, Data Structures & Algorithms, Cybersecurity, UI/UX Design, VLSI Design, Human Resources Management, Finance Management, Business Development & Sales, Internet of Things(IoT), Embedded Systems, and Data Analyst. Each course is designed with industry experts and includes hands-on projects.'
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Course duration varies from 4 to 8 months depending on the program. We offer flexible learning schedules to accommodate different lifestyles and commitments.'
  },
  {
    question: 'Do you provide job placement assistance?',
    answer: 'Yes! We have a dedicated career services team that helps with resume building, interview preparation, and connecting students with our network of employer partners.'
  },
  {
    question: 'What is the cost of your courses?',
    answer: 'Course prices range from 9999 to 29999. We also offer payment plans and scholarships for eligible students. Contact us for detailed pricing information.'
  },
  {
    question: 'Do you offer online and in-person classes?',
    answer: 'Currently, we offer online courses with live instructor sessions. We\'re planning to launch in-person classes in select cities soon.'
  },
  {
    question: 'What prerequisites do I need?',
    answer: 'Most of our courses are designed for beginners, but some advanced courses may require basic programming knowledge. We provide detailed prerequisites for each course.'
  }
];