const { GoogleGenerativeAI } =
  require("@google/generative-ai");

const generateQuestions = async (
  resumeText
) => {
  const genAI =
    new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

  const model =
    genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

  const prompt = `
Based on the resume below, generate 10 interview questions.

Mix:
- Technical Questions
- Project Questions
- HR Questions

Return ONLY JSON.

{
  "questions": [
    {
      "type": "HR",
      "question": "..."
    }
  ]
}

Resume:

${resumeText}
`;

  const result =
    await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  generateQuestions,
};