const { GoogleGenAI } = require("@google/genai");
console.log(process.env.GOOGLE_GEMINI_KEY);

const genai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(prompt) {
  const response = await genai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    systemInstructions: `
      you are a code reviewer
    `
  });
  return response.text;
}

module.exports = generateContent;