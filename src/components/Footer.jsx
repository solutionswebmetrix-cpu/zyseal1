import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion'; // Added missing import

const Footer = () => {
  return (
    <footer className="bg-zyseal-navy pt-20 pb-10 text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zyseal-red/10 rounded-full blur-3xl -mb-48 -mr-48"></div>
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="col-span-1 lg:col-span-1 text-center sm:text-left"
          >
            <a href="#" className="flex items-center justify-center sm:justify-start gap-2 mb-8">
              <div className="w-10 h-10 bg-zyseal-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">ZYSEAL</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-8">
              Premium industrial solutions for waterproofing, flooring, and concrete restoration. Protecting infrastructure with innovation and quality.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-zyseal-red hover:border-zyseal-red transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="text-center sm:text-left"
          >
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Projects', 'Industries', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-zyseal-red flex items-center justify-center sm:justify-start gap-2 transition-colors group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="text-center sm:text-left"
          >
            <h4 className="text-xl font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Waterproofing', 'Industrial Flooring', 'Concrete Repair', 'Joint Sealing', 'Thermal Insulation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-zyseal-red flex items-center justify-center sm:justify-start gap-2 transition-colors group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="text-center sm:text-left"
          >
            <h4 className="text-xl font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="text-zyseal-red mt-1">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <p className="font-bold text-white/90">Address</p>
                  <p className="text-white/60 text-sm">123 Industrial Way, Suite 456, Construction City</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="text-zyseal-red mt-1">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <p className="font-bold text-white/90">Email</p>
                  <p className="text-white/60 text-sm">info@zyseal.com</p>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="text-zyseal-red mt-1">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <p className="font-bold text-white/90">Phone</p>
                  <p className="text-white/60 text-sm">+1 (234) 567-890</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div> {/* Closing tag for the main grid motion.div */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
        >
          <p className="text-white/40 text-sm">
            © 2026 Zyseal. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div> {/* Correctly closing the copyright motion.div */}
      </div> {/* Closing tag for the container div */}
    </footer>
  );
};

export default Footer;