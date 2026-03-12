import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import TasteOfTemple from "./TastOfTemple";
import WhatWeOffer from "@/components/WhatWeOffer";

const Index = () => {
  return (
    <>
      <HeroSection />
      {/* <ServicesPreview /> */}
      <WhatWeOffer/>
      <AboutPreview />
      <WhyChooseUs />
      <TasteOfTemple/>
      <Testimonials />

      <CTASection />
    </>
  );
};

export default Index;
