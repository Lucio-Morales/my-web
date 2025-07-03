import { motion } from 'framer-motion';
import rutinasImage from '/images/misrutinasonline-image.avif';
import xtremeImage from '/images/xtreme.avif';
import { ExternalLink, Github } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, SiPostgresql, SiSupabase } from 'react-icons/si';

export const projects = [
  {
    id: '1',
    title: 'Mis rutinas online',
    description:
      'Plataforma de servicios para entrenadores personales y gimnasios donde podras elegir entre un plan de prueba de 7 dias y un plan premium para gestionar clientes, crear y asignar rutinas personalizadas y planes de alimentacion creados por nutricionistas, registrar pagos y hacer un seguimiento completo. Actualmente esta en produccion y cuenta con +100 usuarios.',
    tech: [
      { name: 'React', icon: SiReact, color: 'text-sky-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-300' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-green-300' },
    ],
    image: rutinasImage,
    liveUrl: 'https://misrutinasonline.com',
    codeUrl: 'https://github.com/tuusuario/portfolio',
  },
  {
    id: '2',
    title: 'Xtreme gym',
    description:
      'App organizacional para gestion interna de gimnasio. Cuenta con un sistema de roles (administradores, entrenadores, nutricionistas y clientes), una red social interna donde todos sus miembros podran realizar publicaciones, una seccion "shop" para comprar productos que ofrece el gimnasio como suplementos y ropa deportiva.',
    tech: [
      { name: 'React', icon: SiReact, color: 'text-sky-500' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-300' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-green-300' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-gray-400' },
    ],
    image: xtremeImage,
    liveUrl: 'https://fitadmin.com',
    codeUrl: 'https://github.com/tuusuario/fitadmin',
  },
  {
    id: '3',
    title: 'Mind-up',
    description:
      'Aplicacion para encontrar psicologo de forma rapida a traves de un sistema de match inteligente que genera sugerencias basadas en las necesidades particulares de cada paciente. Cuenta con un boton de panico que permite a los pacientes enviar una solicitud de asistencia que actiba un chat en vivo con psicologos disponibles en ese momento.',
    tech: [
      { name: 'React', icon: SiReact, color: 'text-sky-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' },
      { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500' },
    ],
    image: rutinasImage,
    liveUrl: 'https://tusitio.com',
    codeUrl: 'https://github.com/tuusuario/portfolio',
  },
];

const ProjectsSection = () => {
  return (
    <section className="text-zinc-800 dark:text-zinc-300 font-body py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium inline-block border-b-2 border-gray-500 pb-1">Ultimos proyectos</h2>
      </div>

      <div className="flex flex-col items-center gap-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full lg:w-1/2 rounded-2xl shadow-lg object-cover"
            />
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl text-gray-300 font-medium mb-4">{project.title}</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4 text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                {project.tech.map(({ name, icon: Icon, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1 bg-zinc-200 dark:bg-zinc-800 text-sm px-3 py-1 rounded-full"
                  >
                    <Icon size={14} className={color} />
                    {name}
                  </span>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  <ExternalLink size={16} />
                  Ver online
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 text-sm hover:underline"
                >
                  <Github size={16} />
                  Código fuente
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
