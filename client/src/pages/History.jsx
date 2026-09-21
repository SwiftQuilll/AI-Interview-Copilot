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

      const res = await API.get(
        "/resume/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setHistory(res.data.analyses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <Navbar />
      <h1>Resume History</h1>

      {history.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>ATS Score: {item.atsScore}</h3>

          <p>
            Uploaded:
            {new Date(
              item.createdAt
            ).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default History;