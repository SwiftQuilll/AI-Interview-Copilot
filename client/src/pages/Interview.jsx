import { useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function Interview() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [answer, setAnswer] = useState("");
  const [selectedQuestion, setSelectedQuestion] =
    useState("");

  const [evaluation, setEvaluation] =
    useState(null);

  const generateQuestions = async () => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const res = await API.post(
        "/interview/generate",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setQuestions(res.data.questions);
    } catch (error) {
      console.log(error);
      alert("Question Generation Failed");
    } finally {
      setLoading(false);
    }
  };

  const evaluateAnswer = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await API.post(
        "/evaluation/evaluate",
        {
          question: selectedQuestion,
          answer: answer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEvaluation(res.data);
    } catch (error) {
      console.log(error);
      alert("Evaluation Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">
          AI Interview Questions
        </h1>

        <button
          onClick={generateQuestions}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          Generate Questions
        </button>

        {loading && (
          <p className="mt-4">
            Generating Questions...
          </p>
        )}

        <div className="mt-8 space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow"
            >
              <span className="bg-blue-100 px-3 py-1 rounded">
                {item.type}
              </span>

              <p className="mt-3 font-medium">
                {item.question}
              </p>

              <button
                onClick={() =>
                  setSelectedQuestion(
                    item.question
                  )
                }
                className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
              >
                Answer This Question
              </button>
            </div>
          ))}
        </div>

        {selectedQuestion && (
          <div className="mt-10 bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-4">
              Selected Question
            </h2>

            <p className="mb-4">
              {selectedQuestion}
            </p>

            <textarea
              rows="6"
              value={answer}
              onChange={(e) =>
                setAnswer(e.target.value)
              }
              placeholder="Write your answer here..."
              className="w-full border p-3 rounded"
            />

            <button
              onClick={evaluateAnswer}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded"
            >
              Evaluate Answer
            </button>
          </div>
        )}

        {evaluation && (
          <div className="mt-8 space-y-4">
            <div className="bg-green-100 p-5 rounded-xl">
              <h3 className="text-2xl font-bold">
                Score: {evaluation.score}/10
              </h3>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold mb-2">
                Feedback
              </h3>

              <div className="whitespace-pre-wrap">
  {evaluation.feedback}
</div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold mb-2">
                Improved Answer
              </h3>

            <div className="whitespace-pre-wrap">
  {evaluation.improvedAnswer}
</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Interview;