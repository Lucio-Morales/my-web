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
    <>
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4  bg-[#FAF7F1] dark:bg-[#121317] fixed top-0 left-0 z-50">
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

          <div className="flex items-center gap-4 ">
            <div className="hidden md:block rounded-full shadow-[0_12px_22px_rgba(0,0,0,0.2)] dark:shadow-[0_12px_22px_rgba(0,0,0,0.9)] p-1">
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
              className="absolute top-full right-2 mt-2 w-48 bg-[#F0E7DA] dark:bg-[#1c1f25] shadow-lg rounded-lg p-4 flex flex-col gap-2 z-40"
            >
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setMenuOpen(false)} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="
    fixed bottom-4 right-4 z-50 md:hidden 
    backdrop-blur-sm
    shadow-[0_12px_22px_rgba(0,0,0,0.4)] dark:shadow-[0_12px_22px_rgba(0,0,0,0.9)]
    rounded-full p-1
  "
      >
        <DarkModeToggler />
      </motion.div>
    </>
  );
};

export default Navbar;
