import { HeroSection } from "@/section/Hero section";
import { Feature } from "@/section/Feature";
import { Explain } from "@/section/Explain";
import { WhatIn } from "@/section/WhatIn";
import { Testimony } from "@/section/Testimony";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <Explain />
      <WhatIn />
      <Testimony />
    </>
  );
}
