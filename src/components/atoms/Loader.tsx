import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F1] dark:bg-[#121317]">
      <div className="text-4xl sm:text-5xl font-mono font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-1">
        {'{'}
        <motion.div className="flex gap-1 ml-2 mr-2">
          <motion.span
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            className="text-3xl"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
            className="text-3xl"
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut', delay: 0.4 }}
            className="text-3xl"
          >
            .
          </motion.span>
        </motion.div>
        {'}'}
      </div>
    </div>
  );
};

export default Loader;
