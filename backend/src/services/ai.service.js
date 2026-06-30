const { GoogleGenAI } = require("@google/genai");

console.log("Service Key:", process.env.GOOGLE_GEMINI_KEY);

const genai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(code) {

    const prompt = `
You are a Senior Software Engineer and an expert code reviewer.

Review the following code.

Return the response ONLY in valid GitHub Flavored Markdown.

Rules:
- Use # for the main title.
- Use ## for section headings.
- Use bullet points wherever appropriate.
- Wrap EVERY code snippet inside triple backticks with the language name.
- Example:

\`\`\`javascript
function sum(a, b) {
    return a + b;
}
\`\`\`

- Never write "javascript", "cpp", or any language name as plain text.
- Do not use HTML.
- Do not use Markdown tables.
- Make the output clean and professional.

The review must contain these sections:

# Code Review

## Bugs

## Improvements

## Time Complexity

## Space Complexity

## Best Practices

## Improved Code

Code to review:

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