'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Lightbulb, Users, Target } from 'lucide-react';

const characteristics = [
  {
    title: 'Problem Solver',
    description: 'I thrive on challenges and enjoy finding solutions.',
    icon: Lightbulb,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Critical Thinker',
    description: 'I analyze problems from multiple angles, question assumptions, and make well-reasoned decisions.',
    icon: Target,
    color: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Team Player',
    description: 'I believe in collaboration and teamwork.',
    icon: Users,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'User-Focused',
    description: 'I prioritize creating intuitive, accessible experiences that meet real user needs.',
    icon: Target,
    color: 'from-purple-400 to-pink-500',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="text-gradient-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Who I am */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              Who I am
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am <span className="font-semibold text-blue-600 dark:text-blue-400">Aditya</span>, a{' '}
              <span className="font-semibold">Full-Stack Developer</span> and{' '}
              <span className="font-semibold">AI/ML Enthusiast</span> with a strong foundation in programming 
              languages like <span className="font-semibold">C++, Python, and Java</span>. I'm passionate about 
              building innovative solutions that combine web technologies with cutting-edge AI capabilities.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My expertise spans across <span className="font-semibold">web development</span> with React, Next.js, 
              Node.js, and Express.js, as well as <span className="font-semibold">AI and Machine Learning</span> 
              using TensorFlow, Keras, LangChain, and OpenAI API. I specialize in building scalable web applications 
              and developing intelligent systems using Generative AI, including Retrieval-Augmented Generation (RAG) 
              architectures.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              With a solid understanding of <span className="font-semibold">Object-Oriented Programming, Data Structures 
              & Algorithms</span>, and experience working with databases like MySQL and MongoDB, I enjoy solving complex 
              problems and creating products that are both technically robust and user-friendly. I'm always exploring 
              the latest advancements in AI and web technologies to stay at the forefront of innovation.
            </p>
          </motion.div>

          {/* Location & Role */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-800/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    Noida, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-800/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    Education
                  </h4>
                  <div className="text-gray-600 dark:text-gray-400 space-y-1">
                    <p className="font-semibold">B. Tech. in Computer Science and Engineering</p>
                    <p>Bennett University</p>
                    <p className="text-sm">2022 - Present | CGPA: 8.2 / 10.0</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Characteristics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characteristics.map((char, index) => {
            const Icon = char.icon;
            return (
              <motion.div
                key={char.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${char.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${char.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {char.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{char.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
