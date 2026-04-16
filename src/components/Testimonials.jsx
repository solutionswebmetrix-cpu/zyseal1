import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Doe",
    position: "Project Manager, BuildCorp",
    content: "Zyseal delivered exceptional waterproofing for our latest high-rise project. Their professionalism and technical expertise are unmatched in the industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Sarah Smith",
    position: "Facility Manager, TechHub",
    content: "The industrial flooring solution provided by Zyseal transformed our warehouse. It's durable, easy to maintain, and looks premium. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Michael Brown",
    position: "Director, GreenTech Industrial",
    content: "Expert team, quality materials, and timely delivery. Zyseal has been our go-to partner for all concrete restoration works for over 5 years.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-zyseal-red font-bold tracking-wider uppercase text-sm"
          >
            Client Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-zyseal-navy mt-4"
          >
            What Our Partners Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
              className="premium-card h-full flex flex-col"
            >
              <div className="text-zyseal-red mb-6">
                <Quote size={40} fill="currentColor" />
              </div>
              <p className="text-zyseal-navy/70 text-lg italic mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-zyseal-red/20"
                />
                <div>
                  <h4 className="font-bold text-zyseal-navy">{testimonial.name}</h4>
                  <p className="text-sm text-zyseal-navy/60">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
