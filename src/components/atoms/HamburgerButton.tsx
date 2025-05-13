import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerButton: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="relative w-8 h-8 flex flex-col justify-center items-center gap-1 group focus:outline-none z-50"
      aria-label="Toggle menu"
    >
      {/* Línea 1 */}
      <motion.span
        className="block h-0.5 w-6 bg-gray-800 dark:bg-white"
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Línea 2 */}
      <motion.span
        className="block h-0.5 w-6 bg-gray-800 dark:bg-white"
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      {/* Línea 3 */}
      <motion.span
        className="block h-0.5 w-6 bg-gray-800 dark:bg-white"
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
};

export default HamburgerButton;
