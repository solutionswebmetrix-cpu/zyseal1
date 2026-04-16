import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Hospital, Plane, Warehouse, HardHat } from 'lucide-react';

const industries = [
  { icon: <Building2 />, name: "Commercial Buildings" },
  { icon: <Warehouse />, name: "Industrial Warehouses" },
  { icon: <Hospital />, name: "Healthcare Facilities" },
  { icon: <ShoppingCart />, name: "Retail & Malls" },
  { icon: <Plane />, name: "Aviation & Airports" },
  { icon: <HardHat />, name: "Infrastructure" },
];

const Industries = () => {
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="industries" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-zyseal-blue/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-zyseal-red/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-zyseal-red"></span>
            <span className="text-zyseal-red font-bold tracking-[0.2em] uppercase text-xs">Industries We Serve</span>
            <span className="w-8 h-[2px] bg-zyseal-red"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-zyseal-navy tracking-tight"
          >
            Versatile <span className="text-zyseal-red italic">Solutions</span> for Every Sector
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "circOut" }
              }}
              className="bg-[#F8F9FB] p-10 rounded-[2.5rem] border border-transparent flex flex-col items-center justify-center text-center group hover:bg-white hover:border-zyseal-red/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer h-[240px]"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-zyseal-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-white text-zyseal-navy group-hover:bg-zyseal-navy group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-500 group-hover:rotate-[10deg]">
                  {React.cloneElement(industry.icon, { size: 28 })}
                </div>
              </div>
              <h3 className="font-bold text-zyseal-navy text-sm md:text-base leading-tight group-hover:text-zyseal-red transition-colors duration-300">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
