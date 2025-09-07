import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', icon: '💼' },
    { id: 'Tutor', name: 'Tutor', icon: '👨‍🏫' },
    { id: 'Technical', name: 'Technical', icon: '💻' },
    { id: 'Marketing', name: 'Marketing', icon: '📢' },
    { id: 'Operations', name: 'Operations', icon: '⚙️' },
  ];

  const jobPostings = [
    {
      id: 1,
      title: 'Java Full Stack (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'We are looking for an experienced Java Full Stack developer to join our teaching team. You will be responsible for creating and delivering high-quality course content, mentoring students, and helping them build real-world projects.',
      requirements: [
        'Strong expertise in Java, Spring Boot, React/Angular',
        'Experience with databases (MySQL, MongoDB)',
        'Excellent communication and teaching skills',
        'Previous teaching or mentoring experience preferred'
      ],
      responsibilities: [
        'Develop comprehensive course curriculum',
        'Conduct live online classes and workshops',
        'Provide personalized guidance to students',
        'Review and grade student projects',
        'Stay updated with latest industry trends'
      ],
      isActive: true
    },
    {
      id: 2,
      title: 'Python Full Stack (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'Join our team as a Python Full Stack instructor and help students master web development with Python. You will guide students through Django/Flask, frontend technologies, and database management.',
      requirements: [
        'Proficiency in Python, Django/Flask, JavaScript',
        'Experience with frontend frameworks (React/Vue)',
        'Knowledge of PostgreSQL, Redis',
        'Strong problem-solving skills',
        'Passion for teaching and mentoring'
      ],
      responsibilities: [
        'Create engaging course materials',
        'Lead interactive coding sessions',
        'Provide code reviews and feedback',
        'Help students with project development',
        'Contribute to curriculum improvements'
      ],
      isActive: true
    },
    {
      id: 3,
      title: 'Data Science & Machine Learning (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'We are seeking a Data Science expert to lead our ML/AI course. You will teach students about data analysis, machine learning algorithms, and real-world applications.',
      requirements: [
        'Advanced degree in Computer Science/Statistics',
        'Expertise in Python, R, SQL',
        'Experience with ML frameworks (TensorFlow, PyTorch)',
        'Strong statistical and mathematical background',
        'Published research or industry experience preferred'
      ],
      responsibilities: [
        'Design comprehensive ML curriculum',
        'Teach advanced statistical concepts',
        'Guide students through ML projects',
        'Organize hackathons and competitions',
        'Mentor students for industry placements'
      ],
      isActive: true
    },
    {
      id: 4,
      title: 'Cybersecurity (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'Join our cybersecurity team and help students understand network security, ethical hacking, and security best practices. You will train the next generation of security professionals.',
      requirements: [
        'Certifications: CEH, CISSP, or similar',
        'Experience in penetration testing',
        'Knowledge of security tools and frameworks',
        'Understanding of compliance standards',
        'Strong ethical hacking skills'
      ],
      responsibilities: [
        'Develop security-focused curriculum',
        'Conduct hands-on security labs',
        'Teach ethical hacking techniques',
        'Guide students through security projects',
        'Stay updated with latest threats and defenses'
      ],
      isActive: true
    },
    {
      id: 5,
      title: 'UI/UX Design (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'We are looking for a creative UI/UX designer to teach design principles, user research, and modern design tools. Help students create beautiful and functional user experiences.',
      requirements: [
        'Strong portfolio showcasing UI/UX work',
        'Proficiency in Figma, Adobe Creative Suite',
        'Understanding of design systems and principles',
        'Experience with user research and testing',
        'Knowledge of frontend development basics'
      ],
      responsibilities: [
        'Teach design fundamentals and principles',
        'Guide students through design projects',
        'Review and critique student work',
        'Introduce modern design tools and trends',
        'Help students build strong portfolios'
      ],
      isActive: true
    },
    {
      id: 6,
      title: 'VLSI Design (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'Join our VLSI team and teach students about digital design, ASIC design, and semiconductor technology. You will help students understand the fundamentals of chip design.',
      requirements: [
        'Advanced degree in Electronics/Electrical Engineering',
        'Experience with VLSI design tools (Cadence, Synopsys)',
        'Knowledge of Verilog/VHDL',
        'Understanding of semiconductor physics',
        'Industry experience in chip design preferred'
      ],
      responsibilities: [
        'Develop VLSI curriculum and labs',
        'Teach digital design concepts',
        'Guide students through chip design projects',
        'Introduce industry-standard tools',
        'Mentor students for semiconductor careers'
      ],
      isActive: true
    },
    {
      id: 7,
      title: 'Data Structures & Algorithms (Tutor)',
      category: 'Tutor',
      location: 'Remote / Bangalore',
      description: 'Help students master fundamental programming concepts and problem-solving skills. You will teach algorithms, data structures, and competitive programming.',
      requirements: [
        'Strong algorithmic thinking and problem-solving skills',
        'Experience with multiple programming languages',
        'Knowledge of advanced data structures',
        'Competitive programming experience preferred',
        'Excellent logical reasoning abilities'
      ],
      responsibilities: [
        'Teach fundamental programming concepts',
        'Conduct coding competitions and challenges',
        'Help students improve problem-solving skills',
        'Review and optimize student code',
        'Prepare students for technical interviews'
      ],
      isActive: true
    },
    {
      id: 8,
      title: 'Technical Content Developer ',
      category: 'Technical',
      location: 'Remote / Bangalore',
      description: 'Create engaging technical content, tutorials, and documentation for our courses. Help students learn through well-structured and comprehensive materials.',
      requirements: [
        'Strong technical writing skills',
        'Experience with multiple programming languages',
        'Knowledge of instructional design principles',
        'Familiarity with content creation tools',
        'Ability to explain complex concepts simply'
      ],
      responsibilities: [
        'Write course materials and documentation',
        'Create video tutorials and guides',
        'Develop practice exercises and projects',
        'Review and update existing content',
        'Collaborate with instructors on curriculum'
      ],
      isActive: true
    },
    {
      id: 9,
      title: 'Digital Marketing Specialist',
      category: 'Marketing',
      location: 'Remote / Bangalore',
      description: 'Join our marketing team to promote our courses and programs through digital channels. You will develop and execute marketing campaigns, manage social media presence, and drive student acquisition.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '0-2 years experience in digital marketing',
        'Proficiency in Google Ads, Facebook Ads, LinkedIn Ads',
        'Experience with SEO and content marketing',
        'Strong analytical and reporting skills',
        'Knowledge of marketing automation tools'
      ],
      responsibilities: [
        'Develop and execute digital marketing campaigns',
        'Manage social media accounts and content',
        'Optimize website for SEO and conversion',
        'Create engaging marketing content',
        'Analyze campaign performance and ROI',
        'Collaborate with content and design teams'
      ],
      isActive: true
    },
    {
      id: 10,
      title: 'Human Resources Specialist',
      category: 'Operations',
      location: 'Remote / Bangalore',
      description: 'Join our HR team to support our growing workforce. You will handle recruitment, employee relations, performance management, and help create a positive workplace culture.',
      requirements: [
        'Bachelor\'s degree in Human Resources or related field',
        '0-1 years experience in HR or recruitment',
        'Knowledge of HR policies and procedures',
        'Strong communication and interpersonal skills',
        'Experience with HR software and systems',
        'Understanding of labor laws and regulations'
      ],
      responsibilities: [
        'Manage recruitment and hiring processes',
        'Conduct interviews and candidate screening',
        'Handle employee onboarding and orientation',
        'Manage employee records and documentation',
        'Support performance management processes',
        'Assist with employee relations and conflict resolution',
        'Coordinate training and development programs',
        'Ensure compliance with HR policies and laws'
      ],
      isActive: true
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobPostings 
    : jobPostings.filter(job => job.category === selectedCategory);

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
              <span className="text-blue-900">Join Our</span> <span className="text-cyan-800">Team</span>
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed mb-8">
              Help us shape the future of technology education and inspire the next generation of developers
            </p>
                         <div className="flex flex-wrap justify-center gap-4 text-lg text-secondary-600">
               <div className="flex items-center">
                 <span className="mr-2">📍</span>
                 Remote & Bangalore
               </div>
               <div className="flex items-center">
                 <span className="mr-2">👥</span>
                 {jobPostings.length} Open Positions
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
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
               Why Work With <span className="text-blue-900">Cosmic</span><span className="text-cyan-800">Core</span>?
             </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Join a team that's passionate about education and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement in a fast-growing ed-tech company'
              },
              {
                icon: '🌍',
                title: 'Remote Flexibility',
                description: 'Work from anywhere with our flexible remote work policies'
              },
              {
                icon: '💡',
                title: 'Innovation Culture',
                description: 'Be part of a team that\'s constantly innovating in education technology'
              },
              {
                icon: '🎯',
                title: 'Impact',
                description: 'Make a real difference in students\' lives and careers'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
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
              <span className="text-blue-900">Open</span> <span className="text-cyan-800">Positions</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and passion
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-secondary-700 hover:bg-secondary-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-cyan-50 border border-cyan-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                                         <div>
                       <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                         {job.title}
                       </h3>
                       <div className="flex flex-wrap gap-2 mb-3">
                         <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full">
                           {job.location}
                         </span>
                       </div>
                     </div>
                  </div>

                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-900 mb-2">Requirements:</h4>
                    <ul className="text-sm text-secondary-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-primary-600 text-sm">
                          +{job.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                                     <div className="flex justify-center items-center">
                     <Link
                       to="/contact"
                       state={{ job: job.title, activeTab: 'contact-info' }}
                       className="btn-primary"
                     >
                       Apply Now
                     </Link>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-2">
                No positions found
              </h3>
              <p className="text-secondary-600">
                Try selecting a different category or check back later for new openings
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Process */}
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
              <span className="text-blue-900">How to</span> <span className="text-cyan-800">Apply</span>
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Simple steps to join our team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Find Your Role',
                description: 'Browse our open positions and find the perfect match for your skills'
              },
              {
                step: '02',
                title: 'Submit Application',
                description: 'Send us your resume and cover letter through our contact form'
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Complete technical and cultural fit interviews with our team'
              },
              {
                step: '04',
                title: 'Join Our Team',
                                 description: 'Welcome aboard! Start your journey with CosmicCore'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center bg-cyan-50 border border-cyan-100 rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              state={{ activeTab: 'contact-info' }}
              className="btn-primary text-lg px-8 py-4"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
