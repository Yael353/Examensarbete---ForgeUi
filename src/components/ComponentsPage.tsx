import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  // useSidebar,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function ComponentsPage() {
  // const { currentView } = useSidebar();
  return (
    <div className="flex h-screen">
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
              {/* Lägg till fler komponent-länkar här */}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
