import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="font-body flex flex-col items-start justify-center min-h-screen pt-12 sm:pt-20 relative">
      <div className="max-w-xl mx-auto text-left space-y-4">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-tight text-zinc-800 dark:text-white">
          Hola,
          <br />
          <span className="text-primary italic flex items-center">
            soy Lucio
            <Sparkles className="ml-6 text-zinc-400 dark:text-zinc-300" size={56} />
          </span>
        </h1>

        <h2 className="tracking- text-4xl sm:text-5xl italic font-semibold text-zinc-500 dark:text-zinc-400">
          Desarrollador <span className="text-primary  italic">Fullstack</span>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
          Construyo experiencias significativas, elegantes y con propósito. Estoy comprometido con el desarrollo de
          software eficiente, mantenible y escalable.
        </p>

        <div className="flex gap-6">
          <div className="flex gap-6">
            <div className="flex gap-6">
              <a
                href="#contacto"
                className="px-6 py-3 rounded-full text-lg sm:text-lg font-medium tracking-wide text-zinc-100 bg-zinc-900 hover:bg-primary/90 dark:text-zinc-900 dark:bg-zinc-100 dark:hover:bg-primary/90 
    transition-transform duration-300 transform hover:scale-105 
    shadow-xl hover:shadow-2xl"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3 rounded-full text-lg sm:text-lg font-medium tracking-wide border-2 border-gray-400 text-gray-700 
      bg-transparent hover:bg-primary/10 
      dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-primary/30 
      transition-transform duration-300 transform hover:scale-105 
      shadow-md hover:shadow-lg"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -z-10 right-4 top-20 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;
