const Evaluation =
  require("../models/Evaluation");

const {
  evaluateAnswer,
} = require("../services/evaluationService");

const evaluate =
  async (req, res) => {
    try {
      const { question, answer } =
        req.body;

      const aiResponse =
        await evaluateAnswer(
          question,
          answer
        );

        console.log("=====AI RESPONSE ======")
        console.log(aiResponse);
        console.log("=========")
const cleanedResponse = aiResponse
  .replace(/```json|```/g, "")
  .trim();

console.log(cleanedResponse);

let parsed;

try {
  parsed = JSON.parse(cleanedResponse);
} catch (err) {
  console.log("Invalid JSON:");
  console.log(cleanedResponse);

  return res.status(500).json({
    message: "AI returned invalid JSON",
  });
}

      const saved =
        await Evaluation.create({
          userId: req.user.id,
          question,
          answer,
          score: parsed.score,
          feedback: parsed.feedback,
          improvedAnswer:
            parsed.improvedAnswer,
        });

      res.status(200).json(saved);

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          "Evaluation Failed",
      });
    }
  };

module.exports = {
  evaluate,
};