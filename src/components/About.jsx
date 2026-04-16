import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target } from 'lucide-react';

const About = () => {
  const benefits = [
    "Premium Quality Materials",
    "Eco-friendly Solutions",
    "Expert Technical Support",
    "Timely Project Completion",
    "Cost-effective Engineering",
  ];

  return (
    <section id="about" className="section-padding bg-zyseal-gray/30 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[2rem] md:rounded-4xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Expertise" 
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-zyseal-red font-bold tracking-wider uppercase text-sm">About Zyseal</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zyseal-navy mt-4 mb-6 leading-tight">
              Leading the Way in <span className="text-zyseal-red">Industrial Excellence</span>
            </h2>
            <p className="text-zyseal-navy/70 text-lg mb-8 leading-relaxed">
              With over a decade of experience, Zyseal has established itself as a leader in waterproofing and industrial flooring. We provide end-to-end solutions that protect and enhance your valuable assets.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-zyseal-red w-5 h-5 flex-shrink-0" />
                  <span className="text-zyseal-navy/80 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <button className="btn-primary group flex items-center gap-2">
              Learn More About Us
              <Target size={20} className="transition-transform group-hover:rotate-45" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-zyseal-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-zyseal-blue/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;
