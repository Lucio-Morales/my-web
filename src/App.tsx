import DarkModeToggler from './components/DarkModeToggler';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#e4e4e4] dark:bg-[#06070b]">
        <header className="flex items-center justify-between px-24 py-4  bg-[#e4e4e4] dark:bg-[#06070b] dark:text-white">
          <div className="text-lg font-semibold">Lucio Morales</div>
          <nav
            className="
    flex gap-8 text-xl font-medium px-10 py-4 rounded-full transition-all duration-300
  "
          >
            <a href="#">Proyectos</a>
            <a href="#">Sobre mi</a>
            <a href="#">Contacto</a>
          </nav>
          <div>
            <DarkModeToggler />
          </div>
        </header>
        <main className="flex flex-col items-center justify-center py-20 px-4"></main>
      </div>
    </ThemeProvider>
  );
}

export default App;
