import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <motion.a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="text-gray-600 hover:text-black"
    >
      <Github size={20} />
    </motion.a>
    <motion.a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="text-gray-600 hover:text-black"
    >
      <Linkedin size={20} />
    </motion.a>
    <motion.a
      href="mailto:your.email@example.com"
      whileHover={{ scale: 1.2 }}
      className="text-gray-600 hover:text-black"
    >
      <Mail size={20} />
    </motion.a>
  </div>
);

export default SocialLinks;