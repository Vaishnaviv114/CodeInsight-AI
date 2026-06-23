const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: "prompt",
    systemInstructions: `
      you are a code reviewer
    `
  });
  return response.text;
}

module.exports = generateContent;