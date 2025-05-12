import { ModeToggle } from "@/components/darkmode/Mode-Toggle";
import BodySection from "../components/BodySection";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="bg- h-screen">
      <div className="flex justify-between pt-4 pr-4">
        <img src="./Forge.png" alt="Forge Logo" className="w-30 h-25 pl-4" />
        <ModeToggle />
      </div>
      <Hero />
      <BodySection />
      <Footer />
    </div>
  );
}

export default Home;

// Nån komponent som gör en fetch,
// eller en hantering av mängddata.
