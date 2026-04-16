import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-zyseal-gray/30 relative">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="text-zyseal-red font-bold tracking-wider uppercase text-xs md:text-sm">Contact Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zyseal-navy mt-4 mb-6">
              Let's Discuss Your <span className="text-zyseal-red">Next Project</span>
            </h2>
            <p className="text-zyseal-navy/70 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              Ready to protect your infrastructure? Reach out to our team for a detailed consultation and quote.
            </p>

            <div className="space-y-6 md:space-y-8 max-w-lg mx-auto lg:mx-0 text-left">
              {[{ icon: <Phone size={20} />, title: "Call Us", content: ["+1 (234) 567-890", "+1 (234) 567-891"] },
               { icon: <Mail size={20} />, title: "Email Us", content: ["info@zyseal.com", "sales@zyseal.com"] },
               { icon: <MapPin size={20} />, title: "Our Location", content: ["123 Industrial Way, Suite 456", "Construction City, ST 12345"] }].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="flex items-start gap-4 md:gap-6"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-zyseal-red flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-zyseal-navy text-lg md:text-xl mb-1">{item.title}</h4>
                    {item.content.map((line, j) => (
                      <p key={j} className="text-sm md:text-base text-zyseal-navy/60">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-xl p-6 md:p-10 rounded-[32px] md:rounded-4xl shadow-premium border border-white mt-8 lg:mt-0"
          >
            <form className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              >
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-zyseal-navy/80">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none text-sm md:text-base"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs md:text-sm font-bold text-zyseal-navy/80">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none text-sm md:text-base"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-1.5 md:space-y-2"
              >
                <label className="text-xs md:text-sm font-bold text-zyseal-navy/80">Service Type</label>
                <select className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none appearance-none text-sm md:text-base">
                  <option>Waterproofing</option>
                  <option>Industrial Flooring</option>
                  <option>Concrete Repair</option>
                  <option>Other</option>
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-1.5 md:space-y-2"
              >
                <label className="text-xs md:text-sm font-bold text-zyseal-navy/80">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none resize-none text-sm md:text-base"
                ></textarea>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-full btn-primary py-4 md:py-5 flex items-center justify-center gap-3 text-base md:text-lg"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
