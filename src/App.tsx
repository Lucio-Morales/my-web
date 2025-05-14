import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
