// import { DraggableCardBody } from "../ui/draggable-card";

import { NavLink } from "react-router-dom";

function BodySection() {
  return (
    <div className="w-full md:py-20 py-10 text-foreground bg-primary">
      <div className="max-w-[90rem] mx-auto flex flex-col">
        {/* grid grid-cols-1 md:grid-cols-2 gap-12 */}
        {/* Text sektion */}
        <div className="flex flex-col justify-center">
          <h2 className="md:text-7xl font-bold text-foreground font-cinzel w-full pb-4 text-center text-5xl">
            Unleash the Power of Modern UI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <p className="md:text-2xl text-xl text-foreground font-semibold font-merriweather text-center font-cinzel px-4">
              Explore our cutting-edge UI tools and components, made to craft
              seamless, responsive, and captivating user experiences. Your next
              big idea starts here.
            </p>
            <div className="flex justify-center items-center">
              <NavLink
                to="/components"
                className="flex justify-center items-center"
              >
                <button className="text-2xl font-semibold font-cinzel p-4 bg-accent border border-gold text-foreground rounded-lg shadow-md hover:ring-2 hover:ring-[rgb(var(--gold))] transition duration-300">
                  Explore Components
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/* Exempelbilder sektion */}
      </div>
    </div>
  );
}

export default BodySection;
