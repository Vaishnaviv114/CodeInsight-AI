import { useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

import "../App.css";

function Dashboard() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

  const [review, setReview] = useState("");

  async function reviewCode() {
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/get-response",
        { code }
      );

      setReview(response.data.review);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <div className="left">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <button className="review" onClick={reviewCode}>
          Review
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default Dashboard;