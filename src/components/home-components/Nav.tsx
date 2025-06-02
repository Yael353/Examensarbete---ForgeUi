import { NavLink } from "react-router-dom";
import { MobileSidebarToggle } from "../darkmode/MobileSidebarToggle";
import { ModeToggle } from "../darkmode/Mode-Toggle";

function Nav() {
  return (
    <div className="flex items-center justify-between h-20 pr-4">
      <NavLink to="/">
        <img src="./forge2.png" alt="Forge Logo" className="w-50 h-15 pt-2" />
      </NavLink>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <div className="flex justify-end z-20 md:hidden">
          <MobileSidebarToggle />
        </div>
      </div>
    </div>
  );
}

export default Nav;
