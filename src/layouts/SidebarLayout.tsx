import Nav from "@/components/home-components/Nav";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";

import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <Sidebar>
      <div className="bg-background">
        <Nav />
        <div className="flex z-40 min-h-[calc(100vh-80px)]">
          <SidebarBody>
            <div className="space-y-2 p-6">
              <h3 className="font-cinzel font-extrabold text-gold text-lg text-shadow-2xs text-shadow-shadow  uppercase tracking-widest pt-8">
                Views
              </h3>

              <div className="-space-y-2">
                <SidebarLink label="About" to="/about" />
                <SidebarLink label="Documentation" to="documentation" />
                <SidebarLink label="Colors" to="/colors" />
              </div>

              <h3 className="font-cinzel text-lg font-extrabold uppercase text-gold tracking-widest pt-8 text-shadow-2xs text-shadow-shadow">
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
                  to="/components/myComponents/contactform/ContactFormGallery"
                />
                <SidebarLink
                  label="Login Form"
                  to="/components/myComponents/loginform/LoginFormGallery"
                />
                <SidebarLink
                  label="Card"
                  to="/components/myComponents/card/CardGallery"
                />
                <SidebarLink
                  label="CubeCarousel"
                  to="/components/myComponents/carousel/CubeCarousel"
                />
                {/* Lägg till fler komponent-länkar här */}
              </div>
              {/* <div className="pt-20">
                <SidebarLink label="Home" to="/" />
              </div> */}
            </div>
          </SidebarBody>

          <main className="flex-1 h-auto rounded-lg">
            <Outlet />
          </main>
        </div>
      </div>
    </Sidebar>
  );
}
