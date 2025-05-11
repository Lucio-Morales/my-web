import { useDarkMode } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className="cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300
             bg-gray-300 dark:bg-gray-600 border-2 border-gray-500 dark:border-gray-300
             shadow-[4px_4px_8px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4)]"
    >
      <motion.div
        className="w-6 h-6 bg-gray-500 dark:bg-gray-300 rounded-full shadow-md flex items-center justify-center"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        animate={{
          x: darkMode ? 24 : 0,
        }}
      >
        {darkMode ? '🌞' : '🌙'}
      </motion.div>
    </button>
  );
};

export default DarkModeToggler;
