import { ArrowDown, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center text-center px-4 md:px-0">
      <div className="space-y-4 text-left md:text-center">
        <h1 className="font-body font-light text-6xl md:text-7xl text-gray-800 dark:text-gray-200 animate-fade-in-up">
          <span className="dark:text-gray-200 text-7xl italic">¡Hola!</span> <br />
          Soy <span className="text-gray-500 dark:text-gray-400 font-light italic">Lucio Morales</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-body font-medium text-gray-700 dark:text-zinc-500 animate-fade-in-up delay-100">
          Desarrollador web <span className="italic dark:text-zinc-400">Fullstack</span>
        </h2>
        <p className="text-2xl md:text-2xl italic font-body text-gray-600 dark:text-zinc-400 mt-4 animate-fade-in-up delay-200">
          "La mejor manera de predecir el futuro es <span className="text-gray-700 dark:text-zinc-300">creándolo</span>"
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-start md:justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-300">
          <button className="group px-8 py-3 bg-gray-600 text-white font-normal rounded-lg font-body italic shadow-md hover:bg-gray-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer flex items-center justify-center space-x-2">
            <span>Proyectos</span>
            <ArrowDown
              size={20}
              className="transform transition-transform duration-300 ease-in-out group-hover:translate-y-1"
            />
          </button>
          <button className="group px-8 py-3 border-2 border-gray-400 text-gray-600 dark:text-gray-400 font-body rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer flex items-center justify-center space-x-2">
            <span>Contacto</span>
            <MessageSquare
              size={20}
              className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
