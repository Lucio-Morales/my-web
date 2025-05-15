import { Link } from 'react-router-dom';

type NavLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="text-gray-800 dark:text-white hover:text-primary transition-colors text-xl sm:text-xl"
    >
      {label}
    </Link>
  );
};

export default NavLink;
