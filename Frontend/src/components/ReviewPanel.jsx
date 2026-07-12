import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/atom-one-dark.css";

import {
  FiCopy,
  FiTrash2,
  FiCpu,
} from "react-icons/fi";

export default function ReviewPanel({
  review,
  setReview,
}) {
  function copyReview() {
    navigator.clipboard.writeText(review);

    alert("Review copied!");
  }

  function clearReview() {
    setReview("");
  }

  return (
    <div className="h-full flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#111118] shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#17171f]">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">

            <FiCpu className="text-white text-xl" />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              AI Review
            </h2>

            <p className="text-sm text-gray-400">
              Gemini AI Analysis
            </p>

          </div>

        </div>

        {review && (

          <div className="flex gap-3">

            <button
              onClick={copyReview}
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-xl text-white"
            >
              <FiCopy />
              Copy
            </button>

            <button
              onClick={clearReview}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white"
            >
              <FiTrash2 />
              Clear
            </button>

          </div>

        )}

      </div>

      {/* Body */}

      <div className="flex-1 overflow-y-auto p-6">

        {review ? (

          <div className="text-gray-200 leading-8 whitespace-pre-wrap">

            <Markdown
              rehypePlugins={[rehypeHighlight]}
            >
              {review}
            </Markdown>

          </div>

        ) : (

          <div className="h-full flex items-center justify-center">

            <div className="text-center max-w-md">

              <div className="text-7xl mb-5">
                🤖
              </div>

              <h2 className="text-3xl font-bold text-white">
                Ready to Review
              </h2>

              <p className="text-gray-400 mt-5 leading-8">

                Paste your code in the editor and click

                <span className="text-violet-400 font-semibold">
                  {" "}Review Code{" "}
                </span>

                to receive AI powered suggestions for bugs,
                performance, security and code quality.

              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">

                <span className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-300">
                  Bug Detection
                </span>

                <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300">
                  Performance
                </span>

                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300">
                  Security
                </span>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}