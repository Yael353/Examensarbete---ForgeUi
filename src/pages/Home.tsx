import { ModeToggle } from "@/components/darkmode/Mode-Toggle";
import BodySection from "../components/BodySection";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="bg- h-screen">
      <div className="flex justify-end pt-4 pr-4">
        <ModeToggle />
      </div>
      <Hero />
      <BodySection />
    </div>
  );
}

export default Home;


// Nån komponent som gör en fetch,
// eller en hantering av mängddata. 