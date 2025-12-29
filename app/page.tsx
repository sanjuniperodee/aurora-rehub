import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import Programs from "@/components/Programs";
import Methods from "@/components/Methods";
import Packages from "@/components/Packages";
import LivingConditions from "@/components/LivingConditions";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import SocialProject from "@/components/SocialProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Advantages />
        <Services />
        <Programs />
        <Methods />
        <Packages />
        <LivingConditions />
        <Team />
        <Reviews />
        <SocialProject />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
