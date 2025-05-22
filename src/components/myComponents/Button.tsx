import { useState, type JSX } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ButtonItem {
  id: number;
  preview: JSX.Element;
  code: string;
}

export default function FancyButtonGallery() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const buttons: ButtonItem[] = [
    {
      id: 1,

      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-cyan-300 border-2 border-cyan-400 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 group"
        >
          <span className="absolute inset-0 bg-cyan-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 border-2 border-cyan-500 rounded-xl animate-pulse"></span>
          <span className="relative z-10">Neon Glow</span>
        </button>
      ),
      code: `<button type="button" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-cyan-300 border-2 border-cyan-400 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 group">
  <span class="absolute inset-0 bg-cyan-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
  <span class="absolute inset-0 border-2 border-cyan-500 rounded-xl animate-pulse"></span>
  <span class="relative z-10">Neon Glow</span>
</button>`,
    },
    {
      id: 2,

      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white border-2 border-purple-400 rounded-xl shadow-2xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-600 to-pink-600 opacity-90 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative z-10">Cyber Gradient</span>
        </button>
      ),
      code: `<button type="button" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white border-2 border-purple-400 rounded-xl shadow-2xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500 group">
  <span class="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-600 to-pink-600 opacity-90 group-hover:opacity-100 transition duration-300"></span>
  <span class="relative z-10">Cyber Gradient</span>
</button>`,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Koden kopierad till urklipp!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-6 mb-6">
        {buttons.map((btn) => (
          <div key={btn.id}>
            <div onClick={() => setActiveId(btn.id)} className="cursor-pointer">
              {btn.preview}
            </div>
          </div>
        ))}
      </div>

      {activeId !== null && (
        <div className="border rounded p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold"></h3>
            <button
              onClick={() =>
                copyToClipboard(
                  buttons.find((b) => b.id === activeId)?.code || ""
                )
              }
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
            >
              Kopiera
            </button>
          </div>

          <SyntaxHighlighter
            language="html"
            style={tomorrow}
            wrapLongLines={true}
            customStyle={{ borderRadius: 6, fontSize: 14 }}
          >
            {buttons.find((b) => b.id === activeId)?.code || ""}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
