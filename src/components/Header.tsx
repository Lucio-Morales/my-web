import DarkModeToggler from './DarkModeToggler';
import Nav from './Nav';
import logo from '../../public/images/profile-image.avif';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-24 py-4  bg-[#e4e4e4] dark:bg-[#06070b] dark:text-white">
      <div className="flex items-center gap-2 text-3xl font-medium ">
        <span className="text-[#202020] dark:text-white">{'{'}</span>
        <img src={logo} alt="Lucio Morales" className="h-10 w-10 rounded-full" />
        <span className="text-[#202020] dark:text-white">{'}'}</span>
      </div>
      <Nav />
      <div>
        <DarkModeToggler />
      </div>
    </header>
  );
};

export default Header;
