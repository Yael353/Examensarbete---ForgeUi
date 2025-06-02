import type { motion } from "framer-motion";
import { ModeToggle } from "../darkmode/Mode-Toggle";
import { DesktopSidebar, SidebarProvider } from "../ui/sidebar";
import { MobileSidebar } from "../ui/sidebar";

function Nav(props: React.ComponentProps<typeof motion.div>) {
  return (
    <div className="flex items-center justify-between h-20  pr-4">
      <a href="/">
        <img src="./forge2.png" alt="Forge Logo" className="w-50 h-15 pt-2" />
      </a>
      <div className="flex items-center gap-2">
        <div className="">
          <ModeToggle />
        </div>
        <div className="flex justify-end z-20 md:hidden">
          <SidebarProvider>
            <DesktopSidebar {...props} />
            <MobileSidebar {...(props as React.ComponentProps<"div">)} />
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
}

export default Nav;
