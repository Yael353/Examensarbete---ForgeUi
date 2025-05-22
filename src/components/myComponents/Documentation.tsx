import { useNavigate } from "react-router-dom";

export default function Documentation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen border-2 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">📖 Dokumentation</h1>

        <div className="bg-[#0A1C2F] border border-blue-700 rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-cyan-400">🚀 Innehåll</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>📦 Installation</li>
            <li>🖥️ Teknisk stack</li>
            <li>🎨 Komponentgalleri</li>
            <li>📝 Lägga till nya knappar</li>
            <li>📄 Externa dependencies</li>
            <li>⚙️ Licens</li>
          </ul>
        </div>

        <div className="bg-[#0A1C2F] border border-blue-700 rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-yellow-400">
            📝 Exempel: Lägga till en ny knapp
          </h2>
          <p className="text-base">
            Gå till{" "}
            <code className="text-cyan-300">FancyButtonGallery.tsx</code> och
            lägg till en ny knapp i
            <code className="text-cyan-300"> buttons</code>-arrayen:
          </p>
          <pre className="bg-[#07111C] p-4 rounded-xl text-sm overflow-x-auto">
            {`{
  label: "Min Nya Knapp",
  preview: <button className="cool-button">Klicka här</button>,
  code: \`<button class="cool-button">Klicka här</button>\`,
}`}
          </pre>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
          >
            Tillbaka till projektet
          </button>
        </div>
      </div>
    </div>
  );
}
