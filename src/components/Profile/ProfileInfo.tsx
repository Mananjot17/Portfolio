import { motion } from 'framer-motion';


const ProfileInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-center md:text-left"
  >
    <h1 className="text-4xl md:text-5xl font-semibold  mb-2">
      Mananjot Singh
    </h1>
    <h2 className="text-xl md:text-2xl text-blue-600 mb-4">
      Full Stack Developer
    </h2>
    {/* <div className="flex items-center justify-center md:justify-start text-gray-600 mb-6">
      <MapPin size={20} className="mr-2" />
      <span>San Francisco, CA</span>
    </div> */}
    <p className="text-gray-600 max-w-lg mb-8">
      Passionate full-stack developer with expertise in the MERN stack. 
      I create scalable web applications with modern technologies and best practices.
    </p>
  </motion.div>
);

export default ProfileInfo;