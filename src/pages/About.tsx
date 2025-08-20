import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../content/about';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue via-white to-brand-teal py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
              About <span className="text-brand-blue">CosmicCore Technologies</span>
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              {aboutContent.companyInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-lg text-secondary-700 leading-relaxed">
                {aboutContent.companyInfo.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Vision</h2>
              <p className="text-lg text-secondary-700 leading-relaxed">
                {aboutContent.companyInfo.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {aboutContent.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-primary-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Preview Section */}
      {/* <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 6).map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About; 