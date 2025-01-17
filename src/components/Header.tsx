// import React from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-2xl font-bold"
//           >
//             Portfolio
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <NavLinks />
//             <SocialLinks />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             className="md:hidden py-4"
//           >
//             <div className="flex flex-col space-y-4">
//               <NavLinks />
//               <div className="flex justify-center space-x-4 pt-4">
//                 <SocialLinks />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </nav>
//     </header>
//   );
// };

// const NavLinks = () => (
//   <>
//     {['Projects', 'Skills', 'Contact'].map((item) => (
//       <motion.a
//         key={item}
//         href={`#${item.toLowerCase()}`}
//         whileHover={{ scale: 1.1 }}
//         className="text-gray-600 hover:text-black"
//       >
//         {item}
//       </motion.a>
//     ))}
//   </>
// );

// const SocialLinks = () => (
//   <div className="flex items-center space-x-4">
//     <motion.a
//       href="https://github.com/Mananjot17/"
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.2 }}
//       className="text-gray-600 hover:text-black"
//     >
//       <Github size={20} />
//     </motion.a>
//     <motion.a
//       href="https://www.linkedin.com/in/mananjot-singh-26a79223b/"
//       target="_blank"
//       rel="noopener noreferrer"
//       whileHover={{ scale: 1.2 }}
//       className="text-gray-600 hover:text-black"
//     >
//       <Linkedin size={20} />
//     </motion.a>
//     <motion.a
//       href="mailto:mananjotsingh17@gmail.com"
//       whileHover={{ scale: 1.2 }}
//       className="text-gray-600 hover:text-black"
//     >
//       <Mail size={20} />
//     </motion.a>
//   </div>
// );

// export default Header;
// export { NavLinks, SocialLinks };

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Function to close the mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-700 to-teal-500 text-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
            href='#profile'
            
          >
            My Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks closeMenu={closeMenu} />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks closeMenu={closeMenu} />
              <div className="flex justify-center space-x-4 pt-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

// Modify NavLinks to accept the closeMenu prop
const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => (
  <>
    {['Profile', 'Projects', 'Skills', 'Contact'].map((item) => (
      <motion.a
        key={item}
        href={`#${item.toLowerCase()}`}
        
        className="text-white hover:text-teal-200"
        onClick={closeMenu}  // Close the menu when a link is clicked
      >
        {item}
      </motion.a>
    ))}
  </>
);

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <motion.a
      href="https://github.com/Mananjot17/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="text-white hover:text-teal-200"
    >
      <Github size={20} />
    </motion.a>
    <motion.a
      href="https://www.linkedin.com/in/mananjot-singh-26a79223b/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      className="text-white hover:text-teal-200"
    >
      <Linkedin size={20} />
    </motion.a>
    <motion.a
      href="mailto:mananjotsingh17@gmail.com"
      whileHover={{ scale: 1.2 }}
      className="text-white hover:text-teal-200"
    >
      <Mail size={20} />
    </motion.a>
  </div>
);

export default Header;
export { NavLinks, SocialLinks };
