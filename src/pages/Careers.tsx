import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom text-center">
          <h1 className="mobile-text-4xl font-bold text-secondary-900">Join Our Team</h1>
          <p className="mt-2 text-secondary-600 max-w-2xl mx-auto">
            Help us build modern learning experiences. We’re looking for passionate people to shape the future of edu-tech.
          </p>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary">Contact HR</Link>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mobile-text-3xl font-semibold text-secondary-900 mb-6">Open Positions</h2>
          <div className="mobile-grid">
            <div className="mobile-card">
              <h3 className="mobile-text-xl font-semibold text-secondary-900">Frontend Developer (React)</h3>
              <p className="mt-2 text-secondary-600">Work on delightful UI, animations, and performance.</p>
              <ul className="mt-3 space-y-2 text-secondary-600">
                <li>• React, TypeScript, Tailwind</li>
                <li>• SPA routing and accessibility</li>
              </ul>
              <div className="mt-4">
                <Link to="/contact" className="btn-secondary">Apply</Link>
              </div>
            </div>

            <div className="mobile-card">
              <h3 className="mobile-text-xl font-semibold text-secondary-900">Backend Developer (Node.js)</h3>
              <p className="mt-2 text-secondary-600">Design APIs and services to power our platform.</p>
              <ul className="mt-3 space-y-2 text-secondary-600">
                <li>• Node.js, REST</li>
                <li>• Testing and CI/CD</li>
              </ul>
              <div className="mt-4">
                <Link to="/contact" className="btn-secondary">Apply</Link>
              </div>
            </div>

            <div className="mobile-card">
              <h3 className="mobile-text-xl font-semibold text-secondary-900">UI/UX Designer</h3>
              <p className="mt-2 text-secondary-600">Craft intuitive, inclusive, and beautiful user experiences.</p>
              <ul className="mt-3 space-y-2 text-secondary-600">
                <li>• Figma, prototyping</li>
                <li>• Design systems</li>
              </ul>
              <div className="mt-4">
                <Link to="/contact" className="btn-secondary">Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="mobile-text-3xl font-semibold text-secondary-900 mb-6">Why CosmicCore?</h2>
          <div className="mobile-grid">
            <div className="mobile-card">
              <h3 className="font-semibold text-secondary-900">Flexible Culture</h3>
              <p className="mt-2 text-secondary-600">Remote-friendly, flexible hours, and supportive team.</p>
            </div>
            <div className="mobile-card">
              <h3 className="font-semibold text-secondary-900">Growth & Learning</h3>
              <p className="mt-2 text-secondary-600">Courses, mentorship, and opportunities to lead.</p>
            </div>
            <div className="mobile-card">
              <h3 className="font-semibold text-secondary-900">Impact</h3>
              <p className="mt-2 text-secondary-600">Build products that help learners and educators.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;


