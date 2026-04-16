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
    <section className="py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-zyseal-navy tracking-tight mb-8"
            >
              Stay consistent with a system that <span className="text-zyseal-red">fits into real life.</span>
            </motion.h2>
            <p className="text-xl text-zyseal-navy/60 leading-relaxed mb-12">
              Zyseal provides high-performance protection that actually works for your environment. 
              No rigid systems, just smart industrial solutions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.slice(0, 4).map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-zyseal-navy/5 flex items-center justify-center text-zyseal-navy">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zyseal-navy">{reason.title}</h3>
                  <p className="text-zyseal-navy/50 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-gray-200 border-8 border-gray-50 aspect-square max-w-md mx-auto lg:ml-auto">
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
               className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 hidden md:block"
             >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zyseal-red flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zyseal-navy/40 uppercase">Protection</p>
                    <p className="text-sm font-bold text-zyseal-navy">100% Guaranteed</p>
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
