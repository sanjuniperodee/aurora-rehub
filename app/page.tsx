'use client';

import { useState } from 'react';
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DependenciesGallery from "@/components/DependenciesGallery";
import About from "@/components/About";
import HowToJoin from "@/components/HowToJoin";
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
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <DependenciesGallery />
            <About />
            <HowToJoin />
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
          <FloatingButtons />
        </>
      )}
    </>
  );
}
