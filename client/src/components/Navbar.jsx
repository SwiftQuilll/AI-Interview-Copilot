import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav
      className="
        flex items-center gap-6
        px-8 py-4
        bg-white text-black border-b
        dark:bg-gray-900 dark:text-white dark:border-gray-700
      "
    >
      <Link to="/dashboard" className="hover:text-blue-400">
        Dashboard
      </Link>

      <Link to="/history" className="hover:text-blue-400">
        History
      </Link>

      <Link to="/interview" className="hover:text-blue-400">
        Interview
      </Link>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
          p-2 rounded-lg border
          hover:bg-gray-200 dark:hover:bg-gray-700
          border-gray-300 dark:border-gray-700
        "
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default Navbar;