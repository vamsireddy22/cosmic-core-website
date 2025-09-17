import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 sm:pt-36 lg:pt-40">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-secondary-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">1. Introduction</h2>
                <p className="text-secondary-700 mb-4">
                  Welcome to CosmicCore Technologies ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, services, and educational programs. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                <p className="text-secondary-700">
                  If you do not agree to these Terms, please do not use our services.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">2. Acceptance of Terms</h2>
                <p className="text-secondary-700 mb-4">
                  By accessing, browsing, or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="text-secondary-700">
                  You must be at least 18 years old to use our services. If you are under 18, you may only use our services with the involvement and consent of a parent or guardian.
                </p>
              </section>

              {/* Description of Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">3. Description of Services</h2>
                <p className="text-secondary-700 mb-4">
                  CosmicCore Technologies provides educational services including:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Online courses and training programs</li>
                  <li>Internship opportunities</li>
                  <li>Project-based learning experiences</li>
                  <li>Career guidance and placement assistance</li>
                  <li>Educational resources and materials</li>
                </ul>
                <p className="text-secondary-700">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>
              </section>

              {/* User Accounts */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">4. User Accounts</h2>
                <p className="text-secondary-700 mb-4">
                  To access certain features of our services, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">5. Payment Terms</h2>
                <p className="text-secondary-700 mb-4">
                  For paid services and courses:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>Payment must be made in full before course access is granted</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                  <li>You are responsible for all applicable taxes</li>
                  <li>Payment disputes must be reported within 30 days of the transaction</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">6. Intellectual Property Rights</h2>
                <p className="text-secondary-700 mb-4">
                  All content, materials, and intellectual property on our platform, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Course materials, videos, and educational content</li>
                  <li>Software, applications, and platforms</li>
                  <li>Trademarks, logos, and branding</li>
                  <li>Text, graphics, and multimedia content</li>
                </ul>
                <p className="text-secondary-700 mb-4">
                  Are owned by CosmicCore Technologies or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-secondary-700">
                  You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </section>

              {/* User Conduct */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">7. User Conduct</h2>
                <p className="text-secondary-700 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Share or distribute course materials without permission</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Use automated systems to access our platform</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Harass, abuse, or harm other users</li>
                </ul>
              </section>

              {/* Privacy Policy */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">8. Privacy Policy</h2>
                <p className="text-secondary-700 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-secondary-700">
                  By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-secondary-700 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, COSMICCORE TECHNOLOGIES SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Any indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Damages resulting from course content or educational outcomes</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p className="text-secondary-700">
                  Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">10. Disclaimers</h2>
                <p className="text-secondary-700 mb-4">
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties regarding course outcomes or job placement</li>
                  <li>Warranties of non-infringement</li>
                  <li>Warranties regarding availability or error-free operation</li>
                </ul>
              </section>

              {/* Termination */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">11. Termination</h2>
                <p className="text-secondary-700 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
                <p className="text-secondary-700">
                  Upon termination, your right to use our services will cease immediately, and we may delete your account and data.
                </p>
              </section>


              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">12. Changes to Terms</h2>
                <p className="text-secondary-700 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes by:
                </p>
                <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                  <li>Posting the updated Terms on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying notices on our platform</li>
                </ul>
                <p className="text-secondary-700">
                  Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">13. Contact Information</h2>
                <p className="text-secondary-700 mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-secondary-700">
                    <strong>Email:</strong> cosmiccoretechnologies@gmail.com<br />
                    <strong>Address:</strong> Bangalore, Karnataka, India<br />
                    <strong>Phone:</strong> +91 9901480919
                  </p>
                </div>
              </section>



            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
