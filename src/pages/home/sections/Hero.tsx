// import { Sparkles } from 'lucide-react';
import { ArrowDown, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center  text-center px-4 md:px-0">
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

const Hero = () => {
  return (
    <HeroSection />

    // <section className="font-body flex flex-col items-start justify-center min-h-screen pt-12 sm:pt-20 relative">
    //   <div className="max-w-xl mx-auto text-left space-y-4">
    //     <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-tight text-zinc-800 dark:text-white">
    //       Hola,
    //       <br />
    //       <span className="text-primary italic flex items-center">
    //         soy Lucio
    //         <Sparkles className="ml-6 text-zinc-400 dark:text-zinc-300" size={56} />
    //       </span>
    //     </h1>

    //     <h2 className="tracking- text-4xl sm:text-5xl italic font-semibold text-zinc-500 dark:text-zinc-400">
    //       Desarrollador <span className="text-primary  italic">Fullstack</span>
    //     </h2>

    //     <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
    //       Construyo experiencias significativas, elegantes y con propósito. Estoy comprometido con el desarrollo de
    //       software eficiente, mantenible y escalable.
    //     </p>

    //     <div className="flex gap-6">
    //       <div className="flex gap-6">
    //         <div className="flex gap-6">
    //           <a
    //             href="#contacto"
    //             className="px-6 py-3 rounded-full text-lg sm:text-lg font-medium tracking-wide text-zinc-100 bg-zinc-900 hover:bg-primary/90 dark:text-zinc-900 dark:bg-zinc-100 dark:hover:bg-primary/90
    // transition-transform duration-300 transform hover:scale-105
    // shadow-xl hover:shadow-2xl"
    //           >
    //             Proyectos
    //           </a>
    //           <a
    //             href="#contacto"
    //             className="px-6 py-3 rounded-full text-lg sm:text-lg font-medium tracking-wide border-2 border-gray-400 text-gray-700
    //   bg-transparent hover:bg-primary/10
    //   dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-primary/30
    //   transition-transform duration-300 transform hover:scale-105
    //   shadow-md hover:shadow-lg"
    //           >
    //             Contacto
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="absolute -z-10 right-4 top-20 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
    // </section>
  );
};

export default Hero;
