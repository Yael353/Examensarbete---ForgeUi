export default function Button() {
  return (
    <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition duration-300 ease-out border-2 border-blue-500 rounded-xl shadow-lg group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-80 group-hover:opacity-100 transition duration-300"></span>
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-700 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
      <span className="relative z-10">klicka här</span>
    </button>
  );
}
