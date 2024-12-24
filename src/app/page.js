
import Contact from "@/components/contact/Contact";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/herosection/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Project from "@/components/project/Project";
import Services from "@/components/services/Services";

export default function Home() {
  return (

    <div className="absolute w-full h-full scroll-smooth	">
      <div className="w-full h-[120%]  ">
        <div className="fixed top-10 left-[7%] z-[99999]" >
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <div className="relative">
        <Project />
      </div>
      <Services />
      <Contact />
      <Faq />
      <Footer />

    </div>
  );
}
