import React from "react";
import { Moon, Sun } from "lucide-react";

import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-5 right-5 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-gray-700" />
      )}
    </button>
  );
}
