import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="font-body flex flex-col items-start justify-center min-h-screen pt-12 sm:pt-20 relative">
      <div className="max-w-5xl w-full mx-auto text-left sm:text-center space-y-4">
        <h1 className="text-6xl sm:text-8xl font-extrabold sm:tracking-wide leading-tight text-zinc-800 dark:text-white flex flex-col sm:flex-row sm:items-center sm:justify-center">
          <span className="mr-2">Hola, </span>
          <span className="text-primary italic flex items-center sm:justify-center">
            soy{' '}
            <span className="ml-2 font-bold underline relative inline-block bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 bg-clip-text text-transparent animate-gradient-x">
              Lucio
              <span className="absolute inset-0 animate-ping opacity-10 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
            </span>
            <Sparkles className="ml-4 text-zinc-400 dark:text-zinc-300" size={56} />
          </span>
        </h1>

        <h2 className="text-4xl sm:text-6xl italic tracking-wide font-semibold text-zinc-500 dark:text-zinc-400">
          Desarrollador <span className="text-primary italic">Fullstack</span>
        </h2>

        <p className="text-lg sm:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Construyo experiencias significativas, elegantes y con propósito. Estoy comprometido con el desarrollo de
          software eficiente, mantenible y escalable.
        </p>

        <div className="flex sm:justify-center gap-6">
          <a
            href="#contacto"
            className="px-6 py-3 rounded-full text-lg font-medium tracking-wide text-zinc-100 bg-zinc-900 hover:bg-primary/90 dark:text-zinc-900 dark:bg-zinc-100 dark:hover:bg-primary/90 
        transition-transform duration-300 transform hover:scale-105 
        shadow-xl hover:shadow-2xl"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 rounded-full text-lg font-medium tracking-wide border-2 border-gray-400 text-gray-700 
        bg-transparent hover:bg-primary/10 
        dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-primary/30 
        transition-transform duration-300 transform hover:scale-105 
        shadow-md hover:shadow-lg"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="absolute -z-10 right-4 top-20 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;
