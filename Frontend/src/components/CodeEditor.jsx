import Editor from "@monaco-editor/react";
import { FiCopy, FiTrash2 } from "react-icons/fi";

export default function CodeEditor({
  code,
  setCode,
  language,
  setLanguage,
}) {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const clearCode = () => {
    if (window.confirm("Clear editor?")) {
      setCode("");
    }
  };

  return (
    <div className="h-full flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-[#111118] shadow-2xl">

      {/* Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16161F]">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Code Editor
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Paste your code and let AI review it.
          </p>

        </div>

        <div className="flex items-center gap-3">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#242434] border border-white/10 text-white px-4 py-2 rounded-xl outline-none"
          >
            <option value="javascript">JavaScript</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>

          <button
            onClick={copyCode}
            className="p-3 rounded-xl bg-[#242434] hover:bg-violet-600 transition"
          >
            <FiCopy className="text-white" />
          </button>

          <button
            onClick={clearCode}
            className="p-3 rounded-xl bg-[#242434] hover:bg-red-600 transition"
          >
            <FiTrash2 className="text-white" />
          </button>

        </div>

      </div>

      {/* Monaco */}

      <div className="flex-1">

        <Editor
          height="100%"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            fontFamily: "JetBrains Mono",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: "on",
            cursorBlinking: "smooth",
            smoothScrolling: true,
            padding: {
              top: 18,
            },
          }}
        />

      </div>

    </div>
  );
}