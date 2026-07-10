import Editor from "@monaco-editor/react";

export default function CodeEditor({
  code,
  setCode,
  language,
  setLanguage,
}) {
  return (
    <div className="h-full bg-[#111118] rounded-2xl border border-white/10 overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">

        <h2 className="text-xl font-bold text-white">
          Code Editor
        </h2>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#1a1a24] text-white border border-white/10 rounded-lg px-3 py-2 outline-none"
        >
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>

      </div>

      <Editor
        height="100%"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value || "")}
        options={{
          fontSize: 15,
          minimap: { enabled: false },
          wordWrap: "on",
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: {
            top: 20,
          },
        }}
      />

    </div>
  );
}