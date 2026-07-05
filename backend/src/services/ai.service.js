const { GoogleGenAI } = require("@google/genai");

const genai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(code) {

    const prompt = `
You are a Senior Software Engineer and an expert code reviewer.

Review the following code.

Return ONLY valid GitHub Flavored Markdown.

The response must contain these sections:

# Code Review

## Bugs

## Improvements

## Time Complexity

## Space Complexity

## Best Practices

## Improved Code

Rules:
- Use Markdown headings (#, ##).
- Use bullet points.
- Wrap every code example inside triple backticks.
- Example:

\`\`\`javascript
function sum(a, b) {
    return a + b;
}
\`\`\`

Code to review:

${code}
`;

    const response = await genai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        
});

    return response.text;
}

module.exports = generateContent;