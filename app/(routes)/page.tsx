import { HeroSection } from "@/section/Hero section";
import { Feature } from "@/section/Feature";
import { Explain } from "@/section/Explain";
import { WhatIn } from "@/section/WhatIn";
import { Testimony } from "@/section/Testimony";
import { Header } from "@/section/Header";
import { Footer } from "@/section/Footer";
import { NewPost } from "@/section/NewPost";

const Home = async () => {
  return (
    <>
    <HeroSection />
    <Feature />
    <Explain />
    <WhatIn />
    <Testimony />
    <NewPost />
    </>
  );
};

export default Home;
