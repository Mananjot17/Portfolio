// import { motion } from 'framer-motion';
// import { Code2, Database, Server } from 'lucide-react';

// interface TechCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// const Hero: React.FC = () => {
//   return (
//     <section className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-40 pb-40">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="md:w-1/2"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold mb-4">
//               Full Stack
//               <span className="text-blue-600"> Developer</span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Building modern web applications with the MERN stack
//             </p>
//             <div className="flex space-x-4">
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg"
//                 href={`#${"Projects".toLowerCase()}`}
//               >
//                 View Projects
//               </motion.a>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg"
//                 href={`#${"Contact".toLowerCase()}`}
//               >
//                 Contact Me
//               </motion.a>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="md:w-1/2 mt-12 md:mt-0"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>

//               <div className="relative grid grid-cols-2 gap-4">
//                 <TechCard
//                   icon={<Code2 size={32} />}
//                   title="Languages"
//                   description="C++, Javascript, Python, Typescript"
//                 />
//                 <TechCard
//                   icon={<Server size={32} />}
//                   title="Frameworks /Libraries"
//                   description="React.js, Next.js, Node.js, Express.js, Redux"
//                 />
//                 <TechCard
//                   icon={<Database size={32} />}
//                   title="Database"
//                   description="MongoDB, SQL"
//                 />
//                 <TechCard
//                   icon={<Code2 size={32} />}
//                   title="Tools"
//                   description="Git/Github"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => (
//   <motion.div
//     whileHover={{ y: -5 }}
//     className="bg-white p-6 rounded-xl shadow-lg"
//   >
//     <div className="text-blue-600 mb-4">{icon}</div>
//     <h3 className="text-lg font-semibold mb-2">{title}</h3>
//     <p className="text-gray-600">{description}</p>
//   </motion.div>
// );

// export default Hero;


import { motion } from 'framer-motion';
import { Code2, Database, Server } from 'lucide-react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  return (
    <section className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white pt-40 pb-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Full Stack
              <span className="text-teal-300"> Developer</span>
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              Building modern web applications with the MERN stack
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-teal-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-teal-500"
                href="#projects"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-teal-300 text-teal-300 px-8 py-3 rounded-lg  hover:text-white"
                href="#contact"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-teal-300 rounded-full filter blur-3xl opacity-70"></div>

              <div className="relative grid grid-cols-2 gap-4">
                <TechCard
                  icon={<Code2 size={32} />}
                  title="Languages"
                  description="C++, Javascript, Python, Typescript"
                />
                <TechCard
                  icon={<Server size={32} />}
                  title="Frameworks /Libraries"
                  description="React.js, Next.js, Node.js, Express.js, Redux"
                />
                <TechCard
                  icon={<Database size={32} />}
                  title="Database"
                  description="MongoDB, SQL"
                />
                <TechCard
                  icon={<Code2 size={32} />}
                  title="Tools"
                  description="Git/Github"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl"
  >
    <div className="text-teal-500 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default Hero;
