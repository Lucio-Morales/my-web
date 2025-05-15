import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
