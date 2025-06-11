import { Copy } from "lucide-react";
import { useState, type JSX } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast, Toaster } from "sonner";

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
      code: `
      <button type="button" class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-cyan-300 border-2 border-cyan-400 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 group">
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
          className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-gray-100 bg-black border border-gray-800 rounded-lg shadow-[inset_0_4px_8px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.9)]
          transition-all duration-300 ease-out hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] active:translate-y-1 active:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500"
          aria-label="Ghost Toggle Button"
        >
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-[-10px]">
            👻 Ghost Mode
          </span>
          <span className="absolute z-10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-cyan-400">
            💀 Spooky!
          </span>
        </button>
      ),
      code: `
      <button
          type="button"
          className="group relative inline-flex items-center justify-center px-6 py-3 font-bold text-gray-100 bg-black border border-gray-800 rounded-lg shadow-[inset_0_4px_8px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.9)]
          transition-all duration-300 ease-out hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] active:translate-y-1 active:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500"
          aria-label="Ghost Toggle Button"
        >
          <span className="relative z-10 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:translate-y-[-10px]">
            👻 Ghost Mode
          </span>
          <span className="absolute z-10 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 text-cyan-400">
            💀 Spooky!
          </span>
        </button>`,
    },
    {
      id: 3,
      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-pink-300 border-2 border-pink-400 rounded-xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-500 group"
          aria-label="Laser Border Button"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-700 to-pink-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute top-0 left-0 h-0.5 w-0 bg-pink-400 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-pink-400 group-hover:w-full transition-all duration-500 ease-out delay-200"></span>
          <span className="relative z-10">Laser Edge</span>
        </button>
      ),
      code: `
      <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-pink-300 border-2 border-pink-400 rounded-xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-500 group"
          aria-label="Laser Border Button"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-700 to-pink-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute top-0 left-0 h-0.5 w-0 bg-pink-400 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-pink-400 group-hover:w-full transition-all duration-500 ease-out delay-200"></span>
          <span className="relative z-10">Laser Edge</span>
        </button>`,
    },
    {
      id: 4,
      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-yellow-300 border-2 border-yellow-500 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 group"
          aria-label="Gold Shimmer Button"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-50 blur-sm animate-pulse"></span>
          <span className="relative z-10">Gold Shimmer</span>
        </button>
      ),
      code: `
      <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-yellow-300 border-2 border-yellow-500 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 group"
          aria-label="Gold Shimmer Button"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-50 blur-sm animate-pulse"></span>
          <span className="relative z-10">Gold Shimmer</span>
        </button>`,
    },
    {
      id: 5,
      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-green-300 border-2 border-green-400 rounded-xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500 group"
          aria-label="Pulse Edge Button"
        >
          <span className="absolute inset-0 bg-green-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 border-2 border-green-500 rounded-xl animate-ping group-hover:animate-none"></span>
          <span className="relative z-10">Pulse Edge</span>
        </button>
      ),
      code: `
      <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-green-300 border-2 border-green-400 rounded-xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500 group"
          aria-label="Pulse Edge Button"
         >
          <span className="absolute inset-0 bg-green-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 border-2 border-green-500 rounded-xl animate-ping group-hover:animate-none"></span>
          <span className="relative z-10">Pulse Edge</span>
        </button>`,
    },
    {
      id: 6,
      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-orange-300 border-2 border-orange-400 rounded-xl shadow-2xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500 group"
          aria-label="Blazing Glow Button"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-orange-700 to-orange-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 border-2 border-orange-500 rounded-xl animate-pulse group-hover:animate-none"></span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">Blazing Glow</span>
        </button>
      ),
      code: `
      <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-orange-300 border-2 border-orange-400 rounded-xl shadow-2xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500 group"
          aria-label="Blazing Glow Button"
          >
          <span className="absolute inset-0 bg-gradient-to-br from-orange-700 to-orange-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 border-2 border-orange-500 rounded-xl animate-pulse group-hover:animate-none"></span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">Blazing Glow</span>
      </button>`,
    },
    {
      id: 7,
      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-bold text-fuchsia-300 border-2 border-fuchsia-500 rounded-xl shadow-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-500 group animate-bounce"
          aria-label="Neon Bounce Laser Button"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-fuchsia-800 to-fuchsia-950 opacity-90 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute top-0 left-0 h-0.5 w-0 bg-fuchsia-400 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-fuchsia-400 group-hover:w-full transition-all duration-500 ease-out delay-200"></span>
          <span className="relative z-10">Bounce Laser</span>
        </button>
      ),
      code: `
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-bold text-fuchsia-300 border-2 border-fuchsia-500 rounded-xl shadow-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-500 group animate-bounce"
          aria-label="Neon Bounce Laser Button"
          >
          <span className="absolute inset-0 bg-gradient-to-br from-fuchsia-800 to-fuchsia-950 opacity-90 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute top-0 left-0 h-0.5 w-0 bg-fuchsia-400 group-hover:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-fuchsia-400 group-hover:w-full transition-all duration-500 ease-out delay-200"></span>
          <span className="relative z-10">Bounce Laser</span>
        </button>`,
    },
    {
      id: 8,
      preview: (
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white border-2 border-cyan-400 rounded-2xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 group"
          aria-label="Text Shimmer Pulse Button"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-cyan-800 to-cyan-950 opacity-90 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 group-hover:opacity-50 blur-sm animate-pulse"></span>
          <span className="relative z-10 animate-pulse">Shimmer Pulse</span>
        </button>
      ),
      code: `
      <button
        type="button"
        class="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white border-2 border-cyan-400 rounded-2xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 group"
        aria-label="Text Shimmer Pulse Button"
        >
        <span class="absolute inset-0 bg-gradient-to-br from-cyan-800 to-cyan-950 opacity-90 group-hover:opacity-100 transition duration-300"></span>
        <span class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 group-hover:opacity-50 blur-sm animate-pulse"></span>
        <span class="relative z-10 animate-pulse">Shimmer Pulse</span>
      </button>`,
    },
    {
      id: 9,
      preview: (
        <button
          type="button"
          className="px-6 py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-yellow-500 rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:bg-yellow-500 hover:text-black transition"
        >
          Neon Forge
        </button>
      ),
      code: `
      <button
          type="button"
          className="px-6 py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-yellow-500 rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:bg-yellow-500 hover:text-black transition"
          >
          Neon Forge
      </button>`,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Button copied to clipboard");
  };

  return (
    <div className="max-w-full mx-4 md:p-6">
      <h3 className="flex text-5xl text-accent-foreground/70 justify-stard font-bold pb-2 ">
        Buttons
      </h3>
      <p className="text-2xl pb-4 text-accent-foreground/70">
        A variety of buttons to explore and modify at your command 🔥{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 border-2 bg-background p-4 rounded-md">
        {buttons.map((btn) => (
          <div
            key={btn.id}
            className="flex justify-evenly border-2 bg-primary rounded-xl p-8"
          >
            <div onClick={() => setActiveId(btn.id)} className="cursor-pointer">
              {btn.preview}
            </div>
          </div>
        ))}
      </div>

      {activeId !== null && (
        <div className="border bg-accent rounded p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">Code</h3>
            <button
              onClick={() =>
                copyToClipboard(
                  buttons.find((b) => b.id === activeId)?.code || ""
                )
              }
              className="text-white p-2 rounded hover:bg-green-700 transition"
            >
              <Copy size={14} />
            </button>
          </div>

          <SyntaxHighlighter
            language="javascript"
            style={anOldHope}
            wrapLongLines
            customStyle={{
              borderRadius: 8,
              fontSize: 14,
              padding: "16px",
              maxHeight: "600px",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {buttons.find((b) => b.id === activeId)?.code || ""}
          </SyntaxHighlighter>
        </div>
      )}
      <Toaster position="top-right" />
    </div>
  );
}
