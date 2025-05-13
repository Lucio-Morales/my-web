import { useDarkMode } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Alternar modo oscuro"
      whileTap={{ scale: 0.95 }}
      className={`
        cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-all duration-300
         box-border
        outline-2 outline-[#5E5E5E] dark:outline-[#9C9C9C]
      `}
    >
      <motion.div
        className="w-6 h-6 bg-[#5E5E5E] dark:bg-[#9C9C9C] rounded-full shadow-md flex items-center justify-center"
        layout
        initial={false}
        animate={{
          x: darkMode ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {darkMode ? '🌞' : '🌙'}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggler;
