import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import Benefits from "@/components/benefits";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}
