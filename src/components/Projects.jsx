import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "IIT Delhi",
    category: "Industrial Flooring",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Fortis",
    category: "Waterproofing",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a519a9917?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "DRDO",
    category: "Concrete Repair",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mahagun",
    category: "Joint Sealing",
    image: "https://images.unsplash.com/photo-1565608087341-404b254583c3?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "NCC",
    category: "Waterproofing",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MAX",
    category: "Industrial Flooring",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "DRDO Project 2",
    category: "Concrete Repair",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-[#F8F9FB] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 bg-zyseal-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 bg-zyseal-navy/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-3 mb-4"
            >
              <span className="w-8 md:w-12 h-[2px] bg-zyseal-red"></span>
              <span className="text-zyseal-red font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Our Portfolio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zyseal-navy tracking-tight"
            >
              Delivering <span className="text-zyseal-red italic">Excellence</span>
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group mt-8 md:mt-0 flex items-center justify-center md:justify-start gap-3 text-zyseal-navy font-bold hover:text-zyseal-red transition-colors"
          >
            View All Projects 
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zyseal-navy/10 flex items-center justify-center group-hover:border-zyseal-red transition-colors">
              →
            </span>
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "circOut" }
              }}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center text-center h-[280px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white hover:border-zyseal-red/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 group cursor-pointer"
            >
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-zyseal-red/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-24 h-24 bg-zyseal-gray rounded-3xl flex items-center justify-center group-hover:bg-zyseal-navy group-hover:text-white transition-all duration-500 shadow-inner">
                  <span className="text-zyseal-navy group-hover:text-white font-black text-3xl tracking-tighter uppercase italic transition-colors duration-500">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zyseal-navy group-hover:text-zyseal-red transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zyseal-red/40 group-hover:bg-zyseal-red transition-colors"></span>
                  <span className="text-[10px] text-zyseal-navy/40 font-bold uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
