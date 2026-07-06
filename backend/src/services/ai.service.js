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
IMPORTANT:
Do not generate any corrected or improved code.
Never include an "Improved Code" section.
Only explain what is wrong and how it can be improved.
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