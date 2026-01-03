'use client';

import { motion } from 'framer-motion';

const skillCategories = {
  'Programming Languages': {
    icon: '💻',
    color: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-50 dark:bg-cyan-500/10',
    borderColor: 'border-cyan-200 dark:border-cyan-500/20',
    skills: [
      { name: 'C++', icon: '⚙️' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
    ],
  },
  'Web Development': {
    icon: '🌐',
    color: 'from-pink-500 to-purple-500',
    textColor: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-50 dark:bg-pink-500/10',
    borderColor: 'border-pink-200 dark:border-pink-500/20',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'Next.js', icon: '▲' },
      { name: 'REST APIs', icon: '🔌' },
    ],
  },
  'AI & Machine Learning': {
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
    textColor: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-500/10',
    borderColor: 'border-purple-200 dark:border-purple-500/20',
    skills: [
      { name: 'Machine Learning', icon: '🧠' },
      { name: 'Deep Learning', icon: '🔬' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'RAG', icon: '📚' },
      { name: 'TensorFlow', icon: '🧪' },
      { name: 'Keras', icon: '⚡' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
    ],
  },
  'Tools & Core Skills': {
    icon: '🔧',
    color: 'from-orange-500 to-amber-500',
    textColor: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-500/10',
    borderColor: 'border-orange-200 dark:border-orange-500/20',
    skills: [
      { name: 'MySQL', icon: '🗃️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Git/GitHub', icon: '📦' },
      { name: 'VS Code', icon: '💻' },
      { name: 'Jupyter Notebook', icon: '📓' },
      { name: 'OOP', icon: '🏗️' },
      { name: 'DSA', icon: '📊' },
      { name: 'Problem-Solving', icon: '🧩' },
    ],
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've gained proficiency in various technologies throughout my career. Here are
            the key tools and frameworks I use to build exceptional products.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skillCategories).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-md"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl p-3 rounded-xl bg-gradient-to-br ${data.color} shadow-lg`}>
                  {data.icon}
                </div>
                <h3 className={`text-2xl font-bold ${data.textColor}`}>
                  {category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${data.bgColor} border ${data.borderColor} hover:border-opacity-50 transition-all cursor-default`}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
