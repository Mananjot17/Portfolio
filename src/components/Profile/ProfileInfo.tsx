import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const ProfileInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-center md:text-left"
  >
    <h1 className="text-4xl md:text-5xl font-semibold mb-2">Mananjot Singh</h1>

    <h2 className="text-xl md:text-2xl text-blue-600 mb-4">
      <Typewriter
        words={['Full Stack Developer']}
        loop={false} // Only type it once
        cursor
        cursorStyle="_"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>

    <p className="text-gray-600 max-w-lg mb-8">
      Passionate full-stack developer with expertise in the MERN stack. 
      I create scalable web applications with modern technologies and best practices.
    </p>
  </motion.div>
);

export default ProfileInfo;
