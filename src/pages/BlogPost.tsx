import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import logoImage from '../assets/cosmicLogo.jpeg';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      title: 'Startup Ideas for Tech: Whats Trending Now',
      excerpt: 'Discover the most promising tech startup ideas for today\'s market, from AI and sustainability to healthcare and smart home technology.',
      content: `
        <h2>Introduction</h2>
        <p>Starting a tech company is an exciting adventure. The best thing? There are so many new ideas that anyone can pick and build on. Here are some popular and promising startup ideas for today's tech world:</p>
        
        <h2>Artificial Intelligence for Everyday Tasks</h2>
        <p>AI is everywhere—from making apps smarter to automating digital work. Startups can create AI services for better e-commerce recommendations, smarter content creation, or easier marketing campaigns. Picking a specific problem to solve makes the journey smoother.</p>
        
        <h2>Green Technology and Sustainability</h2>
        <p>Many startups are focusing on eco-friendly products. From portable solar panels and biodegradable materials to smart recycling apps, using tech to help the planet is a hot trend. Business ideas include creating platforms for exchanging surplus food or developing energy-saving devices for homes and offices.</p>
        
        <h2>Telehealth and Virtual Care</h2>
        <p>Healthcare is shifting online. Building telemedicine platforms lets people connect quickly with doctors and health experts. There's a big demand for apps that offer secure video calls, appointment booking, and simple health advice on mobile phones.</p>
        
        <h2>Online Education Platforms (EdTech)</h2>
        <p>Online learning is growing fast. EdTech startups can build interactive, easy-to-use apps for students, professionals, or hobbyists. New features like augmented reality or gamification can make learning even more engaging.</p>
        
        <h2>Cybersecurity Solutions</h2>
        <p>With more businesses online, security is a major concern. Startups can offer cyber protection tools, data privacy apps, or risk assessment services—even targeting small businesses that need simple solutions.</p>
        
        <h2>Smart Home Technology</h2>
        <p>Smart homes are getting popular. Tech startups can build systems that control lighting, security, or climate with just a phone app. Integrating devices and making them easy for anyone to use is the key.</p>
        
        <h2>3D Printing and Custom Products</h2>
        <p>Startups today use 3D printing for jewelry, fashion, and even home décor. Creating personalized, unique products gives customers something special while using the latest technology.</p>
        
        <h2>Conclusion</h2>
        <p>Whether it's AI, health, education, security, or sustainability, the world of tech startups offers endless possibilities for new businesses. Pick an idea that excites you, focus on solving real problems, and get ready to build something valuable.</p>
      `,
      category: 'Industry',
      author: 'CosmicCore Team',
      date: '2025-06-18',
      readTime: '5 min read',
      image: '/images/blog/fullstack-trends.jpg',
      tags: ['AI', 'Cybersecurity', 'Technology Trends'],
      featured: true
    },
    {
      id: 2,
      title: 'Notes for Tech Founders: Starting Out',
      excerpt: 'Essential advice for new tech founders: start small, build great teams, learn from feedback, and take it one step at a time.',
      content: `
        <h2>Introduction</h2>
        <p>Being a founder is an exciting journey—full of hope, ideas, and a bit of nervousness. If you're just starting out, here are a few thoughts to keep in mind:</p>
        
        <h2>Start Small, Dream Big</h2>
        <p>Most big companies started with small ideas. Begin with one clear problem to solve. It's okay if your first plan feels tiny. Focus on doing it well and learning along the way.</p>
        
        <h2>Find Good People</h2>
        <p>Teams matter. Look for people who are excited by your idea and want to help. The right team makes work more fun and helps you get through tough days.</p>
        
        <h2>Learn From Feedback</h2>
        <p>Listen to feedback from customers, friends, and even strangers. You don't have to follow every suggestion but use them to make your company stronger. Being open to feedback helps your idea grow.</p>
        
        <h2>Take One Step at a Time</h2>
        <p>Building a startup takes time. Move ahead slowly and celebrate small wins, like launching your website or getting your first user. Every step forward counts.</p>
        
        <h2>Don't Be Afraid to Ask for Help</h2>
        <p>Founders often try to do everything themselves. It's okay to ask for advice, join a community, or find a mentor. Many people are happy to share what they know.</p>
        
        <h2>Conclusion</h2>
        <p>Starting up is a big adventure. Stay curious, be kind to yourself, and remember: every founder started somewhere.</p>
      `,
      category: 'Career',
      author: 'CosmicCore Team',
      date: '2025-06-18',
      readTime: '5 min read',
      image: '/images/blog/founder-notes.jpg',
      tags: ['Startup', 'Founder', 'Career Advice'],
      featured: false
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Post Not Found</h1>
          <p className="text-secondary-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src={logoImage}
                  alt="CosmicCore Technologies Logo" 
                  className="w-20 h-12 object-contain" 
                />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-secondary-600">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Blog Image */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-64 md:h-96 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-full"></div>
                  <div className="absolute top-12 right-12 w-8 h-8 bg-white rounded-full"></div>
                  <div className="absolute bottom-8 left-12 w-6 h-6 bg-white rounded-full"></div>
                  <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-white rounded-full"></div>
                </div>
                
                {/* Logo in Center */}
                <div className="relative z-10 text-center">
                  <div className="bg-white p-4 rounded-xl shadow-lg mb-4 mx-auto w-fit">
                    <img 
                      src={logoImage}
                      alt="CosmicCore Technologies Logo" 
                      className="w-20 h-15 object-contain" 
                    />
                  </div>
                  <p className="text-white text-lg font-medium opacity-90">CosmicCore Blog Post</p>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex flex-wrap gap-2">
                 {post.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back to Blog Button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
