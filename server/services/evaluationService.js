const { GoogleGenerativeAI } = require("@google/generative-ai");

const evaluateAnswer = async (
  question,
  answer
) => {
  const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
  );

 const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

const prompt = `
You are a Senior Software Engineer interviewer.

Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.

Return ONLY JSON:

{
  "score": 0,
  "feedback": "",
  "improvedAnswer": ""
}

Rules:
- score between 0 and 10
- feedback max 3 lines
- improvedAnswer max 150 words
- concise and interview-focused
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  evaluateAnswer,
};