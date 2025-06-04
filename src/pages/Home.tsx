import BodySection from "../components/home-components/BodySection";
import Hero from "../components/home-components/Hero";
import Footer from "@/components/home-components/Footer";
// import Nav from "@/components/home-components/Nav";
import Layout from "@/components/home-components/Bento-Grid-Demo-3";
import { ModeToggle } from "@/components/darkmode/Mode-Toggle";

function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-between h-20 pr-4">
        <a href="/">
          <img src="./forge2.png" alt="Forge Logo" className="w-40 h-15 pt-2" />
        </a>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
      {/* <Nav/> */}
      <Hero />
      <BodySection />
      <Layout />
      <Footer />
    </div>
  );
}

export default Home;
