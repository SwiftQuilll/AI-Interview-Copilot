const fs = require("fs");
const pdfParse = require("pdf-parse");
console.log(pdfParse);

const ResumeAnalysis = require("../models/ResumeAnalysis");
const { analyzeResume } = require("../services/geminiService");

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    

    const pdfBuffer = fs.readFileSync(req.file.path);

    const parsedData = await pdfParse(pdfBuffer);

    const resumeText = parsedData.text;
    fs.unlinkSync(req.file.path);

    const aiResponse = await analyzeResume(resumeText);

    let analysis;

    try {
      analysis = JSON.parse(
        aiResponse.replace(/```json|```/g, "").trim()
      );
    } catch {
      return res.status(500).json({
        message: "AI returned invalid JSON",
        rawResponse: aiResponse,
      });
    }

    const savedAnalysis =
      await ResumeAnalysis.create({
        userId: req.user.id,
        resumeText,
        atsScore: analysis.atsScore,
        strengths: analysis.strengths,
        weaknesses: analysis.weaknesses,
        suggestions: analysis.suggestions,
      });

    res.status(200).json({
      message: "Resume Analyzed Successfully",
      analysis: savedAnalysis,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error Analyzing Resume",
    });
  }
};


const getResumeHistory = async (req, res) => {
  try {
    const analyses = await ResumeAnalysis.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      count: analyses.length,
      analyses,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error Fetching History",
    });
  }
};

module.exports = {
  uploadResume,
  getResumeHistory,
};