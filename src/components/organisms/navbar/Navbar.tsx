import { motion, AnimatePresence } from 'framer-motion';
import NavLink from '../../atoms/NavLink';
import Logo from '../../atoms/Logo';
import { useState } from 'react';
import HamburgerButton from '../../atoms/HamburgerButton';
import DarkModeToggler from '../../DarkModeToggler';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobremi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 shadow-md bg-white dark:bg-gray-800 fixed top-0 left-0 z-50">
      <nav
        role="navigation"
        aria-label="Menú principal"
        className="flex items-center justify-between max-w-7xl mx-auto "
      >
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <ul className="hidden md:flex flex-1 justify-center gap-6">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <DarkModeToggler />
          </div>

          <div className="md:hidden">
            <HamburgerButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute top-full right-2 mt-2 w-48 bg-gray-300 dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col gap-2 z-40"
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setMenuOpen(false)} />
            ))}
            <div className="mt-2 self-start scale-90">
              <DarkModeToggler />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
