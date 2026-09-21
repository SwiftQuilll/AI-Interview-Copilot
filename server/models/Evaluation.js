const mongoose = require("mongoose");

const evaluationSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      question: {
        type: String,
      },

      answer: {
        type: String,
      },

      score: {
        type: Number,
      },

      feedback: {
        type: String,
      },

      improvedAnswer: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Evaluation",
  evaluationSchema
);