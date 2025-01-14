// // import { useState, ChangeEvent, FormEvent } from 'react';
// // import { motion } from 'framer-motion';
// // import { Mail, Phone, MapPin } from 'lucide-react';
// // import emailjs from '@emailjs/browser';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // // Define the shape of the form data
// // interface FormData {
// //   name: string;
// //   email: string;
// //   message: string;
// // }

// // interface ContactInfoProps {
// //   icon: React.ReactNode;
// //   title: string;
// //   content: string;
// // }

// // const Contact: React.FC = () => {
// //   const [formData, setFormData] = useState<FormData>({
// //     name: '',
// //     email: '',
// //     message: '',
// //   });

// //   // Handle form input changes
// //   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();

// //     emailjs
// //       .send(
// //         'service_sq0ogqv', // Replace with your Service ID
// //         'template_bamje55', // Replace with your Template ID
// //         {
// //           from_name: formData.name,
// //           from_email: formData.email,
// //           message: formData.message,
// //         },
// //         'Fhs6c4Im79iJkYvSE' // Replace with your Public Key
// //       )
// //       .then(
// //         () => {
// //           toast.success('Email sent successfully!', {
// //             position: 'top-center',
// //             autoClose: 3000,
// //           });
// //           setFormData({ name: '', email: '', message: '' });
// //         },
// //         (error) => {
// //           console.error('Failed to send email:', error);
// //           toast.error('Failed to send email. Please try again later.', {
// //             position: 'top-center',
// //             autoClose: 3000,
// //           });
// //         }
// //       );
// //   };

// //   return (
// //     <section id="contact" className="py-20 bg-gray-50">
// //       <div className="container mx-auto px-6">
// //         <ToastContainer />
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
// //           <p className="text-gray-600">Let's discuss your next project</p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 gap-12">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 0.5 }}
// //           >
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
// //                   placeholder="Your name"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
// //                   placeholder="your@email.com"
// //                   required
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-2">
// //                   Message
// //                 </label>
// //                 <textarea
// //                   name="message"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   rows={4}
// //                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
// //                   placeholder="Your message"
// //                   required
// //                 ></textarea>
// //               </div>
// //               <motion.button
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //                 type="submit"
// //                 className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
// //               >
// //                 Send Message
// //               </motion.button>
// //             </form>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 0.5 }}
// //             className="space-y-8"
// //           >
// //             <ContactInfo
// //               icon={<Mail />}
// //               title="Email"
// //               content="mananjotsingh17@gmail.com"
// //             />
// //             <ContactInfo
// //               icon={<Phone />}
// //               title="Phone"
// //               content="+91 6376169037"
// //             />
// //             <ContactInfo
// //               icon={<MapPin />}
// //               title="Location"
// //               content="Kota, Rajasthan, India"
// //             />
// //             <div className="bg-white p-6 rounded-lg shadow-lg">
// //               <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
// //               <p className="text-gray-600">
// //                 I'm always open to discussing new projects, creative ideas, or
// //                 opportunities to be part of your visions.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => (
// //   <div className="flex items-start space-x-4">
// //     <div className="text-blue-600">{icon}</div>
// //     <div>
// //       <h4 className="font-medium">{title}</h4>
// //       <p className="text-gray-600">{content}</p>
// //     </div>
// //   </div>
// // );

// // export default Contact;


// import { useState, ChangeEvent, FormEvent } from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import emailjs from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Define the shape of the form data
// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// interface ContactInfoProps {
//   icon: React.ReactNode;
//   title: string;
//   content: string;
// }

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: '',
//   });

//   // Handle form input changes
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         'service_sq0ogqv', // Replace with your Service ID
//         'template_bamje55', // Replace with your Template ID
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         'Fhs6c4Im79iJkYvSE' // Replace with your Public Key
//       )
//       .then(
//         () => {
//           toast.success('Email sent successfully!', {
//             position: 'top-center',
//             autoClose: 3000,
//           });
//           setFormData({ name: '', email: '', message: '' });
//         },
//         (error) => {
//           console.error('Failed to send email:', error);
//           toast.error('Failed to send email. Please try again later.', {
//             position: 'top-center',
//             autoClose: 3000,
//           });
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50">
//       <div className="container mx-auto px-6">
//         <ToastContainer />
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 text-blue-700">Get In Touch</h2>
//           <p className="text-gray-600">I'd love to hear from you! Let's discuss your next project.</p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-16">
//           {/* Form Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={5}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
//                   placeholder="Your message"
//                   required
//                 ></textarea>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Contact Information Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//             className="space-y-8"
//           >
//             <ContactInfo
//               icon={<Mail className="w-6 h-6" />}
//               title="Email"
//               content="mananjotsingh17@gmail.com"
//             />
//             <ContactInfo
//               icon={<Phone className="w-6 h-6" />}
//               title="Phone"
//               content="+91 6376169037"
//             />
//             <ContactInfo
//               icon={<MapPin className="w-6 h-6" />}
//               title="Location"
//               content="Kota, Rajasthan, India"
//             />
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold text-blue-700 mb-4">Let's Connect</h3>
//               <p className="text-gray-600">
//                 I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Reach out today!
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => (
//   <div className="flex items-start space-x-4">
//     <div className="text-blue-600 flex-shrink-0">{icon}</div>
//     <div>
//       <h4 className="text-lg font-medium text-gray-800">{title}</h4>
//       <p className="text-gray-600">{content}</p>
//     </div>
//   </div>
// );

// export default Contact;


import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        'service_sq0ogqv', // Replace with your Service ID
        'template_bamje55', // Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'Fhs6c4Im79iJkYvSE' // Replace with your Public Key
      )
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          toast.error('Failed to send email. Please try again later.', {
            position: 'top-center',
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-teal-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <ToastContainer />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-700">Get In Touch</h2>
          <p className="text-gray-600">I'd love to hear from you! Let's discuss your next project.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<Mail className="w-6 h-6 text-teal-600" />}
              title="Email"
              content="mananjotsingh17@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6 text-teal-600" />}
              title="Phone"
              content="+91 6376169037"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6 text-teal-600" />}
              title="Location"
              content="Kota, Rajasthan, India"
            />
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-teal-700 mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Reach out today!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4">
    <div className="text-teal-600 flex-shrink-0">{icon}</div>
    <div>
      <h4 className="text-lg font-medium text-gray-800">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;
