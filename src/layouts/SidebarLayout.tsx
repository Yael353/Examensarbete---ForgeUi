// import { ModeToggle } from "@/components/darkmode/Mode-Toggle";
import Nav from "@/components/home-components/Nav";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
// import { SparklesCore } from "@/components/ui/Sparkles";

import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div>
      <Nav />
      <div className="bg-background min-h-screen">
        <div className="flex z-40">
          <Sidebar>
            <SidebarBody>
              <div className="space-y-2 p-6">
                <h3 className="font-cinzel text-gold text-sm  uppercase tracking-widest pt-8">
                  Views
                </h3>

                <div className="-space-y-2">
                  <SidebarLink label="About" to="/about" />
                  <SidebarLink label="Documentation" to="documentation" />
                  <SidebarLink label="Colors" to="/colors" />
                </div>

                <h3 className="font-cinzel text-sm text-gold uppercase tracking-widest pt-8">
                  Components
                </h3>

                <div className="-space-y-3">
                  <SidebarLink
                    label="Buttons"
                    to="/components/myComponents/Button"
                  />
                  <SidebarLink
                    label="Heading"
                    to="/components/myComponents/Heading"
                  />
                  <SidebarLink
                    label="Contact Form"
                    to="/components/myComponents/contactform/ContactForm"
                  />
                  <SidebarLink
                    label="Login Form"
                    to="/components/myComponents/loginform/LoginForm"
                  />
                  <SidebarLink
                    label="Card"
                    to="/components/myComponents/card/Card"
                  />
                  {/* Lägg till fler komponent-länkar här */}
                </div>
                <div className="pt-20">
                <SidebarLink label="Home" to="/" />
                </div>
              </div>
            </SidebarBody>
          </Sidebar>

          <main className="flex-1 overflow-auto p-5 h-auto rounded-lg">
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
