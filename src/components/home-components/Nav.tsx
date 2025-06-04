import { NavLink } from "react-router-dom";
import { MobileSidebarToggle } from "../darkmode/MobileSidebarToggle";
import { ModeToggle } from "../darkmode/Mode-Toggle";

function Nav() {
  return (
    <nav className="flex items-center justify-between h-20 pr-4">
      <NavLink to="/">
        <img src="/forge2.png" alt="Forge Logo" className="w-40 h-15 pt-2" />
      </NavLink>
      <div className="flex items-center gap-2 mr-4">
        <NavLink
          to="/"
          className="px-2 py-2 text-sm font-semibold text-background bg-gold rounded-lg shadow-md hover:bg-yellow-500 transition"
        >
          Home
        </NavLink>

        <ModeToggle />

        <div className="flex justify-end z-20 md:hidden">
          <MobileSidebarToggle />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
