const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestión',
      description:
        'Una plataforma para administrar clientes y rutinas de forma eficiente. Cada entrenador podra gestionar sus clientes y sus pagos asi como tambien darles rutinas de entrenamiento personalizadas.',
      imageUrl: '/images/misrutinasonline-image.avif',
      link: '#',
    },
    {
      title: 'Portfolio Web',
      description:
        'Sitio personal diseñado con React y animaciones suaves para destacar. Tengo muchas ganas de trabajar. Si quieres saber mas acerca de mi, no dudes en contactarme!',
      imageUrl: '/images/misrutinasonline-image.avif',
      link: '#',
    },
    {
      title: 'Plataforma Educativa',
      description:
        'Espacio digital para formacion academica, con foco en UX accesible. Ayuda a mejorar la interactividad entre educadores y personas que buscan capacitacion flexible.',
      imageUrl: '/images/misrutinasonline-image.avif',
      link: '#',
    },
    {
      title: 'Landing Page Moderna',
      description:
        'Página promocional con diseño responsive y optimización SEO. Ayude a un comercio local a tener presencia en la red, aumentando la visibilidad de su producto en internet.',
      imageUrl: '/images/misrutinasonline-image.avif',
      link: '#',
    },
  ];

  return (
    <section className="py-20 font-body">
      <div className="max-w-[95vw] mx-auto">
        <h2 className="text-5xl font-bold mb-22 text-zinc-800 dark:text-white text-center">. Proyectos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="group rounded-3xl overflow-hidden bg-transparent flex flex-col min-h-[520px]"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-96 md:h-[28rem] object-cover rounded-3xl"
              />
              <div className="flex flex-col flex-1 rounded-b-3xl px-0">
                <h3 className="text-4xl font-normal text-zinc-800 dark:text-white mb-4 mt-10 leading-tight">
                  {project.title}
                </h3>
                <p className="font-body text-lg sm:text-2xl text-zinc-700 dark:text-zinc-300 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <button
                  className="mt-6 self-start px-6 py-3 rounded-full text-lg font-medium tracking-wide
  border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white
  dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-black
  transition-colors duration-300 cursor-pointer"
                >
                  Ver proyecto
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
