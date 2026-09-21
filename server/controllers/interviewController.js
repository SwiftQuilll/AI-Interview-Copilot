const ResumeAnalysis =
  require("../models/ResumeAnalysis");

const InterviewQuestion =
  require("../models/InterviewQuestion");

const {
  generateQuestions,
} = require("../services/interviewService");

const createQuestions =
  async (req, res) => {
    try {
      const latestResume =
        await ResumeAnalysis.findOne({
          userId: req.user.id,
        }).sort({
          createdAt: -1,
        });

      if (!latestResume) {
        return res.status(404).json({
          message:
            "Please upload a resume first",
        });
      }

      const aiResponse =
        await generateQuestions(
          latestResume.resumeText
        );
        console.log(aiResponse);

      const parsed =
        JSON.parse(
          aiResponse
            .replace(
              /```json|```/g,
              ""
            )
            .trim()
        );

      const saved =
        await InterviewQuestion.create({
          userId: req.user.id,
          questions: parsed.questions,
        });

      res.status(200).json(saved);

    } catch (error) {
      console.log(error);

      res.status(500).json({
        message:
          "Question Generation Failed",
      });
    }
  };

module.exports = {
  createQuestions,
};