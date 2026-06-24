require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function test() {
  try {
    const prompt = `
You are an expert code reviewer.

Review the following code.

Code:
function sum() { return a + b; }
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    console.log(response.text);
  } catch (err) {
    console.error(err);
  }
}

test();