import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../content/about';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-white to-cyan-100 py-20 pt-32 sm:pt-36 lg:pt-40 relative overflow-hidden">
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
              About <span className="text-blue-900">Cosmic</span><span className="text-cyan-800">Core</span> Technologies
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              <span className="text-blue-900">CosmicCore Technologies</span> is a leading technology education platform dedicated to empowering individuals with the skills and knowledge needed to thrive in the digital economy. We believe that quality education should be accessible, practical, and career-focused.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl border-l-4 border-blue-600 shadow-lg"
            >
              <div className="text-4xl mb-4 text-blue-600">🎯</div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
              <p className="text-lg text-blue-800 leading-relaxed">
                {aboutContent.companyInfo.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 rounded-xl border-l-4 border-cyan-600 shadow-lg"
            >
              <div className="text-4xl mb-4 text-cyan-600">🔮</div>
              <h2 className="text-3xl font-bold text-cyan-900 mb-4">Our Vision</h2>
              <p className="text-lg text-cyan-800 leading-relaxed">
                {aboutContent.companyInfo.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-blue-200 via-white to-cyan-200">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Our <span className="text-blue-900">Core</span> <span className="text-cyan-800">Values</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutContent.values.map((value, index) => (
              <motion.div
                key={value.title}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 3 === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-l-4 border-blue-600' :
                  index % 3 === 1 ? 'bg-white border-l-4 border-gray-300' :
                  'bg-gradient-to-br from-cyan-100 to-cyan-200 border-l-4 border-cyan-600'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl mb-4 ${
                  index % 3 === 0 ? 'text-blue-600' :
                  index % 3 === 1 ? 'text-gray-600' :
                  'text-cyan-600'
                }`}>{value.icon}</div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  index % 3 === 0 ? 'text-blue-900' :
                  index % 3 === 1 ? 'text-gray-900' :
                  'text-cyan-900'
                }`}>
                  {value.title}
                </h3>
                <p className={`leading-relaxed ${
                  index % 3 === 0 ? 'text-blue-800' :
                  index % 3 === 1 ? 'text-gray-700' :
                  'text-cyan-800'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tri-Color Theme Showcase */}
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
              Our <span className="text-blue-900">Brand</span> <span className="text-cyan-800">Identity</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Three colors that represent our values and vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blue - Trust & Stability */}
            <motion.div
              className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl text-center border-l-4 border-blue-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                🛡️
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Trust & Stability</h3>
              <p className="text-blue-800 leading-relaxed">
                Blue represents our commitment to reliability, trustworthiness, and the solid foundation we provide for our students' learning journey.
              </p>
            </motion.div>

            {/* White - Clarity & Purity */}
            <motion.div
              className="bg-white p-8 rounded-xl text-center border-l-4 border-gray-300 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gray-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                ✨
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clarity & Purity</h3>
              <p className="text-gray-700 leading-relaxed">
                White symbolizes the clarity of our teaching methods, the purity of our intentions, and the clean, focused approach to education.
              </p>
            </motion.div>

            {/* Cyan - Innovation & Growth */}
            <motion.div
              className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 rounded-xl text-center border-l-4 border-cyan-600"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-cyan-900 mb-4">Innovation & Growth</h3>
              <p className="text-cyan-800 leading-relaxed">
                Cyan represents our innovative approach to education, continuous growth, and the dynamic, forward-thinking nature of our programs.
              </p>
            </motion.div>
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