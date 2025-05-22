"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { HeroParallaxDemo } from "@/components/hero-paralla";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { cn } from "@/lib/utils";
import { NavbarDemo } from "@/components/Nav-bi";
import { ContainerTextFlipDemo } from "@/components/text-flip";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <NavbarDemo />
        <ContainerTextFlipDemo />
      </div>
      <div className="w-full">
        <HeroParallaxDemo />
      </div>
      <div className="max-w-7xl w-full">
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
