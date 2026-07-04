import { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);

  return (
    <main>
      <div className="left">
        <Editor
          value={code}
          onValueChange={(value) => setCode(value)}
          highlight={(value) =>
            Prism.highlight(
              value,
              Prism.languages.javascript,
              "javascript"
            )
          }
          padding={15}
          textareaClassName="editor"
          preClassName="editor-highlight"
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 16,
            minHeight: "400px",
            background: "#2d2d2d",
            color: "#fff",
            borderRadius: "8px",
          }}
        />
      </div>

      <div className="right">
        Review
      </div>
    </main>
  );
}

export default App;