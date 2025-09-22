import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Reviews: React.FC = () => {
  const allReviews = [
    {
      name: 'Naveen Kumar',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'The Java Full Stack course was amazing! The instructors were knowledgeable and the hands-on projects really helped me understand the concepts. I got a job as a Full Stack Developer within 2 months of completing the course.',
      image: '👩‍💻',
    },
    {
      name: 'Vamsi Reddy',
      course: 'Data Science & ML',
      rating: 5,
      feedback: 'Excellent course content and practical approach. The machine learning projects were challenging but very rewarding. The career support team helped me land my dream job at a top tech company.',
      image: '👨‍💻',
    },
    {
      name: 'Raghavendra',
      course: 'UI/UX Design',
      rating: 5,
      feedback: 'The UI/UX course exceeded my expectations. The design tools and methodologies taught here are industry-standard.',
      image: '👩‍🎨',
    },
    {
      name: 'Navaneswar Reddy',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Great learning experience! The Python course covered everything from basics to advanced topics. The instructors were patient and always available to help. Highly recommended!',
      image: '👨‍🔬',
    },
    {
      name: 'Narendra Reddy',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Outstanding cybersecurity course! The hands-on labs and real-world scenarios prepared me well for the industry.',
      image: '👨‍🔒',
    },
    {
      name: 'Shahith Babu',
      course: 'Digital Marketing',
      rating: 5,
      feedback: 'The Digital Marketing course was comprehensive and practical. I learned SEO, social media marketing, and analytics.',
      image: '👩‍💼',
    },
    {
      name: 'Prassanna',
      course: 'Data Analyst',
      rating: 5,
      feedback: 'The Data Analyst course was excellent! I learned SQL, Python, and data visualization tools.',
      image: '👩‍💻',
    },
    {
      name: 'Siddeswar Reddy',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Amazing VLSI course! The practical approach and industry projects helped me understand chip design concepts. Highly recommended for electronics students.',
      image: '👨‍🔬',
    },
    {
      name: 'Chethan Kumar',
      course: 'Business Development',
      rating: 5,
      feedback: 'Great business development course! I learned sales strategies, client management, and business growth techniques.',
      image: '👩‍💼',
    },
    {
      name: 'Vishnu Reddy',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'The AI course was comprehensive and cutting-edge. I learned machine learning, deep learning, and neural networks.',
      image: '👨‍💻',
    },
    {
      name: 'Navya',
      course: 'Human Resources',
      rating: 5,
    feedback: 'Excellent HR course! I learned recruitment, employee relations, and performance management. The practical case studies were very helpful.',
      image: '👩‍💼',
    },
    {
      name: 'Sudheer Kumar Reddy',
      course: 'Finance Management',
      rating: 5,
      feedback: 'The Finance Management course was outstanding! I learned financial analysis, risk management, and corporate finance.',
      image: '👨‍💼',
    },
    {
      name: 'Sneha Reddy',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'Amazing Java Full Stack course! The comprehensive curriculum covered everything from Spring Boot to React. The hands-on projects were challenging and helped me build a strong portfolio.',
      image: '👨‍💻',
    },
    {
      name: 'Udhay Kumar Reddy',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Excellent Python Full Stack program! I learned Django, Flask, and modern frontend technologies. The instructors were very supportive and the course structure was well-organized.',
      image: '👨‍🔬',
    },
    {
      name: 'Aakash',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Outstanding VLSI course! The practical approach to chip design and verification was excellent. I gained deep understanding of digital design principles and industry tools.',
      image: '👨‍🔬',
    },
    {
      name: 'Yamini',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'Fantastic AI course! The machine learning algorithms and deep learning concepts were explained clearly. The real-world projects helped me understand AI applications better.',
      image: '👨‍💻',
    },
    {
      name: 'Kishore Kumar',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Incredible cybersecurity program! I learned ethical hacking, network security, and incident response. The hands-on labs and penetration testing exercises were very valuable.',
      image: '👨‍🔒',
    },
    // Additional Java Full Stack Reviews
    {
      name: 'Lavanya',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'Outstanding Java Full Stack course! The Spring Boot and Hibernate modules were excellent. I built several real-world applications during the course.',
      image: '👨‍💻',
    },
    {
      name: 'Priya Reddy',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'Amazing learning experience! The course covered everything from basic Java to advanced frameworks. The project-based approach was very effective.',
      image: '👩‍💻',
    },
    {
      name: 'Mallikarjuna Reddy',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'Excellent course structure! I learned both backend and frontend development. The instructors were knowledgeable and always available for help.',
      image: '👨‍💻',
    },
    {
      name: 'Reddy Kumar',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'Fantastic Java Full Stack program! The hands-on projects and real-world scenarios helped me understand the concepts better. Highly recommended!',
      image: '👩‍💻',
    },
    {
      name: 'Vishnu Priya',
      course: 'Java Full Stack',
      rating: 5,
      feedback: 'Great course! I learned modern Java development practices and built a complete e-commerce application. The mentorship was exceptional.',
      image: '👨‍💻',
    },
    // Additional Python Full Stack Reviews
    {
      name: 'Praveen Kumar Reddy',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Excellent Python Full Stack course! Django and Flask frameworks were taught very well. The database integration projects were challenging and rewarding.',
      image: '👨‍🔬',
    },
    {
      name: 'Deepika',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Amazing Python course! I learned both backend and frontend development. The REST API development module was particularly helpful.',
      image: '👩‍💻',
    },
    {
      name: 'Manoj',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Outstanding program! The course covered everything from Python basics to advanced web development. The project portfolio I built was impressive.',
      image: '👨‍🔬',
    },
    {
      name: 'Kavya Yadav',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Fantastic learning experience! The instructors were patient and the course material was well-structured. I gained confidence in full-stack development.',
      image: '👩‍💻',
    },
    {
      name: 'Hemanth',
      course: 'Python Full Stack',
      rating: 5,
      feedback: 'Great course! I learned modern Python frameworks and built several web applications. The career guidance was also very helpful.',
      image: '👨‍🔬',
    },
    // Additional VLSI Design Reviews
    {
      name: 'Aravind Reddy',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Excellent VLSI course! The digital design concepts and verification methodologies were taught very clearly. The lab sessions were hands-on and practical.',
      image: '👨‍🔬',
    },
    {
      name: 'Swathi',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Amazing VLSI program! I learned chip design from basics to advanced topics. The industry-standard tools training was very valuable.',
      image: '👩‍🔬',
    },
    {
      name: 'MahaLakshmi',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Outstanding course! The practical approach to VLSI design and testing was excellent. I gained deep understanding of semiconductor technology.',
      image: '👨‍🔬',
    },
    {
      name: 'Anusha',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Fantastic VLSI course! The instructors were experts in the field and the course material was comprehensive. The project work was challenging and educational.',
      image: '👩‍🔬',
    },
    {
      name: 'Naveen Kumar',
      course: 'VLSI Design',
      rating: 5,
      feedback: 'Great learning experience! I learned both digital and analog VLSI design. The industry exposure and career guidance were very helpful.',
      image: '👨‍🔬',
    },
    // Additional AI Reviews
    {
      name: 'Sai Kumar',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'Excellent AI course! The machine learning algorithms and neural networks were explained very clearly. The real-world AI projects were amazing.',
      image: '👨‍💻',
    },
    {
      name: 'Lakshmi',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'Amazing AI program! I learned deep learning, computer vision, and NLP. The hands-on projects helped me understand AI applications better.',
      image: '👩‍💻',
    },
    {
      name: 'Ravindra Reddy',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'Outstanding course! The AI concepts from basics to advanced topics were covered comprehensively. The industry case studies were very insightful.',
      image: '👨‍💻',
    },
    {
      name: 'Meera',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'Fantastic AI learning experience! The course covered everything from data preprocessing to model deployment. The mentorship was exceptional.',
      image: '👩‍💻',
    },
    {
      name: 'Kiran Kumar',
      course: 'Artificial Intelligence',
      rating: 5,
      feedback: 'Great AI course! I learned modern AI frameworks and built several intelligent applications. The career support and job placement assistance were excellent.',
      image: '👨‍💻',
    },
    // Additional Cybersecurity Reviews
    {
      name: 'Yeshwanth',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Excellent cybersecurity course! The ethical hacking and penetration testing modules were outstanding. I learned to protect systems from various threats.',
      image: '👨‍🔒',
    },
    {
      name: 'Sushma',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Amazing cybersecurity program! I learned network security, cryptography, and incident response. The hands-on labs were very practical and engaging.',
      image: '👩‍🔒',
    },
    {
      name: 'Chandra',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Outstanding course! The cybersecurity fundamentals and advanced topics were covered thoroughly. The real-world security scenarios were very educational.',
      image: '👨‍🔒',
    },
    {
      name: 'Pooja',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Fantastic cybersecurity learning experience! I learned to identify vulnerabilities and implement security measures. The course was comprehensive and practical.',
      image: '👩‍🔒',
    },
    {
      name: 'Sathish Reddy',
      course: 'Cybersecurity',
      rating: 5,
      feedback: 'Great cybersecurity course! The course covered everything from basic security concepts to advanced threat analysis. The industry certifications guidance was helpful.',
      image: '👨‍🔒',
    },
    // Data Structures & Algorithms Reviews
    {
      name: 'Keshav',
      course: 'Data Structures & Algorithms',
      rating: 5,
      feedback: 'Excellent DSA course! The step-by-step approach to problem-solving was amazing. I learned to think algorithmically and improved my coding skills significantly.',
      image: '👨‍💻',
    },
    {
      name: 'Ravindra',
      course: 'Data Structures & Algorithms',
      rating: 5,
      feedback: 'Outstanding course! The instructors explained complex algorithms in a simple way. The practice problems and coding challenges helped me prepare for technical interviews.',
      image: '👩‍💻',
    },
    {
      name: 'Mohith',
      course: 'Data Structures & Algorithms',
      rating: 5,
      feedback: 'Fantastic learning experience! I mastered arrays, linked lists, trees, and graphs. The time and space complexity analysis was explained very clearly.',
      image: '👨‍🔬',
    },
    {
      name: 'Vijay Kumar',
      course: 'Data Structures & Algorithms',
      rating: 5,
      feedback: 'Amazing DSA program! The course covered everything from basic data structures to advanced algorithms. The mock interviews and coding sessions were very helpful.',
      image: '👩‍💻',
    },
    {
      name: 'Ashwini',
      course: 'Data Structures & Algorithms',
      rating: 5,
      feedback: 'Great course! I learned dynamic programming, greedy algorithms, and graph algorithms. The problem-solving techniques and optimization strategies were excellent.',
      image: '👨‍💻',
    },
    // Additional Data Analyst Reviews
    {
      name: 'Divya',
      course: 'Data Analyst',
      rating: 5,
      feedback: 'Excellent Data Analyst course! I learned SQL, Excel, and data visualization tools. The real-world datasets and case studies helped me understand data analysis better.',
      image: '👩‍💻',
    },
    {
      name: 'Nagarjuna Reddy',
      course: 'Data Analyst',
      rating: 5,
      feedback: 'Outstanding program! The course covered statistical analysis, data cleaning, and business intelligence. The hands-on projects with real data were very valuable.',
      image: '👨‍💻',
    },
    {
      name: 'Akhilesh',
      course: 'Data Analyst',
      rating: 5,
      feedback: 'Amazing learning experience! I mastered Python for data analysis, Tableau for visualization, and learned to create meaningful insights from complex datasets.',
      image: '👩‍💻',
    },
    // Additional Embedded Systems Reviews
    {
      name: 'Ashok Kumar Reddy',
      course: 'Embedded Systems',
      rating: 5,
      feedback: 'Excellent Embedded Systems course! I learned microcontroller programming, interfacing, and real-time systems. The hands-on projects with Arduino and Raspberry Pi were very practical.',
      image: '👨‍💻',
    },
    {
      name: 'Dilip Kumar',
      course: 'Embedded Systems',
      rating: 5,
      feedback: 'Outstanding program! The course covered embedded C programming, sensor integration, and IoT development. The industry-relevant projects helped me understand real-world applications.',
      image: '👩‍💻',
    },
    // Additional Digital Marketing Reviews
    {
      name: 'Surendra',
      course: 'Digital Marketing',
      rating: 5,
      feedback: 'Fantastic Digital Marketing course! I learned SEO, social media marketing, Google Ads, and analytics. The practical campaigns and case studies were very insightful.',
      image: '👨‍💻',
    },
    {
      name: 'Harsahith',
      course: 'Digital Marketing',
      rating: 5,
      feedback: 'Amazing learning experience! The course covered content marketing, email marketing, and conversion optimization. The hands-on projects helped me build a strong portfolio.',
      image: '👩‍💻',
    },
    // Additional Data Science & Machine Learning Reviews
    {
      name: 'Sudershan',
      course: 'Data Science & Machine Learning',
      rating: 5,
      feedback: 'Outstanding Data Science course! I learned Python, pandas, scikit-learn, and deep learning with TensorFlow. The real-world datasets and ML projects were very comprehensive.',
      image: '👨‍💻',
    },
    {
      name: 'Pavan Kumar Reddy',
      course: 'Data Science & Machine Learning',
      rating: 5,
      feedback: 'Excellent program! The course covered statistical analysis, data preprocessing, and advanced ML algorithms. The capstone project helped me apply everything I learned.',
      image: '👩‍💻',
    },
    {
      name: 'Manikanta',
      course: 'Data Science & Machine Learning',
      rating: 5,
      feedback: 'Fantastic learning experience! I mastered data visualization, feature engineering, and model deployment. The instructors were knowledgeable and the projects were industry-relevant.',
      image: '👨‍💻',
    }
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
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mobile-text-4xl font-bold text-secondary-900 mb-6 leading-tight">
              <span className="text-blue-900">Student</span> <span className="text-cyan-800">Reviews</span>
            </h1>
            <p className="mobile-text-xl text-secondary-600 mb-8 leading-relaxed px-4 sm:px-0">
              Discover what our students say about their learning journey and career transformation with CosmicCore Technologies.
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="mobile-text-3xl font-bold text-primary-600">20+</div>
                <div className="text-secondary-600">Reviews</div>
              </div>
              <div>
                <div className="mobile-text-3xl font-bold text-primary-600">5.0</div>
                <div className="text-secondary-600">Average Rating</div>
              </div>
              <div>
                <div className="mobile-text-3xl font-bold text-primary-600">100%</div>
                <div className="text-secondary-600">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
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
              What Our <span className="text-blue-900">Students</span> <span className="text-cyan-800">Say</span>
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              Real stories from real students who have transformed their careers with our courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.slice(0, 20).map((review, index) => (
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
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-secondary-600 mb-4 leading-relaxed text-sm">
                  "{review.feedback}"
                </p>

                {/* Student Info */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    {review.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary-900">{review.name}</h4>
                    <p className="text-sm text-primary-600 mb-1">{review.course}</p>
                  </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="mobile-text-xl text-secondary-300 mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Start your journey to a successful tech career with our comprehensive courses and expert guidance.
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

export default Reviews;
