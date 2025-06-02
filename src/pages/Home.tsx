// import CardSection from "@/components/home-components/CardSection";
import BodySection from "../components/home-components/BodySection";
import Hero from "../components/home-components/Hero";
import Footer from "@/components/home-components/Footer";
import Nav from "@/components/home-components/Nav";
import Layout from "@/components/home-components/Bento-Grid-Demo-3";

function Home() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <BodySection />
      {/* <CardSection /> */}
      <Layout />
      <Footer />
    </div>
  );
}

export default Home;
