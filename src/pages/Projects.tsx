import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects, projectFeatures, projectCategories } from '../content/projects';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedTechnology, setSelectedTechnology] = useState<string>('All');

  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const technologies = ['All', 'React', 'Node.js', 'TypeScript', 'Next.js', 'Java'];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
      const matchesTechnology = selectedTechnology === 'All' || 
                               project.technologies.some(tech => tech.toLowerCase().includes(selectedTechnology.toLowerCase()));
      
      return matchesSearch && matchesDifficulty && matchesTechnology;
    });
  }, [searchTerm, selectedDifficulty, selectedTechnology]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return '🟢';
      case 'Medium': return '🟡';
      case 'Hard': return '🔴';
      default: return '⚪';
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
              Student <span className="text-blue-900">Projects</span>
            </h1>
            <p className="mobile-text-xl text-secondary-600 leading-relaxed mb-8 px-4 sm:px-0">
              Explore real-world projects built by our students using modern technologies and best practices
            </p>
            
            {/* Search and Filter Section */}
            <div className="mobile-filter-container">
              {/* Search Input - Mobile Only */}
              <div className="flex-1 block sm:hidden">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mobile-input"
                />
              </div>
              
              {/* Difficulty Filter */}
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`mobile-btn px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedDifficulty === difficulty
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
              
              {/* Technology Filter */}
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTechnology(tech)}
                    className={`mobile-btn px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedTechnology === tech
                        ? 'bg-primary-600 text-white'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="mobile-text-2xl font-semibold text-secondary-900 mb-2">
                No projects found
              </h3>
              <p className="text-secondary-600">
                Try adjusting your search criteria or filters
              </p>
            </motion.div>
          ) : (
            <div className="mobile-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="mobile-card overflow-hidden bg-blue-50 border border-blue-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image */}
                  <div className="mobile-image-container flex items-center justify-center relative bg-gradient-to-br from-blue-400 to-blue-600">
                    <div className="text-white text-4xl sm:text-6xl font-bold">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                    {/* Difficulty Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(project.difficulty)}`}>
                        {getDifficultyIcon(project.difficulty)} {project.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6">
                    {/* Project Title */}
                    <h3 className="mobile-text-xl font-bold text-secondary-900 mb-3">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Duration */}
                    <div className="flex items-center text-secondary-500 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{project.duration}</span>
                    </div>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-secondary-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mobile-text-3xl font-bold text-secondary-900 mb-4">
              Project Categories
            </h2>
            <p className="mobile-text-xl text-secondary-600 max-w-2xl mx-auto px-4 sm:px-0">
              Our students build projects across various domains and technologies
            </p>
          </motion.div>

          <div className="mobile-grid">
            {projectCategories.map((category, index) => (
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
                <p className="text-secondary-600">
                  {category.count}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build Projects Section */}
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
              Why Build Real Projects?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Hands-on experience is the best way to learn and showcase your skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
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

export default Projects; 