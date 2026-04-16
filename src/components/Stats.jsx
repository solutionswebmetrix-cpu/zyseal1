import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className="text-5xl md:text-6xl font-bold text-white block mb-2">
      {display}
    </motion.span>
  );
};

const Stats = () => {
  const stats = [
    { value: 15, suffix: "+", label: "Years in Industry" },
    { value: 500, suffix: "+", label: "Successful Projects" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 25, suffix: "+", label: "Cities Covered" },
  ];

  return (
    <section className="py-20 bg-zyseal-navy relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-zyseal-red skew-x-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
