import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { contactInfo, contactMethods } from '../content/contact';

const Contact: React.FC = () => {
  const location = useLocation();
  const courseInfo = location.state?.course;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: courseInfo ? `I'm interested in enrolling in the ${courseInfo} course. Please provide more information about enrollment, pricing, and start dates.` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const form = e.target as HTMLFormElement;
      const formDataObj = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
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
              Get in <span className="text-blue-900">Touch</span>
            </h1>
            <p className="mobile-text-xl text-secondary-600 leading-relaxed px-4 sm:px-0">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Contact Information
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              Choose your preferred way to reach us
            </p>
          </motion.div>

          <div className="mobile-contact-methods mb-12 sm:mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                className="block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mobile-card text-center bg-cyan-50 border border-cyan-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                    {method.icon}
                  </div>
                  <h3 className="mobile-text-xl font-semibold text-secondary-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-secondary-600 mb-3">
                    {method.description}
                  </p>
                  <p className="text-primary-600 font-medium">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mobile-card">
                <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-6">
                  Send us a Message
                </h2>
                
                {courseInfo && (
                  <motion.div
                    className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <strong>Course Enrollment:</strong> You're enrolling in <strong>{courseInfo}</strong>. We'll get back to you with enrollment details!
                  </motion.div>
                )}
                
                {submitStatus === 'success' && (
                  <motion.div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Sorry, there was an error sending your message. Please try again or contact us directly at {contactInfo.email}.
                  </motion.div>
                )}

                <form 
                  action="https://formspree.io/f/mwpqrbdp" 
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mobile-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mobile-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mobile-input"
                        placeholder="+91 9901480919"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mobile-input"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mobile-btn w-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mobile-card h-full">
                <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-6">
                  Visit Our Office
                </h2>
                
                {/* Map Placeholder */}
                <div className="mobile-image-container mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-secondary-600">Interactive Map</p>
                    <p className="text-sm text-secondary-500">Click to open in Google Maps</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Address</h3>
                      <p className="text-secondary-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Business Hours</h3>
                      <p className="text-secondary-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-secondary-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-secondary-600">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-primary-600 mr-3 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Response Time</h3>
                      <p className="text-secondary-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 