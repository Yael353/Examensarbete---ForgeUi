import { ModeToggle } from "@/components/darkmode/Mode-Toggle";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import { SparklesCore } from "@/components/ui/Sparkles";

import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div>
      <div className="bg-background h-screen">
        <div className="flex justify-between pt-4 pr-4">
          <img src="./forge2.png" alt="Forge Logo" className="w-50 rounded-lg h-10 pl-4" />
          <ModeToggle />
        </div>
        {/* <div className="relative w-full py-6 flex h-[8rem] flex-col items-center justify-center overflow-hidden rounded-md bg-background">
          <div className="absolute left-0 w-full h-[20rem] z-0 top-10">
            <SparklesCore
              background="transparent"
              minSize={1}
              maxSize={1}
              particleDensity={800}
              className="w-full h-full"
              particleColor="#FFD700"
            />
          </div>

          <div
            className="absolute inset-0 bg-background z-10"
            style={{
              maskImage:
                "radial-gradient(300px 150px at top, transparent 40%, white)",
              WebkitMaskImage:
                "radial-gradient(300px 150px at top, transparent 40%, white)",
            }}
          ></div>

          <h1 className="absolute top-10 z-30 font-cinzel md:text-[32px] lg:text-[48px] sm:text-lg font-bold text-foreground text-center w-full">
            Forge<span className="text-gold">UI</span>
          </h1>
        </div> */}
        <div className="flex min-h-[calc(100vh-15rem)] py-20 z-40">
          <Sidebar>
            <SidebarBody>
              <div className="space-y-4 p-6">
                <SidebarLink label="Home" to="/" />

                <h3 className="font-cinzel text-gold text-sm  uppercase tracking-widest pt-8">
                  Views
                </h3>

                <div className="space-y-2">
                  <SidebarLink label="Documentation" to="documentation" />
                  <SidebarLink label="About" to="/about" />
                  <SidebarLink label="Colors" to="/colors" />
                </div>

                <h3 className="font-cinzel text-sm text-gold uppercase tracking-widest pt-8">
                  Components
                </h3>

                <div className="space-y-2">
                  <SidebarLink
                    label="Buttons"
                    to="/components/myComponents/Button"
                  />
                  {/* Lägg till fler komponent-länkar här */}
                </div>
              </div>
            </SidebarBody>
          </Sidebar>

          <main className="flex-1 overflow-auto p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

{
  /* <SidebarProvider animate>

<div className="flex h-[calc(100vh-15rem)]">
<Sidebar>
<SidebarBody>

<div className="space-y-4 p-6">
<SidebarLink label="Home" to="/" />
<h3 className="font-cinzel text-sm text-muted-foreground uppercase tracking-widest pt-8">
Views
</h3>
<div className="space-y-2">
<SidebarLink label="Documentation" view="docs" />
<SidebarLink label="About" view="about" />
<SidebarLink label="Colors" view="colors" />
</div>
<h3 className="font-cinzel text-sm text-muted-foreground uppercase tracking-widest pt-8">
Components
</h3>
<div className="space-y-2">
<SidebarLink
label="Buttons"
to="/components/myComponents/Button"
/>
</div>
</div>
</SidebarBody>
</Sidebar> */
}
{
  /* </div>
</SidebarProvider> */
}
