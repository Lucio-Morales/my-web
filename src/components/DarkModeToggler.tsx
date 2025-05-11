import { useDarkMode } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const shadowClass = darkMode
    ? 'shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(0,0,0,0.7)]'
    : 'shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.2),inset_-4px_4px_8px_rgba(0,0,0,0.7)]';

  const outlineClass = darkMode ? 'outline outline-1 outline-gray-800' : 'outline outline-1 outline-gray-500';

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className={`cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
        bg-gray-300 dark:bg-gray-700 box-border
        ${shadowClass} ${outlineClass}`}
    >
      <motion.div
        className="w-6 h-6 bg-gray-700 dark:bg-gray-300 rounded-full shadow-md flex items-center justify-center"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        animate={{
          x: darkMode ? 24 : 0,
        }}
      >
        {darkMode ? '🌞' : '🌙'}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggler;
