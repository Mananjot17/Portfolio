// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { ExternalLink, Github } from 'lucide-react';

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   tech: string[];
//   github: string;
//   demo: string;
// }

// const projects: Project[] = [
//   {
//     title: 'ChatterWeb',
//     description: 'A full-stack Chatting platform built with MERN stack, featuring user authentication, one-to-one chat, and live status',
//     image: '/images/chatterWeb.jpg',
//     tech: ['Javascript','React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'WebSockets'],
//     github: 'https://github.com/Mananjot17/ChatterWeb',
//     demo: 'https://chatterweb.onrender.com/',
//   },
//   {
//     title: 'BingeFlix',
//     description: 'This is a React-based Movies App that allows users to find movies, latest movies, movies by genre, search movies by name, get movie details, and see the cast of the movie.',
//     image: '/images/movie.jpg',
//     tech: ['Javascript', 'React'],
//     github: 'https://github.com/Mananjot17/BingeFlix',
//     demo: 'https://binge-flix-two.vercel.app/',
//   },
//   {
//     title: 'Portfolio',
//     description: 'A responsive Portfolio website to showcase my projects and skills.',
//     image: '/images/skill.jpg',
//     tech: ['React', 'Typescript'],
//     github: 'https://github.com',
//     demo: 'https://binge-flix-two.vercel.app/',
//   },
//   {
//     title: 'Meet The Therapist',
//     description: 'Website for a therapist, where users can book appointments, and get in touch with the therapist. Created for Manmeet Kaur',
//     image: '/images/therapist.jpg',
//     tech: ['Astro'],
//     github: 'https://github.com/Mananjot17/meet_the_therapist',
//     demo: 'https://www.meetthetherapist.com/',
//   },

// ];

// const Projects: React.FC = () => {
//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl font-bold text-center mb-16"
//         >
//           Featured Projects
//         </motion.h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, delay: index * 0.5 }}
//       className="bg-white rounded-xl shadow-lg overflow-hidden"
//     >
//       <div className="relative group">
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
//           <motion.a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700"
//           >
//             <Github size={20} />
//           </motion.a>
//           <motion.a
//             href={project.demo}
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2 }}
//             className="text-white p-2 rounded-full bg-blue-600 hover:bg-blue-500"
//           >
//             <ExternalLink size={20} />
//           </motion.a>
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//         <p className="text-gray-600 mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2">
//           {project.tech.map((tech, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Projects;


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'ChatterWeb',
    description:
      'A full-stack Chatting platform built with MERN stack, featuring user authentication, one-to-one chat, and live status.',
    image: '/images/chatterWeb.jpg',
    tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'WebSockets'],
    github: 'https://github.com/Mananjot17/ChatterWeb',
    demo: 'https://chatterweb.onrender.com/',
  },
  {
    title: 'BingeFlix',
    description:
      'This is a React-based Movies App that allows users to find movies, latest movies, movies by genre, search movies by name, get movie details, and see the cast of the movie.',
    image: '/images/movie.jpg',
    tech: ['JavaScript', 'React'],
    github: 'https://github.com/Mananjot17/BingeFlix',
    demo: 'https://binge-flix-two.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: 'A responsive Portfolio website to showcase my projects and skills.',
    image: '/images/skill.jpg',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://binge-flix-two.vercel.app/',
  },
  {
    title: 'Meet The Therapist',
    description:
      'Website for a therapist, where users can book appointments and get in touch with the therapist. Created for Manmeet Kaur.',
    image: '/images/therapist.jpg',
    tech: ['Astro'],
    github: 'https://github.com/Mananjot17/meet_the_therapist',
    demo: 'https://www.meetthetherapist.com/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-teal-700"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all"
    >
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white p-3 rounded-full bg-teal-600 hover:bg-teal-500"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-teal-700 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
