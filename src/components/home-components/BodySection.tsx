import { DraggableCardBody } from "../ui/draggable-card";

function BodySection() {
  return (
    <div className="w-full py-20 sm:pt-10 bg-background text-foreground">
      <div className="max-w-[90rem]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Text sektion */}
        <div className="flex flex-col justify-center pl-6">
          <h2 className="text-7xl font-bold mb-4 text-foreground font-cinzel">
            Unleash the Power of Modern UI
          </h2>
          <p className="text-2xl text-foreground font-semibold font-cinzel mb-6">
            Explore our cutting-edge UI tools and components, made to craft
            seamless, responsive, and captivating user experiences. Your next
            big idea starts here.
          </p>
          <a href="/components" className="inline-block">
            <button className="text-2xl font-semibold font-cinzel p-4 bg-gold border border-gold text-foreground rounded-lg shadow-md hover:ring-2 hover:ring-[rgb(var(--gold))] transition duration-300">
              Explore Components
            </button>
          </a>
        </div>
        {/* Exempelbilder sektion */}
        <div>
          <DraggableCardBody className="relative w-full h-[500px] ">
            <DraggableCardBody className="absolute top-20 left-15 z-50 rotate-[2deg]">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="My Image"
                className="w-full h-full object-cover rounded-md"
              />
            </DraggableCardBody>
            <DraggableCardBody className="absolute top-10 left-20 z-40">
              <img
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="My Image"
                className="w-full h-full object-cover rounded-md"
              />
            </DraggableCardBody>
            <DraggableCardBody className="absolute bottom-7 left-80 z-30 rotate-[-2deg]">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="My Image"
                className="w-full h-full object-cover rounded-md"
              />
            </DraggableCardBody>
            <DraggableCardBody className="absolute top-25 left-25 z-20 rotate-[1deg]">
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="My Image"
                className="w-full h-full object-cover rounded-md"
              />
            </DraggableCardBody>
            <DraggableCardBody className="absolute center-0 right-5 z-10 rotate-[-5deg]">
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="My Image"
                className="w-full h-full object-cover rounded-md"
              />
            </DraggableCardBody>
            <DraggableCardBody className="absolute top-30 left-40 z-500 rotate-[5deg]">
              <img
                src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="My Image"
                className="w-full h-full object-cover rounded-md"
              />
            </DraggableCardBody>
          </DraggableCardBody>
        </div>
      </div>
    </div>
  );
}

export default BodySection;
