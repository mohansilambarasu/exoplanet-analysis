import React from "react";
import content from "../content";
import { useDarkMode } from "../context/DarkModeContext";

const Home = () => {
  const { darkMode } = useDarkMode(); // Get dark mode state

  return (
    <section className="max-w-4xl mx-auto text-left py-10 px-6">
      <h1 className="text-5xl font-bold">{content.title}</h1>
      <p
        className={`text-lg  mt-4 ${
          darkMode ? "text-gray-200" : "text-gray-500"
        }`}
      >
        {content.subtitle}
      </p>
      <p
        className={`text-lg  my-2 ${
          darkMode ? "text-gray-200" : "text-gray-500"
        }`}
      >
        {content.author} - {content.date}
      </p>

      <img src="src/assets/home_desktop.png" className="hidden md:block" />
      <img src="src/assets/home_tab.png" className="md:hidden" />

      <p className="mt-6 text-lg">{content.abstract.text}</p>
    </section>
  );
};

export default Home;
