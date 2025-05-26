function Components() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {/* Original blå knapp */}
      <div>

        <button
          type="button"
          className="px-8 py-3 text-yellow-400 font-semibold border border-yellow-500 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)] bg-black hover:bg-yellow-500 hover:text-black transition"
        >
          Golden Path
        </button>
      </div>

      {/* Neon Glow */}
      <div>
        <button
          type="button"
          className="px-6 py-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-yellow-500 rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:bg-yellow-500 hover:text-black transition"
        >
          Neon Forge
        </button>
      </div>

      {/* Laser Border */}
      <div>
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 bg-[length:200%_auto] bg-right border-2 border-yellow-400 rounded-lg shadow-lg transition-all duration-500 ease-out hover:bg-left focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400"
          aria-label="Animated Gradient Button"
        >
          <span className="relative z-10">Launch Forge 🔥</span>
        </button>
      </div>

      {/* Gold Shimmer */}
      <div>
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-yellow-300 border-2 border-yellow-500 rounded-xl shadow-xl transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 group"
          aria-label="Gold Shimmer Button"
        >
          <span className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-900 opacity-80 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-50 blur-sm animate-pulse"></span>
          <span className="relative z-10">Gold Shimmer</span>
        </button>
      </div>

      {/* Cyber Gradient */}
      <div>
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 border-2 border-yellow-400 rounded-lg shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 animate-pulse"
          aria-label="Pulsating Gradient Button"
        >
          <span className="relative z-10">🔥 Ignite Forge</span>
        </button>
      </div>

      {/* Pulse Edge */}
      <div>
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
      </div>

      {/* Blazing Glow */}
      <div>
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-6 py-3 font-bold text-white bg-[#0a0a0a] border border-gray-700 rounded-lg shadow-[inset_0_4px_8px_rgba(255,255,255,0.05),0_4px_8px_rgba(0,0,0,0.9)] transition-all duration-300 ease-in-out hover:translate-y-0.5 active:translate-y-1 active:shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="3D Button"
        >
          <span className="relative z-10">3D Inpress</span>
        </button>
      </div>

      {/* Bounce Laser */}
      <div>
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
      </div>

      {/* Shimmer Pulse */}
      <div>
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white border-2 border-cyan-400 rounded-2xl shadow-lg transition duration-300 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-500 group"
          aria-label="Text Shimmer Pulse Button"
        >
          <span className="absolute inset-0 bg-cyan-950 opacity-90 group-hover:opacity-100 transition duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-70 blur-sm animate-pulse"></span>
          <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-[shimmer_2s_infinite]">
            Shimmer Pulse
          </span>
        </button>
      </div>
    </div>
  );
}

export default Components;
