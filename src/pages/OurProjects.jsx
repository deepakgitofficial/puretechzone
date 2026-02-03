import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Import project images
import sevenFlorist from '../components/assets/images/sevenFolorist.webp';
import seoMalaysia from '../components/assets/images/seoMalesiya.webp';
import one from '../components/assets/images/one.webp';
import mover from '../components/assets/images/mover.webp';
import hotel from '../components/assets/images/hotel.webp';
import holiday from '../components/assets/images/holiday.webp';
import alpha from '../components/assets/images/alpha.webp';
import afson from '../components/assets/images/afson.webp';

const OurProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Seven Florist',
      category: 'E-commerce',
      description: 'Beautiful flower delivery platform with seamless user experience',
      image: sevenFlorist,
      tags: ['Wordpress', 'Php', 'WooCommerce'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      title: 'SEO Malaysia',
      category: 'Marketing',
      description: 'Comprehensive SEO services platform for Malaysian businesses',
      image: seoMalaysia,
      tags: ['Wordpress', 'Php'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'One Solutions',
      category: 'Corporate',
      description: 'Enterprise-grade business solutions and consulting',
      image: one,
      tags: ['Wordpress', 'Php'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 4,
      title: 'Premium Movers',
      category: 'Service',
      description: 'Professional moving and relocation services',
      image: mover,
      tags: ['Wordpress', 'Php'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Luxury Hotel',
      category: 'Hospitality',
      description: 'Five-star hotel booking and management system',
      image: hotel,
      tags: ['Wordpress', 'Php'],
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 6,
      title: 'Holiday Paradise',
      category: 'Travel',
      description: 'Exotic vacation packages and travel planning',
      image: holiday,
      tags: ['Wordpress', 'Php'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      id: 7,
      title: 'Alpha Tech',
      category: 'Technology',
      description: 'Cutting-edge technology solutions and innovations',
      image: alpha,
      tags: ['Wordpress', 'Php'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 8,
      title: 'Afson Enterprise',
      category: 'Corporate',
      description: 'Global business solutions and enterprise software',
      image: afson,
      tags: ['Wordpress', 'Php'],
      color: 'from-sky-500 to-blue-500'
    }
  ];

  const categories = ['all', 'E-commerce', 'Marketing', 'Corporate', 'Service', 'Hospitality', 'Travel', 'Technology'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#12b2a6] via-[#0e8f86] to-[#0a6b64] text-white py-24 px-4"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our portfolio of innovative solutions that transform businesses and create exceptional digital experiences
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12"
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '40+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeFilter === category
                ? 'bg-gradient-to-r from-[#12b2a6] to-[#0e8f86] text-white shadow-lg shadow-[#12b2a6]/50'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>

                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold transform scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-gray-100">
                    View Project
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/10 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {/* {project.category} */}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#12b2a6] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-[#12b2a6] hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#12b2a6] transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="bg-gradient-to-r from-[#12b2a6] via-[#0e8f86] to-[#0a6b64] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with our expertise and dedication
            </p>
            <button className="bg-white text-[#12b2a6] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default OurProjects;
