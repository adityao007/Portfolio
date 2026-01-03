'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/aditya-chauhan-0o9813',
    gradient: 'from-blue-500 to-blue-600',
    hoverGradient: 'from-blue-600 to-blue-700',
    description: 'Professional network',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/adityao007',
    gradient: 'from-gray-700 to-gray-900',
    hoverGradient: 'from-gray-800 to-black',
    description: 'Code repositories',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:adityachauhan9813@gmail.com',
    gradient: 'from-red-500 to-pink-500',
    hoverGradient: 'from-red-600 to-pink-600',
    description: 'adityachauhan9813@gmail.com',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">Connect </span>
            <span className="text-gradient-blue">With Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Feel free to connect with me on these platforms to discuss tech, share ideas,
            or just say hello!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16" />

          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className={`relative h-full p-8 bg-gradient-to-br ${social.gradient} rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden`}>
                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4 p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                    >
                      <social.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {social.name}
                    </h3>
                    
                    <p className="text-white/80 text-sm mb-4 break-all px-2">
                      {social.description}
                    </p>
                    
                    <motion.div
                      className="flex items-center gap-2 text-white/90 font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">Visit</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
