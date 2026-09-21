import { useState } from "react";
import API from "../api/axios";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", file);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/resume/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalysis(res.data.analysis);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);

      alert("Upload Failed");
    }
  };

 return (
  <div>

    <div className="border-2 border-dashed border-gray-300 p-8 rounded-xl bg-gray-50">

      <h2 className="text-2xl font-semibold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
      >
        Upload Resume
      </button>

    </div>

    {loading && (
      <div className="mt-6">
        <p className="text-blue-600 font-semibold">
          Analyzing Resume...
        </p>
      </div>
    )}

    {analysis && (
      <div className="mt-8 space-y-6">

       <div className="bg-white shadow rounded-xl p-6">

  <div className="flex justify-between mb-3">
    <h2 className="text-2xl font-bold">
      ATS Score
    </h2>

    <span className="text-2xl font-bold">
      {analysis.atsScore}/100
    </span>
  </div>

  <div className="w-full bg-gray-200 rounded-full h-5">

    <div
      className="bg-green-500 h-5 rounded-full transition-all duration-700"
      style={{
        width: `${analysis.atsScore}%`,
      }}
    />

  </div>

</div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3">
            Strengths
          </h3>

          <ul className="list-disc pl-6">
            {analysis.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3">
            Weaknesses
          </h3>

          <ul className="list-disc pl-6">
            {analysis.weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-bold mb-3">
            Suggestions
          </h3>

          <ul className="list-disc pl-6">
            {analysis.suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    )}

  </div>
);
}

export default ResumeUpload;