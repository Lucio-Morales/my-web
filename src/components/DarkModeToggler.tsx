import { useDarkMode } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  // const shadowClass = darkMode
  //   ? 'shadow-[inset_12px_-4px_16px_rgba(0,0,0,0.5),inset_8px_2px_8px_rgba(0,0,0,0.6)]'
  //   : 'shadow-[inset_-12px_4px_16px_rgba(20,20,20,0.4),inset_-8px_-2px_8px_rgba(20,20,20,0.4)]';

  // const outlineClass = darkMode ? 'outline-2 outline-gray-700' : 'outline-2 outline-gray-600';

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
