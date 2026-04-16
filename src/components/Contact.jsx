import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zyseal-gray/30 relative">
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-zyseal-red font-bold tracking-wider uppercase text-sm">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zyseal-navy mt-4 mb-6">
              Let's Discuss Your <span className="text-zyseal-red">Next Project</span>
            </h2>
            <p className="text-zyseal-navy/70 text-lg mb-10">
              Ready to protect your infrastructure? Reach out to our team for a detailed consultation and quote.
            </p>

            <div className="space-y-8">
              {[{ icon: <Phone />, title: "Call Us", content: ["+1 (234) 567-890", "+1 (234) 567-891"] },
               { icon: <Mail />, title: "Email Us", content: ["info@zyseal.com", "sales@zyseal.com"] },
               { icon: <MapPin />, title: "Our Location", content: ["123 Industrial Way, Suite 456", "Construction City, ST 12345"] }].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-zyseal-red flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-zyseal-navy text-xl mb-1">{item.title}</h4>
                    {item.content.map((line, j) => (
                      <p key={j} className="text-zyseal-navy/60">{line}</p>
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
            className="bg-white/80 backdrop-blur-xl p-10 rounded-4xl shadow-premium border border-white"
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zyseal-navy/80">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zyseal-navy/80">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-2"
              >
                <label className="text-sm font-bold text-zyseal-navy/80">Service Type</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none appearance-none">
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
                className="space-y-2"
              >
                <label className="text-sm font-bold text-zyseal-navy/80">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-2xl bg-zyseal-gray border border-zyseal-gray focus:border-zyseal-red focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-full btn-primary py-5 flex items-center justify-center gap-3 text-lg"
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
