import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function ReviewPanel({ review }) {
  const copyReview = () => {
    navigator.clipboard.writeText(review);
    alert("Review copied!");
  };

  return (
    <div className="h-full bg-[#111118] rounded-2xl border border-white/10 overflow-hidden flex flex-col">

      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">

        <div>
          <h2 className="text-2xl font-bold text-violet-400">
            🤖 AI Analysis
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Gemini AI Code Review
          </p>
        </div>

        {review && (
          <button
            onClick={copyReview}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition"
          >
            Copy
          </button>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-6">

        {review ? (
          <div className="text-gray-200 leading-8">

            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review}
            </Markdown>

          </div>
        ) : (
          <div className="h-full flex items-center justify-center">

            <div className="text-center">

              <div className="text-6xl mb-5">
                🤖
              </div>

              <h2 className="text-3xl font-bold text-white">
                AI Review
              </h2>

              <p className="text-gray-400 mt-4 max-w-sm">
                Click the
                <span className="text-violet-400 font-semibold">
                  {" "}Review Code{" "}
                </span>
                button to generate an AI review with bug detection,
                security analysis and performance suggestions.
              </p>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}