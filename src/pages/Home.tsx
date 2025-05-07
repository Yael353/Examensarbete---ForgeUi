import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-8">Välkommen till ForgeUI ✨</h1>
      <div className="space-x-4">
        <Link to="/components">
          <button className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Components
          </button>
        </Link>
        <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition">
          Något annat
        </button>
      </div>
    </div>
  );
}

export default Home;
