'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Fitness Trainer',
    year: '2024',
    description:
      'An AI-powered fitness application that tracks workout sessions by monitoring body movements and counting exercises using the MediaPipe library. The system uses body part angles to accurately determine exercise counts and provides real-time feedback during workouts.',
    technologies: ['Python', 'MediaPipe', 'Computer Vision', 'AI'],
    images: ['/images/ai_fitness1.png', '/images/ai_fitness2.png'],
    github: 'https://github.com/adityao007/AI_Fitness_trainer_main',
    live: 'https://github.com/adityao007/AI_Fitness_trainer_main',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Online Shop',
    year: '2024',
    description:
      'A full-stack e-commerce web application built with HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Features include user authentication, product catalog, shopping cart with quantity management, order management, and an admin panel for product administration. The application provides a complete e-commerce experience with cart functionality and product management capabilities.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS'],
    images: ['/images/onlineshop1.png', '/images/onlineshop2.png'],
    github: 'https://github.com/adityao007/Online-shop',
    live: 'https://github.com/adityao007/Online-shop',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Medi_care',
    year: '2024',
    description:
      'A healthcare management application designed to streamline medical services and patient care. The platform provides features for managing medical records, appointments, and healthcare services with an intuitive and user-friendly interface.',
    technologies: ['HTML', 'CSS', 'Python', 'Flask'],
    images: ['/images/medi1.png', '/images/medi2.png'],
    github: 'https://github.com/adityao007/Medi_care',
    live: 'https://github.com/adityao007/Medi_care',
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setCurrentImage(0);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % projects[currentProject].images.length
    );
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + projects[currentProject].images.length) %
        projects[currentProject].images.length
    );
  };

  const project = projects[currentProject];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="text-gradient-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Project Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${project.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
                  {/* Image Carousel */}
                  <div className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${project.id}-${currentImage}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 z-0"
                      >
                        <Image
                          src={project.images[currentImage]}
                          alt={`${project.title} - Image ${currentImage + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                          unoptimized
                        />
                      </motion.div>
                    </AnimatePresence>

                    {project.images.length > 1 && (
                      <>
                        <motion.button
                          onClick={prevImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 hover:bg-white dark:hover:bg-gray-900 transition-all shadow-lg z-10"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
                        </motion.button>
                        <motion.button
                          onClick={nextImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 hover:bg-white dark:hover:bg-gray-900 transition-all shadow-lg z-10"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
                        </motion.button>
                      </>
                    )}

                    {/* Image indicators */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full z-10">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImage
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-8 bg-white dark:bg-gray-900">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1 }}
                          className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-full text-sm font-semibold shadow-lg`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-700 transition-all shadow-lg"
                      >
                        <Github className="w-5 h-5" />
                        View Source
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold hover:shadow-xl transition-all shadow-lg`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
            </motion.button>
            
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentProject ? 1 : -1);
                    setCurrentProject(index);
                    setCurrentImage(0);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-12'
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextProject}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
