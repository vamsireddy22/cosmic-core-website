import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import logoImage from '../assets/cosmicLogo.jpeg';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const blogCategories = [
    { id: 'All', name: 'All Posts', icon: '📝' },
    { id: 'Technology', name: 'Technology', icon: '💻' },
    { id: 'Education', name: 'Education', icon: '🎓' },
    { id: 'Career', name: 'Career', icon: '💼' },
    { id: 'Industry', name: 'Industry', icon: '🏢' },
    { id: 'Tutorials', name: 'Tutorials', icon: '📚' }
  ];

  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: 'Startup Ideas for Tech: Whats Trending Now',
      excerpt: 'Discover the most promising tech startup ideas for today\'s market, from AI and sustainability to healthcare and smart home technology.',
      content: 'Starting a tech company is an exciting adventure. The best thing? There are so many new ideas that anyone can pick and build on. Here are some popular and promising startup ideas for today\'s tech world...',
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
      content: 'Being a founder is an exciting journey—full of hope, ideas, and a bit of nervousness. If you\'re just starting out, here are a few thoughts to keep in mind...',
      category: 'Career',
      author: 'CosmicCore Team',
      date: '2025-06-18',
      readTime: '5 min read',
      image: '/images/blog/founder-notes.jpg',
      tags: ['Startup', 'Founder', 'Career Advice'],
      featured: false
    }
  ], []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, blogPosts]);


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
            <h1 className="mobile-text-4xl font-bold text-secondary-900 mb-6">
              <span className="text-blue-900">Cosmic</span><span className="text-cyan-800">Core</span> Blog
            </h1>
            <p className="mobile-text-xl text-secondary-600 leading-relaxed mb-8 px-4 sm:px-0">
              Stay updated with the latest insights, tutorials, and trends in technology and education
            </p>
            
            {/* Search and Filter Section */}
            <div className="mobile-filter-container">
              {/* Search Input */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mobile-input"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/blog${category.id === 'All' ? '' : `?category=${category.id}`}`}
                    className={`mobile-btn px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    <span className="mr-2 text-sm">{category.icon}</span>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* All Blog Posts */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              <span className="text-blue-900">All</span> <span className="text-cyan-800">Articles</span>
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto">
              Explore our complete collection of blog posts
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="mobile-text-2xl font-semibold text-secondary-900 mb-2">
                No articles found
              </h3>
              <p className="text-secondary-600">
                Try adjusting your search criteria or browse different categories
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                   {/* Blog Image */}
                   <div className="h-40 bg-gradient-to-br from-cyan-600 via-blue-500 to-cyan-700 flex items-center justify-center relative overflow-hidden">
                     {/* Background Pattern */}
                     <div className="absolute inset-0 opacity-10">
                       <div className="absolute top-2 left-2 w-4 h-4 bg-white rounded-full"></div>
                       <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"></div>
                       <div className="absolute bottom-3 left-4 w-2 h-2 bg-white rounded-full"></div>
                       <div className="absolute bottom-2 right-2 w-5 h-5 bg-white rounded-full"></div>
                     </div>
                     
                     {/* Logo in Center */}
                     <div className="relative z-10 text-center">
                       <div className="bg-white p-2 rounded-lg shadow-lg mb-2 mx-auto w-fit">
                         <img 
                           src={logoImage}
                           alt="CosmicCore Technologies Logo" 
                           className="w-20 h-15 object-contain" 
                         />
                       </div>
                       <p className="text-white text-xs font-medium opacity-90">CosmicCore</p>
                     </div>
                   </div>

                  <div className="p-4">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-secondary-500">
                        {formatDate(post.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-secondary-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-secondary-600 mb-3 leading-relaxed text-sm line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Author and Read Time */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                          {post.author.split(' ').map(name => name[0]).join('')}
                        </div>
                        <span className="text-xs text-secondary-600">{post.author}</span>
                      </div>
                      <span className="text-xs text-secondary-500">{post.readTime}</span>
                    </div>

                    {/* Read More Button */}
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <img 
                  src={logoImage}
                  alt="CosmicCore Technologies Logo" 
                  className="w-16 h-10 object-contain" 
                />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest blog posts, tutorials, and tech insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
