import { IconMenu2 } from "@tabler/icons-react";
import { useSidebar } from "../ui/sidebar";

export const MobileSidebarToggle = () => {
  const { open, setOpen } = useSidebar();
  return (
    <IconMenu2
      className="text-neutral-800 dark:text-neutral-200"
      onClick={() => setOpen(!open)}
    />
  );
};
