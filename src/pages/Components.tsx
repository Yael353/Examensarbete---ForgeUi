// import ComponentsPage from "@/components/ComponentsPage";
// import { VideoText } from "@/components/magicui/video-text";
// import { SidebarBody, Sidebar } from "@/components/ui/sidebar";
// import { SparklesCore } from "@/components/ui/Sparkles";
// import { Outlet } from "react-router-dom";

function Components() {
  return (
    <div className="relative w-full py-10 flex h-screen flex-col items-center justify-center overflow-hidden rounded-md bg-background">
      {/* Sparkles — täcker hela headern
      <div className="absolute left-0 w-full h-[50rem] z-0 top-20">
        <SparklesCore
          background="transparent"
          minSize={2}
          maxSize={4}
          particleDensity={1500}
          className="w-full h-full"
          particleColor="#FFD700"
        />
      </div> */}
      {/* Radial mask för fade utåt */}
      {/* <div className="absolute inset-0 bg-background [mask-image:radial-gradient(550px_250px_at_top,transparent_20%,white)] z-10"></div> */}
      {/* <div
        className="absolute inset-0 bg-background z-10"
        style={{
          maskImage:
            "radial-gradient(800px 250px at top, transparent 20%, white)",
          WebkitMaskImage:
            "radial-gradient(550px 250px at top, transparent 20%, white)",
        }}
      ></div> */}
      {/* Content section */}
      {/* <div className="h-auto w-full flex flex-col items-center justify-baseline relative z-20">
        <h1 className="z-20 font-cinzel md:text-[150px] lg:text-[200px] sm:text-4xl font-bold text-foreground text-center text-6xl">
          Forge<span className="text-gold z-20">UI</span>
        </h1>
        <VideoText
          src="/fire-video.mp4"
          className="relative md:text-2xl lg:text-4xl py-4 mt-10 z-20 text-foreground font-cinzel min-h-[70px]"
        > */}
      {/* Now, lets Forge! */}
      {/* </VideoText> */}

      {/* <p className="md:text-2xl lg:text-4xl py-4 z-20 text-foreground font-cinzel">
                Hammer your Code and forge your Website with fire!
                </p> */}

      {/* Blåa linjer */}
      {/* <div className="w-[60rem] h-fit relative sm:w-[50%] pt-4">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[8px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
      </div> */}

      {/* <ComponentsPage /> */}
    </div>
  );
}

export default Components;
