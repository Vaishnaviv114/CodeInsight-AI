const { GoogleGenAI } = require("@google/genai");

console.log("Service Key:", process.env.GOOGLE_GEMINI_KEY);

const genai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(code) {

    const prompt = `
You are an expert code reviewer.

Review the following code.

Give:
1. Bugs
2. Improvements
3. Time Complexity
4. Space Complexity
5. Best Practices

Code:

${code}
`;

    let lastError;

    for (let i = 0; i < 3; i++) {
        try {
            const response = await genai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
            });

            return response.text;

        } catch (err) {

            lastError = err;

            // Retry only for 503
            if (err.status === 503) {
                console.log(`Retry ${i + 1}...`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                continue;
            }

            throw err;
        }
    }

    throw lastError;
}

module.exports = generateContent;