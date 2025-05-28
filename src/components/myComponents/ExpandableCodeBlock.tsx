import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Copy } from "lucide-react";

type ExpandableCodeBlockProps = {
  code: string;
  previewLines?: number;
};

export const ExpandableCodeBlock: React.FC<ExpandableCodeBlockProps> = ({
  code,
  previewLines = 10,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const lines = code.split("\n");
  const visibleCode = expanded ? lines : lines.slice(0, previewLines);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mb-10">
      <div className="relative mb-10">
        {/* Kodblock */}
        <SyntaxHighlighter
          language="tsx"
          wrapLongLines={true}
          style={anOldHope}
          customStyle={{
            padding: "1rem",
            borderRadius: "0.5rem",
            margin: 0,
            backgroundColor: "#2d2d2d",
          }}
        >
          {visibleCode.join("\n")}
        </SyntaxHighlighter>

        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 pr-4 pt-2 text-white hover:text-cyan-400 transition"
          aria-label="Copy to clipboard"
        >
          <Copy size={14} />
        </button>

        {copied && (
          <span className="absolute top-2 right-10 text-green-400 text-xs">
            Copied!
          </span>
        )}
      </div>

      {lines.length > previewLines && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-blue-400 px-4 py-1 rounded-full border border-gray-600 hover:bg-gray-700 transition"
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      )}
    </div>
  );
};
