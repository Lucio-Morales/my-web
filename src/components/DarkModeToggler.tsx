import { useDarkMode } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Alternar modo oscuro"
      whileTap={{ scale: 0.95 }}
      className={`
        w-16 h-9 flex items-center rounded-full px-1 transition-colors duration-300
        bg-zinc-300 dark:bg-zinc-700 shadow-inner
      `}
    >
      <motion.div
        className="w-7 h-7 bg-white dark:bg-zinc-500 rounded-full shadow-md flex items-center justify-center text-xs"
        layout
        initial={false}
        animate={{
          x: darkMode ? 28 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {darkMode ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggler;
