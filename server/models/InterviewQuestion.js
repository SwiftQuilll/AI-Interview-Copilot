const mongoose = require("mongoose");

const interviewQuestionSchema =
  new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

     questions: [
  {
    type: {
      type: String,
    },
    question: {
      type: String,
    },
  },
],
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "InterviewQuestion",
  interviewQuestionSchema
);