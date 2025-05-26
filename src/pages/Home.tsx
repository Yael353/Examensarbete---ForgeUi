import CardSection from "@/components/home-components/CardSection";
import BodySection from "../components/home-components/BodySection";
import Hero from "../components/home-components/Hero";
import Footer from "@/components/home-components/Footer";
import Nav from "@/components/home-components/Nav";

function Home() {
  return (
    <div className="bg-background h-screen">
      <Nav />
      <Hero />
      <BodySection />
      <CardSection />
      <Footer />
    </div>
  );
}

export default Home;