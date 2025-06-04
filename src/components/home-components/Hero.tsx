import { SparklesCore } from "../ui/Sparkles";
import { VideoText } from "../magicui/video-text";
import { ContainerTextFlip } from "../ui/container-text-flip";

function Home() {
  return (
    <div className="relative w-full md:py-20 py-10 flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Sparkles — täcker hela headern */}
      <div className="absolute left-0 w-full px-10 md:h-[50rem] h-[2rem] z-0 md:top-20 top-10">
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFD700"
        />
      </div>
      {/* Radial mask för fade utåt */}
      {/* <div className="absolute inset-0 bg-background [mask-image:radial-gradient(550px_250px_at_top,transparent_20%,white)] z-10"></div> */}
      <div
        className="absolute inset-0 bg-background z-10"
        style={{
          maskImage:
            "radial-gradient(800px 250px at top, transparent 20%, white)",
          WebkitMaskImage:
            "radial-gradient(550px 250px at top, transparent 20%, white)",
        }}
      ></div>
      {/* Content section */}
      <div className="h-auto w-full flex flex-col items-center justify-baseline relative z-20">
        <h1 className="z-20 font-cinzel md:text-[150px] lg:text-[200px] sm:text-4xl font-bold text-foreground text-center text-6xl">
          Forge<span className="text-gold z-20">UI</span>
        </h1>
        <VideoText
          src="/fire-video.mp4"
          className="relative py-4 mt-10 z-20 text-foreground min-h-[70px]"
        >
          Craft components — forge experiences — rule the web
        </VideoText>

        {/* Blåa linjer */}
        <div className="w-[60rem] h-fit relative sm:w-[50%] pt-4">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>

        <div className="py-6 relative">
          <div className="text-3xl font-semibold font-merriweather max-w-5xl mx-auto text-center leading-relaxed">
            Welcome to ForgeUI — a component library where you shape websites
            with powerful, handcrafted components, forged for performance,
            designed to deliver
            <span className="">
              <ContainerTextFlip className="mr-2" />
            </span>
            and complete digital experiences.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
