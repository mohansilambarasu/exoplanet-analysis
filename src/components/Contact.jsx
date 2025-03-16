import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";

const Contact = () => {
  const { darkMode } = useDarkMode();

  return (
    <motion.section
      className="py-20 px-6 flex flex-col items-center text-center"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className={`text-4xl md:text-5xl font-bold mb-8 ${
          darkMode ? "text-white" : "text-gray-700"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`text-lg max-w-2xl mb-8 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Have a question about my research? Want to collaborate on a project?
        Please feel free to reach out - I’d love to connect!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-4">
        <motion.a
          href="mailto:mohansilambu77@gmail.com"
          whileHover={{ scale: 1.1 }}
          className={`flex items-center gap-3 px-6 py-3 rounded-md shadow-md hover:bg-gray-700 hover:text-white transition ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <FaEnvelope size={24} /> Send an Email
        </motion.a>

        <motion.a
          href="https://mohansilambarasu.github.io/my-portfolio/"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className={`flex items-center gap-3 px-6 py-3 rounded-md shadow-md hover:bg-gray-700 hover:text-white transition ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <FaEnvelope size={24} /> My Website
        </motion.a>
      </div>

      <div className="flex gap-6 mt-6">
        <motion.a
          href="https://www.linkedin.com/in/mohan-silambarasu-elangkumaran/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className={` text-3xl hover:bg-gray-700 hover:text-white transition ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/mohansilambarasu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className={` text-3xl transition ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <FaGithub />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
