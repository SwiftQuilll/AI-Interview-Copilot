const { GoogleGenerativeAI } = require("@google/generative-ai");

const analyzeResume = async (resumeText) => {
  try {
    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

  const model = genAI.getGenerativeModel({
 model: "gemini-2.5-flash",
});

    const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume and return ONLY JSON.

Format:

{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

    const result = await model.generateContent(prompt);

    return result.response.text();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { analyzeResume };