const Nav = () => {
  return (
    <nav
      aria-label="Navegación principal"
      className="
    flex gap-12 text-2xl font-body font-semibold px-8 py-3 rounded-full 
    transition-all duration-300 tracking-wide
  "
    >
      <a
        href="#"
        className="
    relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:w-0 after:bg-current after:transition-all after:duration-300
    hover:after:w-full
  "
      >
        Proyectos
      </a>

      <a
        href="#"
        className="
    relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:w-0 after:bg-current after:transition-all after:duration-300
    hover:after:w-full
  "
      >
        Sobre mi
      </a>

      <a
        href="#"
        className="
    relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:w-0 after:bg-current after:transition-all after:duration-300
    hover:after:w-full
  "
      >
        Contacto
      </a>
    </nav>
  );
};

export default Nav;
