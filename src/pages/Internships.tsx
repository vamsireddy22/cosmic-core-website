import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Internships: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              Internship <span className="text-primary-600">Opportunities</span>
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
              Gain real-world experience and kickstart your career with our industry-focused internship programs
            </p>
            
            {/* Search and Filter Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search internships..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internship Categories Section */}
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
              Internship Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Explore opportunities across different technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Frontend Development', icon: '🎨', count: '1 position', color: 'from-blue-400 to-blue-600' },
              { title: 'Backend Development', icon: '⚙️', count: '1 position', color: 'from-green-400 to-green-600' },
              { title: 'Data Science', icon: '📊', count: '1 position', color: 'from-purple-400 to-purple-600' },
              { title: 'UI/UX Design', icon: '🎯', count: '1 position', color: 'from-pink-400 to-pink-600' }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-secondary-600">
                  {category.count}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Intern With Us Section */}
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
              Why Intern With EduTech?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Experience the benefits of interning with a leading technology education company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real Project Experience',
                description: 'Work on actual projects that impact thousands of students worldwide',
                icon: '🚀'
              },
              {
                title: 'Expert Mentorship',
                description: 'Learn from industry professionals with years of experience',
                icon: '👨‍🏫'
              },
              {
                title: 'Flexible Schedule',
                description: 'Balance your internship with your academic commitments',
                icon: '⏰'
              },
              {
                title: 'Career Growth',
                description: 'Potential for full-time opportunities and career advancement',
                icon: '📈'
              },
              {
                title: 'Networking',
                description: 'Connect with professionals and build your industry network',
                icon: '🤝'
              },
              {
                title: 'Skill Development',
                description: 'Develop both technical and soft skills in a professional environment',
                icon: '🎯'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-secondary-50 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
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

      {/* Application Process Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Application Process
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Simple steps to start your internship journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application with resume and portfolio', icon: '📝' },
              { step: '2', title: 'Initial Screening', description: 'We review your application and qualifications', icon: '👀' },
              { step: '3', title: 'Interview', description: 'Technical and behavioral interview with our team', icon: '💬' },
              { step: '4', title: 'Onboarding', description: 'Welcome to the team and start your internship', icon: '🎉' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="text-2xl font-bold mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-primary-100 leading-relaxed">
                  {process.description}
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Internship?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards your career by applying for an internship position.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View All Positions
              </button>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Internships; 