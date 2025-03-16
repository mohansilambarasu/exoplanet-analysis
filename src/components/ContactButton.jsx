import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";

const ContactButton = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      duration={800}
      className="fixed top-20 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:scale-110 transition cursor-pointer"
    >
      <FaPhone />
    </Link>
  );
};

export default ContactButton;
