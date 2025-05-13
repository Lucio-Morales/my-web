import { useDarkMode } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Alternar modo oscuro"
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
  bg-gray-2s00  box-border
  outline-2 outline-[#202020] dark:outline-white`}
    >
      <motion.div
        className="w-6 h-6 bg-gray-500 rounded-full shadow-md flex items-center justify-center"
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
