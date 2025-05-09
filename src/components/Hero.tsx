import { SparklesCore } from "../components/ui/Sparkles";
import { ContainerTextFlip } from "./ui/container-text-flip";

function Home() {
  return (
    <div className="relative w-full py-10 flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Sparkles — täcker hela headern */}
      <div className="absolute left-0 w-full h-[50rem] z-0 top-13">
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={1500}
          className="w-full h-full"
          particleColor="#FFD700"
        />
        {/* Radial mask för fade utåt */}
      </div>
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(500px_200px_at_top,transparent_20%,white)] z-10"></div>

      {/* Content section */}
      <div className="h-[40rem] w-full flex flex-col items-center justify-baseline relative z-20">
        <h1 className="z-20 font-cinzel md:text-7xl lg:text-9xl font-bold text-foreground text-center text-6xl">
          Forge<span className="text-gold z-20">UI</span>
        </h1>
        <p className="text-lg italic py-4 z-20 text-foreground font-cinzel">
          Forging your components with code and fire
        </p>

        {/* Blåa linjer */}
        <div className="w-[60rem] h-fit relative sm:w-[50%]">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <div className="py-12">
          <p className="text-2xl font-semibold font-cinzel">
            We give you the components to craft{" "}
            <span>
              <ContainerTextFlip />
            </span>{" "}
            websites
          </p>
        </div>

        {/* Knappar */}
        <div className="flex gap-6 mt-10 w-[24rem]">
          <a href="/components" className="flex-1">
            <button className="w-full bg-background text-foreground h-16 p-4 text-2xl font-bold italic rounded-lg shadow transition duration-300 hover:ring-2 hover:ring-[#FFD700] hover:scale-105">
              Components
            </button>
          </a>
          <a href="" className="flex-1">
            <button className="w-full h-16 p-4 text-2xl font-bold italic bg-gold text-foreground rounded-lg shadow transition duration-300 hover:ring-2 hover:ring-white hover:scale-105">
              Test
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
