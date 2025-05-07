import { SparklesCore } from "../components/ui/Sparkles";

function Hero() {
  return (
    <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Sparkles */}
      <div className="absolute top-35 left-0 w-full h-[50rem] z-0">
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFD700"
        />
        {/* Radial mask för fade utåt */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(400px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Content section */}
      <div className="h-[40rem] w-full flex flex-col items-center justify-center relative z-20">
        <h1 className="font-cinzel md:text-7xl lg:text-9xl font-bold text-center text-6xl text-white">
          Forge<span className="text-[#ffc125]">UI</span>
        </h1>
        <p className="text-slate-300 text-lg italic py-4">
          Forging your components with code and fire
        </p>

        {/* Blåa linjer */}
        <div className="w-[60rem] h-20 relative mb-10 sm:w-[50%]">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        {/* Knappar */}
        <div className="flex gap-6  w-[24rem]">
          <a href="/components" className="flex-1">
            <button className="w-full h-16 p-4 text-2xl font-bold italic bg-black text-[#FFD700] rounded-lg shadow transition duration-300 hover:ring-2 hover:ring-[#FFD700] hover:scale-105">
              Components
            </button>
          </a>
          <a href="" className="flex-1">
            <button className="w-full h-16 p-4 text-2xl font-bold italic bg-[#FFD700] text-black rounded-lg shadow transition duration-300 hover:ring-2 hover:ring-white hover:scale-105">
              Test
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
