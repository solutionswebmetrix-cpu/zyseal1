import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import heroPoster from '../assets/hero.png';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zyseal-navy">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          poster={heroPoster}
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-zyseal-navy via-zyseal-navy/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyseal-red/10 border border-zyseal-red/20 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-zyseal-red animate-pulse"></span>
              <span className="text-sm font-semibold text-white">Premium Industrial Solutions</span>
            </motion.div> */}
            
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {"Innovative Waterproofing & Industrial Flooring".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="inline-block mr-3"
                >
                  {word === "&" || word === "Waterproofing" ? (
                    <span className="text-zyseal-red">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Zyseal provides high-performance waterproofing, concrete repair, and industrial flooring solutions. We bring excellence to every project with cutting-edge technology.
            </p>
            
            {/* <div className="flex flex-wrap gap-4 mb-12">
              <button className="btn-primary flex items-center gap-2 group py-3 px-8 text-base">
                Get a Quote <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-zyseal-navy hover:shadow-lg backdrop-blur-sm">
                Explore Services
              </button>
            </div> */}

            <div className="grid grid-cols-3 gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">15+</span>
                <span className="text-sm text-white/90">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">500+</span>
                <span className="text-sm text-white/90">Projects Done</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-sm text-white/90">Satisfaction</span>
              </div>
            </div>
          </motion.div>


        </div>
      </div>

    </section>
  );
};

export default Hero;
