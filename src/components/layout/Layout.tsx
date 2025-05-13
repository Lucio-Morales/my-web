import Navbar from '../organisms/navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
