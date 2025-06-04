import { Copy } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast, Toaster } from "sonner";

type InstallBlockProps = {
  command: string;
};

export const InstallBlock: React.FC<InstallBlockProps> = ({ command }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    toast.success("Copied command to clipboard!");
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
        <Toaster position="top-right" />
      </div>
    </div>
  );
};
