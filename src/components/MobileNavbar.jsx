import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaMoon, FaPhone, FaHome, FaBook, FaUser } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import { Moon, Sun } from "lucide-react";

const MobileNavbar = () => {
  const { toggleDarkMode } = useDarkMode();
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <motion.nav
      className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-3 md:hidden shadow-lg z-[2]"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="home" smooth={true} duration={800} className="cursor-pointer">
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaHome size={24} />
        </motion.div>
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={800}
        className="cursor-pointer"
      >
        <motion.div whileHover={{ scale: 1.2 }}>
          <FaPhone size={24} />
        </motion.div>
      </Link>

      <button onClick={toggleDarkMode} className="cursor-pointer">
        <motion.div whileHover={{ scale: 1.2 }}>
          {darkMode ? (
            <Sun className="text-yellow-400" size={24} />
          ) : (
            <Moon className="text-white" size={24} />
          )}
        </motion.div>
      </button>
    </motion.nav>
  );
};

export default MobileNavbar;
