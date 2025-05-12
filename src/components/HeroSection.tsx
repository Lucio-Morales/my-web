import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="px-6 md:px-24 pt-12 pb-20 font-body text-gray-900 dark:text-white">
      <div className="text-center max-w-3xl mx-auto">
        {/* Nombre arriba del h1 */}
        <motion.p
          className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Lucio Morales
        </motion.p>
        <Code className="mx-auto text-gray-500 dark:text-gray-400 w-8 h-8 mb-4" />
        <motion.h1
          className="text-[2rem] md:text-[4.25rem]  italic font-medium leading-tight mb-6 whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Desarrollador web Fullstack
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-10 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Soy Lucio Morales, un desarrollador web que diseña y construye experiencias digitales limpias, fluidas y con
          intención.
        </motion.p>

        {/* Botones */}
        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="#proyectos"
            className="group relative px-6 py-3 rounded-full border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium tracking-wide text-base  overflow-hidden transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver proyectos
              <span className="text-2xl transition-transform duration-300 transform translate-y-[-4px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                ↓
              </span>
            </span>
            <span
              className="absolute inset-0 bg-gray-100 dark:bg-white/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              aria-hidden="true"
            />
          </a>

          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black font-medium tracking-wide text-base leading-tight transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
          >
            Contactame
          </a>
        </motion.div>
      </div>
    </section>
  );
}
