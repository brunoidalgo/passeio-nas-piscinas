import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Moments } from "@/components/Moments";
import { Steps } from "@/components/Steps";
import { Sunset } from "@/components/Sunset";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Steps />
        <Moments />
        <About />
        <Gallery />
        <WhyUs />
        <Sunset />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
