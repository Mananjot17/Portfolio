
import { motion } from 'framer-motion';

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="relative w-48 h-48 md:w-64 md:h-64"
  >
    <div className="absolute inset-0 bg-teal-100 rounded-full blur-2xl opacity-20 animate-pulse"></div>
    <img
      src="images/profile.jpg"
      alt="Profile"
      className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
    />
  </motion.div>
);

export default ProfileImage;