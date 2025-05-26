import { Copy } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const InstallBlock = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm install clsx";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-16 w-auto relative">
      <h2 className="text-2xl font-bold mb-4">Install dependency</h2>

      <div className="relative rounded-md">
        <SyntaxHighlighter
          language="bash"
          style={anOldHope}
          customStyle={{
            padding: "1rem",
            borderRadius: "0.5rem",
            margin: 0,
            fontSize: "1rem",
          }}
        >
          {command}
        </SyntaxHighlighter>

        {/* Copy-knapp */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-2 pt-1 text-white hover:text-cyan-400 pr-4 transition"
          aria-label="Copy to clipboard"
        >
          <Copy size={14} />
        </button>

        {/* Copied-text */}
        {copied && (
          <span className="absolute top-2 right-10 text-green-400 text-sm">
            Copied!
          </span>
        )}
      </div>
    </div>
  );
};
