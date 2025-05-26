import { ModeToggle } from "../darkmode/Mode-Toggle";

function Nav() {
  return (
    <div className="flex justify-between pt-4 pr-4">
      <a href="/">
        <img src="./forge2.png" alt="Forge Logo" className="w-50 h-15" />
      </a>
      <div className="pt-2">
      <ModeToggle />
      </div>
    </div>
  );
}

export default Nav;
