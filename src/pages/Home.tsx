import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { features } from '../content/features';

const Home: React.FC = () => {

  const stats = [
    { number: '100+', label: 'Students Enrolled' },
    { number: '10+', label: 'Expert Instructors' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '150+', label: 'Projects Completed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mobile-hero bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
            className="absolute top-40 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
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
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="mobile-text-4xl font-bold text-secondary-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-800">Path To Career</span> with{' '}
              <span className="text-[#253684]">Cosmic</span><span className="text-[#1a8a8e]">Core</span>
            </motion.h1>
            
            <motion.p
              className="mobile-text-xl text-secondary-600 mb-8 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Master in-demand skills through our comprehensive courses, hands-on projects, 
              and expert mentorship. Start your journey to a successful tech career today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/courses" className="mobile-btn btn-primary w-full sm:w-auto text-center">
                Explore Courses
              </Link>
              <Link to="/about" className="mobile-btn btn-secondary w-full sm:w-auto text-center">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-brand-blue/5 via-white to-brand-teal/5">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              Why Choose <span className="text-[#253684]">Cosmic</span><span className="text-[#1a8a8e]">Core</span> Technologies?
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              We provide everything you need to succeed in the tech industry
            </p>
          </motion.div>

          <div className="mobile-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="mobile-card text-center bg-gradient-to-br from-brand-blue/10 to-brand-teal/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="mobile-text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="mobile-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mobile-text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-100 text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary-900 to-secondary-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-white mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="mobile-text-xl text-secondary-300 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Join hundreds of students who have transformed their careers with our 
              comprehensive tech education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Link to="/courses" className="mobile-btn btn-primary w-full sm:w-auto text-center">
                Browse Courses
              </Link>
              <Link to="/contact" className="mobile-btn btn-secondary w-full sm:w-auto text-center">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 