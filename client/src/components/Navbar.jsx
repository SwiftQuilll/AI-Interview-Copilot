import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex gap-6">

      <Link
        to="/dashboard"
        className="hover:text-blue-400"
      >
        Dashboard
      </Link>

      <Link
        to="/history"
        className="hover:text-blue-400"
      >
        History
      </Link>
      <Link
  to="/interview"
  className="hover:text-blue-400"
>
  Interview
</Link>

    </nav>
  );
}

export default Navbar;