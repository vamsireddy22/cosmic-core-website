import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { courses } from '../content/courses';
import { features } from '../content/features';
import logoImage from '../assets/cosmicLogo.jpeg';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedDuration, setSelectedDuration] = useState<string>('All');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const durations = ['All', '3 months', '4 months', '6 months'];

  // Handle hash navigation to specific course
  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the # symbol
    if (hash) {
      const targetCourse = courses.find(course => course.id === hash);
      if (targetCourse) {
        // Clear filters to show the specific course
        setSearchTerm('');
        setSelectedLevel('All');
        setSelectedDuration('All');
        
        // Scroll to the course after a short delay to ensure the page is rendered
        setTimeout(() => {
          const element = document.getElementById(`course-${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a highlight effect
            element.style.transform = 'scale(1.02)';
            element.style.transition = 'transform 0.3s ease';
            setTimeout(() => {
              element.style.transform = 'scale(1)';
            }, 1000);
          }
        }, 500);
      }
    }
  }, [location.hash]);

  const openCourseDetails = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeCourseDetails = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
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

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Beginner': return '🟢';
      case 'Intermediate': return '🟡';
      case 'Advanced': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="min-h-screen">
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
                    {level !== 'All' && (
                      <span className="mr-2 text-sm">{getLevelIcon(level)}</span>
                    )}
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
                  id={`course-${course.id}`}
                  className="mobile-card overflow-hidden bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Course Image */}
                  <div className="mobile-image-container flex items-center justify-center bg-gradient-to-br from-cyan-400 to-cyan-600 overflow-hidden">
                    {course.image ? (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-white text-4xl sm:text-6xl font-bold">${course.title.split(' ').map(word => word[0]).join('')}</div>`;
                          }
                        }}
                      />
                    ) : (
                      <div className="text-white text-4xl sm:text-6xl font-bold">
                        {course.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
                  <div className="p-4 sm:p-6 flex flex-col h-full">
                    {/* Course Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getLevelColor(course.level)}`}>
                        {getLevelIcon(course.level)} {course.level}
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-primary-600">
                        {course.price}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h3 className="mobile-text-xl font-bold text-secondary-900 mb-2">
                      {course.title}
                    </h3>

                    {/* Course Description */}
                    <p className="text-secondary-600 mb-3 leading-relaxed flex-grow">
                      {course.description}
                    </p>

                    {/* Course Duration */}
                    <div className="flex items-center text-secondary-500 mb-3">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2 mt-auto">
                      <button
                        onClick={() => openCourseDetails(course)}
                        className="w-full bg-secondary-100 text-blue-900 hover:bg-secondary-200 transition-colors duration-200 py-2.5 px-4 rounded-lg font-medium"
                      >
                        More Details
                      </button>
                      <Link 
                        to="/contact" 
                        state={{ course: course.title, activeTab: 'contact-info' }}
                        className="mobile-btn w-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 inline-block text-center py-2.5 px-4 rounded-lg font-medium"
                      >
                        Enroll Now
                      </Link>
                    </div>
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

      {/* Course Details Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  {/* Course Title with Logo */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-2 rounded-lg shadow-sm border border-blue-200 flex-shrink-0">
                      <img 
                        src={logoImage}
                        alt="CosmicCore Technologies Logo" 
                        className="w-16 h-10 md:w-20 md:h-12 object-contain"
                        onError={(e) => {
                          console.log('Logo failed to load');
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="text-blue-600 text-sm font-bold">CosmicCore</div>';
                          }
                        }}
                      />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary-900">
                      {selectedCourse.title}
                    </h2>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-secondary-600">
                    <span className={`px-3 py-1 rounded-full font-medium ${getLevelColor(selectedCourse.level)}`}>
                      {selectedCourse.level}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedCourse.duration}
                    </span>
                    <span className="text-xl font-bold text-primary-600">
                      ₹{selectedCourse.price}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeCourseDetails}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-4"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Course Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">About This Course</h3>
                <p className="text-secondary-600 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* What You'll Learn */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">What You'll Learn</h3>
                <ul className="space-y-2">
                  {selectedCourse.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start text-secondary-600">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Course Curriculum */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Course Curriculum</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-2">Module 1: Fundamentals</h4>
                      <p className="text-sm text-secondary-600">Core concepts, basic principles, and foundational knowledge</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-2">Module 2: Intermediate Concepts</h4>
                      <p className="text-sm text-secondary-600">Advanced topics, best practices, and industry standards</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-2">Module 3: Hands-on Projects</h4>
                      <p className="text-sm text-secondary-600">Real-world projects, case studies, and practical applications</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-2">Module 4: Advanced Topics</h4>
                      <p className="text-sm text-secondary-600">Expert-level concepts, optimization, and industry trends</p>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="text-sm text-secondary-600">
                        <strong>Assessment:</strong> Weekly assignments, mid-term project, final capstone project, and peer reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Prerequisites & Requirements</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Technical Requirements</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Computer with Windows/Mac/Linux</li>
                        <li>• Stable internet connection (minimum 10 Mbps)</li>
                        <li>• Webcam and microphone for live sessions</li>
                        <li>• At least 8GB RAM and 50GB free storage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">Knowledge Prerequisites</h4>
                      <p className="text-sm text-blue-700">
                        {selectedCourse.level === 'Beginner' 
                          ? 'No prior experience required. Basic computer literacy and enthusiasm to learn.'
                          : selectedCourse.level === 'Intermediate'
                          ? 'Basic programming knowledge (any language), understanding of computer fundamentals, and logical thinking skills.'
                          : 'Strong programming background in at least one language, understanding of algorithms and data structures, and previous project experience.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Learning Outcomes</h3>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-emerald-800 mb-2">Technical Skills</h4>
                      <ul className="text-sm text-emerald-700 space-y-1">
                        <li>• Master industry-standard tools and technologies</li>
                        <li>• Build real-world projects and applications</li>
                        <li>• Understand best practices and design patterns</li>
                        <li>• Develop problem-solving and debugging skills</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-800 mb-2">Soft Skills</h4>
                      <ul className="text-sm text-emerald-700 space-y-1">
                        <li>• Improve communication and collaboration</li>
                        <li>• Enhance project management abilities</li>
                        <li>• Build professional networking skills</li>
                        <li>• Develop critical thinking and analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">Career Opportunities & Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 mb-2">Job Roles</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• {selectedCourse.title} Developer</li>
                      <li>• Software Engineer</li>
                      <li>• Technical Consultant</li>
                      <li>• Project Manager</li>
                      <li>• Solution Architect</li>
                      <li>• Technical Lead</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-800 mb-2">Industries</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Technology Companies</li>
                      <li>• Startups & Scale-ups</li>
                      <li>• Consulting Firms</li>
                      <li>• Financial Services</li>
                      <li>• Healthcare & E-commerce</li>
                      <li>• Government & Education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/contact" 
                  state={{ course: selectedCourse.title, activeTab: 'contact-info' }}
                  className="flex-1 bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 py-3 px-6 rounded-lg font-medium text-center"
                  onClick={closeCourseDetails}
                >
                  Enroll Now
                </Link>
                <button
                  onClick={closeCourseDetails}
                  className="flex-1 bg-secondary-100 text-secondary-700 hover:bg-secondary-200 transition-colors duration-200 py-3 px-6 rounded-lg font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Courses; 