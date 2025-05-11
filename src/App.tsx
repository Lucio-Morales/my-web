import DarkModeToggler from './components/DarkModeToggler';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black dark:text-white">
          <h1 className="text-3xl font-bold mb-3">My website</h1>
          <p>Click the button to toggle dark mode!</p>
          <div className="mt-5">
            <DarkModeToggler />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
