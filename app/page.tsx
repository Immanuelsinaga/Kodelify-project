import { Header } from "@/section/Header";
import { HeroSection } from "@/section/Hero section";
import { Feature } from "@/section/Feature";
import { Explain } from "@/section/Explain";
import { NewPost } from "@/section/NewPost";
import { Footer } from "@/section/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Feature />
      <Explain />
      <NewPost />
      <Footer />
    </>
  );
}
