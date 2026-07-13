import { useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import CodeEditor from "../components/CodeEditor";
import ReviewPanel from "../components/ReviewPanel";

export default function Dashboard() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");

  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    if (!code.trim()) {
      alert("Please enter some code.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://codeinsight-ai-backend-xml9.onrender.com",
        {
          code,
          language,
        }
      );

      setReview(response.data.review);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#09090F] flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white">
              AI Code Reviewer
            </h1>

            <p className="text-gray-400 mt-2">
              Detect bugs, security issues and performance improvements using
              Gemini AI.
            </p>
          </div>

          <button
            onClick={reviewCode}
            disabled={loading}
            className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-400 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            {loading ? "Reviewing..." : "✨ Review Code"}
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 h-[78vh]">
          <CodeEditor
            code={code}
            setCode={setCode}
            language={language}
            setLanguage={setLanguage}
          />

          <ReviewPanel
            review={review}
            setReview={setReview}
          />
        </div>
      </div>
    </div>
  );
}