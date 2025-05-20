import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <SidebarProvider>
      <Outlet />
    </SidebarProvider>
  );
}
