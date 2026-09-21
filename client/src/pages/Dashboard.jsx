import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2">AI Interview Copilot</h1>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Upload your resume and get AI-powered ATS analysis.
          </p>

          <ResumeUpload />

          <button
            onClick={handleLogout}
            className="mt-8 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;