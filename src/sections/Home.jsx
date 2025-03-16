import React from "react";
import content from "../content";
import { useDarkMode } from "../context/DarkModeContext";
import homeDesktop from "../assets/home_desktop.png";
import homeTab from "../assets/home_tab.png";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <motion.section
      className="max-w-4xl mx-auto text-left py-16 px-8 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`text-5xl mb-2 font-extrabold text-center ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {content.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className={`text-lg mt-4 text-center ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {content.subtitle}
      </motion.p>

      {/* Author & Date */}
      <motion.p
        className={`text-md my-2 text-center ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {content.author} - {content.date}
      </motion.p>

      {/* Download Research Paper Button */}
      <motion.a
        href="/exoplanet-analysis/assets/pdf/melangk_finalproject.pdf"
        download="melangk_finalproject.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white dark:from-blue-700 dark:to-cyan-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <FaDownload size={20} /> Download Research Paper
      </motion.a>

      <motion.img
        src={homeDesktop}
        className="hidden md:block mt-10 w-full rounded-lg shadow-lg"
        alt="Home Desktop"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <motion.img
        src={homeTab}
        className="md:hidden mt-10 w-full rounded-lg shadow-lg"
        alt="Home Tablet"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className={`mt-10 text-center ${
          darkMode ? "text-gray-300" : "text-gray-800"
        }`}
      >
        {content.abstract.text}
      </motion.p>
    </motion.section>
  );
};

export default Home;
