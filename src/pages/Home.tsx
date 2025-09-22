import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { features } from '../content/features';

const Home: React.FC = () => {

  const stats = [
    { number: '100+', label: 'Students Enrolled' },
    { number: '10+', label: 'Expert Instructors' },
    { number: '95%', label: 'Job Placement Rate' },
    { number: '100+', label: 'Projects Completed' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mobile-hero bg-gradient-to-br from-blue-100 via-white to-cyan-100 overflow-hidden">
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
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="mobile-text-4xl font-bold text-secondary-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-800">Path to Career</span> with{' '}
              <span className="text-blue-900">Cosmic</span><span className="text-cyan-800">Core</span>
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
                <div className="text-4xl mb-4 text-cyan-600">{feature.icon}</div>
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

      {/* Mock Interview Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              <span className="text-blue-900">Mock Interview</span> <span className="text-cyan-800">Preparation</span>
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-3xl mx-auto px-4 sm:px-0">
              Ace your technical interviews with our comprehensive mock interview sessions. 
              Practice with industry experts and get personalized feedback to boost your confidence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: '🎯',
                  title: 'Technical Interviews',
                  description: 'Practice coding challenges, system design, and technical problem-solving with real interview scenarios.'
                },
                {
                  icon: '👨‍💼',
                  title: 'Expert Interviewers',
                  description: 'Get interviewed by industry professionals from top tech companies with years of hiring experience.'
                },
                {
                  icon: '📊',
                  title: 'Detailed Feedback',
                  description: 'Receive comprehensive feedback on your performance, communication skills, and areas for improvement.'
                },
                {
                  icon: '🏆',
                  title: 'Interview Confidence',
                  description: 'Build confidence through repeated practice sessions and personalized coaching tips.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 bg-cyan-50 rounded-xl shadow-lg border border-cyan-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Student Feedback Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              What Our <span className="text-blue-900">Students</span> <span className="text-cyan-800">Say</span>
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              Hear from our successful graduates who have transformed their careers with our courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(() => {
              const topReviews = [
                {
                  name: 'Naveen Kumar',
                  course: 'Java Full Stack',
                  rating: 5,
                  feedback: 'The Java Full Stack course was amazing! The instructors were knowledgeable and the hands-on projects really helped me understand the concepts. I got a job as a Full Stack Developer within 3 months of completing the course.',
                  image: '👩‍💻'
                },
                {
                  name: 'Vamsi Reddy',
                  course: 'Data Science & ML',
                  rating: 5,
                  feedback: 'Excellent course content and practical approach. The machine learning projects were challenging but very rewarding. The career support team helped me land my dream job at a top tech company.',
                  image: '👨‍💻'
                },
                {
                  name: 'Raghavendra',
                  course: 'UI/UX Design',
                  rating: 5,
                  feedback: 'The UI/UX course exceeded my expectations. The design tools and methodologies taught here are industry-standard. I now work as a UX Designer at a leading design agency.',
                  image: '👩‍🎨'
                },
                {
                  name: 'Navaneswar Reddy',
                  course: 'Python Full Stack',
                  rating: 5,
                  feedback: 'Great learning experience! The Python course covered everything from basics to advanced topics. The instructors were patient and always available to help. Highly recommended!',
                  image: '👨‍🔬'
                },
                {
                  name: 'Shahith Babu',
                  course: 'Digital Marketing',
                  rating: 5,
                  feedback: 'The Digital Marketing course was comprehensive and practical. I learned SEO, social media marketing, and analytics.',
                  image: '👩‍💼'
                }
              ];

              const moreReviews = [
                {
                  name: 'Narendra Reddy',
                  course: 'Cybersecurity',
                  rating: 5,
                  feedback: 'Outstanding cybersecurity course! The hands-on labs and real-world scenarios prepared me well for the industry.',
                  image: '👨‍🔒'
                },
                {
                  name: 'Priya Sharma',
                  course: 'Data Analyst',
                  rating: 5,
                  feedback: 'The Data Analyst course was excellent! I learned SQL, Python, and data visualization tools. Now I work as a Data Analyst at a leading company.',
                  image: '👩‍💻'
                },
                {
                  name: 'Rajesh Kumar',
                  course: 'VLSI Design',
                  rating: 5,
                  feedback: 'Amazing VLSI course! The practical approach and industry projects helped me understand chip design concepts. Highly recommended for electronics students.',
                  image: '👨‍🔬'
                },
                {
                  name: 'Anita Patel',
                  course: 'Business Development',
                  rating: 5,
                  feedback: 'Great business development course! I learned sales strategies, client management, and business growth techniques. Now I run my own consulting firm.',
                  image: '👩‍💼'
                }
              ];

              const reviewsToShow = topReviews;
              
              return [
                ...reviewsToShow.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-cyan-50 rounded-xl shadow-lg p-6 border border-cyan-100 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback Text */}
                    <p className="text-secondary-600 mb-4 leading-relaxed text-sm">
                      "{testimonial.feedback}"
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mr-4">
                        {testimonial.image}
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                        <p className="text-sm text-primary-600">{testimonial.course}</p>
                      </div>
                    </div>
                  </motion.div>
                )),
                // Add "More Reviews" card
                ...[
                  <motion.div
                    key="more-reviews"
                    className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl shadow-lg p-6 border border-cyan-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 5 * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Link to="/reviews" className="block">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                        ⭐
                      </div>
                      <h3 className="text-xl font-bold text-secondary-900 mb-2">
                        More Reviews
                      </h3>
                      <p className="text-secondary-600 mb-4 text-sm">
                        Click to see more amazing student success stories
                      </p>
                      <div className="bg-white rounded-lg p-3 border border-cyan-200">
                        <p className="text-xs text-secondary-500 mb-1">Additional Reviews:</p>
                        <div className="flex justify-center space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex">
                              {[...Array(5)].map((_, j) => (
                                <svg key={j} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    </Link>
                  </motion.div>
                ]
              ];
            })()}
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