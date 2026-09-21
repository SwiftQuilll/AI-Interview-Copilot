const mongoose = require("mongoose");

const resumeAnalysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resumeText: {
      type: String,
      required: true,
    },

    atsScore: {
      type: Number,
      default: 0,
    },

    strengths: [String],

    weaknesses: [String],

    suggestions: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ResumeAnalysis",
  resumeAnalysisSchema
);