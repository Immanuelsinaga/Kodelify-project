import { HeroSection } from "@/section/Hero section";
import { Feature } from "@/section/Feature";
import { Explain } from "@/section/Explain";
import { WhatIn } from "@/section/WhatIn";
import { Testimony } from "@/section/Testimony";
import { Header } from "@/section/Header";
import { Footer } from "@/section/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <Feature />
    <Explain />
    <WhatIn />
    <Testimony />


    <Footer />
    </>
  );
}
