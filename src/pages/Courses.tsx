import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { courses } from '../content/courses';
import { features } from '../content/features';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [expandedCourses, setExpandedCourses] = useState<Set<string>>(new Set());

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', '3 months', '4 months', '6 months'];

  const toggleCourseExpansion = (courseId: string) => {
    setExpandedCourses(prev => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesDuration = selectedDuration === 'All' || course.duration === selectedDuration;
      
      return matchesSearch && matchesLevel && matchesDuration;
    });
  }, [searchTerm, selectedLevel, selectedDuration]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="mobile-hero bg-gradient-to-br from-blue-100 via-white to-cyan-100 relative overflow-hidden">
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
            <h1 className="mobile-text-4xl font-bold text-secondary-900 mb-6">
              <span className="text-blue-900">Explore Our</span> <span className="text-cyan-800">Courses</span>
            </h1>
            <p className="mobile-text-xl text-secondary-600 leading-relaxed mb-8 px-4 sm:px-0">
              Master in-demand skills with our comprehensive, industry-aligned courses designed by experts
            </p>
            
            {/* Search and Filter Section */}
            <div className="mobile-filter-container">
              {/* Search Input - Mobile Only */}
              <div className="flex-1 block sm:hidden">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mobile-input"
                />
              </div>
              
              {/* Level Filter */}
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`mobile-btn px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedLevel === level
                        ? 'bg-blue-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              
              {/* Duration Filter */}
              <div className="flex flex-wrap gap-2">
                {durations.map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`mobile-btn px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedDuration === duration
                        ? 'bg-cyan-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredCourses.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="mobile-text-2xl font-semibold text-secondary-900 mb-2">
                No courses found
              </h3>
              <p className="text-secondary-600">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          ) : (
            <div className="mobile-grid">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="mobile-card overflow-hidden bg-cyan-50 border border-cyan-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Course Image */}
                  <div className="mobile-image-container flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600">
                    <div className="text-white text-4xl sm:text-6xl font-bold">
                      {course.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-4 sm:p-6">
                    {/* Course Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                        {course.level}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">
                        {course.price}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="mobile-text-xl font-bold text-secondary-900 mb-3">
                      {course.title}
                    </h3>

                    {/* Course Description */}
                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course Duration */}
                    <div className="flex items-center text-secondary-500 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>

                    {/* Course Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-900 mb-3">What you'll learn:</h4>
                      <ul className="space-y-2">
                        {(expandedCourses.has(course.id) ? course.features : course.features.slice(0, 4)).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-secondary-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                        {course.features.length > 4 && (
                          <li>
                            <button
                              onClick={() => toggleCourseExpansion(course.id)}
                              className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                            >
                              {expandedCourses.has(course.id) 
                                ? 'Show less' 
                                : `+${course.features.length - 4} more topics`
                              }
                            </button>
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to="/contact" 
                      state={{ course: course.title, activeTab: 'contact-info' }}
                      className="mobile-btn w-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 inline-block text-center"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              <span className="text-blue-900">Course</span> <span className="text-cyan-800">Categories</span>
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              Choose from our diverse range of technology courses
            </p>
          </motion.div>

          <div className="mobile-grid">
            {[
              { title: 'Web Development', icon: '🌐', color: 'from-blue-400 to-blue-600' },
              { title: 'Data Science & Machine Learning', icon: '📊', color: 'from-purple-400 to-purple-600' },
              { title: 'Artificial Intelligence & ML', icon: '🤖', color: 'from-indigo-400 to-indigo-600' },
              { title: 'Mobile Development', icon: '📱', color: 'from-green-400 to-green-600' },
              { title: 'Cybersecurity', icon: '🔒', color: 'from-red-400 to-red-600' },
              { title: 'VLSI Design', icon: '🔬', color: 'from-orange-400 to-orange-600' },
              { title: 'Business & Management', icon: '💼', color: 'from-emerald-400 to-emerald-600' },
              { title: 'IoT & Embedded', icon: '🔧', color: 'from-teal-400 to-teal-600' }
            ].map((category, index) => (
                             <motion.div
                 key={category.title}
                 className="mobile-card text-center bg-blue-100 border border-blue-200"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -5 }}
               >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="mobile-text-xl font-semibold text-secondary-900 mb-2">
                  {category.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              Why Choose <span className="text-blue-900">Cosmic</span><span className="text-cyan-800">Core</span> Technologies?
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              We provide everything you need to succeed in the tech industry
            </p>
          </motion.div>

          <div className="mobile-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="mobile-card text-center bg-cyan-50 border border-cyan-100"
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
    </div>
  );
};

export default Courses; 