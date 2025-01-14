import { motion } from 'framer-motion';

const NavLinks = () => (
  <>
    {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
      <motion.a
        key={item}
        href={`#${item.toLowerCase()}`}
        whileHover={{ scale: 1.1 }}
        className="text-gray-600 hover:text-black"
      >
        {item}
      </motion.a>
    ))}
  </>
);

export default NavLinks;