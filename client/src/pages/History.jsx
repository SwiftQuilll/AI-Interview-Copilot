import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/resume/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHistory(res.data.analyses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Resume History</h1>

        {history.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl my-4 p-5 shadow"
          >
            <h3 className="text-xl font-bold">ATS Score: {item.atsScore}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Uploaded: {new Date(item.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;