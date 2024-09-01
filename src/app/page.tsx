import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Model from "@/components/Model";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

import dynamic from "next/dynamic";
const Highlights = dynamic(() => import("@/components/Highlights"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
