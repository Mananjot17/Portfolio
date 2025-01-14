import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillsType {
  [category: string]: string[];
}

const skills: SkillsType = {
  Languages: ['C++', 'Javascript', 'Python', 'Typescript'],
  Frontend: ['React.js', 'JavaScript', 'Redux', 'Tailwind CSS', 'Next.js'],
  Backend: ['Node.js', 'Express.js', 'RESTful APIs', 'WebSocket'],
  Database: ['MongoDB', 'MySQL'],
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory
              key={category}
              category={category}
              skills={items}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  category: string;
  skills: string[];
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  skills,
  index,
}) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-50 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
      <div className="space-y-2">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
