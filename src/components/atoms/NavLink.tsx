type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-800 dark:text-white hover:text-primary transition-colors text-xl sm:text-base"
    >
      {label}
    </a>
  );
};

export default NavLink;
