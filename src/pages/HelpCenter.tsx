import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HelpCenter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'general', name: 'General', icon: '📋' },
    { id: 'courses', name: 'Courses', icon: '📚' },
    { id: 'technical', name: 'Technical', icon: '💻' },
    { id: 'account', name: 'Account', icon: '👤' },
  ];

  const faqs = {
    general: [
      {
                 question: "What is CosmicCore Technologies?",
        answer: "CosmicCore Technologies is a startup that offers comprehensive courses in web development, data science, cybersecurity, and other tech fields. We provide hands-on learning experiences and real-world project opportunities."
      },
      {
        question: "How can I contact support?",
        answer: "You can contact our support team through email at cosmiccoretechnologies@gmail.com, call us at +91 9901480919, or use our contact form on the Contact page. We typically respond within 24 hours."
      },
      {
        question: "What are your business hours?",
        answer: "Our support team is available Monday to Friday, 9 AM to 6 PM IST. For urgent technical issues, we offer 24/7 emergency support through our priority support channels."
      },
      {
        question: 'What courses do you offer?',
        answer: 'We offer a wide range of technology courses including Java Full Stack, Data Science & Machine Learning, Python Full Stack, Data Structures & Algorithms, Cybersecurity, UI/UX Design, and VLSI Design. Each course is designed with industry experts and includes hands-on projects.'
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
        answer: 'Course prices range from 9999 to 26999. We also offer payment plans and scholarships for eligible students. Contact us for detailed pricing information.'
      },
      {
        question: 'Do you offer online and in-person classes?',
        answer: 'Currently, we offer online courses with live instructor sessions. We are planning to launch in-person classes in select cities soon.'
      },
      {
        question: 'What prerequisites do I need?',
        answer: 'Most of our courses are designed for beginners, but some advanced courses may require basic programming knowledge. We provide detailed prerequisites for each course.'
      }
    ],
    courses: [
      {
        question: "How long do the courses take to complete?",
        answer: "Course duration varies by program. Most courses take 3-8 months to complete with 10-15 hours of study per week. You can learn at your own pace and access course materials for up to 12 months."
      },
      {
        question: "Do you offer certificates upon completion?",
        answer: "Yes! All our courses provide a certificate of completion. Additionally, many of our programs offer industry-recognized certifications that can help boost your career prospects."
      },
      {
        question: "Are there prerequisites for the courses?",
        answer: "Most beginner courses have no prerequisites. For advanced courses, we recommend having basic programming knowledge. Each course page lists specific requirements and prerequisites."
      }
    ],
    technical: [
      {
        question: "What if I have technical issues with the platform?",
        answer: "For technical issues, please check our troubleshooting guide first. If the problem persists, contact our technical support team with details about your device, browser, and the specific error you are encountering."
      },
      {
        question: "Which browsers are supported?",
        answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of Chrome or Firefox."
      },
      {
        question: "Can I access courses offline?",
        answer: "Currently, our courses require an internet connection. However, you can download course materials and videos for offline viewing through our mobile app."
      }
    ],
    account: [
      {
        question: "How do I reset my password?",
        answer: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. The link will expire in 24 hours for security."
      },
      {
        question: "Can I transfer my course to someone else?",
        answer: "Course transfers are allowed within 7 days of purchase. Contact our support team with the transfer request and the new student's information."
      },
      {
        question: "How do I update my profile information?",
        answer: "You can update your profile information by going to Account > Profile Settings. Here you can change your name, email, phone number, and other personal details."
      }
    ]
  };

  const supportTopics = [
    {
      title: "Getting Started",
      description: "Learn how to set up your account and begin your learning journey",
      icon: "🚀",
      link: "/courses"
    },
    {
      title: "Course Navigation",
      description: "Understand how to navigate through our learning platform",
      icon: "🧭",
      link: "/courses"
    },
    {
      title: "Technical Requirements",
      description: "Check if your device meets our technical requirements",
      icon: "⚙️",
      link: "/contact"
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-cyan-100 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Help <span className="text-blue-900">Center</span>
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
              Find answers to your questions and get the support you need
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full px-6 py-4 text-lg border border-secondary-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Choose a topic to get started with the most common questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer border border-cyan-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => window.location.href = topic.link}
              >
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {topic.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Find quick answers to the most common questions
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-blue-100 text-secondary-700 hover:bg-blue-200 border border-blue-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-xl shadow-md mb-4 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-100 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-secondary-900">
                    {faq.question}
                  </h3>
                  <span className="text-primary-600 text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-secondary-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Our support team is here to help you with any questions or issues
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-cyan-50 border border-cyan-100 rounded-xl p-6">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Email Support</h3>
                <p className="text-secondary-600 mb-4">Get help via email</p>
                <a
                  href="mailto:support@cosmiccore.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  support@cosmiccore.com
                </a>
              </div>
              
              <div className="text-center bg-cyan-50 border border-cyan-100 rounded-xl p-6">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Phone Support</h3>
                <p className="text-secondary-600 mb-4">Call us directly</p>
                <a
                  href="tel:+15551234567"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="text-center bg-cyan-50 border border-cyan-100 rounded-xl p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Live Chat</h3>
                <p className="text-secondary-600 mb-4">Chat with our team</p>
                <Link
                  to="/contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Start Chat
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
