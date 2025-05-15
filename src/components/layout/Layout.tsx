import { Outlet } from 'react-router-dom';
import Navbar from '../organisms/navbar/Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F1] dark:bg-[#121317]">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
