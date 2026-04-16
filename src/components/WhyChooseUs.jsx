import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeartHandshake, Microscope } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Unmatched Quality",
    description: "We use only premium-grade materials sourced from global leaders in construction chemicals."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Innovative Tech",
    description: "Our application methods leverage the latest technology for superior results and longevity."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Precision Engineering",
    description: "Every project is meticulously planned and executed with engineering-grade precision."
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Client-Centric",
    description: "We prioritize our clients' needs, providing customized solutions and transparent communication."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-zyseal-navy tracking-tight mb-6 md:mb-8"
            >
              Stay consistent with a system that <span className="text-zyseal-red">fits into real life.</span>
            </motion.h2>
            <p className="text-lg md:text-xl text-zyseal-navy/60 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0">
              Zyseal provides high-performance protection that actually works for your environment. 
              No rigid systems, just smart industrial solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
              {reasons.slice(0, 4).map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-3 md:gap-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zyseal-navy/5 flex items-center justify-center text-zyseal-navy mx-auto sm:mx-0">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-zyseal-navy text-center sm:text-left">{reason.title}</h3>
                  <p className="text-sm md:text-base text-zyseal-navy/50 leading-relaxed text-center sm:text-left">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
             <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200 border-4 md:border-8 border-gray-50 aspect-square max-w-xs sm:max-w-md mx-auto lg:ml-auto">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
                  alt="Industrial Precision" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-zyseal-navy/10"></div>
             </div>
             
             {/* Floating UI Elements */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-10 -left-6 md:-left-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-gray-50 hidden sm:block"
             >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zyseal-red flex items-center justify-center text-white">
                    <ShieldCheck size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zyseal-navy/40 uppercase">Protection</p>
                    <p className="text-xs md:text-sm font-bold text-zyseal-navy">100% Guaranteed</p>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
